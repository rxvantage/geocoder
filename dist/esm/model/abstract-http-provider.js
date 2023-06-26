import { UnsupportedOperationException } from '../exception';
import { AbstractProvider } from './abstract-provider';
export class AbstractHttpProvider extends AbstractProvider {
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
            throw new UnsupportedOperationException(`Provider ${this.constructor.name} doesn't support "suggest" method`);
        }
        return this.commands.suggest.execute(query);
    }
    async placeDetails(query) {
        if (!this.commands.placeDetails) {
            throw new UnsupportedOperationException(`Provider ${this.constructor.name} doesn't support "placeDetails" method`);
        }
        return (await this.commands.placeDetails.execute(query))[0];
    }
    async distance(query) {
        if (!this.commands.distance) {
            throw new UnsupportedOperationException(`Provider ${this.constructor.name} doesn't support "distance" method`);
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
//# sourceMappingURL=abstract-http-provider.js.map