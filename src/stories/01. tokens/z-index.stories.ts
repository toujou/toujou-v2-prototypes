import { Meta } from '@storybook/web-components';

export default {
    title: 'TOKENS/ZIndex',
    argTypes: {}
} satisfies Meta;


const ZIndexTemplate = () => {
    return `
        <h1 class="tokens-demo__title">Z-index tokens</h1>

        <p>We have the following z-index tokens:</p>

        <ul>
            <li><code style="z-index: var(--z-index-content);">--z-index-content: 1;</code></li>
            <li><code style="z-index: var(--z-index-pn-nav);">--z-index-pn-nav: 30;</code></li>
            <li><code style="z-index: var(--z-index-top-button);">--z-index-top-button: 50;</code></li>
            <li><code style="z-index: var(--z-index-spinner);">--z-index-spinner: 75;</code></li>
            <li><code style="z-index: var(--z-index-inpage-nav);">--z-index-inpage-nav: 150;</code></li>
            <li><code style="z-index: var(--z-index-sticky-nav);">--z-index-sticky-nav: 200;</code></li>
            <li><code style="z-index: var(--z-index-topbar);">--z-index-topbar: 500;</code></li>
            <li><code style="z-index: var(--z-index-nav);">--z-index-nav: 1000;</code></li>
            <li><code style="z-index: var(--z-index-notifications);">--z-index-notifications: 2000;</code></li>
            <li><code style="z-index: var(--z-index-backdrop);">--z-index-backdrop: 3000;</code></li>
            <li><code style="z-index: var(--z-index-contact-box);">--z-index-contact-box: 3500;</code></li>
            <li><code style="z-index: var(--z-index-modal);">--z-index-modal: 10000;</code></li>
            <li><code style="z-index: var(--z-index-consent);">--z-index-consent: 15000;</code></li>
            <li><code style="z-index: var(--z-index-overlay);">--z-index-overlay: 50000;</code></li>
            <li><code style="z-index: var(--z-index-important);">--z-index-important: 2147483647;</code> (use only if really necessary)</li>
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
