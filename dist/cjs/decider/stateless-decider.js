"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatelessDecider = void 0;
const exception_1 = require("../exception");
const abstract_decider_1 = require("./abstract-decider");
class StatelessDecider extends abstract_decider_1.AbstractDecider {
    async getProvider(providers, forceProvider) {
        if (forceProvider) {
            return forceProvider;
        }
        if (!providers.length) {
            throw exception_1.ProviderNotRegisteredException.noProviderRegistered();
        }
        // Take first
        return providers[0];
    }
}
exports.StatelessDecider = StatelessDecider;
//# sourceMappingURL=stateless-decider.js.map