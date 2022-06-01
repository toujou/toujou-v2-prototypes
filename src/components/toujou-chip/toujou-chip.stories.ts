import {Meta} from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../.storybook/badgeCustomConfig.js';

const DEFAULT_BUTTON_TEXT = 'Jetzt 30% Rabatt';

export default {
    title: 'COMPONENTS/Chip',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/c5b5ae33-8b35-4536-be9f-a39f5a3c447f-90e6/screen/8273eb7a-a8b4-4953-be35-18a8929d90c5/Desktop',
        },
        badges: [TOUJOU_BADGES.TESTING]
    },
    argTypes: {
        bgColor: {
            table: {
                category: "Chip Settings",
                defaultValue: { summary: 'primary-very-light' },
            },
            name: 'Background color',
            description: "Set the chip's background-color",
            options: ['none', 'primary', 'primary-light', 'primary-very-light', 'secondary', 'secondary-light', 'secondary-very-light', 'font', 'font-light', 'font-very-light', 'success', 'warning', 'error'],
            control: { type: 'select' },
            defaultValue: ['primary'],
            required: true,
        },
        borderRadius: {
            table: {
                category: "Chip Settings",
                defaultValue: { summary: 'small' },
            },
            name: 'Border radius',
            description: "Set the chip's border-radius",
            options: ['none', 'small', 'medium', 'round'],
            control: { type: 'select' },
            defaultValue: ['small'],
            required: true,
        },
        size: {
            table: {
                category: "Chip Settings",
                defaultValue: { summary: 'small' },
            },
            name: 'Size',
            description: "Set the chip's size",
            options: ['extra-small', 'small', 'normal'],
            control: { type: 'select' },
            defaultValue: ['small'],
            required: true,
        },
        isClickable: {
            table: {
                category: "Chip Settings",
                defaultValue: { summary: 'false' },
            },
            name: 'Is clickable',
            description: "Set if the chip is clickable or not",
            control: { type: 'boolean' },
            defaultValue: ['false'],
            required: true,
        },
        hasIcon: {
            table: {
                category: "Chip Settings",
                defaultValue: { summary: 'false' },
            },
            name: 'With icon',
            description: "Toggle the chip's icon visibility",
            control: { type: 'boolean' },
            defaultValue: ['false'],
            required: true,
        },
        iconPosition: {
            table: {
                category: "Chip Settings",
                defaultValue: { summary: 'false' },
            },
            name: 'Icon position',
            description: "Set the icon on the right or left side of the chip",
            options: ['left', 'right',],
            control: { type: 'radio' },
            defaultValue: ['left'],
            required: true,
        },
        allCaps: {
            table: {
                category: "Chip Settings",
                defaultValue: { summary: 'false' },
            },
            name: 'All uppercase',
            description: "Set the chip's text to all uppercase",
            control: { type: 'boolean' },
            defaultValue: ['false'],
            required: true,
        },
    }
} as Meta;

const Template = (args: {
    hasIcon: string | boolean;
    iconPosition: string;
    bgColor: string;
    borderRadius: string;
    size: string;
    isClickable: string | boolean;
    allCaps: string | boolean;
}) => {
    const toujouChip = document.createElement('toujou-chip');

    // ICON
    if (args.hasIcon === 'true' || args.hasIcon === true) {
        toujouChip.innerHTML = `<i class="icon icon--heart toujou-chip__icon"></i> ${DEFAULT_BUTTON_TEXT}`;
        toujouChip.classList.add(`toujou-chip--icon-${args.iconPosition}`);
    } else {
        toujouChip.textContent = DEFAULT_BUTTON_TEXT;
    }

    // CLASSES
    toujouChip.classList.add(
        'toujou-chip',
        `toujou-chip--bg-${args.bgColor}`,
        `toujou-chip--border-radius-${args.borderRadius}`,
        `toujou-chip--size-${args.size}`
    );

    // IS CLICKABLE
    if (args.isClickable === 'true' || args.isClickable === true) {
        toujouChip.classList.add(`toujou-chip--is-clickable`);
    }

    // ALL CAPS
    if (args.allCaps === 'true' || args.allCaps === true) {
        toujouChip.classList.add(`toujou-chip--all-caps`);
    }

    return toujouChip;
};

export const Chip = Template.bind({});

// @ts-ignore
Chip.args = {
    bgColor: 'primary-very-light',
    borderRadius: 'small',
    size: 'small',
    isClickable: false,
    hasIcon: false,
    iconPosition: 'left',
    allCaps: false,
}