"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractLocationCommand = void 0;
const world_country_state_1 = require("../util/world-country-state");
const world_country_1 = require("../util/world-country");
const model_1 = require("../model");
const exception_1 = require("../exception");
const abstract_command_1 = require("./abstract.command");
class AbstractLocationCommand extends abstract_command_1.AbstractCommand {
    async parseResponse(_response, _query) {
        throw new Error('AbstractLocationCommand.parseResponse: not implemented');
    }
    async execute(query) {
        let locations = await super.execute(query);
        locations = await this.addMissingLocationProperties(locations);
        locations = this.filterByAccuracy(locations, query.accuracy);
        if (query.limit && locations.length > query.limit) {
            return locations.slice(0, query.limit);
        }
        return locations;
    }
    async addMissingLocationProperties(locations) {
        for (const location of locations) {
            if (!location.countryCode || !location.country) {
                try {
                    const country = await world_country_1.WorldCountryUtil.find({
                        cca2: location.countryCode,
                        name: location.country,
                    });
                    if (country) {
                        location.countryCode = country.cca2;
                        location.country = country.name.common;
                    }
                }
                catch (err) {
                    this.getLogger().error(err, { location });
                }
            }
            if (location.countryCode) {
                try {
                    const state = await world_country_state_1.WorldCountryStateUtil.find({
                        countryCode: location.countryCode,
                        stateCode: location.stateCode,
                        name: location.state,
                    });
                    if (state) {
                        location.state = state.name;
                        location.stateCode = state.stateCode;
                    }
                }
                catch (err) {
                    this.getLogger().error(err, { location });
                }
            }
        }
        return locations;
    }
    filterByAccuracy(locations, accuracy) {
        if (!accuracy) {
            return locations;
        }
        return locations.filter((location) => {
            switch (accuracy) {
                case model_1.AccuracyEnum.HOUSE_NUMBER:
                    return !!(location.houseNumber &&
                        location.postalCode &&
                        location.streetName &&
                        location.city &&
                        location.state &&
                        location.stateCode &&
                        location.country &&
                        location.countryCode &&
                        location.provider);
                case model_1.AccuracyEnum.STREET_NAME:
                    return !!(location.postalCode &&
                        location.streetName &&
                        location.city &&
                        location.state &&
                        location.stateCode &&
                        location.country &&
                        location.countryCode &&
                        location.provider);
                case model_1.AccuracyEnum.CITY:
                    return !!(location.city && location.state && location.stateCode && location.country && location.countryCode && location.provider);
                case model_1.AccuracyEnum.STATE:
                    return !!(location.state && location.stateCode && location.country && location.countryCode && location.provider);
                case model_1.AccuracyEnum.COUNTRY:
                    return !!(location.country && location.countryCode && location.provider);
                default:
                    throw new exception_1.UnsupportedAccuracyException(`Unsupported "${accuracy}" accuracy.`);
            }
        });
    }
}
exports.AbstractLocationCommand = AbstractLocationCommand;
//# sourceMappingURL=abstract-location.command.js.map