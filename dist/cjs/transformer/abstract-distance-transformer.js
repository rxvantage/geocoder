"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractDistanceTransformer = void 0;
const class_transformer_1 = require("class-transformer");
const distance_1 = require("../model/distance");
const abstract_transformer_1 = require("./abstract-transformer");
class AbstractDistanceTransformer extends abstract_transformer_1.AbstractTransformer {
    async transform(options) {
        const distance = new distance_1.Distance();
        distance.provider = this.provider;
        distance.distance = await this.getDistance();
        distance.duration = await this.getDuration();
        distance.raw = this.raw;
        return (0, class_transformer_1.plainToInstance)(distance_1.Distance, distance, options);
    }
}
exports.AbstractDistanceTransformer = AbstractDistanceTransformer;
//# sourceMappingURL=abstract-distance-transformer.js.map