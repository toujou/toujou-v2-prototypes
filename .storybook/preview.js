import '../src/js/globals';
import "../src/components/toujou-blockquote/toujou-blockquote";
import "../src/components/toujou-breadcrumb/toujou-breadcrumb";
import "../src/components/toujou-details/toujou-details";
import "../src/components/toujou-details-accordion/toujou-details-accordion";
import "../src/components/toujou-slider/toujou-slider";
import "../src/components/toujou-portfolio-gallery/toujou-portfolio-gallery";
import "../src/components/toujou-overlay/toujou-overlay";
import "../src/components/toujou-burger-button/toujou-burger-button";
import "../src/components/toujou-topbar/toujou-topbar";
import "../src/components/toujou-cover-slider/toujou-cover-slider";
import "../src/components/toujou-clamped-content/toujou-clamped-content";

// COPIED COMPONENTS FROM TOUJOU
import "../src/components/copied/toujou-modal/toujou-modal";

// ELEMENTS FROM @TOUJOU/UI-COMPONENTS
import "@toujou/toujou-button/lib";
import "@toujou/toujou-contact-box/lib";
import "@toujou/toujou-estimated-reading-time/lib";
import "@toujou/toujou-exit-warning/lib";
import "@toujou/toujou-inpage-nav/lib";
import "@toujou/toujou-input-password-toggle/lib";
import "@toujou/toujou-lazy-render/lib";
import "@toujou/toujou-map/lib";
import "@toujou/toujou-media-info/lib";
import "@toujou/toujou-spinner/lib";
import "@toujou/toujou-rating-stars/lib";
import "@toujou/toujou-snackbar/lib";
import "@toujou/toujou-timeline/lib";
import "@toujou/toujou-topbutton/lib";
import "@toujou/toujou-counter/lib";
import "@toujou/toujou-consent/lib";
import "@toujou/toujou-iframe-resizer/lib";

// custom styles for the storybook website
import "../src/styles/StorybookStyles.css";

// Config
import { badgeCustomConfig } from "./configUtils/badgeCustomConfig.js";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { customViewports } from "./configUtils/customViewports.js";

import toujouTheme from "./toujouTheme";
import { initMainNav } from "../src/js/elements/main-nav";

export const parameters = {
    docs: {
        theme: toujouTheme,
    },
    // actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
        expanded: true,
    },
    badgesConfig: badgeCustomConfig,
    viewport: {
        viewports: {
            ...customViewports,
            ...INITIAL_VIEWPORTS,
        }
    },
    /* Sort stories in correct order. Components children are sorted so "Docs" is always the last element */
    options: {
        storySort: {
            method: 'alphabetic',
            includeNames: true,
            order: [
                'COMPONENTS',
                ["*", ["*", "Docs"]],
                'TOKENS',
                'PAGES',
            ],
        },
        // Select which addon panel is selected by default
        selectedPanel: 'storybook/controls/panel'
    },
    fetchMock: {
        debug: false,
    }
}

// Hack no initialize the main nav inside Storybook
setTimeout(() => {
    console.log('initing Preview.js custom mainNav initialization');

    const mainNavEl = document.querySelector('.main-nav');

    if (!mainNavEl || mainNavEl.mainNav) return;
    initMainNav();
}, 500)

console.clear();
export const tags = ["autodocs"];
