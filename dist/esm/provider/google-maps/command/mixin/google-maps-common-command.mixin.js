import { InvalidArgumentException, InvalidCredentialsException, InvalidServerResponseException, NotFoundException, QuotaExceededException, } from '../../../../exception';
import { AccuracyEnum } from '../../../../model';
export function GoogleMapsCommonCommandMixin(Base) {
    class GoogleMapsCommonCommand extends Base {
        constructor(...args) {
            const [httpClient, apiKey] = args;
            super(httpClient);
            this.apiKey = apiKey;
            if (!this.apiKey) {
                throw new InvalidCredentialsException('Invalid or missing api key.');
            }
        }
        static getMaxAccuracy() {
            return AccuracyEnum.HOUSE_NUMBER;
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
                throw new NotFoundException('Not found', response);
            }
            else if (response.data.status === 'REQUEST_DENIED' && response.data.error_message === 'The provided API key is invalid.') {
                throw new InvalidCredentialsException('API key is invalid', response);
            }
            else if (response.data.status === 'REQUEST_DENIED') {
                throw new InvalidServerResponseException('API key is invalid', response);
            }
            else if (response.data.status === 'OVER_QUERY_LIMIT') {
                throw new QuotaExceededException('Quota exceeded', response);
            }
            else if (response.data.status === 'OVER_DAILY_LIMIT') {
                /**
                 * @link {https://developers.google.com/maps/faq#over-limit-key-error}
                 */
                throw new QuotaExceededException('Daily quota exceeded', response);
            }
            else if (response.data.status === 'INVALID_REQUEST') {
                throw new InvalidArgumentException('Invalid request', response);
            }
            else if (response.data.status === 'UNKNOWN_ERROR') {
                throw new InvalidServerResponseException('Unknown error', response);
            }
            else if (response.data.status === 'ZERO_RESULTS') {
                return;
            }
            throw new InvalidServerResponseException(`Unknown response status "${response.data.status}"`, response);
        }
    }
    return GoogleMapsCommonCommand;
}
//# sourceMappingURL=google-maps-common-command.mixin.js.map