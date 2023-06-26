import { ProviderNotRegisteredException } from '../exception';
import { LoggableMixin } from '../logger';
import { AbstractChainProvider, AbstractHttpProvider, ProvidableMixin } from '../model';
export class AbstractGeocoder extends ProvidableMixin(LoggableMixin(Object)) {
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
            if (!(providerClass.prototype instanceof AbstractHttpProvider)) {
                throw ProviderNotRegisteredException.doesNotInheritAbstractProvider(providerClass.name);
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
        throw ProviderNotRegisteredException.create(providerClassName, this.getProviders());
    }
    findHttpProviderRecursive(providerClassName, provider) {
        if (provider instanceof AbstractHttpProvider && providerClassName === provider.constructor.name) {
            return provider;
        }
        if (provider instanceof AbstractChainProvider) {
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
//# sourceMappingURL=abstract-geocoder.js.map