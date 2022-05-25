import { Meta } from '@storybook/web-components';

export default {
    title: 'TOKENS/Spacing',
    argTypes: {}
} as Meta;


const SpacingTemplate = () => {
    return `
        <style>       
            body {
                background-color: var(--demo-color-grey-light);
                min-height: 100%;
            }
        </style>
        
        <h1 class="tokens-demo__title">Spacing tokens</h1>
        
        <p>Example of squares with the size of the spacing tokens</p>
        
        <div class="tokens-demo__spacing-square-container">
            <div class="tokens-demo__spacing-square-box size-xxxxl"></div>
            <div class="tokens-demo__spacing-square-box size-xxxl"></div>
            <div class="tokens-demo__spacing-square-box size-xxl"></div>
            <div class="tokens-demo__spacing-square-box size-xl"></div>
            <div class="tokens-demo__spacing-square-box size-l"></div>
            <div class="tokens-demo__spacing-square-box size-m"></div>
            <div class="tokens-demo__spacing-square-box size-normal"></div>
            <div class="tokens-demo__spacing-square-box size-s"></div>
            <div class="tokens-demo__spacing-square-box size-xs"></div>
        </div>  
        
        <p>Example of the spacing tokens applied to the padding of the boxes</p>
        
        <div class="tokens-demo__spacing-container">
            <div class="tokens-demo__spacing-box padding-xs">XS</div>
            <div class="tokens-demo__spacing-box padding-s">S</div>
            <div class="tokens-demo__spacing-box padding-normal">N</div>
            <div class="tokens-demo__spacing-box padding-m">M</div>
            <div class="tokens-demo__spacing-box padding-l">L</div>
            <div class="tokens-demo__spacing-box padding-xl">XL</div>
            <div class="tokens-demo__spacing-box padding-xxl">XXL</div>
            <div class="tokens-demo__spacing-box padding-xxxl">XXXL</div>
            <div class="tokens-demo__spacing-box padding-xxxxl">XXXXL</div>
        </div>        
    `;
}

export const Spacing = SpacingTemplate.bind({});
