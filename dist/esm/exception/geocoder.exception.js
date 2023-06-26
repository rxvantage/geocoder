/**
 * All library exceptions must inherit this class.
 */
export class GeocoderException extends Error {
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
//# sourceMappingURL=geocoder.exception.js.map