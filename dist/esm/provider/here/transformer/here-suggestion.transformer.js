import { AbstractSuggestionTransformer } from '../../../transformer';
import { HereProvider } from '../here.provider';
export class HereSuggestionTransformer extends AbstractSuggestionTransformer {
    constructor(raw) {
        super(HereProvider, raw);
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
//# sourceMappingURL=here-suggestion.transformer.js.map