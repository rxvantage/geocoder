"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapQuestLocationTransformer = void 0;
const transformer_1 = require("../../../transformer");
const map_quest_provider_1 = require("../map-quest.provider");
class MapQuestLocationTransformer extends transformer_1.AbstractLocationTransformer {
    constructor(raw) {
        super(map_quest_provider_1.MapQuestProvider, raw);
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
exports.MapQuestLocationTransformer = MapQuestLocationTransformer;
//# sourceMappingURL=map-quest-location.transformer.js.map