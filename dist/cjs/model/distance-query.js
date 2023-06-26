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
exports.DistanceQuery = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const travel_mode_enum_1 = require("./travel-mode.enum");
const point_1 = require("./point");
const query_1 = require("./query");
class DistanceQuery extends query_1.Query {
    constructor() {
        super(...arguments);
        this.mode = travel_mode_enum_1.TravelModeEnum.DRIVING;
    }
}
__decorate([
    (0, class_transformer_1.Type)(() => point_1.Point),
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", point_1.Point)
], DistanceQuery.prototype, "from", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => point_1.Point),
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", point_1.Point)
], DistanceQuery.prototype, "to", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(travel_mode_enum_1.TravelModeEnum),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], DistanceQuery.prototype, "mode", void 0);
exports.DistanceQuery = DistanceQuery;
//# sourceMappingURL=distance-query.js.map