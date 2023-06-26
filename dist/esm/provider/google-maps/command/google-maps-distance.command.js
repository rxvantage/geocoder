import { GoogleMapsDistanceTransformer } from '../transformer';
import { TravelModeEnum } from '../../../model';
import { InvalidArgumentException, InvalidServerResponseException, NotFoundException, QuotaExceededException } from '../../../exception';
import { DistanceCommand } from '../../../command';
import { GoogleMapsCommonCommandMixin } from './mixin';
/**
 * @link {https://developers.google.com/places/web-service/autocomplete#place_autocomplete_requests}
 */
export class GoogleMapsDistanceCommand extends GoogleMapsCommonCommandMixin(DistanceCommand) {
    constructor(httpClient, apiKey) {
        super(httpClient, apiKey);
        this.apiKey = apiKey;
    }
    static getUrl() {
        return 'https://maps.googleapis.com/maps/api/distancematrix/json';
    }
    async buildQuery(query) {
        const providerQuery = {
            key: this.apiKey,
            origins: `${query.from.lat},${query.from.lon}`,
            destinations: `${query.to.lat},${query.to.lon}`,
            language: query.language,
            mode: this.getRequestMode(query.mode),
        };
        if (query.countryCode) {
            providerQuery.region = `.${query.countryCode.toLowerCase()}`;
        }
        return providerQuery;
    }
    async parseResponse(response, _query) {
        const result = response.data.rows[0].elements[0];
        return [new GoogleMapsDistanceTransformer(result)];
    }
    getRequestMode(mode) {
        switch (mode) {
            case TravelModeEnum.WALKING:
                return 'walking';
            case TravelModeEnum.BICYCLING:
                return 'bicycling';
            case TravelModeEnum.DRIVING:
                return 'driving';
            default:
                return 'driving';
        }
    }
    /**
     * @link {https://developers.google.com/maps/documentation/distance-matrix/overview#element-level-status-codes}
     */
    async validateResponse(response) {
        switch (response.data.status) {
            case 'MAX_DIMENSIONS_EXCEEDED':
                throw new QuotaExceededException('The number of origins or destinations exceeds the per-query limit', response);
            case 'MAX_ELEMENTS_EXCEEDED':
                throw new QuotaExceededException('The product of origins and destinations exceeds the per-query limit', response);
            default:
                await super.validateResponse(response);
        }
        if (!Array.isArray(response.data.rows) ||
            !response.data.rows[0] ||
            !Array.isArray(response.data.rows[0].elements) ||
            !response.data.rows[0].elements[0]) {
            throw new NotFoundException(`Not found`, response);
        }
        const result = response.data.rows[0].elements[0];
        switch (result.status) {
            case 'OK':
                return;
            case 'NOT_FOUND':
            case 'ZERO_RESULTS':
                throw new NotFoundException('Not found', response);
            case 'MAX_ROUTE_LENGTH_EXCEEDED':
                throw new InvalidArgumentException('Invalid request', response);
            default:
                throw new InvalidServerResponseException(`Unknown response status "${result.status}"`, response);
        }
    }
}
//# sourceMappingURL=google-maps-distance.command.js.map