import { InvalidCredentialsException } from '../../../../exception';
import { AccuracyEnum } from '../../../../model';
import { HereLocationTransformer } from '../../transformer';
import { filterByAccuracy } from '../../util';
export function HereCommonCommandMixin(Base) {
    class HereCommonCommand extends Base {
        constructor(...args) {
            super(args[0]);
            this.appId = args[1];
            this.appCode = args[2];
            if (!this.appId || !this.appCode) {
                throw new InvalidCredentialsException('Invalid or missing api key.');
            }
        }
        static getMaxAccuracy() {
            return AccuracyEnum.HOUSE_NUMBER;
        }
        async validateResponse(_response) {
            //
        }
        async parseResponse(response, query) {
            if (!response.data.Response || !Array.isArray(response.data.Response.View) || !response.data.Response.View[0]) {
                return [];
            }
            let results = response.data.Response.View[0].Result;
            results = results.filter((raw) => filterByAccuracy(raw, query.accuracy));
            if (!results.length) {
                return [];
            }
            return Promise.all(results.map(async (raw) => new HereLocationTransformer(raw)));
        }
    }
    return HereCommonCommand;
}
//# sourceMappingURL=here-common-command.mixin.js.map