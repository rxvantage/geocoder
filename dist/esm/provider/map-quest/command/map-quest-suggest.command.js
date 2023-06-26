import { MapQuestSuggestionTransformer } from '../transformer';
import { SuggestCommand } from '../../../command';
import { MapQuestCommonCommandMixin } from './mixin';
/**
 * @link {https://developer.mapquest.com/documentation/searchahead-api/}
 */
export class MapQuestSuggestCommand extends MapQuestCommonCommandMixin(SuggestCommand) {
    constructor(httpClient, apiKey) {
        super(httpClient, apiKey);
        this.apiKey = apiKey;
    }
    static getUrl() {
        return 'https://www.mapquestapi.com/search/v3/prediction';
    }
    async buildQuery(query) {
        const providerQuery = {
            key: this.apiKey,
            q: query.address,
            limit: query.limit,
            collection: 'address',
            countryCode: query.countryCode,
            languageCode: query.language,
        };
        if (query.lat && query.lon) {
            providerQuery.location = `${query.lon},${query.lat}`;
        }
        return providerQuery;
    }
    async parseResponse(response) {
        if (!Array.isArray(response.data.results) || !response.data.results.length) {
            return [];
        }
        const locations = response.data.results;
        if (!Array.isArray(locations) || !locations.length) {
            return [];
        }
        return Promise.all(locations.map(async (raw) => new MapQuestSuggestionTransformer(raw)));
    }
}
//# sourceMappingURL=map-quest-suggest.command.js.map