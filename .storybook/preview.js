import { definePreview } from '@storybook/web-components-vite';

// Import js for the Storybook preview
import '../src/themes/kojo/js/globals';

// UI components
import './componentImports/ui-components';

// Kojo-specific components
import './componentImports/kojo-components';

// Mock components
import './componentImports/mock-components';

// Config
import toujouBranding from "./configUtils/storybookToujouBranding";
import { customViewports } from "./configUtils/customViewports";
import { INITIAL_VIEWPORTS } from 'storybook/viewport';
import { THEMES, DEFAULT_THEME } from './configUtils/themesConfig';
import { setThemeStylesheets } from "./configUtils/setThemeStylesheets";

// Hacks
import './configUtils/mainNavHack';

// Export everything in one default block
export default definePreview({
    globalTypes: {
        toujouTheme: {
            description: 'Theme',
            toolbar: {
                icon: 'lightning',
                title: 'Theme',
                items: THEMES,
            },
        },
    },
    initialGlobals: {
        toujouTheme: DEFAULT_THEME,
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
        viewport: {
            options: {
                ...customViewports,
                ...INITIAL_VIEWPORTS,
            }
        },
        options: {
            storySort: {
                method: 'alphabetic',
                includeNames: true,
                order: [
                    'COMPONENTS', // Sort COMPONENTS folder first
                    [
                        [
                            "Tourism", // Sort the "Tourism" folder
                            [
                                "*", // Sort stories within "Tourism" alphabetically
                                ["*", "Docs"] // Place "Docs" after each story in "Tourism"
                            ],
                        ],
                        "*", // Then sort all other component folders
                        ["*", "Docs"] // Place "Docs" after each of the other component folders
                    ],
                    'TOKENS', // Then TOKENS folder
                    'PAGES', // Then PAGES folder
                ],
            },
            selectedPanel: 'storybook/controls/panel',
        },
    },
    decorators: [
        (Story, context) => {
            setThemeStylesheets(context);
            return Story();
        },
    ]
});
