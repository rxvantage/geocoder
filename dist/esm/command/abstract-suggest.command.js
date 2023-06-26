import { AbstractCommand } from './abstract.command';
export class AbstractSuggestCommand extends AbstractCommand {
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
//# sourceMappingURL=abstract-suggest.command.js.map