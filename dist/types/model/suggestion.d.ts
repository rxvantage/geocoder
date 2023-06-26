import type { ClassTransformOptions } from 'class-transformer';
import type { SuggestionInterface } from '../interface';
export declare class Suggestion<ProviderRawEntryType = any> implements SuggestionInterface<ProviderRawEntryType> {
    formattedAddress: string;
    placeId: string;
    provider: string;
    raw?: ProviderRawEntryType;
    toObject(options?: ClassTransformOptions): SuggestionInterface<ProviderRawEntryType>;
}
