import { PlaceDetailsCommand } from '../../../command';
import { GoogleMapsLocationCommandMixin } from './mixin';
/**
 * @link {https://developers.google.com/places/web-service/details}
 */
export class GoogleMapsPlaceDetailsCommand extends GoogleMapsLocationCommandMixin(PlaceDetailsCommand) {
    constructor(httpClient, apiKey) {
        super(httpClient, apiKey);
        this.apiKey = apiKey;
    }
    static getUrl() {
        return 'https://maps.googleapis.com/maps/api/place/details/json';
    }
    async buildQuery(query) {
        const providerQuery = {
            key: this.apiKey,
            placeid: query.placeId,
            language: query.language,
            sensor: false,
            /**
             * @see interface
             * used basic fields
             */
            fields: 'address_component,formatted_address,geometry,place_id,type',
        };
        if (query.countryCode) {
            providerQuery.region = `.${query.countryCode.toLowerCase()}`;
        }
        return providerQuery;
    }
    async parseResponse(response) {
        if (!response.data.result) {
            return [];
        }
        return [await this.parseOneResult(response.data.result)];
    }
}
//# sourceMappingURL=google-maps-place-details.command.js.map