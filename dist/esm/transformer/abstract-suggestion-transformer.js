import { plainToInstance } from 'class-transformer';
import { Suggestion } from '../model';
import { AbstractTransformer } from './abstract-transformer';
export class AbstractSuggestionTransformer extends AbstractTransformer {
    async transform(options) {
        const suggestion = new Suggestion();
        suggestion.provider = this.provider;
        suggestion.formattedAddress = await this.getFormattedAddress();
        suggestion.placeId = await this.getPlaceId();
        suggestion.raw = this.raw;
        return plainToInstance(Suggestion, suggestion, options);
    }
}
//# sourceMappingURL=abstract-suggestion-transformer.js.map