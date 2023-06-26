import { SuggestCommand } from '../../../command';
import { HereSuggestionTransformer } from '../transformer';
import { filterByAccuracy } from '../util';
import { HereLocationCommandMixin } from './mixin';
/**
 * @link {https://developer.here.com/documentation/geocoder/topics/resource-search.html}
 */
export class HereSuggestCommand extends HereLocationCommandMixin(SuggestCommand) {
    constructor(httpClient, appId, appCode) {
        super(httpClient, appId, appCode);
    }
    static getUrl() {
        return 'https://geocoder.api.here.com/6.2/search.json';
    }
    async parseResponse(response, query) {
        if (!response.data.Response || !Array.isArray(response.data.Response.View) || !response.data.Response.View[0]) {
            return [];
        }
        let results = response.data.Response.View[0].Result;
        results = results.filter((raw) => filterByAccuracy(raw, query.accuracy));
        if (!results.length) {
            return [];
        }
        return Promise.all(results.map(async (raw) => new HereSuggestionTransformer(raw)));
    }
}
//# sourceMappingURL=here-suggest.command.js.map