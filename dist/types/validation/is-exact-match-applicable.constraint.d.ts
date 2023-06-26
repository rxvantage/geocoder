import type { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
export declare class IsExactMatchApplicableConstraint implements ValidatorConstraintInterface {
    validate(exactMatch: boolean, args: ValidationArguments): boolean;
    defaultMessage(_args: ValidationArguments): string;
}
