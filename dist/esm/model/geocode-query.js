var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsNotEmpty, IsNumber, IsOptional, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';
import { ToBoolean } from '../util/transformer';
import { IsExactMatchApplicable } from '../validation';
import { Query } from './query';
export class GeocodeQuery extends Query {
    constructor() {
        super(...arguments);
        this.exactMatch = false;
    }
}
__decorate([
    IsString(),
    IsNotEmpty(),
    MinLength(5),
    MaxLength(150),
    __metadata("design:type", String)
], GeocodeQuery.prototype, "address", void 0);
__decorate([
    ToBoolean(),
    IsExactMatchApplicable(),
    __metadata("design:type", Boolean)
], GeocodeQuery.prototype, "exactMatch", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MinLength(2),
    MaxLength(100),
    __metadata("design:type", String)
], GeocodeQuery.prototype, "country", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MinLength(2),
    MaxLength(100),
    __metadata("design:type", String)
], GeocodeQuery.prototype, "state", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MinLength(2),
    MaxLength(100),
    __metadata("design:type", String)
], GeocodeQuery.prototype, "stateCode", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MinLength(2),
    MaxLength(50),
    __metadata("design:type", String)
], GeocodeQuery.prototype, "city", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MinLength(3),
    MaxLength(20),
    __metadata("design:type", String)
], GeocodeQuery.prototype, "postalCode", void 0);
__decorate([
    IsOptional(),
    IsNumber(),
    Min(-90),
    Max(90),
    __metadata("design:type", Number)
], GeocodeQuery.prototype, "lat", void 0);
__decorate([
    IsOptional(),
    IsNumber(),
    Min(-180),
    Max(180),
    __metadata("design:type", Number)
], GeocodeQuery.prototype, "lon", void 0);
__decorate([
    IsOptional(),
    IsNumber(),
    Min(0),
    Max(1000000),
    __metadata("design:type", Number)
], GeocodeQuery.prototype, "radius", void 0);
//# sourceMappingURL=geocode-query.js.map