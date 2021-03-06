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
            artboardUrl: 'https://xd.adobe.com/view/57945f95-9455-4031-a7b6-76e6a7ec74a6-02c7/screen/3edbd260-09a0-4b35-ad8a-73b46782965e/Desktop',
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

    return `
        <p class="header-content__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <a href="#" class="button header-content__cta" button-variant="${buttonColor}">Let's go</a>
    `
}

const Template: Story<HeaderStoryProps> = (args: HeaderStoryProps) => {
    return `
        <header class="header" image-height="${args.imageHeight}">
            <img class="header__image" src="https://picsum.photos/2000" alt="quote image" />

            <div class="header-content"
                accent-color="${args.accentColor}"
                vertical-position="${args.headerVerticalPos}"
                horizontal-position="${args.headerHorizontalPos}"
                content-size="${args.headerContentSize}"
                text-alignment="${args.headerTextAlignment}"
                ${args.isTitleOnly ? 'is-title-only' : ''}>
                <h1 class="header-content__title font--${args.headlineSize}">This is a headline</h1>
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
