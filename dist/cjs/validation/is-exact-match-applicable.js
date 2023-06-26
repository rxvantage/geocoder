"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsExactMatchApplicable = void 0;
const class_validator_1 = require("class-validator");
const is_exact_match_applicable_constraint_1 = require("./is-exact-match-applicable.constraint");
function IsExactMatchApplicable(options) {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName,
            options,
            constraints: ['accuracy', 'limit'],
            validator: is_exact_match_applicable_constraint_1.IsExactMatchApplicableConstraint,
        });
    };
}
exports.IsExactMatchApplicable = IsExactMatchApplicable;
//# sourceMappingURL=is-exact-match-applicable.js.map