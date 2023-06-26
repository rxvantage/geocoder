import { AbstractDistanceTransformer } from '../../../transformer';
import { GoogleMapsProvider } from '../google-maps.provider';
import type { DistanceDetailsInterface } from '../../../interface';
export declare class GoogleMapsDistanceTransformer extends AbstractDistanceTransformer<GoogleMapsProvider> {
    constructor(raw: Record<string, any>);
    getDistance(): Promise<DistanceDetailsInterface['distance']>;
    getDuration(): Promise<DistanceDetailsInterface['duration']>;
}
