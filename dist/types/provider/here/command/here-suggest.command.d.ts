import type { AxiosInstance, AxiosResponse } from 'axios';
import { SuggestCommand } from '../../../command';
import { HereSuggestionTransformer } from '../transformer';
import type { HereResponseType, HereSuggestQueryInterface } from '../interface';
import type { SuggestQueryInterface } from '../../../interface';
declare const HereSuggestCommand_base: typeof SuggestCommand;
/**
 * @link {https://developer.here.com/documentation/geocoder/topics/resource-search.html}
 */
export declare class HereSuggestCommand extends HereSuggestCommand_base<HereSuggestQueryInterface, HereResponseType> {
    constructor(httpClient: AxiosInstance, appId: string, appCode: string);
    static getUrl(): string;
    protected parseResponse(response: AxiosResponse<HereResponseType>, query: SuggestQueryInterface): Promise<HereSuggestionTransformer[]>;
}
export {};
