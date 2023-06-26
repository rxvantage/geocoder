import { AbstractLocationTransformer } from '../../../transformer';
import { GoogleMapsProvider } from '../google-maps.provider';
export class GoogleMapsLocationTransformer extends AbstractLocationTransformer {
    constructor(raw) {
        super(GoogleMapsProvider, raw);
    }
    async getFormattedAddress() {
        return this.raw.formatted_address;
    }
    async getLatitude() {
        return this.raw.geometry.location.lat;
    }
    async getLongitude() {
        return this.raw.geometry.location.lng;
    }
    async getCountry() {
        const component = this.getAddressComponentsOfType('country').pop();
        if (component) {
            return component.long_name;
        }
    }
    async getCountryCode() {
        const component = this.getAddressComponentsOfType('country').pop();
        if (component) {
            return component.short_name;
        }
    }
    async getState() {
        const component = this.getAddressComponentsOfType('administrative_area_level_1').pop();
        if (component) {
            return component.long_name;
        }
    }
    async getStateCode() {
        const component = this.getAddressComponentsOfType('administrative_area_level_1').pop();
        if (component) {
            return component.short_name;
        }
    }
    async getCity() {
        for (const type of ['locality', 'sublocality', 'administrative_area_level_3', 'administrative_area_level_2']) {
            const component = this.getAddressComponentsOfType(type).pop();
            if (component) {
                return component.long_name;
            }
        }
    }
    async getPostalCode() {
        const component = this.getAddressComponentsOfType('postal_code').pop();
        if (component) {
            return component.long_name;
        }
    }
    async getStreetName() {
        const component = this.getAddressComponentsOfType('route').pop();
        if (component) {
            return component.long_name;
        }
    }
    async getHouseNumber() {
        const component = this.getAddressComponentsOfType('street_number').pop();
        if (component) {
            return component.long_name;
        }
    }
    async getPlaceId() {
        return this.raw.place_id;
    }
    getAddressComponentsOfType(type) {
        if (!Array.isArray(this.raw.address_components)) {
            return [];
        }
        return this.raw.address_components.filter((addressComponent) => addressComponent.types.includes(type));
    }
}
//# sourceMappingURL=google-maps-location.transformer.js.map