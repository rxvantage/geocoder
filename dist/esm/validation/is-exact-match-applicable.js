import { registerDecorator } from 'class-validator';
import { IsExactMatchApplicableConstraint } from './is-exact-match-applicable.constraint';
export function IsExactMatchApplicable(options) {
    return (object, propertyName) => {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options,
            constraints: ['accuracy', 'limit'],
            validator: IsExactMatchApplicableConstraint,
        });
    };
}
//# sourceMappingURL=is-exact-match-applicable.js.map