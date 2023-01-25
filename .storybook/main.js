module.exports = {
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-controls",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-a11y",
        "storybook-addon-xd-designs/register",
        "@geometricpanda/storybook-addon-badges",
    ],
    "framework": "@storybook/web-components",
    "core": {
        "builder": "@storybook/builder-vite"
    },
};
