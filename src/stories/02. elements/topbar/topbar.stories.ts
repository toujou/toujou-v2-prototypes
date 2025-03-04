import { StoryFn, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import topbarDocs from "./topbar.docs.mdx";

export default {
    title: 'COMPONENTS/Topbar',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: topbarDocs,
        },
        layout: "fullscreen",
    },
    argTypes: {
        navigationColor: {
            table: {
                category: "Topbar settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Navigation color',
            description: "Set the navigation color",
            options: ['default', 'primary', 'secondary', 'font'],
            control: { type: 'radio' },
            defaultValue: ['default'],
            required: true,
        },
        titleType: {
            table: {
                category: "Topbar settings",
                defaultValue: { summary: 'logo' },
            },
            name: 'Mobile page title type',
            description: "Toggle between logo or text for the topbar page title on mobile devices",
            options: ['logo', 'title'],
            control: { type: 'radio' },
            defaultValue: ['logo'],
            required: true,
        },
        logoSize: {
            table: {
                category: "Topbar settings",
                defaultValue: { summary: 'medium' },
            },
            name: 'Logo size',
            description: "Set the logo size",
            options: ['small', 'medium', 'large'],
            control: { type: 'radio' },
            defaultValue: ['medium'],
            required: true,
        },
        noTransitions: {
            table: {
                category: "Topbar settings",
                defaultValue: { summary: 'false' },
            },
            name: 'No transitions',
            description: "Remove the transition from the topbar elements",
            control: { type: 'boolean' },
            defaultValue: [false],
            required: true,
        },
        showLanguagePicker: {
            table: {
                category: "Topbar settings",
                defaultValue: { summary: 'false' },
            },
            name: 'Show language picker',
            description: "Show the language picker element",
            control: { type: 'boolean' },
            defaultValue: [true],
            required: true,
        },
    },
} satisfies Meta;

interface TopbarStoryProps {
    navigationColor: string
    titleType: string
    logoSize: string
    noTransitions: boolean
    showLanguagePicker: boolean
}

