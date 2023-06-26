"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapQuestGeocodeCommand = void 0;
const command_1 = require("../../../command");
const mixin_1 = require("./mixin");
/**
 * @link {https://developer.mapquest.com/documentation/geocoding-api/address/get/}
 */
class MapQuestGeocodeCommand extends (0, mixin_1.MapQuestCommonCommandMixin)(command_1.GeocodeCommand) {
    constructor(httpClient, apiKey) {
        super(httpClient, apiKey);
        this.apiKey = apiKey;
    }
    static getUrl() {
        return 'https://www.mapquestapi.com/geocoding/v1/address';
    }
    async buildQuery(query) {
        const providerQuery = {
            key: this.apiKey,
            location: query.address,
            maxResults: query.limit,
            thumbMaps: false,
            outFormat: 'json',
        };
        if (query.lat && query.lon) {
            providerQuery.location = `${query.lon},${query.lat}`;
        }
        return providerQuery;
    }
}
exports.MapQuestGeocodeCommand = MapQuestGeocodeCommand;
//# sourceMappingURL=map-quest-geocode.command.js.map