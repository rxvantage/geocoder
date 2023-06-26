import type { AbstractProvider } from '../model';
import { AbstractDecider } from './abstract-decider';
export declare class StatefulDecider extends AbstractDecider {
    private currentProvider?;
    getProvider(providers: AbstractProvider[], forceProvider?: AbstractProvider): Promise<AbstractProvider>;
    private getNextProvider;
}
