import type { AxiosInstance } from 'axios';
import { GeocodeCommand } from '../../../command';
import type { GeocodeQuery } from '../../../model';
import type { ArcgisGeocodeQueryInterface } from '../interface';
declare const ArcgisGeocodeCommand_base: typeof GeocodeCommand;
/**
 * @link {https://developers.arcgis.com/rest/geocode/api-reference/geocoding-find-address-candidates.htm}
 */
export declare class ArcgisGeocodeCommand extends ArcgisGeocodeCommand_base<ArcgisGeocodeQueryInterface> {
    private readonly token?;
    constructor(httpClient: AxiosInstance, token?: string | undefined);
    static getUrl(): string;
    protected buildQuery(query: GeocodeQuery): Promise<ArcgisGeocodeQueryInterface>;
}
export {};
