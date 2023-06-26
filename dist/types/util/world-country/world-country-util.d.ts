import { WorldCountry } from './world-country';
import type { WorldCountryQueryInterface } from './world-country-query.interface';
export declare class WorldCountryUtil {
    /**
     * Returns the result if at least one of the fields matches
     */
    private static match;
    static find(_query: WorldCountryQueryInterface): Promise<WorldCountry | undefined>;
}
