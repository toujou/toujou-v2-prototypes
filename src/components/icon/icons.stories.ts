import {Meta} from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../.storybook/badgeCustomConfig.js'

export default {
    title: 'COMPONENTS/Icons',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/c5b5ae33-8b35-4536-be9f-a39f5a3c447f-90e6/screen/8273eb7a-a8b4-4953-be35-18a8929d90c5/Desktop',
        },
        badges: [TOUJOU_BADGES.PROGRESS]
    },
    argTypes: {
        iconColor: {
            table: {
                category: "Icon Settings",
                defaultValue: { summary: 'font' },
            },
            name: 'Icon color',
            description: "Set the icon's color. If this class isn't set it defaults to 'currentColor'",
            options: ['font', 'primary', 'secondary'],
            control: { type: 'radio' },
            defaultValue: ['font'],
            required: true,
        },
        iconSize: {
            table: {
                category: "Icon Settings",
                defaultValue: { summary: 'ms' },
            },
            name: 'Icon size',
            description: "Set the icon's size. If the class isn't set it defaults to `ms`",
            options: ['xxxl', 'xxl', 'xl', 'l', 'm', 'ms', 'normal', 's', 'xs', 'xxs'],
            control: { type: 'select' },
            defaultValue: ['ms'],
            required: true,
        },
    }
} as Meta;

const iconNames = [
    'accessibility',
    'account',
    'alarm',
    'arrow-down',
    'arrow-drop-down',
    'arrow-left',
    'arrow-right',
    'arrow-up',
    'article',
    'bell',
    'blockquote-round',
    'bookmark',
    'bookmark-filled',
    'calendar-check',
    'calendar-day',
    'calendar-empty',
    'calendar-lines',
    'campaign',
    'cancel-circle-filled',
    'chart',
    'check',
    'chevron-down',
    'chevron-filled-down',
    'chevron-filled-left',
    'chevron-filled-right',
    'chevron-filled-up',
    'chevron-left',
    'chevron-right',
    'chevron-up',
    'clock-circle',
    'clock-circle-filled',
    'close',
    'cloud',
    'coffee',
    'coronavirus',
    'dashboard',
    'drink',
    'email',
    'euro',
    'file-download',
    'flag',
    'flower',
    'folder',
    'food',
    'globe',
    'heart',
    'heart-stroke',
    'home',
    'home-smooth',
    'hotel',
    'info',
    'link',
    'list',
    'location',
    'map',
    'message-bubble',
    'monument',
    'new',
    'pending-circle-filled',
    'play-circle',
    'play-circle-filled',
    'prize',
    'question',
    'school',
    'science',
    'search',
    'settings',
    'shopping-bag',
    'shopping-cart',
    'sm-facebook',
    'sm-instagram',
    'sm-linkedin',
    'sm-pinterest',
    'sm-twitter',
    'sm-xing',
    'sm-youtube',
    'sports',
    'star',
    'stop-circle-filled',
    'support',
    'telephone',
    'thumb-up',
    'tools',
];

const Template = (args: { iconSize: any; iconColor: any; }) => {

    const iconGrid = document.createElement('div');
    iconGrid.classList.add('icon-grid');

    iconNames.forEach((iconName) => {
        const iconCell = document.createElement('div');
        iconCell.classList.add('icon-grid__cell');

        const iconEl = document.createElement('i');
        iconEl.classList.add('icon', `icon--size-${args.iconSize}`, `icon--color-${args.iconColor}`, `icon--${iconName}`);
        iconCell.appendChild(iconEl);

        const iconTitle = document.createElement('p');
        iconTitle.classList.add('icon-grid__title');
        iconTitle.textContent = iconName;
        iconCell.appendChild(iconTitle);

        iconGrid.appendChild(iconCell);
    })

    return iconGrid;
};

export const Icons = Template.bind({});

// @ts-ignore
Icons.args = {
    iconColor: 'font',
    iconSize: 'ms',
}

