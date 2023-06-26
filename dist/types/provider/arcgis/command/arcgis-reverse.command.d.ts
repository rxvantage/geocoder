import type { AxiosInstance, AxiosResponse } from 'axios';
import { ReverseCommand } from '../../../command';
import { ArcgisReverseTransformer } from '../transformer';
import type { ArcgisReverseQueryInterface } from '../interface';
import type { ReverseQuery } from '../../../model';
declare const ArcgisReverseCommand_base: typeof ReverseCommand;
/**
 * @link {https://developers.arcgis.com/rest/geocode/api-reference/geocoding-reverse-geocode.htm}
 */
export declare class ArcgisReverseCommand extends ArcgisReverseCommand_base<ArcgisReverseQueryInterface> {
    private readonly token?;
    constructor(httpClient: AxiosInstance, token?: string | undefined);
    static getUrl(): string;
    protected buildQuery(query: ReverseQuery): Promise<ArcgisReverseQueryInterface>;
    protected parseResponse(response: AxiosResponse): Promise<ArcgisReverseTransformer[]>;
}
export {};
