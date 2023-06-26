import { ProviderNotRegisteredException } from '../exception';
import { AbstractDecider } from './abstract-decider';
export class StatefulDecider extends AbstractDecider {
    async getProvider(providers, forceProvider) {
        if (forceProvider) {
            return (this.currentProvider = forceProvider);
        }
        if (!providers.length) {
            throw ProviderNotRegisteredException.noProviderRegistered();
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
//# sourceMappingURL=stateful-decider.js.map