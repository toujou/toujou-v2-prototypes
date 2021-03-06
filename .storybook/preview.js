import "../src/components/toujou-blockquote/toujou-blockquote";
import "../src/components/toujou-breadcrumb/toujou-breadcrumb";
import "../src/components/toujou-button/toujou-button";
import "../src/components/toujou-details/toujou-details";
import "../src/components/toujou-details-accordion/toujou-details-accordion";
import "../src/components/toujou-slider/toujou-slider";
import "../src/components/toujou-gallery/toujou-gallery";
import "../src/components/toujou-overlay/toujou-overlay";
import "../src/components/toujou-burger-button/toujou-burger-button";
import "../src/components/toujou-sliding-nav/toujou-sliding-nav";
import "../src/components/toujou-topbar/toujou-topbar";

import "../src/styles/StorybookStyles.css";

import { badgeCustomConfig } from "./configUtils/badgeCustomConfig.js";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { customViewports } from "./configUtils/customViewports.js";

import toujouTheme from "./toujouTheme";

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