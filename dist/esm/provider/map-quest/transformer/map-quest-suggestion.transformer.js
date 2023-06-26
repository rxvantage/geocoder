import { AbstractSuggestionTransformer } from '../../../transformer';
import { MapQuestProvider } from '../map-quest.provider';
export class MapQuestSuggestionTransformer extends AbstractSuggestionTransformer {
    constructor(raw) {
        super(MapQuestProvider, raw);
    }
    async getFormattedAddress() {
        return this.raw.displayString;
    }
    async getPlaceId() {
        return this.raw.id;
    }
}
//# sourceMappingURL=map-quest-suggestion.transformer.js.map