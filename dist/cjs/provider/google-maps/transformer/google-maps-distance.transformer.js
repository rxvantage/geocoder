"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleMapsDistanceTransformer = void 0;
const transformer_1 = require("../../../transformer");
const google_maps_provider_1 = require("../google-maps.provider");
class GoogleMapsDistanceTransformer extends transformer_1.AbstractDistanceTransformer {
    constructor(raw) {
        super(google_maps_provider_1.GoogleMapsProvider, raw);
    }
    async getDistance() {
        return this.raw.distance.value;
    }
    async getDuration() {
        return this.raw.duration.value;
    }
}
exports.GoogleMapsDistanceTransformer = GoogleMapsDistanceTransformer;
//# sourceMappingURL=google-maps-distance.transformer.js.map