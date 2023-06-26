import type { AxiosInstance, AxiosResponse } from 'axios';
import { PlaceDetailsCommand } from '../../../command';
import type { PlaceDetailsQuery } from '../../../model';
import type { GoogleMapsPlaceDetailsQueryInterface } from '../interface';
import type { GoogleMapsLocationTransformer } from '../transformer';
declare const GoogleMapsPlaceDetailsCommand_base: typeof PlaceDetailsCommand;
/**
 * @link {https://developers.google.com/places/web-service/details}
 */
export declare class GoogleMapsPlaceDetailsCommand extends GoogleMapsPlaceDetailsCommand_base<GoogleMapsPlaceDetailsQueryInterface> {
    private readonly apiKey;
    constructor(httpClient: AxiosInstance, apiKey: string);
    static getUrl(): string;
    protected buildQuery(query: PlaceDetailsQuery): Promise<GoogleMapsPlaceDetailsQueryInterface>;
    protected parseResponse(response: AxiosResponse): Promise<GoogleMapsLocationTransformer[]>;
}
export {};
