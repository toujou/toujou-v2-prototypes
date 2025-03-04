export default {
    "stories": [
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    "addons": [
        "@storybook/addon-controls",
        "@storybook/addon-links",
        "@storybook/addon-docs",
        "@storybook/addon-essentials",
        "@storybook/addon-a11y",
        "@geometricpanda/storybook-addon-badges",
        "storybook-addon-fetch-mock",
        "@chromatic-com/storybook"
    ],
    "framework": {
        name: "@storybook/web-components-vite",
        options: {}
    },
    "staticDirs": ["../assets"],
};
