import { AbstractChainProvider } from '../model';
import type { GeocodeQueryInterface, ReverseQueryInterface, SuggestQueryInterface } from '../interface';
import type { AbstractHttpProvider, Location, Suggestion } from '../model';
export declare class StatefulChainProvider extends AbstractChainProvider {
    private nextProvider;
    constructor(providers: AbstractHttpProvider[]);
    geocode(query: GeocodeQueryInterface): Promise<Location[]>;
    reverse(query: ReverseQueryInterface): Promise<Location[]>;
    suggest(query: SuggestQueryInterface): Promise<Suggestion[]>;
    private setNextProvider;
    /**
     * The round robin queue of providers
     */
    private getOrderedProvidersList;
}
