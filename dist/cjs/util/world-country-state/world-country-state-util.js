"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldCountryStateUtil = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const country_states_json_1 = __importDefault(require("../../data/country-states/country-states.json"));
const world_country_state_1 = require("./world-country-state");
const world_country_state_query_1 = require("./world-country-state-query");
class WorldCountryStateUtil {
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
        const query = (0, class_transformer_1.plainToInstance)(world_country_state_query_1.WorldCountryStateQuery, _query);
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
        const stateData = country_states_json_1.default.find((plainState) => {
            const state = (0, class_transformer_1.plainToInstance)(world_country_state_1.WorldCountryState, plainState);
            return WorldCountryStateUtil.match(state, query);
        });
        if (!stateData) {
            return;
        }
        return (0, class_transformer_1.plainToInstance)(world_country_state_1.WorldCountryState, stateData);
    }
}
exports.WorldCountryStateUtil = WorldCountryStateUtil;
//# sourceMappingURL=world-country-state-util.js.map