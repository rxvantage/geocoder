import type { AxiosInstance } from 'axios';
import { PlaceDetailsCommand } from '../../../command';
import type { PlaceDetailsQuery } from '../../../model';
import type { HerePlaceDetailsQueryInterface, HereResponseType } from '../interface';
declare const HerePlaceDetailsCommand_base: typeof PlaceDetailsCommand;
/**
 * @link {https://developer.here.com/documentation/geocoder/topics/resource-search.html}
 */
export declare class HerePlaceDetailsCommand extends HerePlaceDetailsCommand_base<HerePlaceDetailsQueryInterface, HereResponseType> {
    constructor(httpClient: AxiosInstance, appId: string, appCode: string);
    static getUrl(): string;
    protected buildQuery(query: PlaceDetailsQuery): Promise<HerePlaceDetailsQueryInterface>;
}
export {};
