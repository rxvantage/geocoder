"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractLocationTransformer = void 0;
const class_transformer_1 = require("class-transformer");
const world_country_1 = require("../util/world-country");
const model_1 = require("../model");
const abstract_transformer_1 = require("./abstract-transformer");
class AbstractLocationTransformer extends abstract_transformer_1.AbstractTransformer {
    async transform(options) {
        const location = new model_1.Location();
        location.provider = this.provider;
        location.formattedAddress = await this.getFormattedAddress();
        location.longitude = await this.getLongitude();
        location.latitude = await this.getLatitude();
        location.country = await this.getCountry();
        location.countryCode = await this.getCountryCode();
        location.state = await this.getState();
        location.stateCode = await this.getStateCode();
        location.city = await this.getCity();
        location.streetName = await this.getStreetName();
        location.houseNumber = await this.getHouseNumber();
        location.postalCode = await this.getPostalCode();
        location.placeId = await this.getPlaceId();
        location.raw = this.raw;
        if (!location.formattedAddress) {
            location.formattedAddress = location.generateFormattedAddress();
        }
        return (0, class_transformer_1.plainToInstance)(model_1.Location, location, options);
    }
    async getWorldCountry(query) {
        return world_country_1.WorldCountryUtil.find(query);
    }
}
exports.AbstractLocationTransformer = AbstractLocationTransformer;
//# sourceMappingURL=abstract-location-transformer.js.map