"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggableMixin = void 0;
const null_logger_1 = require("./null.logger");
function LoggableMixin(Base) {
    return class extends Base {
        constructor() {
            super(...arguments);
            /* tslint:disable:prefer-readonly */
            this.logger = new null_logger_1.NullLogger();
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
exports.LoggableMixin = LoggableMixin;
//# sourceMappingURL=loggable.mixin.js.map