"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapQuestSuggestCommand = void 0;
const transformer_1 = require("../transformer");
const command_1 = require("../../../command");
const mixin_1 = require("./mixin");
/**
 * @link {https://developer.mapquest.com/documentation/searchahead-api/}
 */
class MapQuestSuggestCommand extends (0, mixin_1.MapQuestCommonCommandMixin)(command_1.SuggestCommand) {
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
        return Promise.all(locations.map(async (raw) => new transformer_1.MapQuestSuggestionTransformer(raw)));
    }
}
exports.MapQuestSuggestCommand = MapQuestSuggestCommand;
//# sourceMappingURL=map-quest-suggest.command.js.map