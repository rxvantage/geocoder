var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { instanceToPlain, Exclude, Expose } from 'class-transformer';
let Suggestion = class Suggestion {
    toObject(options) {
        return instanceToPlain(this, options);
    }
};
__decorate([
    Expose(),
    __metadata("design:type", String)
], Suggestion.prototype, "formattedAddress", void 0);
__decorate([
    Expose(),
    __metadata("design:type", String)
], Suggestion.prototype, "placeId", void 0);
__decorate([
    Expose(),
    __metadata("design:type", String)
], Suggestion.prototype, "provider", void 0);
__decorate([
    Expose({ groups: ['raw', 'all'] }),
    __metadata("design:type", Object)
], Suggestion.prototype, "raw", void 0);
Suggestion = __decorate([
    Exclude()
], Suggestion);
export { Suggestion };
//# sourceMappingURL=suggestion.js.map