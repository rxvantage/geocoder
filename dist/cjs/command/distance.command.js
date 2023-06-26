"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistanceCommand = void 0;
const distance_query_1 = require("../model/distance-query");
const abstract_command_1 = require("./abstract.command");
class DistanceCommand extends abstract_command_1.AbstractCommand {
    static queryClass() {
        return distance_query_1.DistanceQuery;
    }
    async execute(query) {
        return super.execute(query);
    }
    async parseResponse(_response, _query) {
        throw new Error('DistanceCommand.parseResponse: not implemented');
    }
}
exports.DistanceCommand = DistanceCommand;
//# sourceMappingURL=distance.command.js.map