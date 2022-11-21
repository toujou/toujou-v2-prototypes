import { Story, Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import topbarDocs from "./topbar.docs.mdx";

export default {
    title: 'COMPONENTS/Topbar',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/3d1d0926-79e2-4ae4-aa1c-162dcd451a3a-684e/screen/61e6af1e-563f-4ce8-92ba-ac3b191c5f0c/Desktop',
        },
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: topbarDocs,
        },
        layout: "fullscreen",
    },
    argTypes: {
        navigationTheme: {
            table: {
                category: "Topbar settings",
                defaultValue: { summary: 'light' },
            },
            name: 'Navigation theme',
            description: "Set the navigation theme",
            options: ['light', 'dark'],
            control: { type: 'radio' },
            defaultValue: ['light'],
            required: true,
        },
        titleType: {
            table: {
                category: "Topbar settings",
                defaultValue: { summary: 'logo' },
            },
            name: 'Page title type',
            description: "Toggle between logo or text for the topbar page title",
            options: ['logo', 'text'],
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
    }
} as Meta;

interface TopbarStoryProps {
    navigationTheme: string
    titleType: string
    logoSize: string
}

const Template: Story<TopbarStoryProps> = (args: TopbarStoryProps) => {
    document.documentElement.style.setProperty('--topbar-height', `var(--topbar-height-${args.logoSize})`);

    return `       
        <toujou-topbar id="topbar" class="topbar" navigation-theme="${args.navigationTheme}" logo-size="${args.logoSize}">
            <a href="#" class="topbar__logo-link">
                ${args.titleType === 'logo' ? `
                    <img src="https://via.placeholder.com/300x150.png?text=Logo" alt="logo" class="topbar__logo">
                ` : `
                    <span class="topbar__title">Nice title</span>
                `}
            </a>

            <ul class="topbar__actions">
                <li class="topbar__actions-item">
                    <a href="#" class="topbar__actions-link">
                        <span class="topbar__actions-text">Suche</span>
                        <toujou-icon icon-name="search" icon-color="font" icon-size="xl" class="icon"></toujou-icon>
                    </a>
                </li>
            </ul>            
            
            <nav id="mainNavigation" is="toujou-sliding-nav" class="main-nav" aria-label="Main navigation">
                <button is="toujou-button" class="button main-nav__back-button" button-type="default" button-size="normal" button-variant="primary" button-icon-position="left">
                    <toujou-icon class="icon" icon-color="background" icon-size="m" icon-name="arrow-left"></toujou-icon>
                    Zurück
                </button>
                
                <p class="main-nav__subtitle">this is a test</p>
                
                <ul class="main-nav__list" nav-list-level="1">
                    <li class="main-nav__list-item" nav-item-level="1">
                        <a href="#" class="main-nav__link">
                            <span class="main-nav__text">Startseite</span>
                        </a>
                    </li>
                    <li class="main-nav__list-item" nav-item-level="1" active has-subnav>
                        <a href="#" class="main-nav__link">
                            <span class="main-nav__text">Bürgerservice</span>
                        </a>
                        <span class="main-nav__chevron">
                            <toujou-icon class="icon" icon-size="l" icon-name="chevron-right" icon-color="background"></toujou-icon>
                        </span>
                        <ul class="main-nav__list" nav-list-level="2">
                            <li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Arbeit und Beruf</span>
                                </a>
                            </li>
                            <li class="main-nav__list-item" active nav-item-level="2">
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
                    <li class="main-nav__list-item" nav-item-level="1">
                        <a href="#" class="main-nav__link">
                            <span class="main-nav__text">Häufige Fragen</span>
                        </a>
                    </li>
                </ul>
            </nav>
            
            <toujou-burger-button
                class="burger-button"
                role="button"
                aria-pressed="false"
                aria-haspopup="true"
                aria-controls="mainNavigation"
                aria-expanded="false"
                aria-label="Menu button"
                toggle-element-selector="#topbar"
            >
                <span class="burger-button__line" line-position="top" aria-hidden="true" slot="content"></span>
                <span class="burger-button__line" line-position="middle" aria-hidden="true" slot="content"></span>
                <span class="burger-button__line" line-position="bottom" aria-hidden="true" slot="content"></span>
            </toujou-burger-button>
            
            <nav class="service-nav">
                <a href="#" class="service-nav__link">Impressum</a>
                <a href="#" class="service-nav__link">Datenschutz</a>
            </nav>

        </toujou-topbar>   
        <main>
            <toujou-breadcrumb role="nav" aria-label="Breadcrumb" class="breadcrumb">
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
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>
        </main>
    `;
};

export const Topbar = Template.bind({});

Topbar.args = {
    navigationTheme: 'light',
    titleType: 'logo',
    logoSize: 'medium',
}
