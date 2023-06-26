import { AbstractDistanceTransformer } from '../../../transformer';
import { GoogleMapsProvider } from '../google-maps.provider';
export class GoogleMapsDistanceTransformer extends AbstractDistanceTransformer {
    constructor(raw) {
        super(GoogleMapsProvider, raw);
    }
    async getDistance() {
        return this.raw.distance.value;
    }
    async getDuration() {
        return this.raw.duration.value;
    }
}
//# sourceMappingURL=google-maps-distance.transformer.js.map