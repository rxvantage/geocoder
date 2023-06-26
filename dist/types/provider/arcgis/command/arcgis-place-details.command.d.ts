import type { AxiosInstance } from 'axios';
import { PlaceDetailsCommand } from '../../../command';
import type { PlaceDetailsQuery } from '../../../model';
import type { ArcgisPlaceDetailsQueryInterface } from '../interface';
declare const ArcgisPlaceDetailsCommand_base: typeof PlaceDetailsCommand;
/**
 * @link {https://developers.arcgis.com/rest/geocode/api-reference/geocoding-find-address-candidates.htm}
 */
export declare class ArcgisPlaceDetailsCommand extends ArcgisPlaceDetailsCommand_base<ArcgisPlaceDetailsQueryInterface> {
    private readonly token?;
    constructor(httpClient: AxiosInstance, token?: string | undefined);
    static getUrl(): string;
    protected buildQuery(query: PlaceDetailsQuery): Promise<ArcgisPlaceDetailsQueryInterface>;
}
export {};
