"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeocoderException = void 0;
/**
 * All library exceptions must inherit this class.
 */
class GeocoderException extends Error {
    constructor(message, payload) {
        super(message);
        this.payload = payload;
        this.name = this.constructor.name;
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
    getPayload() {
        return this.payload;
    }
}
exports.GeocoderException = GeocoderException;
//# sourceMappingURL=geocoder.exception.js.map