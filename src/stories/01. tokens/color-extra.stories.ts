import { Meta } from '@storybook/web-components';

export default {
    title: 'TOKENS/Color',
    argTypes: {}
} as Meta;


const ColorsTemplate = () => {
    return `
        <h1 class="tokens-demo__title">Color tokens</h1>
        
        <h2 class="tokens-demo__subtitle margin-top-xl">Extra colors</h2>
        <div class="tokens-demo__color-stripe bg-color-black-o-75">Black 75% opacity</div>
        
    `;
}

export const ColorExtra = ColorsTemplate.bind({});
