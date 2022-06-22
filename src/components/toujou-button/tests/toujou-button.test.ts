import type { IWindow } from 'happy-dom';
import { expect, describe, it, beforeEach, } from 'vitest';

import '../toujou-button';

declare global {
    interface Window extends IWindow {}
}

/* TODO: Test if the default values for the attributes are set when the attributes are missing or when they have invalid values */

describe('Toujou button with required attributes', async () => {
    let buttonEl: Element | null;

    beforeEach(async () => {
        document.body.innerHTML = `
            <button
                is="toujou-button" class="button" button-variant="primary" button-type="default" button-size="normal">Hello world</button>
        `;
        await window.happyDOM.whenAsyncComplete();
        await new Promise(resolve => setTimeout(resolve, 0));
        buttonEl = document.body.querySelector('.button') || null;
    });

    it('can create element', () => {
        expect(buttonEl).to.not.be.null;
        expect(buttonEl?.nodeName).to.equal('BUTTON');
    });

    it('has correct is attribute', () => {
        expect(buttonEl?.getAttribute('is')).to.equal('toujou-button');
    });

    it('has required attributes', () => {
        const hasIsAttribute = buttonEl?.hasAttribute('is');
        const hasVariantAttribute = buttonEl?.hasAttribute('button-variant');
        const hasTypeAttribute = buttonEl?.hasAttribute('button-type');
        const hasSizeAttribute = buttonEl?.hasAttribute('button-size');
        const hasClassAttribute = buttonEl?.hasAttribute('class');
        expect(hasIsAttribute && hasVariantAttribute && hasTypeAttribute&& hasSizeAttribute && hasClassAttribute).toBeTruthy();
    });

    it('has correct class', () => {
        expect(buttonEl?.classList.contains('button')).toBeTruthy();
    })

    it('has valid variant attribute', () => {
        const allowedAttributes = ['primary', 'secondary', 'font'];
        const variantAttribute = buttonEl?.getAttribute('button-variant') || '';
        expect(allowedAttributes.indexOf(variantAttribute)).toBeGreaterThan(-1);
    })

    it('has valid type attribute', () => {
        const allowedAttributes = ['default', 'border', 'ghost'];
        const typeAttribute = buttonEl?.getAttribute('button-type') || '';
        expect(allowedAttributes.indexOf(typeAttribute)).toBeGreaterThan(-1);
    })

    it('has valid size attribute', () => {
        const allowedAttributes = ['tiny', 'small', 'normal', 'large'];
        const sizeAttribute = buttonEl?.getAttribute('button-size') || '';
        expect(allowedAttributes.indexOf(sizeAttribute)).toBeGreaterThan(-1);
    })
});

describe('Toujou button with icon', async () => {
    let buttonEl: Element | null;

    beforeEach(async () => {
        document.body.innerHTML = `
            <button
                is="toujou-button"
                class="button"
                button-variant="primary"
                button-type="default"
                button-size="normal"
                button-icon-position="left">
                <toujou-icon class="icon button__icon" icon-name="arrow-right"></toujou-icon>
                Hello world
            </button>
        `;
        await window.happyDOM.whenAsyncComplete();
        await new Promise(resolve => setTimeout(resolve, 0));
        buttonEl = document.body.querySelector('.button') || null;
    });

    it('has icon', () => {
        const buttonIcon = buttonEl?.querySelector('.icon');
        expect(buttonIcon).toBeTruthy();
    })

    it('has valid icon position attribute', () => {
        const possibleValues = ['right', 'left'];
        const buttonIconPositionAttribute = buttonEl?.getAttribute('button-icon-position') || '';
        expect(possibleValues.indexOf(buttonIconPositionAttribute)).toBeGreaterThan(-1);
    })
});