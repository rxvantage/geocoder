"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArcgisGeocodeCommand = void 0;
const command_1 = require("../../../command");
const model_1 = require("../../../model");
const mixin_1 = require("./mixin");
/**
 * @link {https://developers.arcgis.com/rest/geocode/api-reference/geocoding-find-address-candidates.htm}
 */
class ArcgisGeocodeCommand extends (0, mixin_1.ArcgisGeocodeCommandMixin)(command_1.GeocodeCommand) {
    constructor(httpClient, token) {
        super(httpClient);
        this.token = token;
    }
    static getUrl() {
        return 'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates';
    }
    async buildQuery(query) {
        const categories = [];
        switch (query.accuracy) {
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
        return {
            token: this.token,
            forStorage: !!this.token,
            address: query.address,
            countryCode: query.countryCode || query.country,
            region: query.stateCode || query.state,
            city: query.city,
            postal: query.postalCode,
            maxLocations: query.limit,
            langCode: query.language,
            category: categories.join(','),
            matchOutOfRange: false,
            locationType: 'rooftop',
            outFields: 'Addr_type,LongLabel,AddNum,StAddr,City,RegionAbbr,Region,Country,Postal,DisplayX,DisplayY',
            f: 'json',
        };
    }
}
exports.ArcgisGeocodeCommand = ArcgisGeocodeCommand;
//# sourceMappingURL=arcgis-geocode.command.js.map