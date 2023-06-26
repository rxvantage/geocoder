import { LoggableMixin } from '../logger';
export class AbstractProvider extends LoggableMixin(Object) {
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
//# sourceMappingURL=abstract-provider.js.map