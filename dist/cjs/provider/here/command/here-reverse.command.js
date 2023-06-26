"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HereReverseCommand = void 0;
const command_1 = require("../../../command");
const mixin_1 = require("./mixin");
/**
 * @link {https://developer.here.com/documentation/geocoder/topics/resource-reverse-geocode.html}
 */
class HereReverseCommand extends (0, mixin_1.HereCommonCommandMixin)(command_1.ReverseCommand) {
    constructor(httpClient, appId, appCode) {
        super(httpClient, appId, appCode);
        this.appId = appId;
        this.appCode = appCode;
    }
    static getUrl() {
        return 'https://reverse.geocoder.api.here.com/6.2/reversegeocode.json';
    }
    async buildQuery(query) {
        return {
            app_id: this.appId,
            app_code: this.appCode,
            language: query.language,
            maxresults: query.limit,
            gen: 9,
            prox: `${query.lat},${query.lon},100`,
            mode: 'retrieveAddresses',
            additionaldata: 'Country2,true;NormalizeNames,true',
        };
    }
}
exports.HereReverseCommand = HereReverseCommand;
//# sourceMappingURL=here-reverse.command.js.map