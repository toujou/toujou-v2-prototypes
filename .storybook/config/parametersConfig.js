import { badgeCustomConfig } from "../configUtils/badgeCustomConfig.js";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { customViewports } from "../configUtils/customViewports.js";
import toujouBranding from "../configUtils/storybookToujouBranding";

export const parametersConfig = {
    docs: {
        theme: toujouBranding,
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
        // storySort: {
        //     method: 'alphabetic',
        //     includeNames: true,
        //     order: [
        //         'COMPONENTS',
        //         ["*", ["*", "Docs"]],
        //         'TOKENS',
        //         'PAGES',
        //     ],
        // },
        options: {
            storySort: (a, b) =>
                a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true }),
        },
        // Select which addon panel is selected by default
        selectedPanel: 'storybook/controls/panel'
    },
    fetchMock: {
        debug: false,
    }
}
