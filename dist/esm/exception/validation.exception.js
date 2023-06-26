import { GeocoderException } from './geocoder.exception';
export class ValidationException extends GeocoderException {
    constructor(errors) {
        super('Validation Failed.');
        this.errors = errors;
    }
    getValidationErrors() {
        return this.errors;
    }
}
//# sourceMappingURL=validation.exception.js.map