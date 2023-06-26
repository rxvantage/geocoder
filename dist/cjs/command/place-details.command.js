"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceDetailsCommand = void 0;
const exception_1 = require("../exception");
const model_1 = require("../model");
const abstract_location_command_1 = require("./abstract-location.command");
class PlaceDetailsCommand extends abstract_location_command_1.AbstractLocationCommand {
    static queryClass() {
        return model_1.PlaceDetailsQuery;
    }
    async execute(query) {
        const locations = await super.execute(query);
        locations.map((location) => {
            if (!location.placeId) {
                location.placeId = query.placeId;
            }
            return location;
        });
        if (locations.length !== 1) {
            throw new exception_1.NotFoundException(`Place by id "${query.placeId}" not found`);
        }
        return locations;
    }
    async parseOneResult(_raw) {
        throw new Error('PlaceDetailsCommand.parseOneResult: not implemented');
    }
}
exports.PlaceDetailsCommand = PlaceDetailsCommand;
//# sourceMappingURL=place-details.command.js.map