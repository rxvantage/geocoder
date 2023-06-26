import type { DistanceQueryInterface, GeocodeQueryInterface, ReverseQueryInterface, SuggestQueryInterface } from '../interface';
import type { AbstractProvider, Distance, Location, Suggestion } from '../model';
import { AbstractGeocoder } from './abstract-geocoder';
export declare class Geocoder extends AbstractGeocoder {
    constructor(provider: AbstractProvider);
    geocode(query: GeocodeQueryInterface): Promise<Location[]>;
    reverse(query: ReverseQueryInterface): Promise<Location[]>;
    suggest(query: SuggestQueryInterface): Promise<Suggestion[]>;
    distance(query: DistanceQueryInterface): Promise<Distance>;
}
