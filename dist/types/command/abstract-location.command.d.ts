import type { AxiosResponse } from 'axios';
import { AccuracyEnum } from '../model';
import type { QueryInterface } from '../interface';
import type { Location } from '../model';
import type { AbstractLocationTransformer } from '../transformer';
import { AbstractCommand } from './abstract.command';
export declare abstract class AbstractLocationCommand<GeocoderQueryType extends QueryInterface = any, ProviderRequestType = any, ProviderResponseType = any> extends AbstractCommand<GeocoderQueryType, Location, AbstractLocationTransformer, ProviderRequestType, ProviderResponseType> {
    protected parseResponse(_response: AxiosResponse<ProviderResponseType>, _query: GeocoderQueryType): Promise<AbstractLocationTransformer[]>;
    execute(query: GeocoderQueryType): Promise<Location[]>;
    protected addMissingLocationProperties(locations: Location[]): Promise<Location[]>;
    protected filterByAccuracy(locations: Location[], accuracy?: AccuracyEnum): Location[];
}
