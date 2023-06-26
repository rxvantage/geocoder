import { AccuracyEnum } from '../model';
export function sliceFrom(elements, searchElement) {
    if (!elements.includes(searchElement)) {
        return [];
    }
    return elements.slice(elements.indexOf(searchElement));
}
export function getAvailableAccuracies(maxAccuracy) {
    const accuracies = Object.values(AccuracyEnum);
    return accuracies.slice(accuracies.indexOf(maxAccuracy));
}
export async function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
//# sourceMappingURL=util.js.map