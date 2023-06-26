import type { ClassTransformOptions } from 'class-transformer';
import type { DistanceDetailsInterface } from '../interface';
export declare class Distance<ProviderRawEntryType = any> implements DistanceDetailsInterface<ProviderRawEntryType> {
    distance: number;
    duration: number;
    provider: string;
    raw?: ProviderRawEntryType;
    toObject(options?: ClassTransformOptions): DistanceDetailsInterface<ProviderRawEntryType>;
}
