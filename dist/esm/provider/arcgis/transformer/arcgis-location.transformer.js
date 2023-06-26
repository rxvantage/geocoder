import { AbstractLocationTransformer } from '../../../transformer';
import { LocationUtil } from '../../../util/location';
import { ArcgisProvider } from '../arcgis.provider';
export class ArcgisLocationTransformer extends AbstractLocationTransformer {
    constructor(raw) {
        super(ArcgisProvider, raw);
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
            ? LocationUtil.removeHouseNumberFromStreetName(this.raw.attributes.StAddr, this.raw.attributes.AddNum)
            : this.raw.attributes.StAddr;
    }
    async getHouseNumber() {
        return this.raw.attributes.AddNum;
    }
    async getPlaceId() {
        return this.raw.place_id;
    }
}
//# sourceMappingURL=arcgis-location.transformer.js.map