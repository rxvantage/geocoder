"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapQuestProvider = void 0;
const model_1 = require("../../model");
const command_1 = require("./command");
class MapQuestProvider extends model_1.AbstractHttpProvider {
    constructor(httpClient, apiKey) {
        super({
            geocode: new command_1.MapQuestGeocodeCommand(httpClient, apiKey),
            reverse: new command_1.MapQuestReverseCommand(httpClient, apiKey),
            // no sense without MapQuestPlaceIdCommand
            // suggest: new MapQuestSuggestCommand(httpClient, apiKey),
        });
    }
}
exports.MapQuestProvider = MapQuestProvider;
//# sourceMappingURL=map-quest.provider.js.map