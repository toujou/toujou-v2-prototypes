import { Meta } from '@storybook/web-components';

export default {
    title: 'TOKENS/AspectRatio',
    argTypes: {}
} satisfies Meta;


const ShadowsTemplate = () => {
    return `
        <h1 class="tokens-demo__title">Aspect ratio tokens</h1>

        <div class="tokens-demo__ratios-container">
            <div class="tokens-demo__ratio-box ratio-auto">Auto</div>
            <div class="tokens-demo__ratio-box ratio-square">Square</div>
            <div class="tokens-demo__ratio-box ratio-4-3">4 / 3</div>
            <div class="tokens-demo__ratio-box ratio-golden">Golden</div>
            <div class="tokens-demo__ratio-box ratio-16-9">16 / 9</div>
            <div class="tokens-demo__ratio-box ratio-3-1">3 / 1</div>
        </div>
    `;
}

export const AspectRatio = ShadowsTemplate.bind({});
