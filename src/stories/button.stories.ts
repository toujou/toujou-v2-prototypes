import { Meta } from '@storybook/web-components';

export default {
    title: 'Toujou/Button',
} as Meta;

export const Primary = () => `<button class="button button--primary">Primary button</button>`
export const Secondary = () => `<button class="button button--secondary">Secondary button</button>`
export const Font = () => `<button class="button button--font">Font button</button>`
export const PrimaryShadow = () => `<button class="button button--primary button--shadow">Primary shadow button</button>`
export const SecondaryShadow = () => `<button class="button button--secondary button--shadow">Secondary shadow button</button>`
export const FontShadow = () => `<button class="button button--secondary button--shadow">Font shadow button</button>`
