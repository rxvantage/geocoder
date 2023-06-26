"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HereLocationCommandMixin = void 0;
const world_country_1 = require("../../../../util/world-country");
const here_common_command_mixin_1 = require("./here-common-command.mixin");
function HereLocationCommandMixin(Base) {
    class HereLocationCommand extends (0, here_common_command_mixin_1.HereCommonCommandMixin)(Base) {
        async buildQuery(query) {
            const params = {
                app_id: this.appId,
                app_code: this.appCode,
                language: query.language,
                searchtext: query.address,
                maxresults: query.limit,
                gen: 9,
                additionaldata: 'Country2,true;NormalizeNames,true',
            };
            if (query.lat && query.lon && query.radius) {
                params.prox = `${query.lat},${query.lon},${query.radius}`;
            }
            if (query.postalCode) {
                params.postalcode = query.postalCode;
            }
            if (query.countryCode || query.country) {
                const country = await world_country_1.WorldCountryUtil.find({
                    name: query.country,
                    cca2: query.countryCode,
                });
                /**
                 * To avoid ambiguity we recommend to specify the country with the 3-letter ISO code and not with the spelled out country name.
                 * With names there is a higher risk of misspells and also not all language translations for all countries are supported.
                 */
                params.country = country ? country.cca3 : query.countryCode || query.country;
                if (query.stateCode || query.state) {
                    /** Specify state using full or abbreviated notation. */
                    params.state = query.stateCode || query.state;
                }
                if (query.city) {
                    params.city = query.city;
                }
            }
            return params;
        }
    }
    return HereLocationCommand;
}
exports.HereLocationCommandMixin = HereLocationCommandMixin;
//# sourceMappingURL=here-location-command.mixin.js.map