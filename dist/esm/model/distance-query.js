var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Type } from 'class-transformer';
import { IsEnum, IsOptional, ValidateNested } from 'class-validator';
import { TravelModeEnum } from './travel-mode.enum';
import { Point } from './point';
import { Query } from './query';
export class DistanceQuery extends Query {
    constructor() {
        super(...arguments);
        this.mode = TravelModeEnum.DRIVING;
    }
}
__decorate([
    Type(() => Point),
    ValidateNested(),
    __metadata("design:type", Point)
], DistanceQuery.prototype, "from", void 0);
__decorate([
    Type(() => Point),
    ValidateNested(),
    __metadata("design:type", Point)
], DistanceQuery.prototype, "to", void 0);
__decorate([
    IsEnum(TravelModeEnum),
    IsOptional(),
    __metadata("design:type", String)
], DistanceQuery.prototype, "mode", void 0);
//# sourceMappingURL=distance-query.js.map