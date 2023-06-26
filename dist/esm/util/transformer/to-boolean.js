import { Transform } from 'class-transformer';
export function ToBoolean() {
    return Transform(({ value }) => value === 'true' || value === true || value === 1 || value === '1');
}
//# sourceMappingURL=to-boolean.js.map