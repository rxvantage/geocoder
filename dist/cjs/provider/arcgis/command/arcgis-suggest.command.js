"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArcgisSuggestCommand = void 0;
const transformer_1 = require("../transformer");
const world_country_1 = require("../../../util/world-country");
const model_1 = require("../../../model");
const command_1 = require("../../../command");
const mixin_1 = require("./mixin");
/**
 * @link {https://developers.arcgis.com/rest/geocode/api-reference/geocoding-suggest.htm}
 */
class ArcgisSuggestCommand extends (0, mixin_1.ArcgisCommonCommandMixin)(command_1.SuggestCommand) {
    constructor(httpClient, token) {
        super(httpClient);
        this.token = token;
    }
    static getUrl() {
        return 'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest';
    }
    async buildQuery(query) {
        const categories = this.getCategoriesByAccuracy(query.accuracy);
        if (!query.countryCode && query.country) {
            const country = await world_country_1.WorldCountryUtil.find({
                name: query.country,
            });
            if (country) {
                query.countryCode = country.cca2;
            }
        }
        const providerQuery = {
            token: this.token,
            forStorage: !!this.token,
            text: query.address,
            countryCode: query.countryCode,
            maxSuggestions: query.limit,
            langCode: query.language,
            category: categories.join(','),
            isCollection: false,
            f: 'json',
        };
        if (query.lat && query.lon) {
            providerQuery.location = `${query.lon},${query.lat}`;
        }
        return providerQuery;
    }
    async parseResponse(response) {
        if (!Array.isArray(response.data.suggestions)) {
            return [];
        }
        return Promise.all(response.data.suggestions.map(async (suggestion) => new transformer_1.ArcgisSuggestionTransformer(suggestion)));
    }
    getCategoriesByAccuracy(accuracy) {
        const categories = [];
        if (!accuracy) {
            return categories;
        }
        switch (accuracy) {
            case model_1.AccuracyEnum.HOUSE_NUMBER:
                categories.push('Point Address');
                break;
            case model_1.AccuracyEnum.STREET_NAME:
                categories.push('Point Address', 'Street Address', 'Street Name');
                break;
            case model_1.AccuracyEnum.CITY:
                categories.push('Point Address', 'Street Address', 'Street Name', 'City');
                break;
            case model_1.AccuracyEnum.STATE:
                categories.push('Point Address', 'Street Address', 'Street Name', 'City', 'Subregion', 'Region');
                break;
            case model_1.AccuracyEnum.COUNTRY:
                categories.push('Point Address', 'Street Address', 'Street Name', 'City', 'Subregion', 'Region', 'Territory', 'Country');
                break;
        }
        return categories;
    }
}
exports.ArcgisSuggestCommand = ArcgisSuggestCommand;
//# sourceMappingURL=arcgis-suggest.command.js.map