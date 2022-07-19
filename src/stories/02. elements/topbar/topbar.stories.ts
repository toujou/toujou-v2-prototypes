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
        <toujou-topbar class="topbar">
            <img src="${logoImage}" alt="logo" class="topbar__logo">
            
            <nav class="service-nav" aria-label="Service navigation">
                <a href="#" class="service-nav__link">
                    <span class="service-nav__text">Hoher Kontrast</span>
                    <toujou-icon icon-name="article" icon-color="font" icon-size="normal" class="icon"></toujou-icon>
                </a>
                <a href="#" class="service-nav__link">
                    <span class="service-nav__text">Suche</span>
                    <toujou-icon icon-name="search" icon-color="font" icon-size="normal" class="icon"></toujou-icon>
                </a>
            </nav>
            
            <nav class="main-nav" aria-label="Main navigation">
                <ul class="main-nav__list">
                    <li class="main-nav__list-item" nav-level="1">
                        <a href="#" class="main-nav__link">
                            <span class="main-nav__text">Startseite</span>
                        </a>
                    </li>
                    <li class="main-nav__list-item" nav-level="1">
                        <a href="#" class="main-nav__link">
                            <span class="main-nav__text">Startseite</span>
                        </a>
                    </li>
                </ul>
            </nav>

        </toujou-topbar>   
    `;
};

export const Topbar = Template.bind({});


