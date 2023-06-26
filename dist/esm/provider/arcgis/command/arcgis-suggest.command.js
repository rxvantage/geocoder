import { ArcgisSuggestionTransformer } from '../transformer';
import { WorldCountryUtil } from '../../../util/world-country';
import { AccuracyEnum } from '../../../model';
import { SuggestCommand } from '../../../command';
import { ArcgisCommonCommandMixin } from './mixin';
/**
 * @link {https://developers.arcgis.com/rest/geocode/api-reference/geocoding-suggest.htm}
 */
export class ArcgisSuggestCommand extends ArcgisCommonCommandMixin(SuggestCommand) {
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
            const country = await WorldCountryUtil.find({
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
        return Promise.all(response.data.suggestions.map(async (suggestion) => new ArcgisSuggestionTransformer(suggestion)));
    }
    getCategoriesByAccuracy(accuracy) {
        const categories = [];
        if (!accuracy) {
            return categories;
        }
        switch (accuracy) {
            case AccuracyEnum.HOUSE_NUMBER:
                categories.push('Point Address');
                break;
            case AccuracyEnum.STREET_NAME:
                categories.push('Point Address', 'Street Address', 'Street Name');
                break;
            case AccuracyEnum.CITY:
                categories.push('Point Address', 'Street Address', 'Street Name', 'City');
                break;
            case AccuracyEnum.STATE:
                categories.push('Point Address', 'Street Address', 'Street Name', 'City', 'Subregion', 'Region');
                break;
            case AccuracyEnum.COUNTRY:
                categories.push('Point Address', 'Street Address', 'Street Name', 'City', 'Subregion', 'Region', 'Territory', 'Country');
                break;
        }
        return categories;
    }
}
//# sourceMappingURL=arcgis-suggest.command.js.map