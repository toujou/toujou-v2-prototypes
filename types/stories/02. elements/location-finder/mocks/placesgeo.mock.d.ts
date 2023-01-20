/**
 * Address to mock
 */
export declare const placesgeoMockUrl = "http://localhost:6006/placesgeo.json?north=84.2232850212464&south=-84.22328502124657&east=77.93528615908156&west=-77.93528615908366&pagetypes=34&pages=1000435&recursive=2&hmac=3e4c316ebf46da7e82bcb3c911655e561fb95f52";
/**
 * This is the response we get on https://www.toujou.de/service/elementbibliothek/widgets/#c1014590
 * when we send the location finder request to placesgeo.json...
 */
export declare const placesgeoMockRes: {
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
