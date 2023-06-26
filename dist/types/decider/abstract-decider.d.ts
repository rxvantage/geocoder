import type { AbstractProvider } from '../model';
export declare abstract class AbstractDecider {
    abstract getProvider(providers: AbstractProvider[], forceProvider?: AbstractProvider): Promise<AbstractProvider>;
}
