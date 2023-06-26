import { AbstractGeocoder } from './abstract-geocoder';
export class Geocoder extends AbstractGeocoder {
    constructor(provider) {
        super([provider]);
    }
    async geocode(query) {
        return this.geocodeByProvider(this.getFirstProvider(), query);
    }
    async reverse(query) {
        return this.reverseByProvider(this.getFirstProvider(), query);
    }
    async suggest(query) {
        return this.suggestByProvider(this.getFirstProvider(), query);
    }
    async distance(query) {
        return this.distanceByProvider(this.getFirstProvider(), query);
    }
}
//# sourceMappingURL=geocoder.js.map