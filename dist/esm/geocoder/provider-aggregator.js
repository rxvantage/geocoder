import { StatelessDecider } from '../decider';
import { AbstractGeocoder } from './abstract-geocoder';
export class ProviderAggregator extends AbstractGeocoder {
    constructor(providers, decider) {
        super(providers);
        this.decider = decider || new StatelessDecider();
    }
    async geocode(query) {
        const provider = await this.decider.getProvider(this.getProviders());
        return this.geocodeByProvider(provider, query);
    }
    async reverse(query) {
        const provider = await this.decider.getProvider(this.getProviders());
        return this.reverseByProvider(provider, query);
    }
    async suggest(query) {
        const provider = await this.decider.getProvider(this.getProviders());
        return this.suggestByProvider(provider, query);
    }
}
//# sourceMappingURL=provider-aggregator.js.map