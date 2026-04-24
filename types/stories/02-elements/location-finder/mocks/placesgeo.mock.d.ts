/**
 * This is the response we get on https://www.toujou.de/service/elementbibliothek/widgets/#c1014590
 * when we send the location finder request to placesgeo.json...
 */
export declare const placesGeoMockResp: {
    type: string;
    features: {
        type: string;
        geometry: {
            type: string;
            coordinates: string[];
        };
        properties: {
            uid: number;
            name: string;
            search_boost: number;
            categories: number[];
            distance: number;
        };
    }[];
};
