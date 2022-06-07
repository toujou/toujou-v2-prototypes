import { Meta } from '@storybook/web-components';

export default {
    title: 'TOKENS/Type',
    argTypes: {}
} as Meta;


const FontFamiliesTemplate = () => {
    return `
        <h1 class="tokens-demo__title">Type tokens</h1>
        
        <h2 class="tokens-demo__subtitle">Font families</h2>
        
        <p class="font-family-headline font-weight-headline">This is the headline font family: Ubuntu | 800</p>
        <p class="font-family-headline font-weight-headline">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <br>
        <p class="font-family-text font-weight-text-normal">This is the regular text font family: Mulish | 600</p>
        <p class="font-family-text font-weight-text-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        
        <br>
        <p class="font-family-text font-weight-text-bold">This is the bold text font family: Mulish | 800</p>
        <p class="font-family-text font-weight-text-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        
    `;
}

const FontSizeTemplate = () => {
    return `
        <h1 class="tokens-demo__title">Type tokens</h1>
        
        <h2 class="tokens-demo__subtitle">Font sizes</h2>
        
        <p class="font-size-xxxxl">This is font size xxxxl</p>
        <p class="font-size-xxxl">This is font size xxxl</p>
        <p class="font-size-xxl">This is font size xxl</p>
        <p class="font-size-xl">This is font size xl</p>
        <p class="font-size-l">This is font size l</p>
        <p class="font-size-m">This is font size m</p>
        <p class="font-size-ms">This is font size ms</p>
        <p class="font-size-normal">This is font size normal</p>
        <p class="font-size-s">This is font size s</p>
        <p class="font-size-xs">This is font size xs</p>
        <p class="font-size-xxs">This is font size xxs</p>
        
    `;
}

const LineHeightTemplate = () => {
    return `
        <h1 class="tokens-demo__title">Type tokens</h1>
        
        <h2 class="tokens-demo__subtitle">Line heights</h2>
        
        <p class="line-height-l">
            <strong>This is line height l.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>        
        <p class="line-height-m">
            <strong>This is line height m.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>        
        <p class="line-height-normal">
            <strong>This is line height normal.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>        
        <p class="line-height-s">
            <strong>This is line height s.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>        
        <p class="line-height-reset">
            <strong>This is line height reset.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>        
    `;
}


const LetterSpacingTemplate = () => {
    return `
        <h1 class="tokens-demo__title">Type tokens</h1>
        
        <h2 class="tokens-demo__subtitle">Letter spacing</h2>
        
        <p class="letter-spacing-l">This is letter spacing l</p>
        <p class="letter-spacing-m">This is letter spacing m</p>
        <p class="letter-spacing-normal">This is letter spacing normal</p>
        <p class="letter-spacing-s">This is letter spacing s</p>
    `;
}

const FontStylesTemplate = () => {
    return `
        <h1 class="tokens-demo__title">Type tokens</h1>
        
        <h2 class="tokens-demo__subtitle">Font styles</h2>
        
        <p class="font-style-normal">This is the normal font style</p>
        <p class="font-style-bold">This is the bold font style</p>
        <p class="font-style-italic">This is the italic font style</p>
        <p class="font-style-bold font-style-italic">This is the bold italic font style</p>
        <p class="font-style-strikethrough">This is the strikethrough font style</p>
        <p class="font-style-underline">This is the underlined font style</p>
    `;
}

const TagsTemplate = () => {
    return `
        <div class="demo-font-tags">
            <h1>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>abcdefghijklmnopqrstuvwxyz<br>0123456789</h1>
            <h2>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>abcdefghijklmnopqrstuvwxyz<br>0123456789</h2>
            <h3>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>abcdefghijklmnopqrstuvwxyz<br>0123456789</h3>
            <h4>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>abcdefghijklmnopqrstuvwxyz<br>0123456789</h4>
            <h5>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>abcdefghijklmnopqrstuvwxyz<br>0123456789</h5>
            <h6>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>abcdefghijklmnopqrstuvwxyz<br>0123456789</h6>
            <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>abcdefghijklmnopqrstuvwxyz<br>0123456789</p>
        </div>
    `;
}

const TextTypesTemplate = () => {
    return `
        <h1 class="tokens-demo__title">Text types</h1>
                
        <p>
            <strong>Normal text</strong>
            <br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>        
        <p class="teasertext">
            <strong>Teaser text</strong>
            <br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>        
        <p class="infotext">
            <strong>Info text</strong>
            <br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>        
        <p class="notes">
            <strong>Notes</strong>
            <br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    `;
}

export const FontFamilies = FontFamiliesTemplate.bind({});
export const FontSizes = FontSizeTemplate.bind({});
export const LineHeights = LineHeightTemplate.bind({});
export const LetterSpacing = LetterSpacingTemplate.bind({});
export const FontStyles = FontStylesTemplate.bind({});
export const Tags = TagsTemplate.bind({});
export const TextTypes = TextTypesTemplate.bind({});
