import { ReverseCommand } from '../../../command';
import { HereCommonCommandMixin } from './mixin';
/**
 * @link {https://developer.here.com/documentation/geocoder/topics/resource-reverse-geocode.html}
 */
export class HereReverseCommand extends HereCommonCommandMixin(ReverseCommand) {
    constructor(httpClient, appId, appCode) {
        super(httpClient, appId, appCode);
        this.appId = appId;
        this.appCode = appCode;
    }
    static getUrl() {
        return 'https://reverse.geocoder.api.here.com/6.2/reversegeocode.json';
    }
    async buildQuery(query) {
        return {
            app_id: this.appId,
            app_code: this.appCode,
            language: query.language,
            maxresults: query.limit,
            gen: 9,
            prox: `${query.lat},${query.lon},100`,
            mode: 'retrieveAddresses',
            additionaldata: 'Country2,true;NormalizeNames,true',
        };
    }
}
//# sourceMappingURL=here-reverse.command.js.map