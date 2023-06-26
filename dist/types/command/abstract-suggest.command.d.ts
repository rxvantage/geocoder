import type { AxiosResponse } from 'axios';
import type { QueryInterface } from '../interface';
import type { Suggestion } from '../model';
import type { AbstractSuggestionTransformer } from '../transformer';
import { AbstractCommand } from './abstract.command';
export declare abstract class AbstractSuggestCommand<GeocoderQueryType extends QueryInterface = any, ProviderRequestType = any, ProviderResponseType = any> extends AbstractCommand<GeocoderQueryType, Suggestion, AbstractSuggestionTransformer, ProviderRequestType, ProviderResponseType> {
    protected parseResponse(_response: AxiosResponse<ProviderResponseType>, _query: GeocoderQueryType): Promise<AbstractSuggestionTransformer[]>;
    execute(query: GeocoderQueryType): Promise<Suggestion[]>;
}
