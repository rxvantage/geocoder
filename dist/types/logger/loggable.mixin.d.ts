import type { Constructor } from '../types';
import type { LoggableInterface } from './loggable.interface';
export declare function LoggableMixin<TBase extends Constructor>(Base: TBase): TBase & Constructor<LoggableInterface>;
