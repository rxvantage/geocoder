import { AbstractSuggestionTransformer } from '../../../transformer';
import { GoogleMapsProvider } from '../google-maps.provider';
export declare class GoogleMapsSuggestionTransformer extends AbstractSuggestionTransformer<GoogleMapsProvider> {
    constructor(raw: any);
    getFormattedAddress(): Promise<string>;
    getPlaceId(): Promise<string>;
}
