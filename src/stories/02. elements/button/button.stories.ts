import { Story, Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import buttonDocs from './button.docs.mdx';

const DEFAULT_BUTTON_TEXT = 'Hello world';

export default {
    title: 'COMPONENTS/Button',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/c5b5ae33-8b35-4536-be9f-a39f5a3c447f-90e6/screen/94662024-4698-4543-9535-08e86b001d5d/Desktop',
        },
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: buttonDocs,
        },
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
        buttonType: {
            table: {
                category: "Button Settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Button type',
            description: "Set the button's type",
            options: ['default', 'border', 'ghost'],
            control: { type: 'radio' },
            defaultValue: ['default'],
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
        hasIcon: {
            table: {
                category: "Button Settings",
                defaultValue: { summary: 'false' },
            },
            name: 'Icon',
            description: "Toggle visibility of the button's icon",
            control: { type: 'boolean' },
            required: true,
        },
        iconPosition: {
            table: {
                category: "Button Settings",
                defaultValue: { summary: 'left' },
            },
            name: 'Icon position',
            description: "Set the button's icon position",
            options: ['left', 'right',],
            control: { type: 'radio' },
            defaultValue: ['left'],
            required: true,
        },
        size: {
            table: {
                category: "Button Settings",
                defaultValue: { summary: 'normal' },
            },
            name: 'Size',
            description: "Set the button text size",
            options: ['tiny', 'small', 'normal', 'large'],
            control: { type: 'radio' },
            defaultValue: ['normal'],
            required: true,
        },
        isExpanded: {
            table: {
                category: "Button Settings",
                defaultValue: { summary: 'false' },
            },
            name: 'Expanded',
            description: "Toggle the button's width",
            control: { type: 'boolean' },
            required: true,
        },
    }
} as Meta;

interface ButtonStoryProps {
    buttonVariant: string;
    size: string;
    isExpanded: string | boolean;
    buttonType: string;
    isDisabled: string | boolean;
    hasIcon: string | boolean;
    iconPosition: string;
}

const Template: Story<ButtonStoryProps> = (args: ButtonStoryProps) => {
    let buttonEl = document.createElement('button', { is: 'toujou-button' });

    // CSS CLASSES
    let buttonClasses = `button`;
    buttonEl.setAttribute('class', buttonClasses);
    buttonEl.setAttribute('button-variant', args.buttonVariant)
    buttonEl.setAttribute('button-type', args.buttonType);
    buttonEl.setAttribute('button-size', args.size);
    if (args.isExpanded === 'true' || args.isExpanded === true) {
        buttonEl.setAttribute('is-expanded', '');
    }

    buttonEl.disabled = args.isDisabled === 'true' || args.isDisabled === true;

    if (args.hasIcon === 'true' || args.hasIcon === true) {
        buttonEl.innerHTML = `<toujou-icon class="icon button__icon" icon-name="arrow-right"></toujou-icon> ${DEFAULT_BUTTON_TEXT}`;
        buttonEl.setAttribute(`button-icon-position`, args.iconPosition);
    } else {
        buttonEl.textContent = DEFAULT_BUTTON_TEXT;
    }

    return buttonEl;
};

export const Button = Template.bind({});

Button.args = {
    buttonVariant: 'primary',
    buttonType: 'default',
    isDisabled: false,
    hasIcon: false,
    iconPosition: 'left',
    size: 'normal',
    isExpanded: false,
}
