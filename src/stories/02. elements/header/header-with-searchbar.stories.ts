import { StoryFn, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import headerDocs from './header.docs.mdx';


export default {
    title: 'COMPONENTS/Header With Searchbar',
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
            },
            name: 'Title only',
            description: "Show only the title",
            control: { type: 'boolean' },
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
            required: true,
        },
    },
    tags: ['autodocs']
} satisfies Meta;

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

const Template: StoryFn<HeaderStoryProps> = (args: HeaderStoryProps) => {
    return `
        <div class="header-with-quicksearch">
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
            
            <form action="#" class="quicksearch">
            
                <toujou-input-group class="input-group input-group--single-select quicksearch__input quicksearch__mode">
                    <label class="input-label" for="tx_rates_search[mode]">Mode</label>
                    <div class="select__wrapper">
                        <select
                            data-pristine-required-message-de="The given subject was empty."
                            class="form-control input select" id="tx_rates_search[mode]"
                            name="tx_rates_search[mode]"
                        >
                            <option class="seclect__option" value="Pages">- Reisen -</option>
                            <option class="seclect__option" value="Departures">- Termine -</option>
                        </select>
                    </div>
                </toujou-input-group>
            
                <toujou-input-group class="input-group input-group--date quicksearch__input quicksearch__date-from">
                    <label class="input-label" for="tx_rates_search[dateFrom]">Von</label>
                    <input pattern="/([0-9]{4})-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])/"
                        step="1"
                        data-pristine-required-message-de="The given subject was empty."
                        data-pristine-pattern-message-de="You must enter a valid date."
                        data-pristine-date-min-message-de="You must select a date after."
                        data-pristine-date-max-message-de="You must select a date before."
                        class="input input--date"
                        id="tx_rates_search[dateFrom]"
                        type="date"
                        name="tx_rates_search[dateFrom]"
                        value=""
                    >
                </toujou-input-group>
                
                <toujou-input-group class="input-group input-group--date quicksearch__input quicksearch__date-until">
                    <label class="input-label" for="tx_rates_search[dateUntil]">Bis</label>
                    <input pattern="/([0-9]{4})-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])/"
                        step="1"
                        data-pristine-required-message-de="The given subject was empty."
                        data-pristine-pattern-message-de="You must enter a valid date."
                        data-pristine-date-min-message-de="You must select a date after."
                        data-pristine-date-max-message-de="You must select a date before."
                        class="input input--date"
                        id="tx_rates_search[dateUntil]"
                        type="date"
                        name="tx_rates_search[dateUntil]"
                        value=""
                    >
                </toujou-input-group>
            
                <toujou-input-group class="input-group input-group--single-select quicksearch__input quicksearch__availability">
                    <label class="input-label" for="tx_rates_search[availability]">Availability</label>
                    <div class="select__wrapper">
                        <select
                            data-pristine-required-message-de="The given subject was empty."
                            class="form-control input select" id="tx_rates_search[availability]"
                            name="tx_rates_search[availability]"
                        >
                            <option class="seclect__option" value="" disabled selected>- Availability -</option>
                            <option class="seclect__option" value="">- All -</option>
                            <option class="seclect__option" value="1">- Only available -</option>
                            <option class="seclect__option" value="2">- Only garantied -</option>
                        </select>
                    </div>
                </toujou-input-group>
                
                <toujou-input-group class="input-group quicksearch__input quicksearch__submit" input-group-type="submit">
                    <button
                        is="toujou-button"
                        class="button quicksearch__submit-button"
                        button-variant="primary"
                        type="submit"
                        value="Suchen"
                    >Submit</button>
                </toujou-input-group>
                
            </form>
        </div>
    `
};

export const HeaderWithSearchbar = Template.bind({});

// @ts-ignore
HeaderWithSearchbar.args = {
    isTitleOnly: false,
    imageHeight: 'default',
    headerVerticalPos: 'mid',
    headerHorizontalPos: 'center',
    headerContentSize: 'half',
    headlineSize: 'default',
    headerTextAlignment: 'default',
    accentColor: 'default',
}
