import { ReverseCommand } from '../../../command';
import { AccuracyEnum } from '../../../model';
import { ArcgisReverseTransformer } from '../transformer';
import { ArcgisCommonCommandMixin } from './mixin';
/**
 * @link {https://developers.arcgis.com/rest/geocode/api-reference/geocoding-reverse-geocode.htm}
 */
export class ArcgisReverseCommand extends ArcgisCommonCommandMixin(ReverseCommand) {
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
            case AccuracyEnum.HOUSE_NUMBER:
                featureTypes.push('PointAddress');
                break;
            case AccuracyEnum.STREET_NAME:
                featureTypes.push('PointAddress', 'StreetAddress');
                break;
            case AccuracyEnum.COUNTRY:
            case AccuracyEnum.STATE:
            case AccuracyEnum.CITY:
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
        return [new ArcgisReverseTransformer(raw)];
    }
}
//# sourceMappingURL=arcgis-reverse.command.js.map