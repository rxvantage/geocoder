import type { GeocodeQueryInterface } from '../interface';
import { Query } from './query';
export declare class GeocodeQuery extends Query implements GeocodeQueryInterface {
    address: string;
    exactMatch: boolean;
    country?: string;
    state?: string;
    stateCode?: string;
    city?: string;
    postalCode?: string;
    lat?: number;
    lon?: number;
    radius?: number;
}
