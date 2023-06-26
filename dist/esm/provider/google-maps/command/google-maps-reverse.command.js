import { ReverseCommand } from '../../../command';
import { GoogleMapsLocationCommandMixin } from './mixin';
/**
 * TODO implement result_type and location_type
 * @link {https://developers.google.com/maps/documentation/geocoding/intro#ReverseGeocoding}
 */
export class GoogleMapsReverseCommand extends GoogleMapsLocationCommandMixin(ReverseCommand) {
    constructor(httpClient, apiKey) {
        super(httpClient, apiKey);
        this.apiKey = apiKey;
    }
    static getUrl() {
        return 'https://maps.googleapis.com/maps/api/geocode/json';
    }
    async buildQuery(query) {
        const providerQuery = {
            key: this.apiKey,
            latlng: `${query.lat},${query.lon}`,
            limit: query.limit,
            language: query.language,
            sensor: false,
        };
        if (query.countryCode) {
            providerQuery.region = `.${query.countryCode.toLowerCase()}`;
        }
        return providerQuery;
    }
}
//# sourceMappingURL=google-maps-reverse.command.js.map