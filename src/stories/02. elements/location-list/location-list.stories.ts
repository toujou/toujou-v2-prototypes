import { Meta } from '@storybook/web-components-vite';

// @ts-ignore
import locationListDocs from './location-list.docs.mdx';

export default {
    title: 'COMPONENTS/Tourism/Location List',
    parameters: {
        docs: {
            page: locationListDocs,
        },
    },
    tags: ['autodocs']
} satisfies Meta;

const Template = () => {
    return `
        <main>
            <toujou-location-list class="location-list">
                <toujou-icon class="icon" icon-name="map" icon-size="m" icon-color="font"></toujou-icon>
                <ul class="location-list__list separated-list" list-separator="dot">
                    <li class="separated-list__item">Location A</li>
                    <li class="separated-list__item">Location B</li>
                    <li class="separated-list__item">Location C</li>
                    <li class="separated-list__item">Location D</li>
                </ul>
            </toujou-location-list>
        </main>
    `;
};

export const LocationList = Template.bind({});
