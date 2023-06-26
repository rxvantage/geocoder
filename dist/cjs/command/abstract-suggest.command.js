"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractSuggestCommand = void 0;
const abstract_command_1 = require("./abstract.command");
class AbstractSuggestCommand extends abstract_command_1.AbstractCommand {
    async parseResponse(_response, _query) {
        throw new Error('AbstractSuggestCommand.parseResponse: not implemented');
    }
    async execute(query) {
        const suggestions = await super.execute(query);
        if (query.limit && suggestions.length > query.limit) {
            return suggestions.slice(0, query.limit);
        }
        return suggestions;
    }
}
exports.AbstractSuggestCommand = AbstractSuggestCommand;
//# sourceMappingURL=abstract-suggest.command.js.map