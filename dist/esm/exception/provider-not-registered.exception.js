import { GeocoderException } from './geocoder.exception';
export class ProviderNotRegisteredException extends GeocoderException {
    static create(providerClassName, registeredProviders = []) {
        return new ProviderNotRegisteredException(`Provider "${providerClassName}" is not registered, so you cannot use it. Did you forget to register it or made a typo?${!registeredProviders.length
            ? ''
            : ` Registered providers are: [${registeredProviders.map((provider) => provider.constructor.name)}]`}`);
    }
    static noProviderRegistered() {
        return new ProviderNotRegisteredException('No provider registered.');
    }
    static doesNotInheritAbstractProvider(className) {
        return new ProviderNotRegisteredException(`The class "${className}" does not inherit AbstractProvider.`);
    }
}
//# sourceMappingURL=provider-not-registered.exception.js.map