import type { AbstractDecider } from '../decider';
import type { GeocodeQueryInterface, ReverseQueryInterface, SuggestQueryInterface } from '../interface';
import type { AbstractProvider, Location, Suggestion } from '../model';
import { AbstractGeocoder } from './abstract-geocoder';
export declare class ProviderAggregator extends AbstractGeocoder {
    private readonly decider;
    constructor(providers: AbstractProvider[], decider?: AbstractDecider);
    geocode(query: GeocodeQueryInterface): Promise<Location[]>;
    reverse(query: ReverseQueryInterface): Promise<Location[]>;
    suggest(query: SuggestQueryInterface): Promise<Suggestion[]>;
}
