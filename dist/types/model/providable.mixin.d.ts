import type { LoggableInterface } from '../logger';
import type { Constructor } from '../types';
import type { ProvidableInterface } from './providable.interface';
export declare function ProvidableMixin<TBase extends Constructor<LoggableInterface>>(Base: TBase): TBase & Constructor<ProvidableInterface>;
