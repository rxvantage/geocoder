"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuggestCommand = void 0;
const model_1 = require("../model");
const abstract_suggest_command_1 = require("./abstract-suggest.command");
class SuggestCommand extends abstract_suggest_command_1.AbstractSuggestCommand {
    static queryClass() {
        return model_1.SuggestQuery;
    }
}
exports.SuggestCommand = SuggestCommand;
//# sourceMappingURL=suggest.command.js.map