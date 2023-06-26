import type { ValidationError } from 'class-validator';
import { GeocoderException } from './geocoder.exception';
export declare class ValidationException extends GeocoderException {
    private readonly errors;
    constructor(errors: ValidationError[]);
    getValidationErrors(): ValidationError[];
}
