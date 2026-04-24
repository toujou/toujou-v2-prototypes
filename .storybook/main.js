export default {
    "stories": [
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
        // "../src/**/*.mdx",
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
    "staticDirs": ["../assets"],
    // "docs": {
    //     "autodocs": "tag"
    // }
};
