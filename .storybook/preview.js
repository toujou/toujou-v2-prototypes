import { definePreview } from '@storybook/web-components-vite';

// ─── Theme config ──────────────────────────────────────────────────────────────
import { THEMES, DEFAULT_THEME } from './config-utils/themes-config';
import { setThemeStylesheets } from './config-utils/set-theme-stylesheets';
import toujouBranding from './config-utils/storybook-branding.js';

// ─── Viewport config ───────────────────────────────────────────────────────────
import { customViewports } from './config-utils/custom-viewports.js';
import { INITIAL_VIEWPORTS } from 'storybook/viewport';

// ─── Component imports ─────────────────────────────────────────────────────────
import './component-imports/ui-components';
import './component-imports/web-components';
import './component-imports/kojo-components';
import './component-imports/mock-components';

// ─── Preview config ────────────────────────────────────────────────────────────
export default definePreview({
    globalTypes: {
        toujouTheme: {
            description: 'Theme',
            toolbar: {
                icon: 'lightning',
                dynamicTitle: true,
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
            },
        },
        options: {
            storySort: {
                method: 'alphabetic',
                includeNames: true,
                order: [
                    'COMPONENTS',
                    [
                        [
                            'Tourism',
                            ['*', ['*', 'Docs']],
                        ],
                        '*',
                        ['*', 'Docs'],
                    ],
                    'TOKENS',
                    'PAGES',
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
    ],
});
