"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapQuestCommonCommandMixin = exports.MapQuestLocationQualityEnum = void 0;
const exception_1 = require("../../../../exception");
const model_1 = require("../../../../model");
const util_1 = require("../../../../util");
const transformer_1 = require("../../transformer");
var MapQuestLocationQualityEnum;
(function (MapQuestLocationQualityEnum) {
    MapQuestLocationQualityEnum["COUNTRY"] = "COUNTRY";
    MapQuestLocationQualityEnum["ZIP"] = "ZIP";
    MapQuestLocationQualityEnum["ZIP_EXTENDED"] = "ZIP_EXTENDED";
    MapQuestLocationQualityEnum["STATE"] = "STATE";
    MapQuestLocationQualityEnum["COUNTY"] = "COUNTY";
    MapQuestLocationQualityEnum["CITY"] = "CITY";
    MapQuestLocationQualityEnum["NEIGHBORHOOD"] = "NEIGHBORHOOD";
    MapQuestLocationQualityEnum["STREET"] = "STREET";
    MapQuestLocationQualityEnum["ADDRESS"] = "ADDRESS";
    MapQuestLocationQualityEnum["POINT"] = "POINT";
})(MapQuestLocationQualityEnum = exports.MapQuestLocationQualityEnum || (exports.MapQuestLocationQualityEnum = {}));
function MapQuestCommonCommandMixin(Base) {
    class MapQuestCommonCommand extends Base {
        constructor(...args) {
            const [httpClient, apiKey] = args;
            super(httpClient);
            this.apiKey = apiKey;
            if (!this.apiKey) {
                throw new exception_1.InvalidCredentialsException('Invalid or missing api key.');
            }
        }
        async validateResponse(_response) {
            //
        }
        static getMaxAccuracy() {
            return model_1.AccuracyEnum.STREET_NAME;
        }
        async parseResponse(response, query) {
            if (!Array.isArray(response.data.results) || !response.data.results.length) {
                return [];
            }
            const locations = response.data.results[0].locations.filter((raw) => this.accuracyFilter(raw, query.accuracy));
            if (!Array.isArray(locations) || !locations.length) {
                return [];
            }
            return Promise.all(locations.map(async (raw) => new transformer_1.MapQuestLocationTransformer(raw)));
        }
        accuracyFilter(raw, accuracy) {
            if (!accuracy) {
                return true;
            }
            switch (accuracy) {
                // should never happen, as there is validation before
                // case AccuracyEnum.HOUSE_NUMBER:
                //     return this.isQualityAppropriate(MapQuestLocationQualityEnum.POINT, location.geocodeQuality);
                case model_1.AccuracyEnum.STREET_NAME:
                    return this.isQualityAppropriate(MapQuestLocationQualityEnum.STREET, raw.geocodeQuality);
                case model_1.AccuracyEnum.CITY:
                    return this.isQualityAppropriate(MapQuestLocationQualityEnum.CITY, raw.geocodeQuality);
                case model_1.AccuracyEnum.STATE:
                    return this.isQualityAppropriate(MapQuestLocationQualityEnum.STATE, raw.geocodeQuality);
                case model_1.AccuracyEnum.COUNTRY:
                    return this.isQualityAppropriate(MapQuestLocationQualityEnum.COUNTRY, raw.geocodeQuality);
            }
            // should never happen, as there is validation before
            throw new exception_1.UnsupportedAccuracyException(`Unsupported "${accuracy}" accuracy.`);
        }
        isQualityAppropriate(sliceToQuality, locationQuality) {
            return (0, util_1.sliceFrom)(Object.values(MapQuestLocationQualityEnum), sliceToQuality).includes(locationQuality);
        }
    }
    return MapQuestCommonCommand;
}
exports.MapQuestCommonCommandMixin = MapQuestCommonCommandMixin;
//# sourceMappingURL=map-quest-common-command.mixin.js.map