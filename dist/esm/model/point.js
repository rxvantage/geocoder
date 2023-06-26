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
import { IsNumber, Max, Min } from 'class-validator';
let Point = class Point {
};
__decorate([
    Expose(),
    IsNumber(),
    Min(-90),
    Max(90),
    __metadata("design:type", Number)
], Point.prototype, "lat", void 0);
__decorate([
    Expose(),
    IsNumber(),
    Min(-180),
    Max(180),
    __metadata("design:type", Number)
], Point.prototype, "lon", void 0);
Point = __decorate([
    Exclude()
], Point);
export { Point };
//# sourceMappingURL=point.js.map