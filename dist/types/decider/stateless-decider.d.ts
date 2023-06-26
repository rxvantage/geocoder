import type { AbstractProvider } from '../model';
import { AbstractDecider } from './abstract-decider';
export declare class StatelessDecider extends AbstractDecider {
    getProvider(providers: AbstractProvider[], forceProvider?: AbstractProvider): Promise<AbstractProvider>;
}
