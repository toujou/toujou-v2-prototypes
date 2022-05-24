module.exports = {
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-controls",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "storybook-addon-xd-designs/register"
    ],
    "framework": "@storybook/web-components",
    "core": {
        "builder": "@storybook/builder-vite"
    }
};