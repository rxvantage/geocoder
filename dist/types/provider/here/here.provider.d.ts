import type { AxiosInstance } from 'axios';
import { AbstractHttpProvider } from '../../model';
export declare class HereProvider extends AbstractHttpProvider {
    constructor(httpClient: AxiosInstance, appId: string, appCode: string);
}
