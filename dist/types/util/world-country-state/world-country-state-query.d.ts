import type { WorldCountryStateQueryInterface } from './world-country-state-query.interface';
export declare class WorldCountryStateQuery implements WorldCountryStateQueryInterface {
    countryCode: string;
    stateCode?: string;
    name?: string;
}
