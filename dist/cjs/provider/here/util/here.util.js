"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterByAccuracy = void 0;
const model_1 = require("../../../model");
function filterByAccuracy({ MatchLevel: matchLevel }, accuracy) {
    if (!accuracy) {
        return true;
    }
    switch (accuracy) {
        case model_1.AccuracyEnum.HOUSE_NUMBER:
            return ['houseNumber'].includes(matchLevel);
        case model_1.AccuracyEnum.STREET_NAME:
            return ['street'].includes(matchLevel);
        case model_1.AccuracyEnum.CITY:
            return ['city'].includes(matchLevel);
        case model_1.AccuracyEnum.STATE:
            return ['state'].includes(matchLevel);
        case model_1.AccuracyEnum.COUNTRY:
            return ['country'].includes(matchLevel);
    }
    return false;
}
exports.filterByAccuracy = filterByAccuracy;
//# sourceMappingURL=here.util.js.map