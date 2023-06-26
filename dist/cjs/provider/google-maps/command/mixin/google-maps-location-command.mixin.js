"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleMapsLocationCommandMixin = void 0;
const transformer_1 = require("../../transformer");
const google_maps_common_command_mixin_1 = require("./google-maps-common-command.mixin");
function GoogleMapsLocationCommandMixin(Base) {
    class GoogleMapsLocationCommand extends (0, google_maps_common_command_mixin_1.GoogleMapsCommonCommandMixin)(Base) {
        async parseResponse(response) {
            if (!Array.isArray(response.data.results) || !response.data.results.length) {
                return [];
            }
            return Promise.all(response.data.results.map(async (raw) => this.parseOneResult(raw)));
        }
        async parseOneResult(raw) {
            return new transformer_1.GoogleMapsLocationTransformer(raw);
        }
    }
    return GoogleMapsLocationCommand;
}
exports.GoogleMapsLocationCommandMixin = GoogleMapsLocationCommandMixin;
//# sourceMappingURL=google-maps-location-command.mixin.js.map