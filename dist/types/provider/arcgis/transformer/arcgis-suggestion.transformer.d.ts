import { AbstractSuggestionTransformer } from '../../../transformer';
import { ArcgisProvider } from '../arcgis.provider';
import type { ArcgisSuggestionInterface } from '../interface';
export declare class ArcgisSuggestionTransformer extends AbstractSuggestionTransformer<ArcgisProvider> {
    readonly raw: ArcgisSuggestionInterface;
    constructor(raw: ArcgisSuggestionInterface);
    getFormattedAddress(): Promise<string>;
    getPlaceId(): Promise<string>;
}
