import type { QueryInterface } from '../interface';
import { AccuracyEnum } from './accuracy.enum';
export declare class Query implements QueryInterface {
    static readonly DEFAULT_RESULT_LIMIT: number;
    static readonly DEFAULT_RESULT_LANGUAGE: string;
    accuracy?: AccuracyEnum;
    countryCode?: string;
    limit: number;
    language: string;
    fillMissingQueryProperties: boolean;
    withRaw: boolean;
}
