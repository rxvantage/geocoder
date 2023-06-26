import { GoogleMapsLocationTransformer } from '../../transformer';
import { GoogleMapsCommonCommandMixin } from './google-maps-common-command.mixin';
export function GoogleMapsLocationCommandMixin(Base) {
    class GoogleMapsLocationCommand extends GoogleMapsCommonCommandMixin(Base) {
        async parseResponse(response) {
            if (!Array.isArray(response.data.results) || !response.data.results.length) {
                return [];
            }
            return Promise.all(response.data.results.map(async (raw) => this.parseOneResult(raw)));
        }
        async parseOneResult(raw) {
            return new GoogleMapsLocationTransformer(raw);
        }
    }
    return GoogleMapsLocationCommand;
}
//# sourceMappingURL=google-maps-location-command.mixin.js.map