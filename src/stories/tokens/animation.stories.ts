import { Meta } from '@storybook/web-components';

export default {
    title: 'TOKENS/Animation',
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
        
        <h1 class="tokens-demo__title">Animation tokens</h1>
        
        <div class="tokens-demo__animation-container">
            <div class="tokens-demo__animation-track">
                <div class="tokens-demo__animation-box animation-slow">Slow</div>
            </div>
            <div class="tokens-demo__animation-track">
                <div class="tokens-demo__animation-box animation-normal">Normal</div>
            </div>
            <div class="tokens-demo__animation-track">
                <div class="tokens-demo__animation-box animation-fast">Fast</div>
            </div>
            <div class="tokens-demo__animation-track">
                <div class="tokens-demo__animation-box animation-very-fast">Very fast</div>
            </div>
        </div>        
    `;
}

export const Animation = ShadowsTemplate.bind({});
