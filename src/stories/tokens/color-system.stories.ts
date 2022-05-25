import { Meta } from '@storybook/web-components';

export default {
    title: 'TOKENS/Color',
    argTypes: {}
} as Meta;


const ColorsTemplate = () => {
    return `
        <h1 class="tokens-demo__title">Color tokens</h1>
        
        <h2 class="tokens-demo__subtitle">Background color</h2>
        <div class="tokens-demo__color-stripe bg-color-bg">Primary</div>

        <h2 class="tokens-demo__subtitle">Success color</h2>
        <div class="tokens-demo__color-stripe bg-color-success">Success</div>
        
        <h2 class="tokens-demo__subtitle">Warning color</h2>
        <div class="tokens-demo__color-stripe bg-color-warning">Warning</div>
        
        <h2 class="tokens-demo__subtitle">Error color</h2>
        <div class="tokens-demo__color-stripe bg-color-error">Error</div>
    `;
}

export const SystemColors = ColorsTemplate.bind({});
