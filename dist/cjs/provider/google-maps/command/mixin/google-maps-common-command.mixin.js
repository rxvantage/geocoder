"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleMapsCommonCommandMixin = void 0;
const exception_1 = require("../../../../exception");
const model_1 = require("../../../../model");
function GoogleMapsCommonCommandMixin(Base) {
    class GoogleMapsCommonCommand extends Base {
        constructor(...args) {
            const [httpClient, apiKey] = args;
            super(httpClient);
            this.apiKey = apiKey;
            if (!this.apiKey) {
                throw new exception_1.InvalidCredentialsException('Invalid or missing api key.');
            }
        }
        static getMaxAccuracy() {
            return model_1.AccuracyEnum.HOUSE_NUMBER;
        }
        /**
         * the top-level status code validation
         * @link {https://developers.google.com/maps/documentation/geocoding/intro#StatusCodes}
         */
        async validateResponse(response) {
            if (response.data.status === 'OK') {
                return;
            }
            if (response.data.status === 'NOT_FOUND') {
                throw new exception_1.NotFoundException('Not found', response);
            }
            else if (response.data.status === 'REQUEST_DENIED' && response.data.error_message === 'The provided API key is invalid.') {
                throw new exception_1.InvalidCredentialsException('API key is invalid', response);
            }
            else if (response.data.status === 'REQUEST_DENIED') {
                throw new exception_1.InvalidServerResponseException('API key is invalid', response);
            }
            else if (response.data.status === 'OVER_QUERY_LIMIT') {
                throw new exception_1.QuotaExceededException('Quota exceeded', response);
            }
            else if (response.data.status === 'OVER_DAILY_LIMIT') {
                /**
                 * @link {https://developers.google.com/maps/faq#over-limit-key-error}
                 */
                throw new exception_1.QuotaExceededException('Daily quota exceeded', response);
            }
            else if (response.data.status === 'INVALID_REQUEST') {
                throw new exception_1.InvalidArgumentException('Invalid request', response);
            }
            else if (response.data.status === 'UNKNOWN_ERROR') {
                throw new exception_1.InvalidServerResponseException('Unknown error', response);
            }
            else if (response.data.status === 'ZERO_RESULTS') {
                return;
            }
            throw new exception_1.InvalidServerResponseException(`Unknown response status "${response.data.status}"`, response);
        }
    }
    return GoogleMapsCommonCommand;
}
exports.GoogleMapsCommonCommandMixin = GoogleMapsCommonCommandMixin;
//# sourceMappingURL=google-maps-common-command.mixin.js.map