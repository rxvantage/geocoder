import type { AxiosInstance, AxiosResponse } from 'axios';
import { DistanceCommand } from '../../../command';
import type { DistanceQueryInterface } from '../../../interface';
import type { DistanceQuery } from '../../../model/distance-query';
import type { AbstractDistanceTransformer } from '../../../transformer';
import type { GoogleMapsProvider } from '../google-maps.provider';
import type { GoogleMapsDistanceQueryInterface } from '../interface';
declare const GoogleMapsDistanceCommand_base: typeof DistanceCommand;
/**
 * @link {https://developers.google.com/places/web-service/autocomplete#place_autocomplete_requests}
 */
export declare class GoogleMapsDistanceCommand extends GoogleMapsDistanceCommand_base<GoogleMapsDistanceQueryInterface> {
    private readonly apiKey;
    constructor(httpClient: AxiosInstance, apiKey: string);
    static getUrl(): string;
    protected buildQuery(query: DistanceQuery): Promise<GoogleMapsDistanceQueryInterface>;
    protected parseResponse(response: AxiosResponse, _query: DistanceQueryInterface): Promise<AbstractDistanceTransformer<GoogleMapsProvider>[]>;
    private getRequestMode;
    /**
     * @link {https://developers.google.com/maps/documentation/distance-matrix/overview#element-level-status-codes}
     */
    protected validateResponse(response: AxiosResponse): Promise<void>;
}
export {};
