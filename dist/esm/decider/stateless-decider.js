import { ProviderNotRegisteredException } from '../exception';
import { AbstractDecider } from './abstract-decider';
export class StatelessDecider extends AbstractDecider {
    async getProvider(providers, forceProvider) {
        if (forceProvider) {
            return forceProvider;
        }
        if (!providers.length) {
            throw ProviderNotRegisteredException.noProviderRegistered();
        }
        // Take first
        return providers[0];
    }
}
//# sourceMappingURL=stateless-decider.js.map