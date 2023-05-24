module.exports = {
    "stories": [
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-controls",
        "@storybook/addon-links",
        "@storybook/addon-docs",
        "@storybook/addon-essentials",
        "@storybook/addon-a11y",
        "@geometricpanda/storybook-addon-badges"
    ],
    "framework": {
        name: "@storybook/web-components-vite",
        options: {}
    },
    "staticDirs": ["../assets"],
    docs: {
        autodocs: true
    }
};
