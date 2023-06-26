"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractSuggestionTransformer = void 0;
const class_transformer_1 = require("class-transformer");
const model_1 = require("../model");
const abstract_transformer_1 = require("./abstract-transformer");
class AbstractSuggestionTransformer extends abstract_transformer_1.AbstractTransformer {
    async transform(options) {
        const suggestion = new model_1.Suggestion();
        suggestion.provider = this.provider;
        suggestion.formattedAddress = await this.getFormattedAddress();
        suggestion.placeId = await this.getPlaceId();
        suggestion.raw = this.raw;
        return (0, class_transformer_1.plainToInstance)(model_1.Suggestion, suggestion, options);
    }
}
exports.AbstractSuggestionTransformer = AbstractSuggestionTransformer;
//# sourceMappingURL=abstract-suggestion-transformer.js.map