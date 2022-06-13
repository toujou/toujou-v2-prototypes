import { Meta } from '@storybook/web-components';

export default {
    title: 'TOKENS/ZIndex',
    argTypes: {}
} as Meta;


const ZIndexTemplate = () => {
    return `        
        <h1 class="tokens-demo__title">Z-index tokens</h1>
        
        <p>We have the following z-index tokens:</p>
        
        <ul>
            <li><code>--z-index-content: 1;</code></li>
            <li><code>--z-index-top-button: 50;</code></li>
            <li><code>--z-index-consent: 100;</code></li>
            <li><code>--z-index-sticky-nav: 200;</code></li>
            <li><code>--z-index-top-bar: 500;</code></li>
            <li><code>--z-index-nav: 1000;</code></li>
            <li><code>--z-index-notifications: 2000;</code></li>
            <li><code>--z-index-modal: 10000;</code></li>
            <li><code>--z-index-overlay: 50000;</code></li>
            <li><code>--z-index-important: 2147483647;</code> (use only if really necessary)</li>
        </ul>             
        
        <br>
        
        <p>We should still research and find a good system for organizing our z-index</p>
        
        <ul class="list">
            <li>
                <a href="https://tailwindcss.com/docs/z-index">Tailwind z-index</a>
            </li>
            <li>
                <a href="https://getbootstrap.com/docs/5.0/layout/z-index/">Bootstrap z-index</a>
            </li>
            <li>
                <a href="https://mui.com/material-ui/customization/z-index/">Material UI z-index</a>
            </li>
        </ul>
    `;
}

export const ZIndex = ZIndexTemplate.bind({});
