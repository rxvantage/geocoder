import type { AxiosInstance } from 'axios';
import { GeocodeCommand } from '../../../command';
import type { GeocodeQuery } from '../../../model';
import type { GoogleMapsGeocodeQueryInterface } from '../interface';
declare const GoogleMapsGeocodeCommand_base: typeof GeocodeCommand;
/**
 * @link {https://developers.google.com/maps/documentation/geocoding/intro#GeocodingRequests}
 */
export declare class GoogleMapsGeocodeCommand extends GoogleMapsGeocodeCommand_base<GoogleMapsGeocodeQueryInterface> {
    private readonly apiKey;
    constructor(httpClient: AxiosInstance, apiKey: string);
    static getUrl(): string;
    protected buildQuery(query: GeocodeQuery): Promise<GoogleMapsGeocodeQueryInterface>;
}
export {};
