var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ValidatorConstraint } from 'class-validator';
import { AccuracyEnum } from '../model';
let IsExactMatchApplicableConstraint = class IsExactMatchApplicableConstraint {
    validate(exactMatch, args) {
        const [accuracyProperty, limitProperty] = args.constraints;
        const accuracy = args.object[accuracyProperty];
        const limit = args.object[limitProperty];
        if (!exactMatch) {
            return true;
        }
        if (!accuracy && typeof limit === 'undefined') {
            return true;
        }
        if (accuracy && AccuracyEnum.HOUSE_NUMBER !== accuracy) {
            return false;
        }
        if (limit && limit === 1) {
            return false;
        }
        return true;
    }
    defaultMessage(_args) {
        return 'Can be used only if accuracy is not specified or it is set to AccuracyEnum.HOUSE_NUMBER and if limit is not specified or it is more than 1';
    }
};
IsExactMatchApplicableConstraint = __decorate([
    ValidatorConstraint({ name: 'isExactMatchApplicable' })
], IsExactMatchApplicableConstraint);
export { IsExactMatchApplicableConstraint };
//# sourceMappingURL=is-exact-match-applicable.constraint.js.map