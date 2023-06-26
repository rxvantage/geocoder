import { GeocodeCommand } from '../../../command';
import { GoogleMapsLocationCommandMixin } from './mixin';
/**
 * @link {https://developers.google.com/maps/documentation/geocoding/intro#GeocodingRequests}
 */
export class GoogleMapsGeocodeCommand extends GoogleMapsLocationCommandMixin(GeocodeCommand) {
    constructor(httpClient, apiKey) {
        super(httpClient, apiKey);
        this.apiKey = apiKey;
    }
    static getUrl() {
        return 'https://maps.googleapis.com/maps/api/geocode/json';
    }
    async buildQuery(query) {
        const components = new Map();
        if (query.postalCode) {
            components.set('postal_code', query.postalCode);
        }
        const country = query.countryCode || query.country;
        if (country) {
            components.set('country', country);
        }
        const state = query.stateCode || query.state;
        if (state) {
            components.set('administrative_area', state);
        }
        const providerQuery = {
            key: this.apiKey,
            address: query.address,
            components: [...components].map((value) => `${value[0]}:${value[1]}`).join('|'),
            language: query.language,
            limit: query.limit,
            sensor: false,
        };
        if (query.countryCode) {
            providerQuery.region = `.${query.countryCode.toLowerCase()}`;
        }
        return providerQuery;
    }
}
//# sourceMappingURL=google-maps-geocode.command.js.map