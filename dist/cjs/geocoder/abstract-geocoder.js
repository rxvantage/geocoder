"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractGeocoder = void 0;
const exception_1 = require("../exception");
const logger_1 = require("../logger");
const model_1 = require("../model");
class AbstractGeocoder extends (0, model_1.ProvidableMixin)((0, logger_1.LoggableMixin)(Object)) {
    async geocodeByProvider(provider, query) {
        return provider.geocode(query);
    }
    async reverseByProvider(provider, query) {
        return provider.reverse(query);
    }
    async suggestByProvider(provider, query) {
        return provider.suggest(query);
    }
    async distanceByProvider(provider, query) {
        return provider.distance(query);
    }
    using(providerClass) {
        let providerClassName;
        if (typeof providerClass === 'function') {
            if (!(providerClass.prototype instanceof model_1.AbstractHttpProvider)) {
                throw exception_1.ProviderNotRegisteredException.doesNotInheritAbstractProvider(providerClass.name);
            }
            providerClassName = providerClass.name;
        }
        else {
            providerClassName = providerClass;
        }
        for (const provider of this.getProviders()) {
            const foundProvider = this.findHttpProviderRecursive(providerClassName, provider);
            if (foundProvider) {
                return foundProvider;
            }
        }
        throw exception_1.ProviderNotRegisteredException.create(providerClassName, this.getProviders());
    }
    findHttpProviderRecursive(providerClassName, provider) {
        if (provider instanceof model_1.AbstractHttpProvider && providerClassName === provider.constructor.name) {
            return provider;
        }
        if (provider instanceof model_1.AbstractChainProvider) {
            for (const internalProvider of provider.getProviders()) {
                const foundProvider = this.findHttpProviderRecursive(providerClassName, internalProvider);
                if (foundProvider) {
                    return foundProvider;
                }
            }
            return;
        }
    }
}
exports.AbstractGeocoder = AbstractGeocoder;
//# sourceMappingURL=abstract-geocoder.js.map