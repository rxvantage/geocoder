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
let Location = class Location {
    get street() {
        return `${this.houseNumber || ''} ${this.streetName || ''}`.trim();
    }
    generateFormattedAddress() {
        return this.formattedAddress
            ? this.formattedAddress
            : [
                this.street || '',
                this.city || '',
                `${this.stateCode || this.state || ''} ${this.postalCode || ''}`.trim(),
                this.country || this.countryCode || '',
            ]
                .filter(Boolean)
                .join(', ');
    }
    toObject(options) {
        return instanceToPlain(this, options);
    }
};
__decorate([
    Expose(),
    __metadata("design:type", String)
], Location.prototype, "provider", void 0);
__decorate([
    Expose({ name: 'formattedAddress', toClassOnly: true }),
    __metadata("design:type", String)
], Location.prototype, "formattedAddress", void 0);
__decorate([
    Expose(),
    __metadata("design:type", Number)
], Location.prototype, "latitude", void 0);
__decorate([
    Expose(),
    __metadata("design:type", Number)
], Location.prototype, "longitude", void 0);
__decorate([
    Expose(),
    __metadata("design:type", String)
], Location.prototype, "country", void 0);
__decorate([
    Expose(),
    __metadata("design:type", String)
], Location.prototype, "countryCode", void 0);
__decorate([
    Expose(),
    __metadata("design:type", String)
], Location.prototype, "state", void 0);
__decorate([
    Expose(),
    __metadata("design:type", String)
], Location.prototype, "stateCode", void 0);
__decorate([
    Expose(),
    __metadata("design:type", String)
], Location.prototype, "city", void 0);
__decorate([
    Expose(),
    __metadata("design:type", String)
], Location.prototype, "postalCode", void 0);
__decorate([
    Expose(),
    __metadata("design:type", String)
], Location.prototype, "streetName", void 0);
__decorate([
    Expose(),
    __metadata("design:type", String)
], Location.prototype, "houseNumber", void 0);
__decorate([
    Expose(),
    __metadata("design:type", String)
], Location.prototype, "placeId", void 0);
__decorate([
    Expose({ groups: ['raw', 'all'] }),
    __metadata("design:type", Object)
], Location.prototype, "raw", void 0);
__decorate([
    Expose({ name: 'formattedAddress', toPlainOnly: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Location.prototype, "generateFormattedAddress", null);
Location = __decorate([
    Exclude()
], Location);
export { Location };
//# sourceMappingURL=location.js.map