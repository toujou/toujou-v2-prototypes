import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import locationFinderDocs from './location-finder.docs.mdx';

import '../../../../node_modules/@toujou/toujou-location-finder/dist/toujou-location-finder.js'

export default {
    title: 'COMPONENTS/LocationFinder',
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: locationFinderDocs,
        },
    },
} as Meta;

const Template = () => {
    return `
        <toujou-location-finder 
            class="location-finder"
            bounds="[[7.22852, 46.321555], [11.573955, 50.898213]]"
            teaserUrl="{teaserUrl}"
            geoJsonUrl="{geoJsonUrl}"
            filterParams="{filterParams}"
            map-style="mapbox://styles/mapbox/light-v10"
            access-token="pk.eyJ1IjoiZGZhdSIsImEiOiJjbDdyanc5aHUwZzA2M29wMmM4cjJud2IxIn0.EtfjXD2re5QUhatJJoKPYg"
        >
    

</toujou-location-finder>
            
        </toujou-location-finder>
    `;
};

export const LocationFinder = Template.bind({});
