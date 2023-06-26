import type { LoggerInterface } from './logger.interface';
export declare class NullLogger implements LoggerInterface {
    debug(): any;
    info(): any;
    warn(): any;
    error(): any;
}
