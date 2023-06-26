"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationException = void 0;
const geocoder_exception_1 = require("./geocoder.exception");
class ValidationException extends geocoder_exception_1.GeocoderException {
    constructor(errors) {
        super('Validation Failed.');
        this.errors = errors;
    }
    getValidationErrors() {
        return this.errors;
    }
}
exports.ValidationException = ValidationException;
//# sourceMappingURL=validation.exception.js.map