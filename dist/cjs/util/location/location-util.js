"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationUtil = void 0;
const exception_1 = require("../../exception");
class LocationUtil {
    static removeHouseNumberFromStreetName(streetName, houseNumber) {
        if (!streetName || !houseNumber) {
            throw new exception_1.InvalidArgumentException('Argument values must not be empty');
        }
        if (streetName.startsWith(`${houseNumber} `)) {
            return streetName.slice(1 + houseNumber.length);
        }
        if (streetName.endsWith(` ${houseNumber}`)) {
            return streetName.slice(0, -1 * (1 + houseNumber.length));
        }
        return streetName;
    }
}
exports.LocationUtil = LocationUtil;
//# sourceMappingURL=location-util.js.map