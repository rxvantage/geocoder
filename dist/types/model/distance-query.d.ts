import type { DistanceQueryInterface } from '../interface';
import { TravelModeEnum } from './travel-mode.enum';
import { Point } from './point';
import { Query } from './query';
export declare class DistanceQuery extends Query implements DistanceQueryInterface {
    from: Point;
    to: Point;
    mode?: TravelModeEnum;
}
