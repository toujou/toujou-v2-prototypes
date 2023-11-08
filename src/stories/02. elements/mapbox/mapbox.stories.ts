import { StoryFn, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import mapboxDocs from './mapbox.docs.mdx';

export default {
    title: 'COMPONENTS/Mapbox',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: mapboxDocs,
        },
    },
    argTypes: {
        zoomLevel: {
            table: {
                category: "Maxbox settings",
                defaultValue: { summary: '14' },
            },
            name: 'Zoom level',
            description: "Choose the map's initial zoom level",
            control: { type: 'range',  min: 0, max: 22, step: 1},
            defaultValue: ['14'],
            required: true,
        },
        style: {
            table: {
                category: "Maxbox settings",
                defaultValue: { summary: 'light-v10' },
            },
            name: 'Map style',
            description: "Choose the map's style",
            control: { type: 'radio'},
            options: ['light-v10', 'dark-v10', 'streets-v11', 'outdoors-v11', 'satellite-v9', 'navigation-day-v1'],
            defaultValue: ['light-v10'],
            required: true,
        },
        showMarker: {
            table: {
                category: "Maxbox settings",
                defaultValue: { summary: true },
            },
            name: 'Show marker',
            description: "Toggle marker's visibility",
            control: { type: 'boolean'},
            defaultValue: [true],
            required: true,
        },
    },
    tags: ['autodocs']
} as Meta;

interface mapboxStoryProps {
    zoomLevel: number;
    style: string;
    showMarker: boolean;
}

const Template: StoryFn<mapboxStoryProps> = (args: mapboxStoryProps ) => {
    return `
        <toujou-map class="map"
            center="[11.0762549, 49.4579779]"
            zoom="${args.zoomLevel}"
            map-style="mapbox://styles/mapbox/${args.style}"
            interactive
            access-token="pk.eyJ1IjoiZGZhdSIsImEiOiJjbDdyanc5aHUwZzA2M29wMmM4cjJud2IxIn0.EtfjXD2re5QUhatJJoKPYg">

            ${args.showMarker ? `<toujou-map-marker coordinates="[11.0762549, 49.4579779]" color="#0079A8"></toujou-map-marker>` : ''}
        </toujou-map>
    `;
};

export const Mapbox = Template.bind({});

Mapbox.args = {
    zoomLevel: 14,
    style: 'light-v10',
    showMarker: true,
}
