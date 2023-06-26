import { AbstractHttpProvider } from '../../model';
import { MapQuestGeocodeCommand, MapQuestReverseCommand } from './command';
export class MapQuestProvider extends AbstractHttpProvider {
    constructor(httpClient, apiKey) {
        super({
            geocode: new MapQuestGeocodeCommand(httpClient, apiKey),
            reverse: new MapQuestReverseCommand(httpClient, apiKey),
            // no sense without MapQuestPlaceIdCommand
            // suggest: new MapQuestSuggestCommand(httpClient, apiKey),
        });
    }
}
//# sourceMappingURL=map-quest.provider.js.map