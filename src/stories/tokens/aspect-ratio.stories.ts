import { Meta } from '@storybook/web-components';

export default {
    title: 'TOKENS/AspectRatio',
    argTypes: {}
} as Meta;


const ShadowsTemplate = () => {
    return `
        <style>       
            body {
                background-color: #ECF0F1;
                min-height: 100%;
            }
        </style>
        
        <h1 class="tokens-demo__title">Aspect ratio tokens</h1>
        
        <div class="tokens-demo__ratios-container">
            <div class="tokens-demo__ratio-box ratio-square">Square</div>
            <div class="tokens-demo__ratio-box ratio-4-3">4 / 3</div>
            <div class="tokens-demo__ratio-box ratio-golden">Golden</div>
            <div class="tokens-demo__ratio-box ratio-16-9">16 / 9</div>
        </div>        
    `;
}

export const AspectRatio = ShadowsTemplate.bind({});
