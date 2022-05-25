import { Meta } from '@storybook/web-components';

export default {
    title: 'TOKENS/Shadows',
    argTypes: {}
} as Meta;


const ShadowsTemplate = () => {
    return `
        <style>       
            body {
                background-color: var(--demo-color-grey-light);
                min-height: 100%;
            }
        </style>
        
        <h1 class="tokens-demo__title">Shadow tokens</h1>
        
        <div class="tokens-demo__shadows-container">
            <div class="tokens-demo__shadow-box shadow-none">None</div>
            <div class="tokens-demo__shadow-box shadow-small">s</div>
            <div class="tokens-demo__shadow-box shadow-normal">normal</div>
            <div class="tokens-demo__shadow-box shadow-large">l</div>
            <div class="tokens-demo__shadow-box shadow-x-large">xl</div>
        </div>        
    `;
}

export const Shadows = ShadowsTemplate.bind({});
