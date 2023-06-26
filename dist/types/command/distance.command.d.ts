import type { AxiosResponse } from 'axios';
import { DistanceQuery } from '../model/distance-query';
import type { DistanceQueryInterface } from '../interface';
import type { Distance } from '../model';
import type { AbstractDistanceTransformer } from '../transformer';
import { AbstractCommand } from './abstract.command';
export declare class DistanceCommand<ProviderRequestType = any, ProviderResponseType = any> extends AbstractCommand<DistanceQueryInterface, Distance, AbstractDistanceTransformer, ProviderRequestType, ProviderResponseType> {
    static queryClass(): typeof DistanceQuery;
    execute(query: DistanceQueryInterface): Promise<Distance[]>;
    protected parseResponse(_response: AxiosResponse<ProviderResponseType>, _query: DistanceQueryInterface): Promise<AbstractDistanceTransformer[]>;
}
