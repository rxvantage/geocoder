import type { AxiosInstance, AxiosResponse } from 'axios';
import { SuggestCommand } from '../../../command';
import type { SuggestQuery } from '../../../model';
import type { AbstractSuggestionTransformer } from '../../../transformer';
import type { MapQuestSuggestQueryInterface } from '../interface';
import type { MapQuestProvider } from '../map-quest.provider';
declare const MapQuestSuggestCommand_base: typeof SuggestCommand;
/**
 * @link {https://developer.mapquest.com/documentation/searchahead-api/}
 */
export declare class MapQuestSuggestCommand extends MapQuestSuggestCommand_base<MapQuestSuggestQueryInterface> {
    private readonly apiKey;
    constructor(httpClient: AxiosInstance, apiKey: string);
    static getUrl(): string;
    protected buildQuery(query: SuggestQuery): Promise<MapQuestSuggestQueryInterface>;
    protected parseResponse(response: AxiosResponse): Promise<AbstractSuggestionTransformer<MapQuestProvider>[]>;
}
export {};
