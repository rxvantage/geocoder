"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractHttpProvider = void 0;
const exception_1 = require("../exception");
const abstract_provider_1 = require("./abstract-provider");
class AbstractHttpProvider extends abstract_provider_1.AbstractProvider {
    constructor(commands) {
        super();
        this.commands = commands;
    }
    async geocode(query) {
        return this.commands.geocode.execute(query);
    }
    async reverse(query) {
        return this.commands.reverse.execute(query);
    }
    async suggest(query) {
        if (!this.commands.suggest) {
            throw new exception_1.UnsupportedOperationException(`Provider ${this.constructor.name} doesn't support "suggest" method`);
        }
        return this.commands.suggest.execute(query);
    }
    async placeDetails(query) {
        if (!this.commands.placeDetails) {
            throw new exception_1.UnsupportedOperationException(`Provider ${this.constructor.name} doesn't support "placeDetails" method`);
        }
        return (await this.commands.placeDetails.execute(query))[0];
    }
    async distance(query) {
        if (!this.commands.distance) {
            throw new exception_1.UnsupportedOperationException(`Provider ${this.constructor.name} doesn't support "distance" method`);
        }
        return (await this.commands.distance.execute(query))[0];
    }
    setLogger(logger) {
        super.setLogger(logger);
        for (const command of Object.values(this.commands)) {
            command.setLogger(logger);
        }
        return this;
    }
}
exports.AbstractHttpProvider = AbstractHttpProvider;
//# sourceMappingURL=abstract-http-provider.js.map