import { ValidationException } from '../exception';
import { AbstractChainProvider } from '../model';
export class ChainProvider extends AbstractChainProvider {
    constructor(providers) {
        super(providers);
    }
    async geocode(query) {
        for (const provider of this.getProviders()) {
            try {
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
        for (const provider of this.getProviders()) {
            try {
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
        for (const provider of this.getProviders()) {
            try {
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
}
//# sourceMappingURL=chain.provider.js.map