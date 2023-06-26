import { PlaceDetailsQuery } from '../model';
import type { PlaceDetailsQueryInterface } from '../interface';
import type { Location } from '../model';
import type { AbstractLocationTransformer } from '../transformer';
import { AbstractLocationCommand } from './abstract-location.command';
export declare class PlaceDetailsCommand<ProviderRequestType = any, ProviderResponseType = any> extends AbstractLocationCommand<PlaceDetailsQueryInterface, ProviderRequestType, ProviderResponseType> {
    static queryClass(): typeof PlaceDetailsQuery;
    execute(query: PlaceDetailsQueryInterface): Promise<Location[]>;
    protected parseOneResult<ProviderRawEntryType = any, ProviderLocationTransformer extends AbstractLocationTransformer = any>(_raw: ProviderRawEntryType): Promise<ProviderLocationTransformer>;
}
