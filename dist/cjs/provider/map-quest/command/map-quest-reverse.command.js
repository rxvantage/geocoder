"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapQuestReverseCommand = void 0;
const command_1 = require("../../../command");
const mixin_1 = require("./mixin");
/**
 * @link {https://developer.mapquest.com/documentation/geocoding-api/reverse/get/}
 */
class MapQuestReverseCommand extends (0, mixin_1.MapQuestCommonCommandMixin)(command_1.ReverseCommand) {
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
exports.MapQuestReverseCommand = MapQuestReverseCommand;
//# sourceMappingURL=map-quest-reverse.command.js.map