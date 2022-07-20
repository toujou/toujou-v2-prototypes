import { Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import topbarDocs from "./topbar.docs.mdx";
// @ts-ignore
import logoImage from '../../../../assets/logoipsum.svg';

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
} as Meta;


const Template = () => {
    return `       
        <toujou-topbar id="topbar" class="topbar">
            <a href="#" class="topbar__logo-link">
                <img src="${logoImage}" alt="logo" class="topbar__logo">
            </a>

            <ul class="topbar__actions">
                <li class="topbar__actions-item">
                    <a href="#" class="topbar__actions-link">
                        <span class="topbar__actions-text">Suche</span>
                        <toujou-icon icon-name="search" icon-color="font" icon-size="l" class="icon"></toujou-icon>
                    </a>
                </li>
            </ul>            

            
            <nav id="mainNavigation" class="main-nav" aria-label="Main navigation">
                <ul class="main-nav__list" nav-list-level="1">
                    <li class="main-nav__list-item" nav-item-level="1">
                        <a href="#" class="main-nav__link">
                            <span class="main-nav__text">Startseite</span>
                        </a>
                    </li>
                    <li class="main-nav__list-item" nav-item-level="1" has-subnav>
                        <a href="#" class="main-nav__link">
                            <span class="main-nav__text">Bürgerservice</span>
                        </a>
                        <span class="main-nav__chevron">
                            <toujou-icon class="icon" icon-size="m" icon-name="chevron-right" icon-color="background"></toujou-icon>
                        </span>
                        <ul class="main-nav__list" nav-list-level="2">
                            <li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Arbeit und Beruf</span>
                                </a>
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

        </toujou-topbar>   
    `;
};

export const Topbar = Template.bind({});


