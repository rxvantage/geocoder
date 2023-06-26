import { NullLogger } from './null.logger';
export function LoggableMixin(Base) {
    return class extends Base {
        constructor() {
            super(...arguments);
            /* tslint:disable:prefer-readonly */
            this.logger = new NullLogger();
        }
        setLogger(logger) {
            this.logger = logger;
            return this;
        }
        getLogger() {
            return this.logger;
        }
    };
}
//# sourceMappingURL=loggable.mixin.js.map