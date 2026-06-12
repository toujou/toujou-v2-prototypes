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
    "staticDirs": ['../src/themes/kojo/assets'],
    "features": {
        // Disable interactive onboarding checklist widget on the sidebar
        "sidebarOnboardingChecklist": false,
    }
};
