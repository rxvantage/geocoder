import type { AbstractCommand } from '../../../../command';
import type { Constructor } from '../../../../types';
export declare enum MapQuestLocationQualityEnum {
    COUNTRY = "COUNTRY",
    ZIP = "ZIP",
    ZIP_EXTENDED = "ZIP_EXTENDED",
    STATE = "STATE",
    COUNTY = "COUNTY",
    CITY = "CITY",
    NEIGHBORHOOD = "NEIGHBORHOOD",
    STREET = "STREET",
    ADDRESS = "ADDRESS",
    POINT = "POINT"
}
export declare function MapQuestCommonCommandMixin<TBase extends Constructor<AbstractCommand>>(Base: TBase): TBase;
