import type { AxiosInstance, AxiosResponse } from 'axios';
import { SuggestCommand } from '../../../command';
import type { SuggestQuery } from '../../../model';
import type { AbstractSuggestionTransformer } from '../../../transformer';
import type { ArcgisProvider } from '../arcgis.provider';
import type { ArcgisSuggestionInterface, ArcgisSuggestQueryInterface, ArcgisSuggestResponseInterface } from '../interface';
declare const ArcgisSuggestCommand_base: typeof SuggestCommand;
/**
 * @link {https://developers.arcgis.com/rest/geocode/api-reference/geocoding-suggest.htm}
 */
export declare class ArcgisSuggestCommand extends ArcgisSuggestCommand_base<ArcgisSuggestQueryInterface, ArcgisSuggestResponseInterface> {
    private readonly token?;
    constructor(httpClient: AxiosInstance, token?: string | undefined);
    static getUrl(): string;
    protected buildQuery(query: SuggestQuery): Promise<ArcgisSuggestQueryInterface>;
    protected parseResponse(response: AxiosResponse<ArcgisSuggestResponseInterface>): Promise<AbstractSuggestionTransformer<ArcgisProvider, ArcgisSuggestionInterface>[]>;
    private getCategoriesByAccuracy;
}
export {};
