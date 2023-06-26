import { InvalidArgumentException, InvalidCredentialsException, InvalidServerResponseException } from '../../../../exception';
import { AccuracyEnum } from '../../../../model';
export function ArcgisCommonCommandMixin(Base) {
    return class extends Base {
        static getMaxAccuracy() {
            return AccuracyEnum.HOUSE_NUMBER;
        }
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
    };
}
//# sourceMappingURL=arcgis-common-command.mixin.js.map