"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HerePlaceDetailsCommand = void 0;
const command_1 = require("../../../command");
const mixin_1 = require("./mixin");
/**
 * @link {https://developer.here.com/documentation/geocoder/topics/resource-search.html}
 */
class HerePlaceDetailsCommand extends (0, mixin_1.HereLocationCommandMixin)(command_1.PlaceDetailsCommand) {
    constructor(httpClient, appId, appCode) {
        super(httpClient, appId, appCode);
    }
    static getUrl() {
        return 'https://geocoder.api.here.com/6.2/search.json';
    }
    async buildQuery(query) {
        const params = await super.buildQuery(query);
        params.locationid = query.placeId;
        return params;
    }
}
exports.HerePlaceDetailsCommand = HerePlaceDetailsCommand;
//# sourceMappingURL=here-place-details.command.js.map