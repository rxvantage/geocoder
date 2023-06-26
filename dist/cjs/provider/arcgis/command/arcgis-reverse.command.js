"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArcgisReverseCommand = void 0;
const command_1 = require("../../../command");
const model_1 = require("../../../model");
const transformer_1 = require("../transformer");
const mixin_1 = require("./mixin");
/**
 * @link {https://developers.arcgis.com/rest/geocode/api-reference/geocoding-reverse-geocode.htm}
 */
class ArcgisReverseCommand extends (0, mixin_1.ArcgisCommonCommandMixin)(command_1.ReverseCommand) {
    constructor(httpClient, token) {
        super(httpClient);
        this.token = token;
    }
    static getUrl() {
        return 'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode';
    }
    async buildQuery(query) {
        const featureTypes = [];
        switch (query.accuracy) {
            case model_1.AccuracyEnum.HOUSE_NUMBER:
                featureTypes.push('PointAddress');
                break;
            case model_1.AccuracyEnum.STREET_NAME:
                featureTypes.push('PointAddress', 'StreetAddress');
                break;
            case model_1.AccuracyEnum.COUNTRY:
            case model_1.AccuracyEnum.STATE:
            case model_1.AccuracyEnum.CITY:
                featureTypes.push('PointAddress', 'StreetAddress', 'Locality');
                break;
            default:
                featureTypes.push('PointAddress');
        }
        return {
            token: this.token,
            forStorage: !!this.token,
            location: `${query.lon},${query.lat}`,
            featureTypes: featureTypes.join(','),
            maxLocations: query.limit,
            langCode: query.language,
            locationType: 'rooftop',
            f: 'json',
        };
    }
    async parseResponse(response) {
        if (!response.data.address || !response.data.location) {
            return [];
        }
        const raw = response.data;
        return [new transformer_1.ArcgisReverseTransformer(raw)];
    }
}
exports.ArcgisReverseCommand = ArcgisReverseCommand;
//# sourceMappingURL=arcgis-reverse.command.js.map