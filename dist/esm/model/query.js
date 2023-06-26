var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsBoolean, IsEnum, IsNumber, IsOptional, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';
import { ToBoolean } from '../util/transformer';
import { AccuracyEnum } from './accuracy.enum';
export class Query {
    constructor() {
        this.limit = Query.DEFAULT_RESULT_LIMIT;
        this.language = Query.DEFAULT_RESULT_LANGUAGE;
        this.fillMissingQueryProperties = true;
        this.withRaw = false;
    }
}
Query.DEFAULT_RESULT_LIMIT = 5;
Query.DEFAULT_RESULT_LANGUAGE = 'en';
__decorate([
    IsOptional(),
    IsEnum(AccuracyEnum),
    __metadata("design:type", String)
], Query.prototype, "accuracy", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MinLength(2),
    MaxLength(2),
    __metadata("design:type", String)
], Query.prototype, "countryCode", void 0);
__decorate([
    IsNumber(),
    Min(1),
    Max(100),
    __metadata("design:type", Number)
], Query.prototype, "limit", void 0);
__decorate([
    IsString(),
    MinLength(2),
    MaxLength(2),
    __metadata("design:type", String)
], Query.prototype, "language", void 0);
__decorate([
    ToBoolean(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], Query.prototype, "fillMissingQueryProperties", void 0);
__decorate([
    ToBoolean(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], Query.prototype, "withRaw", void 0);
//# sourceMappingURL=query.js.map