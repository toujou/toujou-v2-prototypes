import { Meta } from '@storybook/web-components-vite';
import { http, HttpResponse } from 'msw';

// @ts-ignore
import locationFinderDocs from './location-finder.docs.mdx';

import '@toujou/toujou-location-finder/lib'

import { placesGeoMockResp } from "./mocks/placesgeo.mock";
import { placesTeaserMockResp_all, placesTeaserMockResp_singleTeaser } from "./mocks/placesteaser.mock";

export default {
    title: 'COMPONENTS/LocationFinder',
    parameters: {
        docs: {
            page: locationFinderDocs,
        },
        layout: "fullscreen",
        msw: {
          handlers: [
              http.get('/placesgeo.json', () => {
                  return HttpResponse.json(placesGeoMockResp);
              }),
              http.get('/placesteaser.html', ({ request }) => {
                  const urlParams = new URLSearchParams(request.url);
                  if (!urlParams) return;

                  const paramsIds = urlParams.get("ids");

                  return (paramsIds && paramsIds.split(",").length > 1)
                    ? HttpResponse.html(placesTeaserMockResp_all)
                    : HttpResponse.html(placesTeaserMockResp_singleTeaser);
              }),
          ]
        },
    },
} satisfies Meta;


/* Debug mock routes *//*
async function testMocks() {
    console.log('=== Testing mocks ===');
    const [placesGeoReq, placesTeaserReq] = await Promise.all([
        fetch('/placesgeo.json?north=85.05112899999995&south=-85.05112899999997&east=180.00000255247056&west=-180.0000025524718&pagetypes=34&pages=1000435&recursive=2&hmac=3e4c316ebf46da7e82bcb3c911655e561fb95f52'),
        fetch('/placesteaser.html?details=name%2Cbranch_code%2Ctelephone%2Clogo')
    ]);

    const [placesGeoResp, placesTeaserResp] = await Promise.all([
        placesGeoReq.json(),
        placesTeaserReq.json()
    ])

    console.log('GEO', placesGeoResp);
    console.log('TEASER', placesTeaserResp);
}
*/

const Template = () => {
    // testMocks();

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
