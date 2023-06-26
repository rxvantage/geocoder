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
import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
let WorldCountryState = class WorldCountryState {
};
__decorate([
    IsString(),
    MinLength(2),
    MaxLength(2),
    Transform(({ value }) => value === null || value === void 0 ? void 0 : value.toString().trim().toUpperCase()),
    Expose(),
    __metadata("design:type", String)
], WorldCountryState.prototype, "countryCode", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MinLength(2),
    MaxLength(100),
    Transform(({ value }) => value === null || value === void 0 ? void 0 : value.toString().trim().toUpperCase()),
    Expose(),
    __metadata("design:type", String)
], WorldCountryState.prototype, "stateCode", void 0);
__decorate([
    IsOptional(),
    IsString(),
    Transform(({ value }) => value === null || value === void 0 ? void 0 : value.toString().trim()),
    Expose(),
    __metadata("design:type", String)
], WorldCountryState.prototype, "name", void 0);
WorldCountryState = __decorate([
    Exclude()
], WorldCountryState);
export { WorldCountryState };
//# sourceMappingURL=world-country-state.js.map