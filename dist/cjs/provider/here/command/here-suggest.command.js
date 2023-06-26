"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HereSuggestCommand = void 0;
const command_1 = require("../../../command");
const transformer_1 = require("../transformer");
const util_1 = require("../util");
const mixin_1 = require("./mixin");
/**
 * @link {https://developer.here.com/documentation/geocoder/topics/resource-search.html}
 */
class HereSuggestCommand extends (0, mixin_1.HereLocationCommandMixin)(command_1.SuggestCommand) {
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
        results = results.filter((raw) => (0, util_1.filterByAccuracy)(raw, query.accuracy));
        if (!results.length) {
            return [];
        }
        return Promise.all(results.map(async (raw) => new transformer_1.HereSuggestionTransformer(raw)));
    }
}
exports.HereSuggestCommand = HereSuggestCommand;
//# sourceMappingURL=here-suggest.command.js.map