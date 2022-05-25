import { Meta } from '@storybook/web-components';

export default {
    title: 'TOKENS/Border',
    argTypes: {}
} as Meta;


const BorderTemplate = () => {
    return `
        <style>       
            body {
                background-color: var(--demo-color-grey-light);
                min-height: 100%;
            }
        </style>
        
        <h1 class="tokens-demo__title">Border tokens</h1>
                
        <div class="tokens-demo__border-container">
            <div class="tokens-demo__border-box border-normal">N</div>
            <div class="tokens-demo__border-box border-m">M</div>
            <div class="tokens-demo__border-box border-l">L</div>
        </div>  
   
    `;
}

export const Border = BorderTemplate.bind({});
