import { AbstractSuggestionTransformer } from '../../../transformer';
import { HereProvider } from '../here.provider';
import type { HereOneResultType } from '../interface';
export declare class HereSuggestionTransformer extends AbstractSuggestionTransformer<HereProvider> {
    constructor(raw: HereOneResultType);
    getFormattedAddress(): Promise<string>;
    getPlaceId(): Promise<string>;
    private getLocationAddress;
}
