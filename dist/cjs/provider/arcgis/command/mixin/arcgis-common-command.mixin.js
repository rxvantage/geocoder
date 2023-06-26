"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArcgisCommonCommandMixin = void 0;
const exception_1 = require("../../../../exception");
const model_1 = require("../../../../model");
function ArcgisCommonCommandMixin(Base) {
    return class extends Base {
        static getMaxAccuracy() {
            return model_1.AccuracyEnum.HOUSE_NUMBER;
        }
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
    };
}
exports.ArcgisCommonCommandMixin = ArcgisCommonCommandMixin;
//# sourceMappingURL=arcgis-common-command.mixin.js.map