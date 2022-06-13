import { Meta } from '@storybook/web-components';

export default {
    title: 'TOKENS/BorderRadius',
    argTypes: {}
} as Meta;


const BorderRadiusTemplate = () => {
    return `
        <h1 class="tokens-demo__title">Border radius tokens</h1>
                
        <div class="tokens-demo__border-radius-container">
            <div class="tokens-demo__border-radius-box border-radius-0">0</div>
            <div class="tokens-demo__border-radius-box border-radius-xs">XS</div>
            <div class="tokens-demo__border-radius-box border-radius-s">S</div>
            <div class="tokens-demo__border-radius-box border-radius-normal">Normal</div>
            <div class="tokens-demo__border-radius-box border-radius-m">M</div>
            <div class="tokens-demo__border-radius-box border-radius-l">L</div>
            <div class="tokens-demo__border-radius-box border-radius-xl">XL</div>
            <div class="tokens-demo__border-radius-box border-radius-xxl">XXL</div>
            <div class="tokens-demo__border-radius-box border-radius-xxxl">XXXL</div>
            <div class="tokens-demo__border-radius-box border-radius-xxxxl">XXXXL</div>
            <div class="tokens-demo__border-radius-box border-radius-circle">Circle</div>
        </div>  
   
    `;
}

export const BorderRadius = BorderRadiusTemplate.bind({});
