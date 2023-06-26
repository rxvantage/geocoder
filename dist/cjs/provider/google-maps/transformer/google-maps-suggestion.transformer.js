"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleMapsSuggestionTransformer = void 0;
const transformer_1 = require("../../../transformer");
const google_maps_provider_1 = require("../google-maps.provider");
class GoogleMapsSuggestionTransformer extends transformer_1.AbstractSuggestionTransformer {
    constructor(raw) {
        super(google_maps_provider_1.GoogleMapsProvider, raw);
    }
    async getFormattedAddress() {
        return this.raw.description;
    }
    async getPlaceId() {
        return this.raw.place_id;
    }
}
exports.GoogleMapsSuggestionTransformer = GoogleMapsSuggestionTransformer;
//# sourceMappingURL=google-maps-suggestion.transformer.js.map