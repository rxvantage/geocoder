import { NotFoundException } from '../exception';
import { PlaceDetailsQuery } from '../model';
import { AbstractLocationCommand } from './abstract-location.command';
export class PlaceDetailsCommand extends AbstractLocationCommand {
    static queryClass() {
        return PlaceDetailsQuery;
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
            throw new NotFoundException(`Place by id "${query.placeId}" not found`);
        }
        return locations;
    }
    async parseOneResult(_raw) {
        throw new Error('PlaceDetailsCommand.parseOneResult: not implemented');
    }
}
//# sourceMappingURL=place-details.command.js.map