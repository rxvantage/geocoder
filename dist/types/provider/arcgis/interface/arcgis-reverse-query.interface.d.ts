import type { ArcgisQueryInterface } from './arcgis-query.interface';
export interface ArcgisReverseQueryInterface extends ArcgisQueryInterface {
    location: string;
    featureTypes?: 'StreetInt' | 'DistanceMarker' | 'StreetAddress' | 'POI' | 'PointAddress' | 'Postal' | 'Locality' | string;
    maxLocations: number;
    locationType: 'rooftop' | 'street';
}
