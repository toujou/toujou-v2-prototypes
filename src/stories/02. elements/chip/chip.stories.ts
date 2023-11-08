import { StoryFn, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import chipDocs from './chip.docs.mdx';

const DEFAULT_BUTTON_TEXT = 'Jetzt 30% Rabatt';

export default {
    title: 'COMPONENTS/Chip',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: chipDocs,
        },
    },
    argTypes: {
        bgColor: {
            table: {
                category: "Chip Settings",
                defaultValue: { summary: 'primary-very-light' },
            },
            name: 'Background color',
            description: "Set the chip's background-color",
            options: ['transparent', 'primary', 'primary-light', 'primary-very-light', 'secondary', 'secondary-light', 'secondary-very-light', 'font', 'font-light', 'font-very-light', 'success', 'warning', 'error'],
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
        isUppercase: {
            table: {
                category: "Chip Settings",
                defaultValue: { summary: 'false' },
            },
            name: 'Is uppercase',
            description: "Set the chip's text to all uppercase",
            control: { type: 'boolean' },
            defaultValue: ['false'],
            required: true,
        },
    },
    tags: ['autodocs']
} as Meta;

interface ChipStoryProps {
    hasIcon: string | boolean;
    iconPosition: string;
    bgColor: string;
    borderRadius: string;
    size: string;
    isClickable: string | boolean;
    isUppercase: string | boolean;
}

const Template: StoryFn<ChipStoryProps> = (args: ChipStoryProps) => {
    // @ts-ignore
    const toujouChip = document.createElement('toujou-chip');

    // ICON
    if (args.hasIcon === 'true' || args.hasIcon === true) {
        toujouChip.innerHTML = `<toujou-icon class="icon chip__icon" icon-name="home"></toujou-icon> ${DEFAULT_BUTTON_TEXT}`;
        toujouChip.setAttribute(`chip-icon-position`, args.iconPosition);
    } else {
        toujouChip.textContent = DEFAULT_BUTTON_TEXT;
    }

    // CLASSES
    toujouChip.classList.add('chip',);

    // BG COLOR
    toujouChip.setAttribute('chip-bg-color', args.bgColor);

    // BORDER RADIUS
    toujouChip.setAttribute('chip-border-radius', args.borderRadius);

    // SIZE
    toujouChip.setAttribute('chip-size', args.size);

    // IS CLICKABLE
    if (args.isClickable === 'true' || args.isClickable === true) {
        toujouChip.setAttribute(`is-clickable`, '');
    }

    // ALL CAPS
    if (args.isUppercase === 'true' || args.isUppercase === true) {
        toujouChip.setAttribute(`is-uppercase`, '');
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
    isUppercase: false,
}

