"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldCountryUtil = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const countries_unescaped_json_1 = __importDefault(require("world-countries/dist/countries-unescaped.json"));
const world_country_1 = require("./world-country");
const world_country_query_1 = require("./world-country-query");
class WorldCountryUtil {
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
        const query = (0, class_transformer_1.plainToInstance)(world_country_query_1.WorldCountryQuery, _query);
        const keys = Object.keys(query);
        // clear undefined/empty values
        for (const key of keys) {
            if (!query[key]) {
                delete query[key];
            }
        }
        try {
            await (0, class_validator_1.validateOrReject)(query, {
                whitelist: true,
                forbidNonWhitelisted: true,
                validationError: { target: false, value: false },
            });
        }
        catch (err) {
            return;
        }
        const countryData = countries_unescaped_json_1.default.find((plainCountry) => {
            const country = (0, class_transformer_1.plainToInstance)(world_country_1.WorldCountry, plainCountry);
            return WorldCountryUtil.match(country, query);
        });
        if (!countryData) {
            return;
        }
        return (0, class_transformer_1.plainToInstance)(world_country_1.WorldCountry, countryData);
    }
}
exports.WorldCountryUtil = WorldCountryUtil;
//# sourceMappingURL=world-country-util.js.map