const Template: StoryFn<TopbarStoryProps> = (args: TopbarStoryProps) => {
    // @ts-ignore
    // document.documentElement.style.setProperty('--topbar-height', `var(--topbar-height-${args.logoSize})`);

    document.documentElement.setAttribute('navigation-color', args.navigationColor);

    return `
        <toujou-topbar
            id="topbar"
            class="topbar"
            logo-size="${args.logoSize}"
            ${args.noTransitions ? 'no-transitions' : ''}
        >

            <nav aria-label="Topbar Logo" style="display: contents;">
                <a aria-label="Zur Startseite" show-title-on-mobile="${args.titleType === 'title'}" class="topbar__logo-link" href="/">
                    <span class="topbar__title">toujou Installation</span>
                    <img class="topbar__logo topbar__logo--svg" src="https://picsum.photos/300/150" alt="Logo">
                </a>
            </nav>

            <ul class="topbar__actions">
                <li class="topbar__actions-item">
                    <a href="#" class="topbar__actions-link" aria-label="Contact">
                        <span class="topbar__actions-text">Contact</span>
                        <toujou-icon icon-name="telephone" icon-color="font" icon-size="xl" class="icon"></toujou-icon>
                    </a>
                </li>
                <li class="topbar__actions-item">
                    <a href="#" class="topbar__actions-link" aria-label="Like">
                        <span class="topbar__actions-text">Like</span>
                        <toujou-icon icon-name="heart" icon-color="font" icon-size="xl" class="icon"></toujou-icon>
                    </a>
                </li>
                <li class="topbar__actions-item">
                    <a href="#" class="topbar__actions-link" aria-label="Search">
                        <span class="topbar__actions-text">Search</span>
                        <toujou-icon icon-name="search" icon-color="font" icon-size="xl" class="icon"></toujou-icon>
                    </a>
                </li>
            </ul>

            ${args.showLanguagePicker ? `
                <nav class="language-picker" aria-label="Language picker">
                    <ul class="language-picker__list">
                        <li class="language-picker__item">
                            <a
                                href="#"
                                class="language-picker__link"
                                lang="en"
                                hreflang="en"
                                aria-current="true"
                                aria-label="English"
                            >
                                <span class="language-picker__ico-code">EN</span>
                            </a>
                        </li>
                        <li class="language-picker__item">
                            <a
                                href="#"
                                class="language-picker__link"
                                lang="de"
                                hreflang="de"
                                aria-label="Deutsch"
                            >
                                <span class="language-picker__ico-code">DE</span>
                            </a>
                        </li>
                        <li class="language-picker__item">
                            <a
                                href="#"
                                class="language-picker__link"
                                lang="pt"
                                hreflang="pt"
                                aria-label="Português"
                            >
                                <span class="language-picker__ico-code">PT</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            ` : ''}

            <toujou-burger-button
                class="burger-button"
                role="button"
                aria-pressed="false"
                aria-haspopup="true"
                aria-controls="mainNavigation"
                aria-expanded="false"
                aria-label="Menu button"
                toggle-element-selector="#topbar"
                tabindex="0"
            >
                <span class="burger-button__line" line-position="top" aria-hidden="true" slot="content"></span>
                <span class="burger-button__line" line-position="middle" aria-hidden="true" slot="content"></span>
                <span class="burger-button__line" line-position="bottom" aria-hidden="true" slot="content"></span>
            </toujou-burger-button>

            <nav id="mainNavigation" class="main-nav" aria-label="Main navigation">
                <ul class="main-nav__list" nav-list-level="1">
                    <li class="main-nav__list-item" nav-item-level="1">
                        <a href="#" class="main-nav__link" aria-current="page">
                            <span class="main-nav__text">Startseite</span>
                        </a>
                    </li>
                    <li class="main-nav__list-item" nav-item-level="1" has-subnav>
                        <a href="#" class="main-nav__link">
                            <span class="main-nav__text">Bürgerservice</span>
                        </a>
                        <span class="main-nav__chevron" tabindex="0">
                            <toujou-icon class="icon" icon-size="l" icon-name="chevron-down" icon-color="background"></toujou-icon>
                        </span>
                        <ul class="main-nav__list" nav-list-level="2">
                            <li class="main-nav__list-item" nav-item-level="2" has-subnav>
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Arbeit und Beruf</span>
                                </a>
                                <span class="main-nav__chevron">
                                    <toujou-icon class="icon" icon-size="l" icon-name="chevron-down" icon-color="background"></toujou-icon>
                                </span>
                                <ul class="main-nav__list" nav-list-level="3">
                                    <li class="main-nav__list-item" nav-item-level="3">
                                        <a href="#" class="main-nav__link">
                                            <span class="main-nav__text">Item one</span>
                                        </a>
                                    </li>
                                    <li class="main-nav__list-item" nav-item-level="3">
                                        <a href="#" class="main-nav__link">
                                            <span class="main-nav__text">Item two</span>
                                        </a>
                                    </li>
                                    <li class="main-nav__list-item" nav-item-level="3">
                                        <a href="#" class="main-nav__link">
                                            <span class="main-nav__text">Item three with a test very loooooong litle</span>
                                        </a>
                                    </li>
                                    <li class="main-nav__list-item" nav-item-level="3">
                                        <a href="#" class="main-nav__link">
                                            <span class="main-nav__text">Item four</span>
                                        </a>
                                    </li>
                                    <li class="main-nav__list-item" nav-item-level="3">
                                        <a href="#" class="main-nav__link">
                                            <span class="main-nav__text">Item five</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="main-nav__list-item" nav-item-level="2" has-subnav>
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Ausweise und Dokumente</span>
                                </a>
                                <span class="main-nav__chevron">
                                    <toujou-icon class="icon" icon-size="l" icon-name="chevron-down" icon-color="background"></toujou-icon>
                                </span>
                                <ul class="main-nav__list" nav-list-level="3">
                                    <li class="main-nav__list-item" nav-item-level="3">
                                        <a href="#" class="main-nav__link">
                                            <span class="main-nav__text">Item one</span>
                                        </a>
                                    </li>
                                    <li class="main-nav__list-item" nav-item-level="3">
                                        <a href="#" class="main-nav__link">
                                            <span class="main-nav__text">Item two</span>
                                        </a>
                                    </li>
                                    <li class="main-nav__list-item" nav-item-level="3">
                                        <a href="#" class="main-nav__link">
                                            <span class="main-nav__text">Item three</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="main-nav__list-item" nav-item-level="2" has-subnav>
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Bauen</span>
                                </a>
                                <span class="main-nav__chevron">
                                    <toujou-icon class="icon" icon-size="l" icon-name="chevron-down" icon-color="background"></toujou-icon>
                                </span>
                                <ul class="main-nav__list" nav-list-level="3">
                                    <li class="main-nav__list-item" nav-item-level="3">
                                        <a href="#" class="main-nav__link">
                                            <span class="main-nav__text">Item one</span>
                                        </a>
                                    </li>
                                    <li class="main-nav__list-item" nav-item-level="3">
                                        <a href="#" class="main-nav__link">
                                            <span class="main-nav__text">Item two</span>
                                        </a>
                                    </li>
                                    <li class="main-nav__list-item" nav-item-level="3">
                                        <a href="#" class="main-nav__link">
                                            <span class="main-nav__text">Item three</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">This is a 2nd level item with a very very long text</span>
                                </a>
                            </li>
                            <li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Erbschaft und Testament</span>
                                </a>
                            </li>
                            <li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Familie und Partnerschaften</span>
                                </a>
                            </li><li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Freiwilligedienste</span>
                                </a>
                            </li>
                            <li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Geburt</span>
                                </a>
                            </li>
                            <li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Gesellschaft und Politik</span>
                                </a>
                            </li><li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Gesundheit und Vorsorge</span>
                                </a>
                            </li>
                            <li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Heirat</span>
                                </a>
                            </li><li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Jugend</span>
                                </a>
                            </li><li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Kinderbetreeung</span>
                                </a>
                            </li><li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Kirchen und Religion</span>
                                </a>
                            </li><li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Kultur und Freizeit</span>
                                </a>
                            </li>
                            <li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Leben mit Behinderung</span>
                                </a>
                            </li>
                            <li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Mobilität</span>
                                </a>
                            </li>
                            <li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Natur und Umwelt</span>
                                </a>
                            </li>
                            <li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Notlagen- und Opferhilfen</span>
                                </a>
                            </li>
                            <li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Online-Informationen</span>
                                </a>
                            </li>
                            <li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Reisen</span>
                                </a>
                            </li>
                            <li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Ruhestand</span>
                                </a>
                            </li>
                            <li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Schule</span>
                                </a>
                            </li>
                            <li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Sicherheit</span>
                                </a>
                            </li>
                            <li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Sterbefall</span>
                                </a>
                            </li>
                            <li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Steuern und Abgaben</span>
                                </a>
                            </li>
                            <li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Studium</span>
                                </a>
                            </li>
                            <li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Tierhaltung und Jagd</span>
                                </a>
                            </li>
                            <li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Umzug</span>
                                </a>
                            </li>
                            <li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Waren und Dienstleistungen</span>
                                </a>
                            </li>
                            <li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Wohnen</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="main-nav__list-item" nav-item-level="1">
                        <a href="#" class="main-nav__link">
                            <span class="main-nav__text">Online-Terminvergabe</span>
                        </a>
                    </li>
                    <li class="main-nav__list-item" nav-item-level="1"  has-subnav>
                        <a href="#" class="main-nav__link">
                            <span class="main-nav__text">Häufige Fragen</span>
                        </a>
                        <span class="main-nav__chevron" tabindex="0">
                            <toujou-icon class="icon" icon-size="l" icon-name="chevron-down" icon-color="background"></toujou-icon>
                        </span>
                        <ul class="main-nav__list" nav-list-level="2">
                            <li class="main-nav__list-item" nav-item-level="2" has-subnav>
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Arbeit und Beruf</span>
                                </a>
                                <span class="main-nav__chevron">
                                    <toujou-icon class="icon" icon-size="l" icon-name="chevron-down" icon-color="background"></toujou-icon>
                                </span>
                                <ul class="main-nav__list" nav-list-level="3">
                                    <li class="main-nav__list-item" nav-item-level="3">
                                        <a href="#" class="main-nav__link">
                                            <span class="main-nav__text">Item one</span>
                                        </a>
                                    </li>
                                    <li class="main-nav__list-item" nav-item-level="3">
                                        <a href="#" class="main-nav__link">
                                            <span class="main-nav__text">Item two</span>
                                        </a>
                                    </li>
                                    <li class="main-nav__list-item" nav-item-level="3">
                                        <a href="#" class="main-nav__link">
                                            <span class="main-nav__text">Item three</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Ausweise und Dokumente</span>
                                </a>
                            </li>
                            <li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Bauen</span>
                                </a>
                            </li>
                            <li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Berufsausbildung</span>
                                </a>
                            </li>
                            <li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Erbschaft und Testament</span>
                                </a>
                            </li>
                            <li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Familie und Partnerschaften</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>

             <nav class="service-nav">
                <a href="#" class="service-nav__link">Impressum</a>
                <a href="#" class="service-nav__link">Datenschutz</a>
                <a href="#" class="service-nav__link">Kontakt</a>
                <a href="#" class="service-nav__link">About us</a>
                <a href="#" class="service-nav__link">Gender at work</a>
            </nav>

        </toujou-topbar>

        <main>
            <toujou-breadcrumb role="navigation" aria-label="Breadcrumb" class="breadcrumb">
                <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--open">
                    <toujou-icon class="icon breadcrumb__toggle-icon" icon-name="arrow-left"></toujou-icon>
                </button>

                <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--close">
                    <toujou-icon class="icon breadcrumb__toggle-icon" icon-name="close"></toujou-icon>
                </button>

                <ol class="breadcrumb__list" slot="list">
                    <li class="breadcrumb__item">
                        <a href="#" class="breadcrumb__link">Home</a>
                    </li>
                </ol>
            </toujou-breadcrumb>
            <toujou-text-block class="text-block" text-block-column-count="1">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h1>Left aligned H1 headline</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>

            <toujou-text-block class="text-block" text-block-column-count="1">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h1>Left aligned H1 headline</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <h2>Left aligned H1 headline</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <h2>Left aligned H1 headline</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <h2>Left aligned H1 headline</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <h2>Left aligned H1 headline</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>
        </main>
    `;
};

export const Topbar = Template.bind({});

Topbar.args = {
    navigationColor: 'default',
    titleType: 'logo',
    logoSize: 'medium',
    noTransitions: false,
    showLanguagePicker: true,
}
