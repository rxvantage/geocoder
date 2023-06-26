"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToBoolean = void 0;
const class_transformer_1 = require("class-transformer");
function ToBoolean() {
    return (0, class_transformer_1.Transform)(({ value }) => value === 'true' || value === true || value === 1 || value === '1');
}
exports.ToBoolean = ToBoolean;
//# sourceMappingURL=to-boolean.js.map