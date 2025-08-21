import { Meta } from '@storybook/web-components-vite';

export default {
    title: 'TOKENS/Color',
    argTypes: {}
} satisfies Meta;

const ColorsTemplate = () => {
    return `
        <h1 class="tokens-demo__title">Color tokens</h1>

        <h2 class="tokens-demo__subtitle">Font color</h2>
        <div class="tokens-demo__color-stripe bg-color-font">Font</div>
        <div class="tokens-demo__swatch">
            <p class="tokens-demo__swatch-title">Opacity</p>
            <div class="tokens-demo__swatch-item bg-color-font"></div>
            <div class="tokens-demo__swatch-item bg-color-font custom-color-o-90"></div>
            <div class="tokens-demo__swatch-item bg-color-font custom-color-o-80"></div>
            <div class="tokens-demo__swatch-item bg-color-font custom-color-o-70"></div>
            <div class="tokens-demo__swatch-item bg-color-font custom-color-o-60"></div>
            <div class="tokens-demo__swatch-item bg-color-font custom-color-o-50"></div>
            <div class="tokens-demo__swatch-item bg-color-font custom-color-o-40"></div>
            <div class="tokens-demo__swatch-item bg-color-font custom-color-o-30"></div>
            <div class="tokens-demo__swatch-item bg-color-font custom-color-o-20"></div>
            <div class="tokens-demo__swatch-item bg-color-font custom-color-o-10"></div>
            <div class="tokens-demo__swatch-item bg-color-font custom-color-o-0"></div>
        </div>
        <div class="tokens-demo__swatch">
            <p class="tokens-demo__swatch-title">Lightness</p>
            <div class="tokens-demo__swatch-item bg-color-font custom-color-l-0"></div>
            <div class="tokens-demo__swatch-item bg-color-font custom-color-l-10"></div>
            <div class="tokens-demo__swatch-item bg-color-font custom-color-l-20"></div>
            <div class="tokens-demo__swatch-item bg-color-font custom-color-l-30"></div>
            <div class="tokens-demo__swatch-item bg-color-font custom-color-l-40"></div>
            <div class="tokens-demo__swatch-item bg-color-font custom-color-l-50"></div>
            <div class="tokens-demo__swatch-item bg-color-font custom-color-l-60"></div>
            <div class="tokens-demo__swatch-item bg-color-font custom-color-l-70"></div>
            <div class="tokens-demo__swatch-item bg-color-font custom-color-l-80"></div>
            <div class="tokens-demo__swatch-item bg-color-font custom-color-l-90"></div>
            <div class="tokens-demo__swatch-item bg-color-font custom-color-l-100"></div>
        </div>
        <div class="tokens-demo__swatch">
            <p class="tokens-demo__swatch-title">Saturation</p>
            <div class="tokens-demo__swatch-item bg-color-font custom-color-s-90"></div>
            <div class="tokens-demo__swatch-item bg-color-font custom-color-s-90"></div>
            <div class="tokens-demo__swatch-item bg-color-font custom-color-s-80"></div>
            <div class="tokens-demo__swatch-item bg-color-font custom-color-s-70"></div>
            <div class="tokens-demo__swatch-item bg-color-font custom-color-s-60"></div>
            <div class="tokens-demo__swatch-item bg-color-font custom-color-s-50"></div>
            <div class="tokens-demo__swatch-item bg-color-font custom-color-s-40"></div>
            <div class="tokens-demo__swatch-item bg-color-font custom-color-s-30"></div>
            <div class="tokens-demo__swatch-item bg-color-font custom-color-s-20"></div>
            <div class="tokens-demo__swatch-item bg-color-font custom-color-s-10"></div>
            <div class="tokens-demo__swatch-item bg-color-font custom-color-s-0"></div>
        </div>

        <h2 class="tokens-demo__subtitle margin-top-xl">Font light</h2>
        <div class="tokens-demo__color-stripe bg-color-font-light">Font light</div>
        <div class="tokens-demo__swatch">
            <p class="tokens-demo__swatch-title">Opacity</p>
            <div class="tokens-demo__swatch-item bg-color-font-light custom-color-o-100"></div>
            <div class="tokens-demo__swatch-item bg-color-font-light custom-color-o-90"></div>
            <div class="tokens-demo__swatch-item bg-color-font-light custom-color-o-80"></div>
            <div class="tokens-demo__swatch-item bg-color-font-light custom-color-o-70"></div>
            <div class="tokens-demo__swatch-item bg-color-font-light custom-color-o-60"></div>
            <div class="tokens-demo__swatch-item bg-color-font-light custom-color-o-50"></div>
            <div class="tokens-demo__swatch-item bg-color-font-light custom-color-o-40"></div>
            <div class="tokens-demo__swatch-item bg-color-font-light custom-color-o-30"></div>
            <div class="tokens-demo__swatch-item bg-color-font-light custom-color-o-20"></div>
            <div class="tokens-demo__swatch-item bg-color-font-light custom-color-o-10"></div>
            <div class="tokens-demo__swatch-item bg-color-font-light custom-color-o-0"></div>
        </div>
        <div class="tokens-demo__swatch">
            <p class="tokens-demo__swatch-title">Lightness</p>
            <div class="tokens-demo__swatch-item bg-color-font-light custom-color-l-0"></div>
            <div class="tokens-demo__swatch-item bg-color-font-light custom-color-l-10"></div>
            <div class="tokens-demo__swatch-item bg-color-font-light custom-color-l-20"></div>
            <div class="tokens-demo__swatch-item bg-color-font-light custom-color-l-30"></div>
            <div class="tokens-demo__swatch-item bg-color-font-light custom-color-l-40"></div>
            <div class="tokens-demo__swatch-item bg-color-font-light custom-color-l-50"></div>
            <div class="tokens-demo__swatch-item bg-color-font-light custom-color-l-60"></div>
            <div class="tokens-demo__swatch-item bg-color-font-light custom-color-l-70"></div>
            <div class="tokens-demo__swatch-item bg-color-font-light custom-color-l-80"></div>
            <div class="tokens-demo__swatch-item bg-color-font-light custom-color-l-90"></div>
            <div class="tokens-demo__swatch-item bg-color-font-light custom-color-l-100"></div>
        </div>
        <div class="tokens-demo__swatch">
            <p class="tokens-demo__swatch-title">Saturation</p>
            <div class="tokens-demo__swatch-item bg-color-font-light custom-color-s-100"></div>
            <div class="tokens-demo__swatch-item bg-color-font-light custom-color-s-90"></div>
            <div class="tokens-demo__swatch-item bg-color-font-light custom-color-s-80"></div>
            <div class="tokens-demo__swatch-item bg-color-font-light custom-color-s-70"></div>
            <div class="tokens-demo__swatch-item bg-color-font-light custom-color-s-60"></div>
            <div class="tokens-demo__swatch-item bg-color-font-light custom-color-s-50"></div>
            <div class="tokens-demo__swatch-item bg-color-font-light custom-color-s-40"></div>
            <div class="tokens-demo__swatch-item bg-color-font-light custom-color-s-30"></div>
            <div class="tokens-demo__swatch-item bg-color-font-light custom-color-s-20"></div>
            <div class="tokens-demo__swatch-item bg-color-font-light custom-color-s-10"></div>
            <div class="tokens-demo__swatch-item bg-color-font-light custom-color-s-0"></div>
        </div>

        <h2 class="tokens-demo__subtitle margin-top-xl">Font dark</h2>
        <div class="tokens-demo__color-stripe bg-color-font-dark">Font dark</div>
        <div class="tokens-demo__swatch">
            <p class="tokens-demo__swatch-title">Opacity</p>
            <div class="tokens-demo__swatch-item bg-color-font-dark custom-color-o-100"></div>
            <div class="tokens-demo__swatch-item bg-color-font-dark custom-color-o-90"></div>
            <div class="tokens-demo__swatch-item bg-color-font-dark custom-color-o-80"></div>
            <div class="tokens-demo__swatch-item bg-color-font-dark custom-color-o-70"></div>
            <div class="tokens-demo__swatch-item bg-color-font-dark custom-color-o-60"></div>
            <div class="tokens-demo__swatch-item bg-color-font-dark custom-color-o-50"></div>
            <div class="tokens-demo__swatch-item bg-color-font-dark custom-color-o-40"></div>
            <div class="tokens-demo__swatch-item bg-color-font-dark custom-color-o-30"></div>
            <div class="tokens-demo__swatch-item bg-color-font-dark custom-color-o-20"></div>
            <div class="tokens-demo__swatch-item bg-color-font-dark custom-color-o-10"></div>
            <div class="tokens-demo__swatch-item bg-color-font-dark custom-color-o-0"></div>
        </div>
        <div class="tokens-demo__swatch">
            <p class="tokens-demo__swatch-title">Lightness</p>
            <div class="tokens-demo__swatch-item bg-color-font-dark custom-color-l-0"></div>
            <div class="tokens-demo__swatch-item bg-color-font-dark custom-color-l-10"></div>
            <div class="tokens-demo__swatch-item bg-color-font-dark custom-color-l-20"></div>
            <div class="tokens-demo__swatch-item bg-color-font-dark custom-color-l-30"></div>
            <div class="tokens-demo__swatch-item bg-color-font-dark custom-color-l-40"></div>
            <div class="tokens-demo__swatch-item bg-color-font-dark custom-color-l-50"></div>
            <div class="tokens-demo__swatch-item bg-color-font-dark custom-color-l-60"></div>
            <div class="tokens-demo__swatch-item bg-color-font-dark custom-color-l-70"></div>
            <div class="tokens-demo__swatch-item bg-color-font-dark custom-color-l-80"></div>
            <div class="tokens-demo__swatch-item bg-color-font-dark custom-color-l-90"></div>
            <div class="tokens-demo__swatch-item bg-color-font-dark custom-color-l-100"></div>
        </div>
        <div class="tokens-demo__swatch">
            <p class="tokens-demo__swatch-title">Saturation</p>
            <div class="tokens-demo__swatch-item bg-color-font-dark custom-color-s-100"></div>
            <div class="tokens-demo__swatch-item bg-color-font-dark custom-color-s-90"></div>
            <div class="tokens-demo__swatch-item bg-color-font-dark custom-color-s-80"></div>
            <div class="tokens-demo__swatch-item bg-color-font-dark custom-color-s-70"></div>
            <div class="tokens-demo__swatch-item bg-color-font-dark custom-color-s-60"></div>
            <div class="tokens-demo__swatch-item bg-color-font-dark custom-color-s-50"></div>
            <div class="tokens-demo__swatch-item bg-color-font-dark custom-color-s-40"></div>
            <div class="tokens-demo__swatch-item bg-color-font-dark custom-color-s-30"></div>
            <div class="tokens-demo__swatch-item bg-color-font-dark custom-color-s-20"></div>
            <div class="tokens-demo__swatch-item bg-color-font-dark custom-color-s-10"></div>
            <div class="tokens-demo__swatch-item bg-color-font-dark custom-color-s-0"></div>
        </div>
    `;
}

export const FontColor = ColorsTemplate.bind({});
