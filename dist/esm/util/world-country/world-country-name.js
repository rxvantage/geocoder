var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Exclude, Expose } from 'class-transformer';
import { IsOptional, IsString, MinLength } from 'class-validator';
let WorldCountryName = class WorldCountryName {
};
__decorate([
    IsString(),
    IsOptional(),
    MinLength(1),
    Expose(),
    __metadata("design:type", String)
], WorldCountryName.prototype, "common", void 0);
__decorate([
    IsString(),
    IsOptional(),
    MinLength(1),
    Expose(),
    __metadata("design:type", String)
], WorldCountryName.prototype, "official", void 0);
WorldCountryName = __decorate([
    Exclude()
], WorldCountryName);
export { WorldCountryName };
//# sourceMappingURL=world-country-name.js.map