"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapQuestSuggestionTransformer = void 0;
const transformer_1 = require("../../../transformer");
const map_quest_provider_1 = require("../map-quest.provider");
class MapQuestSuggestionTransformer extends transformer_1.AbstractSuggestionTransformer {
    constructor(raw) {
        super(map_quest_provider_1.MapQuestProvider, raw);
    }
    async getFormattedAddress() {
        return this.raw.displayString;
    }
    async getPlaceId() {
        return this.raw.id;
    }
}
exports.MapQuestSuggestionTransformer = MapQuestSuggestionTransformer;
//# sourceMappingURL=map-quest-suggestion.transformer.js.map