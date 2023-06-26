import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import countryStates from '../../data/country-states/country-states.json';
import { WorldCountryState } from './world-country-state';
import { WorldCountryStateQuery } from './world-country-state-query';
export class WorldCountryStateUtil {
    /**
     * Returns result only if all fields matched
     */
    static match(state, filters) {
        if (state.countryCode.toLowerCase() === filters.countryCode.toLowerCase() &&
            ((filters.stateCode && state.stateCode.toLowerCase() === filters.stateCode.toLowerCase()) ||
                (filters.name && state.name.toLowerCase() === filters.name.toLowerCase()))) {
            return true;
        }
        return false;
    }
    static async find(_query) {
        const query = plainToInstance(WorldCountryStateQuery, _query);
        const keys = Object.keys(query);
        // clear undefined/empty values
        for (const key of keys) {
            if (!query[key]) {
                delete query[key];
            }
        }
        try {
            await validateOrReject(query, {
                whitelist: true,
                forbidNonWhitelisted: true,
                validationError: { target: false, value: false },
            });
        }
        catch (err) {
            return;
        }
        const stateData = countryStates.find((plainState) => {
            const state = plainToInstance(WorldCountryState, plainState);
            return WorldCountryStateUtil.match(state, query);
        });
        if (!stateData) {
            return;
        }
        return plainToInstance(WorldCountryState, stateData);
    }
}
//# sourceMappingURL=world-country-state-util.js.map