import { Meta } from '@storybook/web-components-vite';

export default {
    title: 'PAGES/Trip',
} satisfies Meta;

const Template = () => {
    return `
       <h1>Individual trip page</h1>
    `;
};

export const IndividualTrip = Template.bind({});
