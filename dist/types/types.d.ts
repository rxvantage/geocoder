/**
 * @link {https://github.com/angular/angular/blob/master/packages/core/src/interface/type.ts}
 */
export type Type<T> = new (...args: any[]) => T;
export type Constructor<T extends object = {}> = new (...args: any[]) => T;
