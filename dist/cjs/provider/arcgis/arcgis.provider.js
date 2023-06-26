"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArcgisProvider = void 0;
const model_1 = require("../../model");
const command_1 = require("./command");
class ArcgisProvider extends model_1.AbstractHttpProvider {
    constructor(httpClient, token) {
        super({
            geocode: new command_1.ArcgisGeocodeCommand(httpClient, token),
            reverse: new command_1.ArcgisReverseCommand(httpClient, token),
            suggest: new command_1.ArcgisSuggestCommand(httpClient, token),
            placeDetails: new command_1.ArcgisPlaceDetailsCommand(httpClient, token),
        });
    }
}
exports.ArcgisProvider = ArcgisProvider;
//# sourceMappingURL=arcgis.provider.js.map