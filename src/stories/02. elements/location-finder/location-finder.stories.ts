import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import locationFinderDocs from './location-finder.docs.mdx';

import '../../../../node_modules/@toujou/toujou-location-finder/dist/toujou-location-finder.js'

import { rest } from "msw";
import { placesgeoMockUrl, placesgeoMockRes } from "./mocks/placesgeo.mock";

export default {
    title: 'COMPONENTS/LocationFinder',
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: locationFinderDocs,
        },
        msw: {
            handlers: [
                rest.get('/user', (_req, res, ctx) => {
                    console.log('MOCK TEST')
                    return res(
                        ctx.json({
                            firstName: 'Neil',
                            lastName: 'Maverick',
                        })
                    )
                }),
                rest.get(placesgeoMockUrl, (_req, res, ctx) => {
                    console.log('MOCKING THE REQUEST TO /placesgeo...');
                    return res(
                        ctx.json(placesgeoMockRes)
                    )
                }),
            ],
        },
    },
} as Meta;

const Template = () => {
    // const test = fetch("/user")
    //     .then((response) => {
    //         console.log('AAAAA', response);
    //         return response.json()
    //     })
    //     .then((data) => {
    //         console.log('XXXXXXXXXXX', data)
    //     })
    //     .catch((error) => console.log('ERRORRRRRRRR', error));

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
</toujou-location-finder>
            
        </toujou-location-finder>
    `;
};

export const LocationFinder = Template.bind({});
