import { AbstractSuggestionTransformer } from '../../../transformer';
import { ArcgisProvider } from '../arcgis.provider';
export class ArcgisSuggestionTransformer extends AbstractSuggestionTransformer {
    constructor(raw) {
        super(ArcgisProvider, raw);
        this.raw = raw;
    }
    async getFormattedAddress() {
        return this.raw.text;
    }
    async getPlaceId() {
        return this.raw.magicKey;
    }
}
//# sourceMappingURL=arcgis-suggestion.transformer.js.map