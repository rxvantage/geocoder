import type { ReverseQueryInterface } from '../interface';
import { Query } from './query';
export declare class ReverseQuery extends Query implements ReverseQueryInterface {
    lat: number;
    lon: number;
}
