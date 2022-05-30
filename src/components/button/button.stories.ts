import { Meta } from '@storybook/web-components';
// @ts-ignore
import { withXD } from "storybook-addon-xd-designs";
import {ToujouTopbar} from "../toujou-topbar/toujou-topbar.stories";

const DEFAULT_BUTTON_TEXT = 'Hello';

export default {
    title: 'COMPONENTS/Button',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/c5b5ae33-8b35-4536-be9f-a39f5a3c447f-90e6/screen/94662024-4698-4543-9535-08e86b001d5d/Desktop',
        }
    },
    argTypes: {
        buttonVariant: {
            table: {
                category: "Button Settings",
                defaultValue: { summary: 'primary' },
            },
            name: 'Button variant',
            description: "Set the button's variant",
            options: ['primary', 'secondary', 'font'],
            control: { type: 'radio' },
            defaultValue: ['primary'],
            required: true,
        },
        isDisabled: {
            table: {
                category: "Button Settings",
                defaultValue: { summary: 'false' },
            },
            name: 'Disabled',
            description: "Toggle the button disabled attribute",
            control: { type: 'boolean' },
            required: true,
        },
    }
} as Meta;

const Template = (args) => {
    console.log(args);
    let buttonEl = document.createElement('button');

    buttonEl.textContent = DEFAULT_BUTTON_TEXT;

    let buttonClasses = `button button--${args.buttonVariant}`;
    buttonEl.setAttribute('class', buttonClasses);

    buttonEl.disabled = args.isDisabled === 'true' || args.isDisabled === true;

    return buttonEl;
};

export const Button = Template.bind({});

// @ts-ignore
ToujouTopbar.args = {
    buttonVariant: 'primary',
    isDisabled: false,
}