import { AbstractLocationTransformer } from '../../../transformer';
import { MapQuestProvider } from '../map-quest.provider';
export class MapQuestLocationTransformer extends AbstractLocationTransformer {
    constructor(raw) {
        super(MapQuestProvider, raw);
    }
    async getFormattedAddress() {
        return;
    }
    async getLatitude() {
        return this.raw.latLng.lat;
    }
    async getLongitude() {
        return this.raw.latLng.lng;
    }
    async getCountry() {
        return;
    }
    async getCountryCode() {
        return this.raw.adminArea1;
    }
    async getState() {
        if (this.raw.adminArea3.length !== 2) {
            return this.raw.adminArea3;
        }
    }
    async getStateCode() {
        if (this.raw.adminArea3.length === 2) {
            return this.raw.adminArea3;
        }
    }
    async getCity() {
        return this.raw.adminArea5;
    }
    async getPostalCode() {
        return this.raw.postalCode;
    }
    async getStreetName() {
        return this.raw.street;
    }
    async getHouseNumber() {
        return;
    }
    async getPlaceId() {
        return;
    }
}
//# sourceMappingURL=map-quest-location.transformer.js.map