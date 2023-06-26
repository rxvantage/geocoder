import { GeocodeCommand } from '../../../command';
import { AccuracyEnum } from '../../../model';
import { ArcgisGeocodeCommandMixin } from './mixin';
/**
 * @link {https://developers.arcgis.com/rest/geocode/api-reference/geocoding-find-address-candidates.htm}
 */
export class ArcgisGeocodeCommand extends ArcgisGeocodeCommandMixin(GeocodeCommand) {
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
//# sourceMappingURL=arcgis-geocode.command.js.map