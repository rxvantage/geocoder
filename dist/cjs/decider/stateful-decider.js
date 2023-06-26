"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatefulDecider = void 0;
const exception_1 = require("../exception");
const abstract_decider_1 = require("./abstract-decider");
class StatefulDecider extends abstract_decider_1.AbstractDecider {
    async getProvider(providers, forceProvider) {
        if (forceProvider) {
            return (this.currentProvider = forceProvider);
        }
        if (!providers.length) {
            throw exception_1.ProviderNotRegisteredException.noProviderRegistered();
        }
        if (!this.currentProvider || providers.length === 1) {
            return (this.currentProvider = providers[0]);
        }
        return (this.currentProvider = this.getNextProvider(providers, this.currentProvider));
    }
    getNextProvider(providers, provider) {
        const providerIndex = providers.indexOf(provider);
        return providers[providerIndex + 1] || providers[0];
    }
}
exports.StatefulDecider = StatefulDecider;
//# sourceMappingURL=stateful-decider.js.map