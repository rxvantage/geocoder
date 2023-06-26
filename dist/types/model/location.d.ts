import type { ClassTransformOptions } from 'class-transformer';
import type { LocationInterface } from '../interface';
export declare class Location<ProviderRawEntryType = any> implements LocationInterface<ProviderRawEntryType> {
    provider: string;
    /**
     * @example 1200 E 89th St, Chicago, IL 60619, USA
     * @example 1158 E 89th St, Chicago, Illinois 60619, US
     */
    formattedAddress?: string;
    latitude: number;
    longitude: number;
    country?: string;
    countryCode?: string;
    state?: string;
    /**
     * can be as ISO 3166-1 alpha-2 or an arbitrary string for countries that have no states
     */
    stateCode?: string;
    city?: string;
    postalCode?: string;
    streetName?: string;
    houseNumber?: string;
    placeId?: string;
    raw?: ProviderRawEntryType;
    get street(): string;
    generateFormattedAddress(): string;
    toObject(options?: ClassTransformOptions): LocationInterface<ProviderRawEntryType>;
}
