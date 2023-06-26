"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainProvider = void 0;
const exception_1 = require("../exception");
const model_1 = require("../model");
class ChainProvider extends model_1.AbstractChainProvider {
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
                if (err instanceof exception_1.ValidationException) {
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
                if (err instanceof exception_1.ValidationException) {
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
                if (err instanceof exception_1.ValidationException) {
                    throw err;
                }
                this.getLogger().warn(err);
            }
        }
        return [];
    }
}
exports.ChainProvider = ChainProvider;
//# sourceMappingURL=chain.provider.js.map