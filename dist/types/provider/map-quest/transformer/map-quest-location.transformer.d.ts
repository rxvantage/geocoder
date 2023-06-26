import { AbstractLocationTransformer } from '../../../transformer';
import { MapQuestProvider } from '../map-quest.provider';
export declare class MapQuestLocationTransformer extends AbstractLocationTransformer<MapQuestProvider> {
    constructor(raw: any);
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
    getPlaceId(): Promise<string | undefined>;
}
