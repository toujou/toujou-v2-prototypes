/**
 * Address to mock
 */
export const placesgeoMockUrl = 'http://localhost:6006/placesgeo.json?north=84.2232850212464&south=-84.22328502124657&east=77.93528615908156&west=-77.93528615908366&pagetypes=34&pages=1000435&recursive=2&hmac=3e4c316ebf46da7e82bcb3c911655e561fb95f52';

/**
 * This is the response we get on https://www.toujou.de/service/elementbibliothek/widgets/#c1014590
 * when we send the location finder request to placesgeo.json...
 */
export const placesgeoMockRes = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "8.666475",
                    "50.107672"
                ]
            },
            "properties": {
                "uid": 9,
                "name": "dkd Internet Service GmbH",
                "search_boost": 1,
                "categories": [
                    0
                ],
                "distance": 195927.05143468693
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "8.56679",
                    "48.92848"
                ]
            },
            "properties": {
                "uid": 6,
                "name": "G.K.M.B. GmbH",
                "search_boost": 1,
                "categories": [
                    0
                ],
                "distance": 176281.53005033717
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "9.206144",
                    "48.676871"
                ]
            },
            "properties": {
                "uid": 5,
                "name": "jweiland.net",
                "search_boost": 1,
                "categories": [
                    0
                ],
                "distance": 229457.30072080903
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "8.383444",
                    "49.010315"
                ]
            },
            "properties": {
                "uid": 4,
                "name": "punkt.de GmbH",
                "search_boost": 1,
                "categories": [
                    0
                ],
                "distance": 161022.2575388874
            }
        }
    ]
}
