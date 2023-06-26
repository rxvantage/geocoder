"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderNotRegisteredException = void 0;
const geocoder_exception_1 = require("./geocoder.exception");
class ProviderNotRegisteredException extends geocoder_exception_1.GeocoderException {
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
exports.ProviderNotRegisteredException = ProviderNotRegisteredException;
//# sourceMappingURL=provider-not-registered.exception.js.map