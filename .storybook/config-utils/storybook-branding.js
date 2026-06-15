/**
 * Create own styles for the toujou V2 Storybook
 */

import { create } from 'storybook/theming';

const bgColor = '#383838';

export default create({
    base: 'dark',
    brandTitle: 'Toujou V2 Storybook',
    brandUrl: 'https://meet-kojo.toujou.net/',
    brandTarget: '_blank',
    appBg: bgColor,
    barBg: bgColor,
    inputBg: bgColor,
    colorSecondary: '#00d7fd',
})
