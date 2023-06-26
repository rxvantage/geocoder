import { WorldCountryStateUtil } from '../util/world-country-state';
import { WorldCountryUtil } from '../util/world-country';
import { AccuracyEnum } from '../model';
import { UnsupportedAccuracyException } from '../exception';
import { AbstractCommand } from './abstract.command';
export class AbstractLocationCommand extends AbstractCommand {
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
                    const country = await WorldCountryUtil.find({
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
                    const state = await WorldCountryStateUtil.find({
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
                case AccuracyEnum.HOUSE_NUMBER:
                    return !!(location.houseNumber &&
                        location.postalCode &&
                        location.streetName &&
                        location.city &&
                        location.state &&
                        location.stateCode &&
                        location.country &&
                        location.countryCode &&
                        location.provider);
                case AccuracyEnum.STREET_NAME:
                    return !!(location.postalCode &&
                        location.streetName &&
                        location.city &&
                        location.state &&
                        location.stateCode &&
                        location.country &&
                        location.countryCode &&
                        location.provider);
                case AccuracyEnum.CITY:
                    return !!(location.city && location.state && location.stateCode && location.country && location.countryCode && location.provider);
                case AccuracyEnum.STATE:
                    return !!(location.state && location.stateCode && location.country && location.countryCode && location.provider);
                case AccuracyEnum.COUNTRY:
                    return !!(location.country && location.countryCode && location.provider);
                default:
                    throw new UnsupportedAccuracyException(`Unsupported "${accuracy}" accuracy.`);
            }
        });
    }
}
//# sourceMappingURL=abstract-location.command.js.map