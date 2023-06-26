"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArcgisReverseTransformer = void 0;
const transformer_1 = require("../../../transformer");
const location_1 = require("../../../util/location");
const arcgis_provider_1 = require("../arcgis.provider");
class ArcgisReverseTransformer extends transformer_1.AbstractLocationTransformer {
    constructor(raw) {
        super(arcgis_provider_1.ArcgisProvider, raw);
    }
    async getFormattedAddress() {
        return this.raw.address.LongLabel;
    }
    async getLatitude() {
        return this.raw.location.y;
    }
    async getLongitude() {
        return this.raw.location.x;
    }
    async getCountry() {
        const cca3 = this.raw.address.CountryCode;
        const worldCountry = await this.getWorldCountry({ cca3 });
        return worldCountry && worldCountry.name.common;
    }
    async getCountryCode() {
        const cca3 = this.raw.address.CountryCode;
        const worldCountry = await this.getWorldCountry({ cca3 });
        return worldCountry && worldCountry.cca2;
    }
    async getState() {
        return this.raw.address.Region;
    }
    async getStateCode() {
        return;
    }
    async getCity() {
        return this.raw.address.City;
    }
    async getPostalCode() {
        return this.raw.address.Postal;
    }
    async getStreetName() {
        return this.raw.address.AddNum
            ? location_1.LocationUtil.removeHouseNumberFromStreetName(this.raw.address.Address, this.raw.address.AddNum)
            : this.raw.address.Address;
    }
    async getHouseNumber() {
        return this.raw.address.AddNum;
    }
    async getPlaceId() {
        return;
    }
}
exports.ArcgisReverseTransformer = ArcgisReverseTransformer;
//# sourceMappingURL=arcgis-reverse.transformer.js.map