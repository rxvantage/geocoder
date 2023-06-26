import type { DistanceQueryInterface, GeocodeQueryInterface, PlaceDetailsQueryInterface, ProviderInterface, ReverseQueryInterface, SuggestQueryInterface } from '../interface';
import type { Distance } from './distance';
import type { Location } from './location';
import type { Suggestion } from './suggestion';
declare const AbstractProvider_base: ObjectConstructor & import("..").Constructor<import("../logger").LoggableInterface>;
export declare class AbstractProvider extends AbstractProvider_base implements ProviderInterface {
    geocode(_query: GeocodeQueryInterface): Promise<Location[]>;
    reverse(_query: ReverseQueryInterface): Promise<Location[]>;
    suggest(_query: SuggestQueryInterface): Promise<Suggestion[]>;
    placeDetails(_query: PlaceDetailsQueryInterface): Promise<Location>;
    distance(_query: DistanceQueryInterface): Promise<Distance>;
}
export {};
