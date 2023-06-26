"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArcgisLocationTransformer = void 0;
const transformer_1 = require("../../../transformer");
const location_1 = require("../../../util/location");
const arcgis_provider_1 = require("../arcgis.provider");
class ArcgisLocationTransformer extends transformer_1.AbstractLocationTransformer {
    constructor(raw) {
        super(arcgis_provider_1.ArcgisProvider, raw);
    }
    async getFormattedAddress() {
        return this.raw.attributes.LongLabel;
    }
    async getLatitude() {
        return this.raw.attributes.DisplayY;
    }
    async getLongitude() {
        return this.raw.attributes.DisplayX;
    }
    async getCountry() {
        const cca3 = this.raw.attributes.Country;
        const worldCountry = await this.getWorldCountry({ cca3 });
        return worldCountry && worldCountry.name.common;
    }
    async getCountryCode() {
        const cca3 = this.raw.attributes.Country;
        const worldCountry = await this.getWorldCountry({ cca3 });
        return worldCountry && worldCountry.cca2;
    }
    async getState() {
        return this.raw.attributes.Region;
    }
    async getStateCode() {
        return this.raw.attributes.RegionAbbr;
    }
    async getCity() {
        return this.raw.attributes.City;
    }
    async getPostalCode() {
        return this.raw.attributes.Postal;
    }
    async getStreetName() {
        return this.raw.attributes.AddNum
            ? location_1.LocationUtil.removeHouseNumberFromStreetName(this.raw.attributes.StAddr, this.raw.attributes.AddNum)
            : this.raw.attributes.StAddr;
    }
    async getHouseNumber() {
        return this.raw.attributes.AddNum;
    }
    async getPlaceId() {
        return this.raw.place_id;
    }
}
exports.ArcgisLocationTransformer = ArcgisLocationTransformer;
//# sourceMappingURL=arcgis-location.transformer.js.map