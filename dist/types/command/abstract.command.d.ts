import type { AxiosInstance, AxiosResponse } from 'axios';
import type { QueryInterface } from '../interface';
import type { LoggableInterface } from '../logger';
import type { AccuracyEnum } from '../model';
import type { AbstractTransformer } from '../transformer';
import type { Type } from '../types';
declare const AbstractCommand_base: FunctionConstructor & import("../types").Constructor<LoggableInterface>;
export declare abstract class AbstractCommand<GeocoderQueryType extends QueryInterface = any, GeocoderResponseType = any, GeocoderTransformerType extends AbstractTransformer = any, ProviderRequestType = any, ProviderResponseType = any> extends AbstractCommand_base {
    protected readonly httpClient: AxiosInstance;
    ['constructor']: Pick<typeof AbstractCommand, keyof typeof AbstractCommand> & {
        name: string;
    } & LoggableInterface;
    constructor(httpClient: AxiosInstance, ..._args: unknown[]);
    static queryClass(): Type<any>;
    /**
     * @example If the provider doesn't provide separate information about house number, then AccuracyEnum.STREET_NAME should be set.
     * @important This information will be used to ignore the provider if query.accuracy is specified.
     */
    static getMaxAccuracy(): AccuracyEnum;
    static getUrl(): string;
    protected buildQuery(_query: GeocoderQueryType): Promise<ProviderRequestType>;
    /**
     * Must return void or throw one of GeocoderException
     * @throws {GeocoderException}
     */
    protected validateResponse(_response: AxiosResponse<ProviderResponseType>): Promise<void>;
    protected parseResponse(_response: AxiosResponse<ProviderResponseType>, _query: GeocoderQueryType): Promise<GeocoderTransformerType[]>;
    static isProvidesAccuracy(accuracy: AccuracyEnum): boolean;
    execute(_query: GeocoderQueryType): Promise<GeocoderResponseType[]>;
    protected getResponse(params: ProviderRequestType): Promise<AxiosResponse<ProviderResponseType>>;
}
export {};
