/**
 * Create own styles for the toujou V2 Storybook
 */

import { create } from '@storybook/theming';

const bgColor = '#383838';

export default create({
    base: 'dark',
    brandTitle: 'Kojo Theme',
    brandUrl: 'https://toujou.de',
    brandTarget: '_self',

    appBg: bgColor,
    barBg: bgColor,
    inputBg: bgColor,
    colorSecondary: '#00d7fd',
})
