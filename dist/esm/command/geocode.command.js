import { ExactMatchNotFoundException } from '../exception';
import { GeocodeQuery } from '../model';
import { AbstractLocationCommand } from './abstract-location.command';
export class GeocodeCommand extends AbstractLocationCommand {
    static queryClass() {
        return GeocodeQuery;
    }
    async execute(query) {
        const locations = await super.execute(query);
        this.validateExactMatchOption(query, locations);
        return locations;
    }
    /**
     * @throws {ExactMatchNotFoundException}
     */
    validateExactMatchOption(query, locations) {
        if (!query.exactMatch || !locations.length) {
            return;
        }
        if (locations.length > 1) {
            throw new ExactMatchNotFoundException('More than one result', { query, locations });
        }
        const location = locations[0];
        if ((query.countryCode && query.countryCode !== location.countryCode) || (query.stateCode && query.stateCode !== location.stateCode)) {
            throw new ExactMatchNotFoundException('Does not match the terms of the query', { query, location });
        }
    }
}
//# sourceMappingURL=geocode.command.js.map