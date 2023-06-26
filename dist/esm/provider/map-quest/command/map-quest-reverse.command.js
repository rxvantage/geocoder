import { ReverseCommand } from '../../../command';
import { MapQuestCommonCommandMixin } from './mixin';
/**
 * @link {https://developer.mapquest.com/documentation/geocoding-api/reverse/get/}
 */
export class MapQuestReverseCommand extends MapQuestCommonCommandMixin(ReverseCommand) {
    constructor(httpClient, apiKey) {
        super(httpClient, apiKey);
        this.apiKey = apiKey;
    }
    static getUrl() {
        return 'https://www.mapquestapi.com/geocoding/v1/reverse';
    }
    async buildQuery(query) {
        return {
            key: this.apiKey,
            location: `${query.lat},${query.lon}`,
            thumbMaps: false,
            outFormat: 'json',
        };
    }
}
//# sourceMappingURL=map-quest-reverse.command.js.map