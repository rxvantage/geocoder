import { ReverseQuery } from '../model';
import { AbstractLocationCommand } from './abstract-location.command';
export class ReverseCommand extends AbstractLocationCommand {
    static queryClass() {
        return ReverseQuery;
    }
}
//# sourceMappingURL=reverse.command.js.map