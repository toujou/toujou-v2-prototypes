import { Meta } from '@storybook/web-components-vite';

import '@toujou/toujou-location-finder/lib'

import { mockFetch, MockFetchRule } from '../../../js/utils/mockFetch/mockFetch';
import { placesGeoMockResp } from "./mocks/placesgeo.mock";
import { placesTeaserMockResp_all, placesTeaserMockResp_singleTeaser } from "./mocks/placesteaser.mock";

export default {
    title: 'COMPONENTS/LocationFinder',
    parameters: {
        layout: "fullscreen",
    },
    decorators: [
        (story) => {
            const fetchRules: MockFetchRule[] = [
                {
                    // GeoJSON endpoint
                    match: (url) => url.includes('placesgeo'),
                    response: {
                        json: () => placesGeoMockResp,
                        text: () => JSON.stringify(placesGeoMockResp),
                    },
                },
                {
                    // Single teaser for popup — no comma or %2C in the ids
                    match: (url) => url.includes('ids=') && !url.includes('%2C') && !url.includes(','),
                    response: {
                        // Assuming your teaser mock is a string/HTML fragment
                        text: () => placesTeaserMockResp_singleTeaser,
                    },
                },
                {
                    // Multiple teasers for sidebar — has %2C (encoded comma)
                    match: (url) => url.includes('ids=') && (url.includes('%2C') || url.includes(',')),
                    response: {
                        text: () => placesTeaserMockResp_all,
                    },
                },
            ];

            mockFetch(fetchRules);
            return story();
        },
    ],
} satisfies Meta;

const Template = () => {
    return `
        <main>
            <toujou-location-finder
                class="location-finder"
                bounds="[[7.22852, 46.321555], [11.573955, 50.898213]]"
                teaserurl="/placesteaser.html?details=name%2Cbranch_code%2Ctelephone%2Clogo"
                geojsonurl="/placesgeo.json"
                filterparams="&amp;pagetypes=34&amp;pages=1000435&amp;recursive=2&amp;hmac=3e4c316ebf46da7e82bcb3c911655e561fb95f52"
                map-style="mapbox://styles/mapbox/light-v10"
                access-token="pk.eyJ1IjoiZGZhdSIsImEiOiJjbDdyanc5aHUwZzA2M29wMmM4cjJud2IxIn0.EtfjXD2re5QUhatJJoKPYg"
            >
                <button
                    is="toujou-button"
                    class="button location-finder__map-toggle"
                    button-variant="primary"
                    button-type="border"
                    button-size="small"
                    slot="location-finder-map-toggle"
                >
                    <span class="location-finder__map-toggle-show-text">Show map</span>
                    <span class="location-finder__map-toggle-hide-text">Hide map</span>
                </button>
            </toujou-location-finder>
        </main>
    `;
};

export const LocationFinder = Template.bind({});
