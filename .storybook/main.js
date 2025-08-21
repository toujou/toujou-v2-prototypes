export default {
    "stories": [
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-docs",
        "@storybook/addon-a11y",
        "storybook-addon-fetch-mock",
        "@chromatic-com/storybook"
    ],
    "framework": {
        name: "@storybook/web-components-vite",
        options: {}
    },
    "staticDirs": ["../assets"],
    "docs": {
        "defaultName": "z_Docs" // stupid hack to make the Docs always come as last
    }
};
