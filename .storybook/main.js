export default {
    "stories": [
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-a11y",
        "@chromatic-com/storybook"
    ],
    "framework": {
        name: "@storybook/web-components-vite",
        options: {}
    },
    "staticDirs": [
        "../assets",
        // Legacy absolute-URL approach: serves icons from the server root.
        // /assets/icons folder is needed on toujou's kojo theme implementation
        { "from": "../assets/themes/kojo/icons", "to": "/assets/icons" },

        // Dev-mode fix: the theme CSS is served from source via `?url` (themes-config.js) with
        // relative icon urls `url('../assets/icons/...')`. From the served stylesheet at
        // /src/themes/kojo/styles/<theme>.css that resolves to /src/themes/kojo/assets/icons.
        // staticDirs cannot interpolate VITE_THEME, so this is keyed to the default theme (kojo),
        // matching the existing mount above (only kojo ships icon assets).
        { "from": "../assets/themes/kojo/icons", "to": "/src/themes/kojo/assets/icons" },
    ],
    "features": {
        // Disable interactive onboarding checklist widget on the sidebar
        "sidebarOnboardingChecklist": false,
    }
};
