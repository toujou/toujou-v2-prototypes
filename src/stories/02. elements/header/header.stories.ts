import { Story, Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import headerDocs from './header.docs.mdx';


export default {
    title: 'COMPONENTS/Header',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/c5b5ae33-8b35-4536-be9f-a39f5a3c447f-90e6/screen/8273eb7a-a8b4-4953-be35-18a8929d90c5/Desktop',
        },
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: headerDocs,
        },
        layout: "fullscreen",
    },
    argTypes: {
        isTitleOnly: {
            table: {
                category: "Header Settings",
                defaultValue: { summary: false },
            },
            name: 'Title only',
            description: "Show only the title",
            control: { type: 'boolean' },
            defaultValue: false,
            required: true,
        },
        imageHeight: {
            table: {
                category: "Header Settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Header image height',
            description: "Set the header image height",
            options: ['default', 'full', 'half', 'quarter'],
            control: { type: 'select' },
            defaultValue: ['default'],
            required: true,
        },
        headerVerticalPos: {
            table: {
                category: "Header Settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Header vertical position',
            description: "Set the header's vertical position",
            options: ['top', 'mid', 'bottom'],
            control: { type: 'select' },
            defaultValue: ['mid'],
            required: true,
        },
        headerHorizontalPos: {
            table: {
                category: "Header Settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Header horizontal position',
            description: "Set the header's horizontal position",
            options: ['left', 'center', 'right'],
            control: { type: 'select' },
            defaultValue: ['center'],
            required: true,
        },
        headerContentSize: {
            table: {
                category: "Header Settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Header content size',
            description: "Set the header's content width",
            options: ['full', 'half', 'third', 'quarter'],
            control: { type: 'select' },
            defaultValue: ['half'],
            required: true,
        },
        headlineSize: {
            table: {
                category: "Header Settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Headline size',
            description: "Set the header's headline size",
            options: ['default', 'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'omega'],
            control: { type: 'select' },
            defaultValue: ['default'],
            required: true,
        },
        headerTextAlignment: {
            table: {
                category: "Header Settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Header alignment',
            description: "Set the header alignment",
            options: ['default', 'center', 'left', 'right'],
            control: { type: 'select' },
            defaultValue: ['default'],
            required: true,
        },
        accentColor: {
            table: {
                category: "Header Settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Accent color',
            description: "Set the header's accent color",
            options: ['default', 'primary', 'secondary', 'grey'],
            control: { type: 'select' },
            defaultValue: ['default'],
            required: true,
        },
    },
} as Meta;

interface HeaderStoryProps {
    isTitleOnly: boolean,
    imageHeight: string,
    headerVerticalPos: string,
    headerHorizontalPos: string,
    headerContentSize: string,
    headlineSize: string,
    headerTextAlignment: string,
    accentColor: string,
}

function getHeaderContentText(accentColor: string) {
    const buttonColor = accentColor === 'default' ? 'primary' : accentColor === 'grey' ? 'font' : accentColor;

    console.log('xxx', accentColor, buttonColor);
    return `
    <p class="header__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    <a href="#" class="button header__cta" button-variant="${buttonColor}">Let's go</a>
`
}

const Template: Story<HeaderStoryProps> = (args: HeaderStoryProps) => {
    return `
        <header
            class="header"
            text-alignment="${args.headerTextAlignment}" ${args.isTitleOnly ? 'is-title-only' : ''}
            image-height="${args.imageHeight}"
            accent-color="${args.accentColor}"
            vertical-position="${args.headerVerticalPos}"
            horizontal-position="${args.headerHorizontalPos}"
            content-size="${args.headerContentSize}">
            <img class="header__image" src="https://picsum.photos/2400" alt="quote image" />

            <div class="header__content">
                <h1 class="header__title font--${args.headlineSize}">This is a headline</h1>
                ${args.isTitleOnly ? '' : getHeaderContentText(args.accentColor)}
            </div>

        </header>
    `
};

export const Header = Template.bind({});

// @ts-ignore
Header.args = {
    isTitleOnly: false,
    imageHeight: 'default',
    headerVerticalPos: 'mid',
    headerHorizontalPos: 'center',
    headerContentSize: 'half',
    headlineSize: 'default',
    headerTextAlignment: 'default',
    accentColor: 'default',
}
