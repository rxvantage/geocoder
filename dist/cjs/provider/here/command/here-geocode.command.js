"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HereGeocodeCommand = void 0;
const command_1 = require("../../../command");
const mixin_1 = require("./mixin");
/**
 * @link {https://developer.here.com/documentation/geocoder/topics/resource-geocode.html}
 */
class HereGeocodeCommand extends (0, mixin_1.HereLocationCommandMixin)(command_1.GeocodeCommand) {
    constructor(httpClient, appId, appCode) {
        super(httpClient, appId, appCode);
    }
    static getUrl() {
        return 'https://geocoder.api.here.com/6.2/geocode.json';
    }
}
exports.HereGeocodeCommand = HereGeocodeCommand;
//# sourceMappingURL=here-geocode.command.js.map