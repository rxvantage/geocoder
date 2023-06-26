import type { AxiosInstance } from 'axios';
import { ReverseCommand } from '../../../command';
import type { ReverseQuery } from '../../../model';
import type { MapQuestReverseQueryInterface } from '../interface';
declare const MapQuestReverseCommand_base: typeof ReverseCommand;
/**
 * @link {https://developer.mapquest.com/documentation/geocoding-api/reverse/get/}
 */
export declare class MapQuestReverseCommand extends MapQuestReverseCommand_base<MapQuestReverseQueryInterface> {
    private readonly apiKey;
    constructor(httpClient: AxiosInstance, apiKey: string);
    static getUrl(): string;
    protected buildQuery(query: ReverseQuery): Promise<MapQuestReverseQueryInterface>;
}
export {};
