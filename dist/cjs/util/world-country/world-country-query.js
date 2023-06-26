"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldCountryQuery = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
let WorldCountryQuery = class WorldCountryQuery {
};
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MinLength)(1),
    (0, class_transformer_1.Transform)(({ value }) => value === null || value === void 0 ? void 0 : value.trim()),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], WorldCountryQuery.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(2),
    (0, class_transformer_1.Transform)(({ value }) => value === null || value === void 0 ? void 0 : value.toString().trim().toUpperCase()),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], WorldCountryQuery.prototype, "cca2", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(3),
    (0, class_transformer_1.Transform)(({ value }) => value === null || value === void 0 ? void 0 : value.toString().trim().toUpperCase()),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], WorldCountryQuery.prototype, "cca3", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNumberString)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(3),
    (0, class_transformer_1.Transform)(({ value }) => (value ? (+value).toString().trim().padStart(3, '0') : undefined)),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], WorldCountryQuery.prototype, "ccn3", void 0);
WorldCountryQuery = __decorate([
    (0, class_transformer_1.Exclude)()
], WorldCountryQuery);
exports.WorldCountryQuery = WorldCountryQuery;
//# sourceMappingURL=world-country-query.js.map