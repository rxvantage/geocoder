import type { ClassTransformOptions } from 'class-transformer';
import { Suggestion } from '../model';
import type { SuggestionInterface } from '../interface';
import type { AbstractHttpProvider } from '../model';
import { AbstractTransformer } from './abstract-transformer';
export declare abstract class AbstractSuggestionTransformer<HttpProviderClass extends AbstractHttpProvider = any, ProviderRawEntryType = any> extends AbstractTransformer<HttpProviderClass, ProviderRawEntryType> {
    abstract getFormattedAddress(): Promise<SuggestionInterface['formattedAddress']>;
    abstract getPlaceId(): Promise<SuggestionInterface['placeId']>;
    transform(options?: ClassTransformOptions): Promise<Suggestion<ProviderRawEntryType>>;
}
