import type { DistanceQueryInterface, GeocodeQueryInterface, HttpProviderCommandsInterface, PlaceDetailsQueryInterface, ReverseQueryInterface, SuggestQueryInterface } from '../interface';
import type { LoggerInterface } from '../logger';
import { AbstractProvider } from './abstract-provider';
import type { Distance } from './distance';
import type { Location } from './location';
import type { Suggestion } from './suggestion';
export declare abstract class AbstractHttpProvider extends AbstractProvider {
    private readonly commands;
    protected constructor(commands: HttpProviderCommandsInterface);
    geocode(query: GeocodeQueryInterface): Promise<Location[]>;
    reverse(query: ReverseQueryInterface): Promise<Location[]>;
    suggest(query: SuggestQueryInterface): Promise<Suggestion[]>;
    placeDetails(query: PlaceDetailsQueryInterface): Promise<Location>;
    distance(query: DistanceQueryInterface): Promise<Distance>;
    setLogger(logger: LoggerInterface): this;
}
