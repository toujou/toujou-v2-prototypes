import { Story, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import headerDocs from './header.docs.mdx';


export default {
    title: 'COMPONENTS/Header',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
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
            options: ['default', 'full', 'half', 'quarter', '3-1'],
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
            options: ['default', 'primary', 'secondary', 'font'],
            control: { type: 'select' },
            defaultValue: ['default'],
            required: true,
        },
    },
    tags: ['autodocs']
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
            
            <toujou-media-info class="media-info">
                <button slot="open-button" class="media-info__toggle" aria-label="Toggle the image caption and / or copyright">
                    <toujou-icon class="icon" icon-color="background" icon-name="info" icon-size="ms"></toujou-icon>
                </button>
                <button slot="close-button" class="media-info__toggle" aria-label="Toggle the image caption and / or copyright">
                    <toujou-icon class="icon" icon-color="background" icon-name="close" icon-size="ms"></toujou-icon>
                </button>
                <figpaction slot="figcaption" class="media-info__figcaption">This is a beautiful description</figpaction>
                <small slot="copyright" class="media-info__copyright">@Nice photographer</small>
            </toujou-media-info>
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
