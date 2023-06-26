"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Geocoder = void 0;
const abstract_geocoder_1 = require("./abstract-geocoder");
class Geocoder extends abstract_geocoder_1.AbstractGeocoder {
    constructor(provider) {
        super([provider]);
    }
    async geocode(query) {
        return this.geocodeByProvider(this.getFirstProvider(), query);
    }
    async reverse(query) {
        return this.reverseByProvider(this.getFirstProvider(), query);
    }
    async suggest(query) {
        return this.suggestByProvider(this.getFirstProvider(), query);
    }
    async distance(query) {
        return this.distanceByProvider(this.getFirstProvider(), query);
    }
}
exports.Geocoder = Geocoder;
//# sourceMappingURL=geocoder.js.map