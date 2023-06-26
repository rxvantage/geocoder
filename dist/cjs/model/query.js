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
exports.Query = void 0;
const class_validator_1 = require("class-validator");
const transformer_1 = require("../util/transformer");
const accuracy_enum_1 = require("./accuracy.enum");
class Query {
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
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(accuracy_enum_1.AccuracyEnum),
    __metadata("design:type", String)
], Query.prototype, "accuracy", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(2),
    __metadata("design:type", String)
], Query.prototype, "countryCode", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], Query.prototype, "limit", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(2),
    __metadata("design:type", String)
], Query.prototype, "language", void 0);
__decorate([
    (0, transformer_1.ToBoolean)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Query.prototype, "fillMissingQueryProperties", void 0);
__decorate([
    (0, transformer_1.ToBoolean)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Query.prototype, "withRaw", void 0);
exports.Query = Query;
//# sourceMappingURL=query.js.map