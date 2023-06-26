import { AbstractLocationTransformer } from '../../../transformer';
import { LocationUtil } from '../../../util/location';
import { ArcgisProvider } from '../arcgis.provider';
export class ArcgisReverseTransformer extends AbstractLocationTransformer {
    constructor(raw) {
        super(ArcgisProvider, raw);
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
            ? LocationUtil.removeHouseNumberFromStreetName(this.raw.address.Address, this.raw.address.AddNum)
            : this.raw.address.Address;
    }
    async getHouseNumber() {
        return this.raw.address.AddNum;
    }
    async getPlaceId() {
        return;
    }
}
//# sourceMappingURL=arcgis-reverse.transformer.js.map