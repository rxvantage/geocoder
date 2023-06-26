"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HereLocationTransformer = void 0;
const transformer_1 = require("../../../transformer");
const here_provider_1 = require("../here.provider");
class HereLocationTransformer extends transformer_1.AbstractLocationTransformer {
    constructor(raw) {
        super(here_provider_1.HereProvider, raw);
    }
    async getFormattedAddress() {
        return this.getLocationAddress().Label;
    }
    async getLatitude() {
        return this.raw.Location.DisplayPosition.Latitude;
    }
    async getLongitude() {
        return this.raw.Location.DisplayPosition.Longitude;
    }
    async getCountry() {
        const country = this.getAdditionalDataByKey('CountryName');
        if (country) {
            return country;
        }
        const cca3 = this.getLocationAddress().Country;
        const worldCountry = await this.getWorldCountry({ cca3 });
        return worldCountry && worldCountry.name.common;
    }
    async getCountryCode() {
        const countryCode = this.getAdditionalDataByKey('Country2');
        if (countryCode) {
            return countryCode;
        }
        const cca3 = this.getLocationAddress().Country;
        const worldCountry = await this.getWorldCountry({ cca3 });
        return worldCountry && worldCountry.cca2;
    }
    async getState() {
        return this.getAdditionalDataByKey('StateName') || this.getLocationAddress().State;
    }
    async getStateCode() {
        return this.getLocationAddress().State;
    }
    async getCity() {
        return this.getLocationAddress().City;
    }
    async getPostalCode() {
        return this.getLocationAddress().PostalCode;
    }
    async getStreetName() {
        return this.getLocationAddress().Street;
    }
    async getHouseNumber() {
        return this.getLocationAddress().HouseNumber;
    }
    async getPlaceId() {
        return this.raw.Location.LocationId;
    }
    getLocationAddress() {
        return this.raw.Location.Address || { AdditionalData: [] };
    }
    getAdditionalDataByKey(key) {
        var _a;
        const data = (_a = this.getLocationAddress().AdditionalData) === null || _a === void 0 ? void 0 : _a.find((element) => key === element.key);
        if (data) {
            return data.value;
        }
    }
}
exports.HereLocationTransformer = HereLocationTransformer;
//# sourceMappingURL=here-location.transformer.js.map