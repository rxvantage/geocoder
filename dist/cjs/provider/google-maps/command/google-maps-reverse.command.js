"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleMapsReverseCommand = void 0;
const command_1 = require("../../../command");
const mixin_1 = require("./mixin");
/**
 * TODO implement result_type and location_type
 * @link {https://developers.google.com/maps/documentation/geocoding/intro#ReverseGeocoding}
 */
class GoogleMapsReverseCommand extends (0, mixin_1.GoogleMapsLocationCommandMixin)(command_1.ReverseCommand) {
    constructor(httpClient, apiKey) {
        super(httpClient, apiKey);
        this.apiKey = apiKey;
    }
    static getUrl() {
        return 'https://maps.googleapis.com/maps/api/geocode/json';
    }
    async buildQuery(query) {
        const providerQuery = {
            key: this.apiKey,
            latlng: `${query.lat},${query.lon}`,
            limit: query.limit,
            language: query.language,
            sensor: false,
        };
        if (query.countryCode) {
            providerQuery.region = `.${query.countryCode.toLowerCase()}`;
        }
        return providerQuery;
    }
}
exports.GoogleMapsReverseCommand = GoogleMapsReverseCommand;
//# sourceMappingURL=google-maps-reverse.command.js.map