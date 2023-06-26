import { AbstractLocationTransformer } from '../../../transformer';
import { HereProvider } from '../here.provider';
import type { HereOneResultType } from '../interface';
export declare class HereLocationTransformer extends AbstractLocationTransformer<HereProvider, HereOneResultType> {
    constructor(raw: HereOneResultType);
    getFormattedAddress(): Promise<string | undefined>;
    getLatitude(): Promise<number>;
    getLongitude(): Promise<number>;
    getCountry(): Promise<string | undefined>;
    getCountryCode(): Promise<string | undefined>;
    getState(): Promise<string | undefined>;
    getStateCode(): Promise<string | undefined>;
    getCity(): Promise<string | undefined>;
    getPostalCode(): Promise<string | undefined>;
    getStreetName(): Promise<string | undefined>;
    getHouseNumber(): Promise<string | undefined>;
    getPlaceId(): Promise<string>;
    private getLocationAddress;
    private getAdditionalDataByKey;
}
