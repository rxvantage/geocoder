import { SuggestQuery } from '../model';
import { AbstractSuggestCommand } from './abstract-suggest.command';
export class SuggestCommand extends AbstractSuggestCommand {
    static queryClass() {
        return SuggestQuery;
    }
}
//# sourceMappingURL=suggest.command.js.map