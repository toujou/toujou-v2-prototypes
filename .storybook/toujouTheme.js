import { create } from '@storybook/theming';

const bgColor = '#383838';

export default create({
    base: 'dark',
    brandTitle: 'Toujou V2',
    brandUrl: 'https://toujou.de',
    brandTarget: '_self',

    appBg: bgColor,
    barBg: bgColor,
    inputBg: bgColor,
    colorSecondary: '#0092b7'
})