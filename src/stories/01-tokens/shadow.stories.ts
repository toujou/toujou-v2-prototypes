import { Meta } from '@storybook/web-components-vite';

export default {
    title: 'TOKENS/Shadow',
    argTypes: {}
} satisfies Meta;

const ShadowsTemplate = () => {
    return `
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

export const Shadow = ShadowsTemplate.bind({});
