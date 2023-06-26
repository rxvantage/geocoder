import { WorldCountryState } from './world-country-state';
import type { WorldCountryStateQueryInterface } from './world-country-state-query.interface';
export declare class WorldCountryStateUtil {
    /**
     * Returns result only if all fields matched
     */
    private static match;
    static find(_query: WorldCountryStateQueryInterface): Promise<WorldCountryState | undefined>;
}
