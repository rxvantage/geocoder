"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleMapsProvider = void 0;
const model_1 = require("../../model");
const command_1 = require("./command");
class GoogleMapsProvider extends model_1.AbstractHttpProvider {
    constructor(httpClient, apiKey) {
        super({
            geocode: new command_1.GoogleMapsGeocodeCommand(httpClient, apiKey),
            reverse: new command_1.GoogleMapsReverseCommand(httpClient, apiKey),
            suggest: new command_1.GoogleMapsSuggestCommand(httpClient, apiKey),
            placeDetails: new command_1.GoogleMapsPlaceDetailsCommand(httpClient, apiKey),
            distance: new command_1.GoogleMapsDistanceCommand(httpClient, apiKey),
        });
    }
}
exports.GoogleMapsProvider = GoogleMapsProvider;
//# sourceMappingURL=google-maps.provider.js.map