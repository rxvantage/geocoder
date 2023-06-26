import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import countries from 'world-countries/dist/countries-unescaped.json';
import { WorldCountry } from './world-country';
import { WorldCountryQuery } from './world-country-query';
export class WorldCountryUtil {
    /**
     * Returns the result if at least one of the fields matches
     */
    static match(country, filters) {
        var _a, _b;
        const keys = Object.keys(filters);
        for (const key of keys) {
            const searchValue = (_a = filters[key]) === null || _a === void 0 ? void 0 : _a.toString().toLowerCase();
            if (key === 'name') {
                // TODO add search by `country.name.native` property
                if (country.name.common.toLowerCase() === searchValue || country.name.official.toLowerCase() === searchValue) {
                    return true;
                }
            }
            else if (((_b = country[key]) === null || _b === void 0 ? void 0 : _b.toString().toLowerCase()) === searchValue) {
                return true;
            }
        }
        return false;
    }
    static async find(_query) {
        const query = plainToInstance(WorldCountryQuery, _query);
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
        const countryData = countries.find((plainCountry) => {
            const country = plainToInstance(WorldCountry, plainCountry);
            return WorldCountryUtil.match(country, query);
        });
        if (!countryData) {
            return;
        }
        return plainToInstance(WorldCountry, countryData);
    }
}
//# sourceMappingURL=world-country-util.js.map