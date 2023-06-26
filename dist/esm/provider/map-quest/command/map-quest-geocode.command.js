import { GeocodeCommand } from '../../../command';
import { MapQuestCommonCommandMixin } from './mixin';
/**
 * @link {https://developer.mapquest.com/documentation/geocoding-api/address/get/}
 */
export class MapQuestGeocodeCommand extends MapQuestCommonCommandMixin(GeocodeCommand) {
    constructor(httpClient, apiKey) {
        super(httpClient, apiKey);
        this.apiKey = apiKey;
    }
    static getUrl() {
        return 'https://www.mapquestapi.com/geocoding/v1/address';
    }
    async buildQuery(query) {
        const providerQuery = {
            key: this.apiKey,
            location: query.address,
            maxResults: query.limit,
            thumbMaps: false,
            outFormat: 'json',
        };
        if (query.lat && query.lon) {
            providerQuery.location = `${query.lon},${query.lat}`;
        }
        return providerQuery;
    }
}
//# sourceMappingURL=map-quest-geocode.command.js.map