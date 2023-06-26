"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeocodeCommand = void 0;
const exception_1 = require("../exception");
const model_1 = require("../model");
const abstract_location_command_1 = require("./abstract-location.command");
class GeocodeCommand extends abstract_location_command_1.AbstractLocationCommand {
    static queryClass() {
        return model_1.GeocodeQuery;
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
            throw new exception_1.ExactMatchNotFoundException('More than one result', { query, locations });
        }
        const location = locations[0];
        if ((query.countryCode && query.countryCode !== location.countryCode) || (query.stateCode && query.stateCode !== location.stateCode)) {
            throw new exception_1.ExactMatchNotFoundException('Does not match the terms of the query', { query, location });
        }
    }
}
exports.GeocodeCommand = GeocodeCommand;
//# sourceMappingURL=geocode.command.js.map