import { AccuracyEnum } from '../model';
export declare function sliceFrom(elements: Array<number | string>, searchElement: number | string): Array<number | string>;
export declare function getAvailableAccuracies(maxAccuracy: AccuracyEnum): string[];
export declare function delay(time: number): Promise<void>;
