"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatefulChainProvider = void 0;
const exception_1 = require("../exception");
const model_1 = require("../model");
class StatefulChainProvider extends model_1.AbstractChainProvider {
    constructor(providers) {
        super(providers);
        this.setNextProvider();
    }
    async geocode(query) {
        for (const provider of this.getOrderedProvidersList()) {
            try {
                this.setNextProvider();
                const locations = await provider.geocode(query);
                if (locations.length) {
                    return locations;
                }
            }
            catch (err) {
                if (err instanceof exception_1.ValidationException) {
                    throw err;
                }
                this.getLogger().warn(err);
            }
        }
        return [];
    }
    async reverse(query) {
        for (const provider of this.getOrderedProvidersList()) {
            try {
                this.setNextProvider();
                const locations = await provider.reverse(query);
                if (locations.length) {
                    return locations;
                }
            }
            catch (err) {
                if (err instanceof exception_1.ValidationException) {
                    throw err;
                }
                this.getLogger().warn(err);
            }
        }
        return [];
    }
    async suggest(query) {
        for (const provider of this.getOrderedProvidersList()) {
            try {
                this.setNextProvider();
                return await provider.suggest(query);
            }
            catch (err) {
                if (err instanceof exception_1.ValidationException) {
                    throw err;
                }
                this.getLogger().warn(err);
            }
        }
        return [];
    }
    setNextProvider() {
        const providers = this.getProviders();
        if (!this.nextProvider) {
            this.nextProvider = this.getFirstProvider();
        }
        else {
            const currentProviderIndex = providers.indexOf(this.nextProvider);
            this.nextProvider = providers[currentProviderIndex + 1] || this.getFirstProvider();
        }
        return this;
    }
    /**
     * The round robin queue of providers
     */
    getOrderedProvidersList() {
        const providers = this.getProviders();
        const nextProviderIndex = providers.indexOf(this.nextProvider);
        return providers.slice(nextProviderIndex).concat(providers.slice(0, nextProviderIndex));
    }
}
exports.StatefulChainProvider = StatefulChainProvider;
//# sourceMappingURL=stateful-chain.provider.js.map