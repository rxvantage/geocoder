import { GeocodeCommand } from '../../../command';
import { HereLocationCommandMixin } from './mixin';
/**
 * @link {https://developer.here.com/documentation/geocoder/topics/resource-geocode.html}
 */
export class HereGeocodeCommand extends HereLocationCommandMixin(GeocodeCommand) {
    constructor(httpClient, appId, appCode) {
        super(httpClient, appId, appCode);
    }
    static getUrl() {
        return 'https://geocoder.api.here.com/6.2/geocode.json';
    }
}
//# sourceMappingURL=here-geocode.command.js.map