import { InvalidCredentialsException, UnsupportedAccuracyException } from '../../../../exception';
import { AccuracyEnum } from '../../../../model';
import { sliceFrom } from '../../../../util';
import { MapQuestLocationTransformer } from '../../transformer';
export var MapQuestLocationQualityEnum;
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
})(MapQuestLocationQualityEnum || (MapQuestLocationQualityEnum = {}));
export function MapQuestCommonCommandMixin(Base) {
    class MapQuestCommonCommand extends Base {
        constructor(...args) {
            const [httpClient, apiKey] = args;
            super(httpClient);
            this.apiKey = apiKey;
            if (!this.apiKey) {
                throw new InvalidCredentialsException('Invalid or missing api key.');
            }
        }
        async validateResponse(_response) {
            //
        }
        static getMaxAccuracy() {
            return AccuracyEnum.STREET_NAME;
        }
        async parseResponse(response, query) {
            if (!Array.isArray(response.data.results) || !response.data.results.length) {
                return [];
            }
            const locations = response.data.results[0].locations.filter((raw) => this.accuracyFilter(raw, query.accuracy));
            if (!Array.isArray(locations) || !locations.length) {
                return [];
            }
            return Promise.all(locations.map(async (raw) => new MapQuestLocationTransformer(raw)));
        }
        accuracyFilter(raw, accuracy) {
            if (!accuracy) {
                return true;
            }
            switch (accuracy) {
                // should never happen, as there is validation before
                // case AccuracyEnum.HOUSE_NUMBER:
                //     return this.isQualityAppropriate(MapQuestLocationQualityEnum.POINT, location.geocodeQuality);
                case AccuracyEnum.STREET_NAME:
                    return this.isQualityAppropriate(MapQuestLocationQualityEnum.STREET, raw.geocodeQuality);
                case AccuracyEnum.CITY:
                    return this.isQualityAppropriate(MapQuestLocationQualityEnum.CITY, raw.geocodeQuality);
                case AccuracyEnum.STATE:
                    return this.isQualityAppropriate(MapQuestLocationQualityEnum.STATE, raw.geocodeQuality);
                case AccuracyEnum.COUNTRY:
                    return this.isQualityAppropriate(MapQuestLocationQualityEnum.COUNTRY, raw.geocodeQuality);
            }
            // should never happen, as there is validation before
            throw new UnsupportedAccuracyException(`Unsupported "${accuracy}" accuracy.`);
        }
        isQualityAppropriate(sliceToQuality, locationQuality) {
            return sliceFrom(Object.values(MapQuestLocationQualityEnum), sliceToQuality).includes(locationQuality);
        }
    }
    return MapQuestCommonCommand;
}
//# sourceMappingURL=map-quest-common-command.mixin.js.map