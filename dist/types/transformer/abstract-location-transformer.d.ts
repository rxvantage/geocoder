import type { ClassTransformOptions } from 'class-transformer';
import { Location } from '../model';
import type { LocationInterface } from '../interface';
import type { AbstractHttpProvider } from '../model';
import type { WorldCountry, WorldCountryQueryInterface } from '../util/world-country';
import { AbstractTransformer } from './abstract-transformer';
export declare abstract class AbstractLocationTransformer<HttpProviderClass extends AbstractHttpProvider = any, ProviderRawEntryType = any> extends AbstractTransformer<HttpProviderClass, ProviderRawEntryType> {
    abstract getFormattedAddress(): Promise<LocationInterface['formattedAddress']>;
    abstract getLongitude(): Promise<LocationInterface['longitude']>;
    abstract getLatitude(): Promise<LocationInterface['latitude']>;
    abstract getCountry(): Promise<LocationInterface['country']>;
    abstract getCountryCode(): Promise<LocationInterface['countryCode']>;
    abstract getState(): Promise<LocationInterface['state']>;
    abstract getStateCode(): Promise<LocationInterface['stateCode']>;
    abstract getCity(): Promise<LocationInterface['city']>;
    abstract getStreetName(): Promise<LocationInterface['streetName']>;
    abstract getHouseNumber(): Promise<LocationInterface['houseNumber']>;
    abstract getPostalCode(): Promise<LocationInterface['postalCode']>;
    abstract getPlaceId(): Promise<LocationInterface['placeId']>;
    transform(options?: ClassTransformOptions): Promise<Location<ProviderRawEntryType>>;
    protected getWorldCountry(query: WorldCountryQueryInterface): Promise<WorldCountry | undefined>;
}
