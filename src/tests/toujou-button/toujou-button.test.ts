import { html, fixture, expect } from '@open-wc/testing';

import '../../components/toujou-button/toujou-button';

describe('toujou-button', () => {
    it('can create component', async () => {
        const buttonEl = await fixture(html`
            <button is="toujou-button" class="button" button-variant="primary" button-type="default" button-size="normal">Hello world</button>
        `);

        expect(buttonEl).to.not.be.null;
        expect(buttonEl?.nodeName).to.equal('BUTTON');
    })

    it('passes a11y audit', async () => {
        const buttonEl = await fixture(html`
            <button is="toujou-button" class="button" button-variant="primary" button-type="default" button-size="normal">Hello world</button>
        `);

        await expect(buttonEl).to.be.accessible();
    })

    it('adds default values for required attributes', async () => {
        const buttonEl = await fixture(html`
            <button is="toujou-button" class="button">Hello world</button>
        `);

        const buttonVariantAttribute = buttonEl.getAttribute('button-variant');
        const buttonTypeAttribute = buttonEl.getAttribute('button-type');
        const buttonSizeAttribute = buttonEl.getAttribute('button-size');
        expect(buttonVariantAttribute).to.equal('primary');
        expect(buttonTypeAttribute).to.equal('default');
        expect(buttonSizeAttribute).to.equal('normal');
    })
});
