import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import locationFinderDocs from './location-finder.docs.mdx';

import '@toujou/toujou-location-finder/lib'

import { rest } from "msw";
import { placesgeoMockUrl, placesgeoMockRes } from "./mocks/placesgeo.mock";
import { placesteaserMockRes, placesteaserMockUrl } from "./mocks/placesteaser.mock";

export default {
    title: 'COMPONENTS/LocationFinder',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: locationFinderDocs,
        },
        layout: "fullscreen",
        msw: {
            handlers: [
                rest.get(placesgeoMockUrl, (_req, res, ctx) => {
                    console.info('%c LOCATION FINDER: Mocking the request to /placesgeo...', 'color: #29B6F6;');
                    return res(
                        ctx.status(200),
                        ctx.json(placesgeoMockRes)
                    )
                }),
                rest.get(placesteaserMockUrl, (_req, res, ctx) => {
                    console.info('%c LOCATION FINDER: Mocking the request to /placesteaser...', 'color: #29B6F6;');
                    return res(
                        ctx.status(200),
                        ctx.set('Content-Type', 'text/html'),
                        ctx.text(placesteaserMockRes)
                    )
                }),
            ],
        },
    },
    tags: ['autodocs']
} satisfies Meta;

const Template = () => {
    return `
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
    `;
};

export const LocationFinder = Template.bind({});
