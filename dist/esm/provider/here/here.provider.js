import { AbstractHttpProvider } from '../../model';
import { HereGeocodeCommand, HerePlaceDetailsCommand, HereReverseCommand, HereSuggestCommand } from './command';
export class HereProvider extends AbstractHttpProvider {
    constructor(httpClient, appId, appCode) {
        super({
            geocode: new HereGeocodeCommand(httpClient, appId, appCode),
            reverse: new HereReverseCommand(httpClient, appId, appCode),
            suggest: new HereSuggestCommand(httpClient, appId, appCode),
            placeDetails: new HerePlaceDetailsCommand(httpClient, appId, appCode),
        });
    }
}
//# sourceMappingURL=here.provider.js.map