"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HereCommonCommandMixin = void 0;
const exception_1 = require("../../../../exception");
const model_1 = require("../../../../model");
const transformer_1 = require("../../transformer");
const util_1 = require("../../util");
function HereCommonCommandMixin(Base) {
    class HereCommonCommand extends Base {
        constructor(...args) {
            super(args[0]);
            this.appId = args[1];
            this.appCode = args[2];
            if (!this.appId || !this.appCode) {
                throw new exception_1.InvalidCredentialsException('Invalid or missing api key.');
            }
        }
        static getMaxAccuracy() {
            return model_1.AccuracyEnum.HOUSE_NUMBER;
        }
        async validateResponse(_response) {
            //
        }
        async parseResponse(response, query) {
            if (!response.data.Response || !Array.isArray(response.data.Response.View) || !response.data.Response.View[0]) {
                return [];
            }
            let results = response.data.Response.View[0].Result;
            results = results.filter((raw) => (0, util_1.filterByAccuracy)(raw, query.accuracy));
            if (!results.length) {
                return [];
            }
            return Promise.all(results.map(async (raw) => new transformer_1.HereLocationTransformer(raw)));
        }
    }
    return HereCommonCommand;
}
exports.HereCommonCommandMixin = HereCommonCommandMixin;
//# sourceMappingURL=here-common-command.mixin.js.map