"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractProvider = void 0;
const logger_1 = require("../logger");
class AbstractProvider extends (0, logger_1.LoggableMixin)(Object) {
    async geocode(_query) {
        throw new Error('AbstractProvider.geocode: not implemented');
    }
    async reverse(_query) {
        throw new Error('AbstractProvider.reverse: not implemented');
    }
    async suggest(_query) {
        throw new Error('AbstractProvider.suggest: not implemented');
    }
    async placeDetails(_query) {
        throw new Error('AbstractProvider.placeDetails: not implemented');
    }
    async distance(_query) {
        throw new Error('AbstractProvider.distance: not implemented');
    }
}
exports.AbstractProvider = AbstractProvider;
//# sourceMappingURL=abstract-provider.js.map