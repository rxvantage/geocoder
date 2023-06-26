import type { AxiosInstance } from 'axios';
import { GeocodeCommand } from '../../../command';
import type { HereGeocodeQueryInterface, HereResponseType } from '../interface';
declare const HereGeocodeCommand_base: typeof GeocodeCommand;
/**
 * @link {https://developer.here.com/documentation/geocoder/topics/resource-geocode.html}
 */
export declare class HereGeocodeCommand extends HereGeocodeCommand_base<HereGeocodeQueryInterface, HereResponseType> {
    constructor(httpClient: AxiosInstance, appId: string, appCode: string);
    static getUrl(): string;
}
export {};
