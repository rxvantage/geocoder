var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Exclude, Expose, Type } from 'class-transformer';
import { IsNumberString, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import { WorldCountryName } from './world-country-name';
let WorldCountry = class WorldCountry {
};
__decorate([
    IsOptional(),
    Type(() => WorldCountryName),
    Expose(),
    __metadata("design:type", WorldCountryName)
], WorldCountry.prototype, "name", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MinLength(2),
    MaxLength(2),
    Expose(),
    __metadata("design:type", String)
], WorldCountry.prototype, "cca2", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MinLength(3),
    MaxLength(3),
    Expose(),
    __metadata("design:type", String)
], WorldCountry.prototype, "cca3", void 0);
__decorate([
    IsOptional(),
    IsString(),
    IsNumberString(),
    MinLength(3),
    MaxLength(3),
    Expose(),
    __metadata("design:type", String)
], WorldCountry.prototype, "ccn3", void 0);
WorldCountry = __decorate([
    Exclude()
], WorldCountry);
export { WorldCountry };
//# sourceMappingURL=world-country.js.map