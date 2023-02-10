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
import "../src/components/toujou-sliding-nav/toujou-sliding-nav";
import "../src/components/toujou-topbar/toujou-topbar";
import "../src/components/toujou-cover-slider/toujou-cover-slider";
import "../src/components/toujou-contact-box/toujou-contact-box";
import "../src/components/toujou-media-info/toujou-media-info";
import "../src/components/toujou-topbutton/toujou-topbutton";
import "../src/components/toujou-rating-stars/toujou-rating-stars";
import "../src/components/toujou-estimated-reading-time/toujou-estimated-reading-time";

// COPIED COMPONENTS FROM TOUJOU
import "../src/components/copied/toujou-snackbar/toujou-snackbar";
import "../src/components/copied/toujou-modal/toujou-modal";
import "../src/components/copied/toujou-exit-warning/toujou-exit-warning";
import "../src/components/copied/toujou-inpage-nav/toujou-inpage-nav";
import "../src/components/copied/toujou-consent/toujou-consent";
import "../src/components/copied/toujou-consent-widget/toujou-consent-widget";
import "../src/components/copied/toujou-third-party-content/toujou-third-party-content";

// ELEMENTS FROM @TOUJOU/UI-COMPONENTS
import "@toujou/toujou-spinner/lib";
import "@toujou/toujou-map/lib";

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
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['COMPONENTS', 'TOKENS', 'PAGES']
    }
  }
}

console.clear();
