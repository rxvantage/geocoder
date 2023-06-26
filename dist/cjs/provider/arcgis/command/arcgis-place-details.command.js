"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArcgisPlaceDetailsCommand = void 0;
const command_1 = require("../../../command");
const mixin_1 = require("./mixin");
/**
 * @link {https://developers.arcgis.com/rest/geocode/api-reference/geocoding-find-address-candidates.htm}
 */
class ArcgisPlaceDetailsCommand extends (0, mixin_1.ArcgisGeocodeCommandMixin)(command_1.PlaceDetailsCommand) {
    constructor(httpClient, token) {
        super(httpClient);
        this.token = token;
    }
    static getUrl() {
        return 'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates';
    }
    async buildQuery(query) {
        return {
            token: this.token,
            forStorage: !!this.token,
            magicKey: query.placeId,
            langCode: query.language,
            locationType: 'rooftop',
            outFields: 'Addr_type,LongLabel,AddNum,StAddr,City,RegionAbbr,Region,Country,Postal,DisplayX,DisplayY',
            f: 'json',
        };
    }
}
exports.ArcgisPlaceDetailsCommand = ArcgisPlaceDetailsCommand;
//# sourceMappingURL=arcgis-place-details.command.js.map