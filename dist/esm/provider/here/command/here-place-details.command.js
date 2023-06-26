import { PlaceDetailsCommand } from '../../../command';
import { HereLocationCommandMixin } from './mixin';
/**
 * @link {https://developer.here.com/documentation/geocoder/topics/resource-search.html}
 */
export class HerePlaceDetailsCommand extends HereLocationCommandMixin(PlaceDetailsCommand) {
    constructor(httpClient, appId, appCode) {
        super(httpClient, appId, appCode);
    }
    static getUrl() {
        return 'https://geocoder.api.here.com/6.2/search.json';
    }
    async buildQuery(query) {
        const params = await super.buildQuery(query);
        params.locationid = query.placeId;
        return params;
    }
}
//# sourceMappingURL=here-place-details.command.js.map