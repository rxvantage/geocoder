import type { AxiosInstance } from 'axios';
import { ReverseCommand } from '../../../command';
import type { ReverseQuery } from '../../../model';
import type { GoogleMapsReverseQueryInterface } from '../interface';
declare const GoogleMapsReverseCommand_base: typeof ReverseCommand;
/**
 * TODO implement result_type and location_type
 * @link {https://developers.google.com/maps/documentation/geocoding/intro#ReverseGeocoding}
 */
export declare class GoogleMapsReverseCommand extends GoogleMapsReverseCommand_base<GoogleMapsReverseQueryInterface> {
    private readonly apiKey;
    constructor(httpClient: AxiosInstance, apiKey: string);
    static getUrl(): string;
    protected buildQuery(query: ReverseQuery): Promise<GoogleMapsReverseQueryInterface>;
}
export {};
