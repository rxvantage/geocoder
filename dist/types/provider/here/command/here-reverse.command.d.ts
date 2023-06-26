import type { AxiosInstance } from 'axios';
import { ReverseCommand } from '../../../command';
import type { ReverseQuery } from '../../../model';
import type { HereResponseType, HereReverseQueryInterface } from '../interface';
declare const HereReverseCommand_base: typeof ReverseCommand;
/**
 * @link {https://developer.here.com/documentation/geocoder/topics/resource-reverse-geocode.html}
 */
export declare class HereReverseCommand extends HereReverseCommand_base<HereReverseQueryInterface, HereResponseType> {
    private readonly appId;
    private readonly appCode;
    constructor(httpClient: AxiosInstance, appId: string, appCode: string);
    static getUrl(): string;
    protected buildQuery(query: ReverseQuery): Promise<HereReverseQueryInterface>;
}
export {};
