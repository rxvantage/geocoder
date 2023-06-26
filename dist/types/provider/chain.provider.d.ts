import { AbstractChainProvider } from '../model';
import type { GeocodeQueryInterface, ReverseQueryInterface, SuggestQueryInterface } from '../interface';
import type { AbstractHttpProvider, Location, Suggestion } from '../model';
export declare class ChainProvider extends AbstractChainProvider {
    constructor(providers: AbstractHttpProvider[]);
    geocode(query: GeocodeQueryInterface): Promise<Location[]>;
    reverse(query: ReverseQueryInterface): Promise<Location[]>;
    suggest(query: SuggestQueryInterface): Promise<Suggestion[]>;
}
