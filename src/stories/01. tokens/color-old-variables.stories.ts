import { Meta } from '@storybook/web-components';

export default {
    title: 'TOKENS/Color',
    argTypes: {}
} as Meta;


const ColorsTemplate = () => {
    return `
        <h1 class="tokens-demo__title">Old color variables (old themes)</h1>
        <p>We still need these variables because they are still used on some templates / extensions</p>
        <h2 class="tokens-demo__subtitle">Old color variables</h2>
        <div class="tokens-demo__color-stripe bg-color-old-primary">Primary</div>
        <div class="tokens-demo__color-stripe bg-color-old-primary-light">Primary light</div>
        <div class="tokens-demo__color-stripe bg-color-old-primary-dark">Primary dark</div>
        <br>
        <br>
        <div class="tokens-demo__color-stripe bg-color-old-secondary">Secondary</div>
        <div class="tokens-demo__color-stripe bg-color-old-secondary-light">Secondary light</div>
        <div class="tokens-demo__color-stripe bg-color-old-secondary-dark">Secondary dark</div>
        <br>
        <br>
        <div class="tokens-demo__color-stripe bg-color-old-font">Font</div>
        <div class="tokens-demo__color-stripe bg-color-old-font-light">Font light</div>
        <div class="tokens-demo__color-stripe bg-color-old-font-dark">Font dark</div>
        <br>
        <br>
        <div class="tokens-demo__color-stripe bg-color-old-success">Success</div>
        <div class="tokens-demo__color-stripe bg-color-old-error">Error</div>
        <div class="tokens-demo__color-stripe bg-color-old-warning">Warning</div>
        
    `;
}

export const ColorOldVariables = ColorsTemplate.bind({});
