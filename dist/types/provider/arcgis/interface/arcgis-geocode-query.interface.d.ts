/**
 * https://developers.arcgis.com/rest/geocode/api-reference/geocoding-category-filtering.htm
 */
import type { ArcgisQueryInterface } from './arcgis-query.interface';
export interface ArcgisGeocodeQueryInterface extends ArcgisQueryInterface {
    address: string;
    /**
     * Something like accuracy
     * @link {https://developers.arcgis.com/rest/geocode/api-reference/geocoding-category-filtering.htm#ESRI_SECTION1_502B3FE2028145D7B189C25B1A00E17B}
     */
    category: 'Point Address' | 'Street Address' | 'Street Name' | 'Subaddress' | 'Postal' | string;
    /**
     * Acceptable values include the full country name in English or the official language of the country,
     * the 2-character country code,
     * or the 3-character country code.
     * A list of supported countries and codes is available in the Geocode coverage topic.
     * https://developers.arcgis.com/rest/geocode/api-reference/geocode-coverage.htm
     */
    countryCode?: string;
    region?: string;
    city?: string;
    postal?: string;
    matchOutOfRange: boolean;
    outFields?: string;
    maxLocations: number;
    locationType: 'rooftop' | 'street';
}
