import { GeocodeQuery } from '../model';
import type { GeocodeQueryInterface } from '../interface';
import type { Location } from '../model';
import { AbstractLocationCommand } from './abstract-location.command';
export declare class GeocodeCommand<ProviderRequestType = any, ProviderResponseType = any> extends AbstractLocationCommand<GeocodeQueryInterface, ProviderRequestType, ProviderResponseType> {
    static queryClass(): typeof GeocodeQuery;
    execute(query: GeocodeQueryInterface): Promise<Location[]>;
    /**
     * @throws {ExactMatchNotFoundException}
     */
    private validateExactMatchOption;
}
