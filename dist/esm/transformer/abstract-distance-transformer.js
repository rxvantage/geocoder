import { plainToInstance } from 'class-transformer';
import { Distance } from '../model/distance';
import { AbstractTransformer } from './abstract-transformer';
export class AbstractDistanceTransformer extends AbstractTransformer {
    async transform(options) {
        const distance = new Distance();
        distance.provider = this.provider;
        distance.distance = await this.getDistance();
        distance.duration = await this.getDuration();
        distance.raw = this.raw;
        return plainToInstance(Distance, distance, options);
    }
}
//# sourceMappingURL=abstract-distance-transformer.js.map