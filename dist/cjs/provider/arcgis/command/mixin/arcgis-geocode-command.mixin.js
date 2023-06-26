"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArcgisGeocodeCommandMixin = void 0;
const exception_1 = require("../../../../exception");
const transformer_1 = require("../../transformer");
const arcgis_common_command_mixin_1 = require("./arcgis-common-command.mixin");
function ArcgisGeocodeCommandMixin(Base) {
    class ArcgisGeocodeCommand extends (0, arcgis_common_command_mixin_1.ArcgisCommonCommandMixin)(Base) {
        async validateResponse(response) {
            if (response.data.error) {
                const error = response.data.error;
                switch (error.code) {
                    case 400:
                        throw new exception_1.InvalidArgumentException(error.message, response);
                    case 403:
                    case 498:
                    case 499:
                        throw new exception_1.InvalidCredentialsException(error.message, response);
                    default:
                        throw new exception_1.InvalidServerResponseException(error.message, response);
                }
            }
        }
        async parseResponse(response) {
            if (!Array.isArray(response.data.candidates) || !response.data.candidates.length) {
                return [];
            }
            return Promise.all(response.data.candidates.map(async (raw) => new transformer_1.ArcgisLocationTransformer(raw)));
        }
    }
    return ArcgisGeocodeCommand;
}
exports.ArcgisGeocodeCommandMixin = ArcgisGeocodeCommandMixin;
//# sourceMappingURL=arcgis-geocode-command.mixin.js.map