import type { AxiosInstance } from 'axios';
import { GeocodeCommand } from '../../../command';
import type { GeocodeQuery } from '../../../model';
import type { MapQuestGeocodeQueryInterface } from '../interface';
declare const MapQuestGeocodeCommand_base: typeof GeocodeCommand;
/**
 * @link {https://developer.mapquest.com/documentation/geocoding-api/address/get/}
 */
export declare class MapQuestGeocodeCommand extends MapQuestGeocodeCommand_base<MapQuestGeocodeQueryInterface> {
    private readonly apiKey;
    constructor(httpClient: AxiosInstance, apiKey: string);
    static getUrl(): string;
    protected buildQuery(query: GeocodeQuery): Promise<MapQuestGeocodeQueryInterface>;
}
export {};
