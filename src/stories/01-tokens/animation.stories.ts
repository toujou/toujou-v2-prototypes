import { Meta } from '@storybook/web-components-vite';

export default {
    title: 'TOKENS/Animation',
    argTypes: {}
} satisfies Meta;

const ShadowsTemplate = () => {
    return `
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

        <br>
        <p>The transition and animation are turned off if the user as set <code>prefers-reduced-motion: reduce</code>. You can try it with the browser reduced-motion emulator</p>
    `;
}

export const Animation = ShadowsTemplate.bind({});
