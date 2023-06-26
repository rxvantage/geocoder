"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleMapsSuggestCommand = void 0;
const transformer_1 = require("../transformer");
const model_1 = require("../../../model");
const command_1 = require("../../../command");
const mixin_1 = require("./mixin");
/**
 * @link {https://developers.google.com/places/web-service/autocomplete#place_autocomplete_requests}
 */
class GoogleMapsSuggestCommand extends (0, mixin_1.GoogleMapsCommonCommandMixin)(command_1.SuggestCommand) {
    constructor(httpClient, apiKey) {
        super(httpClient, apiKey);
        this.apiKey = apiKey;
    }
    static getUrl() {
        return 'https://maps.googleapis.com/maps/api/place/autocomplete/json';
    }
    async buildQuery(query) {
        /**
         * @link {https://developers.google.com/places/web-service/autocomplete#place_types}
         */
        const components = new Map();
        const country = query.countryCode || query.country;
        if (country) {
            components.set('country', country);
        }
        const providerQuery = {
            key: this.apiKey,
            input: query.address,
            components: [...components].map((value) => `${value[0]}:${value[1]}`).join('|'),
            language: query.language,
            types: this.getRequestTypeByAccuracy(query.accuracy),
            sensor: false,
        };
        if (query.countryCode) {
            providerQuery.region = `.${query.countryCode.toLowerCase()}`;
        }
        if (query.lat && query.lon) {
            providerQuery.location = `${query.lat},${query.lon}`;
            if (query.radius) {
                providerQuery.radius = query.radius;
                providerQuery.strictbounds = true;
            }
        }
        return providerQuery;
    }
    async parseResponse(response, query) {
        if (!Array.isArray(response.data.predictions) || !response.data.predictions.length) {
            return [];
        }
        let results = response.data.predictions;
        results = results.filter((raw) => this.filterByAccuracy(raw, query.accuracy));
        if (!results.length) {
            return [];
        }
        return Promise.all(results.map(async (raw) => new transformer_1.GoogleMapsSuggestionTransformer(raw)));
    }
    getRequestTypeByAccuracy(accuracy) {
        switch (accuracy) {
            case model_1.AccuracyEnum.HOUSE_NUMBER:
                return 'address';
            case model_1.AccuracyEnum.STREET_NAME:
                return 'geocode';
            case model_1.AccuracyEnum.CITY:
                return '(cities)';
            case model_1.AccuracyEnum.STATE:
            case model_1.AccuracyEnum.COUNTRY:
                return '(regions)';
            default:
                return '';
        }
    }
    /**
     * Mapping between google location types and our
     */
    filterByAccuracy({ types }, accuracy) {
        if (!accuracy) {
            return true;
        }
        switch (accuracy) {
            case model_1.AccuracyEnum.HOUSE_NUMBER:
                return types.includes('street_address') || types.includes('premise');
            case model_1.AccuracyEnum.STREET_NAME:
                return types.includes('route');
            case model_1.AccuracyEnum.CITY:
                // @todo check sublocality ?
                return types.includes('locality');
            case model_1.AccuracyEnum.STATE:
                return types.includes('administrative_area_level_1');
            case model_1.AccuracyEnum.COUNTRY:
                return types.includes('country');
        }
        return false;
    }
}
exports.GoogleMapsSuggestCommand = GoogleMapsSuggestCommand;
//# sourceMappingURL=google-maps-suggest.command.js.map