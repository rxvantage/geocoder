"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HereProvider = void 0;
const model_1 = require("../../model");
const command_1 = require("./command");
class HereProvider extends model_1.AbstractHttpProvider {
    constructor(httpClient, appId, appCode) {
        super({
            geocode: new command_1.HereGeocodeCommand(httpClient, appId, appCode),
            reverse: new command_1.HereReverseCommand(httpClient, appId, appCode),
            suggest: new command_1.HereSuggestCommand(httpClient, appId, appCode),
            placeDetails: new command_1.HerePlaceDetailsCommand(httpClient, appId, appCode),
        });
    }
}
exports.HereProvider = HereProvider;
//# sourceMappingURL=here.provider.js.map