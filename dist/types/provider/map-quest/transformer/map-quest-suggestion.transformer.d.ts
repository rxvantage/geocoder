import { AbstractSuggestionTransformer } from '../../../transformer';
import { MapQuestProvider } from '../map-quest.provider';
export declare class MapQuestSuggestionTransformer extends AbstractSuggestionTransformer<MapQuestProvider> {
    constructor(raw: any);
    getFormattedAddress(): Promise<string>;
    getPlaceId(): Promise<string>;
}
