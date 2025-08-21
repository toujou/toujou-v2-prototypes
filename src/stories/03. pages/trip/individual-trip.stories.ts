import { Meta } from '@storybook/web-components-vite';

// @ts-ignore
import tripDocs from './trip.docs.mdx';

export default {
    title: 'PAGES/Trip',
    parameters: {
        docs: {
            page: tripDocs,
        },
    },
} satisfies Meta;

const Template = () => {
    return `
       <h1>Individual trip page</h1>
    `;
};

export const IndividualTrip = Template.bind({});
