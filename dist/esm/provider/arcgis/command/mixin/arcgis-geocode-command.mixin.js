import { InvalidArgumentException, InvalidCredentialsException, InvalidServerResponseException } from '../../../../exception';
import { ArcgisLocationTransformer } from '../../transformer';
import { ArcgisCommonCommandMixin } from './arcgis-common-command.mixin';
export function ArcgisGeocodeCommandMixin(Base) {
    class ArcgisGeocodeCommand extends ArcgisCommonCommandMixin(Base) {
        async validateResponse(response) {
            if (response.data.error) {
                const error = response.data.error;
                switch (error.code) {
                    case 400:
                        throw new InvalidArgumentException(error.message, response);
                    case 403:
                    case 498:
                    case 499:
                        throw new InvalidCredentialsException(error.message, response);
                    default:
                        throw new InvalidServerResponseException(error.message, response);
                }
            }
        }
        async parseResponse(response) {
            if (!Array.isArray(response.data.candidates) || !response.data.candidates.length) {
                return [];
            }
            return Promise.all(response.data.candidates.map(async (raw) => new ArcgisLocationTransformer(raw)));
        }
    }
    return ArcgisGeocodeCommand;
}
//# sourceMappingURL=arcgis-geocode-command.mixin.js.map