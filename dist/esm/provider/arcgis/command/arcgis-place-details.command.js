import { PlaceDetailsCommand } from '../../../command';
import { ArcgisGeocodeCommandMixin } from './mixin';
/**
 * @link {https://developers.arcgis.com/rest/geocode/api-reference/geocoding-find-address-candidates.htm}
 */
export class ArcgisPlaceDetailsCommand extends ArcgisGeocodeCommandMixin(PlaceDetailsCommand) {
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
//# sourceMappingURL=arcgis-place-details.command.js.map