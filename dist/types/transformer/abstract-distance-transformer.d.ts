import type { ClassTransformOptions } from 'class-transformer';
import { Distance } from '../model/distance';
import type { DistanceDetailsInterface } from '../interface';
import type { AbstractHttpProvider } from '../model';
import { AbstractTransformer } from './abstract-transformer';
export declare abstract class AbstractDistanceTransformer<HttpProviderClass extends AbstractHttpProvider = any, ProviderRawEntryType = any> extends AbstractTransformer<HttpProviderClass, ProviderRawEntryType> {
    abstract getDistance(): Promise<DistanceDetailsInterface['distance']>;
    abstract getDuration(): Promise<DistanceDetailsInterface['duration']>;
    transform(options?: ClassTransformOptions): Promise<Distance<ProviderRawEntryType>>;
}
