import { ValidationException } from '../exception';
import { AbstractChainProvider } from '../model';
export class StatefulChainProvider extends AbstractChainProvider {
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
                if (err instanceof ValidationException) {
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
                if (err instanceof ValidationException) {
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
                if (err instanceof ValidationException) {
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
//# sourceMappingURL=stateful-chain.provider.js.map