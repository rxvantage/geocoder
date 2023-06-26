import type { AbstractProvider } from '../model';
import { GeocoderException } from './geocoder.exception';
export declare class ProviderNotRegisteredException extends GeocoderException {
    static create(providerClassName: string, registeredProviders?: AbstractProvider[]): ProviderNotRegisteredException;
    static noProviderRegistered(): ProviderNotRegisteredException;
    static doesNotInheritAbstractProvider(className: string): ProviderNotRegisteredException;
}
