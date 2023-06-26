"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReverseCommand = void 0;
const model_1 = require("../model");
const abstract_location_command_1 = require("./abstract-location.command");
class ReverseCommand extends abstract_location_command_1.AbstractLocationCommand {
    static queryClass() {
        return model_1.ReverseQuery;
    }
}
exports.ReverseCommand = ReverseCommand;
//# sourceMappingURL=reverse.command.js.map