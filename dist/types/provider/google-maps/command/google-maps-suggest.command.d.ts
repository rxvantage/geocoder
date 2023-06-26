import type { AxiosInstance, AxiosResponse } from 'axios';
import { SuggestCommand } from '../../../command';
import type { SuggestQueryInterface } from '../../../interface';
import type { SuggestQuery } from '../../../model';
import type { AbstractSuggestionTransformer } from '../../../transformer';
import type { GoogleMapsProvider } from '../google-maps.provider';
import type { GoogleMapsSuggestQueryInterface } from '../interface';
declare const GoogleMapsSuggestCommand_base: typeof SuggestCommand;
/**
 * @link {https://developers.google.com/places/web-service/autocomplete#place_autocomplete_requests}
 */
export declare class GoogleMapsSuggestCommand extends GoogleMapsSuggestCommand_base<GoogleMapsSuggestQueryInterface> {
    private readonly apiKey;
    constructor(httpClient: AxiosInstance, apiKey: string);
    static getUrl(): string;
    protected buildQuery(query: SuggestQuery): Promise<GoogleMapsSuggestQueryInterface>;
    protected parseResponse(response: AxiosResponse, query: SuggestQueryInterface): Promise<AbstractSuggestionTransformer<GoogleMapsProvider>[]>;
    private getRequestTypeByAccuracy;
    /**
     * Mapping between google location types and our
     */
    private filterByAccuracy;
}
export {};
