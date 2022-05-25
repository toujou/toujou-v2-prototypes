import { Meta } from '@storybook/web-components';
// @ts-ignore
import { withXD } from "storybook-addon-xd-designs";

export default {
    title: 'COMPONENTS/Button',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/c5b5ae33-8b35-4536-be9f-a39f5a3c447f-90e6/screen/94662024-4698-4543-9535-08e86b001d5d/Desktop',
        }
    },
    argTypes: {}
} as Meta;

const Template = (args) => {
    return `       
        <button class="button">Test</button>
    `
};

export const Button = Template.bind({});
