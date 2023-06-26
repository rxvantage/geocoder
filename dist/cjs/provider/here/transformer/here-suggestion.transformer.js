"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HereSuggestionTransformer = void 0;
const transformer_1 = require("../../../transformer");
const here_provider_1 = require("../here.provider");
class HereSuggestionTransformer extends transformer_1.AbstractSuggestionTransformer {
    constructor(raw) {
        super(here_provider_1.HereProvider, raw);
    }
    async getFormattedAddress() {
        var _a;
        return (_a = this.getLocationAddress().Label) !== null && _a !== void 0 ? _a : '';
    }
    async getPlaceId() {
        return this.raw.Location.LocationId;
    }
    getLocationAddress() {
        return this.raw.Location.Address || {};
    }
}
exports.HereSuggestionTransformer = HereSuggestionTransformer;
//# sourceMappingURL=here-suggestion.transformer.js.map