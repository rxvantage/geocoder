"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderAggregator = void 0;
const decider_1 = require("../decider");
const abstract_geocoder_1 = require("./abstract-geocoder");
class ProviderAggregator extends abstract_geocoder_1.AbstractGeocoder {
    constructor(providers, decider) {
        super(providers);
        this.decider = decider || new decider_1.StatelessDecider();
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
exports.ProviderAggregator = ProviderAggregator;
//# sourceMappingURL=provider-aggregator.js.map