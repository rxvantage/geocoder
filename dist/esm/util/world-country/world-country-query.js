var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Exclude, Expose, Transform } from 'class-transformer';
import { IsInt, IsNumberString, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
let WorldCountryQuery = class WorldCountryQuery {
};
__decorate([
    IsString(),
    IsOptional(),
    MinLength(1),
    Transform(({ value }) => value === null || value === void 0 ? void 0 : value.trim()),
    Expose(),
    __metadata("design:type", String)
], WorldCountryQuery.prototype, "name", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MinLength(2),
    MaxLength(2),
    Transform(({ value }) => value === null || value === void 0 ? void 0 : value.toString().trim().toUpperCase()),
    Expose(),
    __metadata("design:type", String)
], WorldCountryQuery.prototype, "cca2", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MinLength(3),
    MaxLength(3),
    Transform(({ value }) => value === null || value === void 0 ? void 0 : value.toString().trim().toUpperCase()),
    Expose(),
    __metadata("design:type", String)
], WorldCountryQuery.prototype, "cca3", void 0);
__decorate([
    IsOptional(),
    IsInt(),
    IsNumberString(),
    MinLength(3),
    MaxLength(3),
    Transform(({ value }) => (value ? (+value).toString().trim().padStart(3, '0') : undefined)),
    Expose(),
    __metadata("design:type", Object)
], WorldCountryQuery.prototype, "ccn3", void 0);
WorldCountryQuery = __decorate([
    Exclude()
], WorldCountryQuery);
export { WorldCountryQuery };
//# sourceMappingURL=world-country-query.js.map