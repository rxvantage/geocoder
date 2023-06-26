import type { AxiosInstance } from 'axios';
import { AbstractHttpProvider } from '../../model';
export declare class ArcgisProvider extends AbstractHttpProvider {
    constructor(httpClient: AxiosInstance, token?: string);
}
