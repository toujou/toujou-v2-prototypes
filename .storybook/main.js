export default {
    "stories": [
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
        "../src/**/*.docs.mdx",
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
    "docs": {
        "defaultName": "z_Docs" // stupid hack to make the Docs always come as last
    }
};
