export interface MockFetchRule<T = any> {
    match: (url: string) => boolean;
    response: {
        ok?: boolean;
        // Keep these as Functions returning Promises to match the real Fetch API
        text?: () => Promise<string> | string;
        json?: () => Promise<T> | T;
    };
}

/**
 * Optional: Define your Location-specific types here or in a separate file
 * so you don't have to repeat them in the function signature.
 */
export interface LocationFeature {
    type: string;
    geometry: {
        type: string;
        coordinates: number[] | string[];
    };
    properties: {
        uid: number;
        name: string;
        search_boost: number;
        categories: number[];
        distance: number;
    };
}

export interface LocationGeoResponse {
    type: string;
    features: LocationFeature[];
}

// The actual function declaration
export function mockFetch(rules: MockFetchRule[]): void;
