"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractTransformer = void 0;
class AbstractTransformer {
    constructor(providerClass, raw) {
        this.provider = providerClass.name;
        this.raw = raw;
    }
}
exports.AbstractTransformer = AbstractTransformer;
//# sourceMappingURL=abstract-transformer.js.map