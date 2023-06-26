import { AbstractHttpProvider } from '../model';
import type { DistanceQueryInterface, GeocodeQueryInterface, GeocoderInterface, ReverseQueryInterface, SuggestQueryInterface } from '../interface';
import type { AbstractProvider, Distance, Location, Suggestion } from '../model';
import type { Type } from '../types';
declare const AbstractGeocoder_base: ObjectConstructor & import("../types").Constructor<import("../logger").LoggableInterface> & import("../types").Constructor<import("../model").ProvidableInterface>;
export declare abstract class AbstractGeocoder extends AbstractGeocoder_base implements GeocoderInterface {
    abstract geocode(query: GeocodeQueryInterface): Promise<Location[]>;
    abstract reverse(query: ReverseQueryInterface): Promise<Location[]>;
    abstract suggest(query: SuggestQueryInterface): Promise<Suggestion[]>;
    protected geocodeByProvider(provider: AbstractProvider, query: GeocodeQueryInterface): Promise<Location[]>;
    protected reverseByProvider(provider: AbstractProvider, query: ReverseQueryInterface): Promise<Location[]>;
    protected suggestByProvider(provider: AbstractProvider, query: SuggestQueryInterface): Promise<Suggestion[]>;
    protected distanceByProvider(provider: AbstractProvider, query: DistanceQueryInterface): Promise<Distance>;
    using<HttpProviderClass extends AbstractHttpProvider>(providerClass: Type<HttpProviderClass> | string): AbstractHttpProvider;
    private findHttpProviderRecursive;
}
export {};
