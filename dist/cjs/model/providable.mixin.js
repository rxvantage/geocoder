"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidableMixin = void 0;
const exception_1 = require("../exception");
function ProvidableMixin(Base) {
    return class extends Base {
        constructor(...args) {
            super();
            this.providers = [];
            const [providers] = args;
            if (!providers.length) {
                throw exception_1.ProviderNotRegisteredException.noProviderRegistered();
            }
            this.registerProviders(providers);
        }
        getFirstProvider() {
            return this.getProviders()[0];
        }
        getProviders() {
            return this.providers;
        }
        registerProvider(provider) {
            this.providers.push(provider);
            return this;
        }
        registerProviders(providers) {
            for (const provider of providers) {
                this.registerProvider(provider);
            }
            return this;
        }
        setLogger(logger) {
            super.setLogger(logger);
            for (const provider of this.getProviders()) {
                provider.setLogger(logger);
            }
            return this;
        }
    };
}
exports.ProvidableMixin = ProvidableMixin;
//# sourceMappingURL=providable.mixin.js.map