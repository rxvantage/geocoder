import type { AxiosInstance } from 'axios';
import { AbstractHttpProvider } from '../../model';
export declare class GoogleMapsProvider extends AbstractHttpProvider {
    constructor(httpClient: AxiosInstance, apiKey: string);
}
