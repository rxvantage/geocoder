import { plainToInstance } from 'class-transformer';
import { WorldCountryUtil } from '../util/world-country';
import { Location } from '../model';
import { AbstractTransformer } from './abstract-transformer';
export class AbstractLocationTransformer extends AbstractTransformer {
    async transform(options) {
        const location = new Location();
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
        return plainToInstance(Location, location, options);
    }
    async getWorldCountry(query) {
        return WorldCountryUtil.find(query);
    }
}
//# sourceMappingURL=abstract-location-transformer.js.map