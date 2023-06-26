import { AbstractSuggestionTransformer } from '../../../transformer';
import { GoogleMapsProvider } from '../google-maps.provider';
export class GoogleMapsSuggestionTransformer extends AbstractSuggestionTransformer {
    constructor(raw) {
        super(GoogleMapsProvider, raw);
    }
    async getFormattedAddress() {
        return this.raw.description;
    }
    async getPlaceId() {
        return this.raw.place_id;
    }
}
//# sourceMappingURL=google-maps-suggestion.transformer.js.map