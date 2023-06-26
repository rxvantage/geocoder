/**
 * All library exceptions must inherit this class.
 */
export declare class GeocoderException extends Error {
    private readonly payload?;
    constructor(message: string, payload?: unknown);
    getPayload(): any | undefined;
}
