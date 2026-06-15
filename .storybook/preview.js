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

// ─── Shared demo styles ────────────────────────────────────────────────────────
import '../src/shared/styles/storybook-stories-styles/storybook-stories-styles.css';

// Block until the default theme stylesheet is ready.
// Components that pass CSS variables to WebGL (e.g., toujou-map) need variables defined before mount
await setThemeStylesheets({ globals: { toujouTheme: DEFAULT_THEME } });

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
                        ['Tourism', ['*', ['*', 'Docs']]],
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
            // Return a container immediately so the web-components renderer gets a synchronous DOM node,
            // then populate it once the stylesheet is ready
            const container = document.createElement('div');
            container.className = 'toujou-story-wrapper';

            setThemeStylesheets(context).then(() => {
                const result = Story();
                if (typeof result === 'string') {
                    container.innerHTML = result;
                } else if (result instanceof HTMLElement || result instanceof DocumentFragment) {
                    container.replaceChildren(result);
                }
            });

            return container;
        },
    ],
});
