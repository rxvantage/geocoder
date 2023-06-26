"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = exports.getAvailableAccuracies = exports.sliceFrom = void 0;
const model_1 = require("../model");
function sliceFrom(elements, searchElement) {
    if (!elements.includes(searchElement)) {
        return [];
    }
    return elements.slice(elements.indexOf(searchElement));
}
exports.sliceFrom = sliceFrom;
function getAvailableAccuracies(maxAccuracy) {
    const accuracies = Object.values(model_1.AccuracyEnum);
    return accuracies.slice(accuracies.indexOf(maxAccuracy));
}
exports.getAvailableAccuracies = getAvailableAccuracies;
async function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
exports.delay = delay;
//# sourceMappingURL=util.js.map