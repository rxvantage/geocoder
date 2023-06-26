"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArcgisSuggestionTransformer = void 0;
const transformer_1 = require("../../../transformer");
const arcgis_provider_1 = require("../arcgis.provider");
class ArcgisSuggestionTransformer extends transformer_1.AbstractSuggestionTransformer {
    constructor(raw) {
        super(arcgis_provider_1.ArcgisProvider, raw);
        this.raw = raw;
    }
    async getFormattedAddress() {
        return this.raw.text;
    }
    async getPlaceId() {
        return this.raw.magicKey;
    }
}
exports.ArcgisSuggestionTransformer = ArcgisSuggestionTransformer;
//# sourceMappingURL=arcgis-suggestion.transformer.js.map