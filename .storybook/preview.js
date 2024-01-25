import '../src/js/globals';
import "../src/components/toujou-blockquote/toujou-blockquote";
import "../src/components/toujou-breadcrumb/toujou-breadcrumb";
import "../src/components/toujou-button/toujou-button";
import "../src/components/toujou-details/toujou-details";
import "../src/components/toujou-details-accordion/toujou-details-accordion";
import "../src/components/toujou-slider/toujou-slider";
import "../src/components/toujou-portfolio-gallery/toujou-portfolio-gallery";
import "../src/components/toujou-overlay/toujou-overlay";
import "../src/components/toujou-burger-button/toujou-burger-button";
import "../src/components/toujou-topbar/toujou-topbar";
import "../src/components/toujou-cover-slider/toujou-cover-slider";
import "../src/components/toujou-estimated-reading-time/toujou-estimated-reading-time";
import "../src/components/toujou-clamped-content/toujou-clamped-content";
import "../src/components/toujou-main-nav/toujou-main-nav";

// COPIED COMPONENTS FROM TOUJOU
import "../src/components/copied/toujou-modal/toujou-modal";
import "../src/components/copied/toujou-consent/toujou-consent";
import "../src/components/copied/toujou-consent-widget/toujou-consent-widget";
import "../src/components/copied/toujou-third-party-content/toujou-third-party-content";

// ELEMENTS FROM @TOUJOU/UI-COMPONENTS
import "@toujou/toujou-contact-box/lib";
import "@toujou/toujou-exit-warning/lib";
import "@toujou/toujou-inpage-nav/lib";
import "@toujou/toujou-map/lib";
import "@toujou/toujou-media-info/lib";
import "@toujou/toujou-rating-stars/lib";
import "@toujou/toujou-snackbar/lib";
import "@toujou/toujou-spinner/lib";
import "@toujou/toujou-timeline/lib";
import "@toujou/toujou-topbutton/lib";
import "@toujou/toujou-input-password-toggle/lib";
import "@toujou/toujou-lazy-render/lib";

// custom styles for the storybook website
import "../src/styles/StorybookStyles.css";

import { badgeCustomConfig } from "./configUtils/badgeCustomConfig.js";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { customViewports } from "./configUtils/customViewports.js";

import toujouTheme from "./toujouTheme";

// Service worker for the mocks
import { initialize, mswDecorator } from "msw-storybook-addon";

let workerOptions = {
    onUnhandledRequest: 'bypass',
};

if (location.hostname === "toujou.github.io") {
    workerOptions.serviceWorker = {
        url: "/toujou-v2-prototypes/assets/mockServiceWorker.js"
    }
}

// When the msw is working, some stories don't work correctly (for instance slider) when the inspector is open
// Somehow the msw trigger a page refresh when the inspector is open
// initialize(workerOptions);

export const decorators = [mswDecorator];

export const parameters = {
    docs: {
        theme: toujouTheme,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
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
        }
    },
}

console.clear();
