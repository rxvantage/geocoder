import { DistanceQuery } from '../model/distance-query';
import { AbstractCommand } from './abstract.command';
export class DistanceCommand extends AbstractCommand {
    static queryClass() {
        return DistanceQuery;
    }
    async execute(query) {
        return super.execute(query);
    }
    async parseResponse(_response, _query) {
        throw new Error('DistanceCommand.parseResponse: not implemented');
    }
}
//# sourceMappingURL=distance.command.js.map