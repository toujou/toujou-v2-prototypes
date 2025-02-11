// Import styles for the Storybook preview
import '../src/js/globals';
import '../src/styles/StorybookStyles.css';

// UI components
import './componentImports/ui-components';

// Kojo-specific components
import './componentImports/kojo-components';

// Config
import toujouBranding from "./configUtils/storybookToujouBranding";
import { badgeCustomConfig } from "./configUtils/badgeCustomConfig";
import { customViewports } from "./configUtils/customViewports";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
// import { setThemeStylesheets } from "./configUtils/setThemeStylesheets";

// Hacks
import './configUtils/mainNavHack';

// Export everything in one default block
export default {
    globalTypes: {
        toujouTheme: {
            description: 'Theme',
            toolbar: {
                icon: 'box',
                title: 'Theme',
                items: [
                    { value: 'toujou', title: 'Toujou' },
                    { value: 'kojo', title: 'Kojo' },
                ],
            },
        },
    },
    initialGlobals: {
        toujouTheme: 'kojo',
    },
    parameters: {
        docs: {
            theme: toujouBranding,
        },
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
                method: 'alphabetic',
                includeNames: true,
                order: [
                    'COMPONENTS',
                    ["*", ["*", "Docs"]],
                    'TOKENS',
                    'PAGES',
                ],
            },
            selectedPanel: 'storybook/controls/panel',
        },
        fetchMock: {
            debug: false,
        }
    },
    tags: ["autodocs", 'autodocs'],
    decorators: [
        // This is commented out because it works well on the preview, but not on the deployed storybook
        // (Because the files get different names, with hashes...)
        // (Story, context) => {
        //     setThemeStylesheets(context);
        //     return Story();
        // },
    ]
};

// console.clear();
