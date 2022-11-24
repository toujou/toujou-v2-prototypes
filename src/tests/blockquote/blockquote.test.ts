import { html, fixture, expect } from '@open-wc/testing';

import '../../components/toujou-blockquote/toujou-blockquote';

describe('toujou-blockquote', () => {
    let blockquoteGridEl: Element | null = null;
    let blockquoteEl: Element | null = null;

    beforeEach(async() => {
        blockquoteGridEl = await fixture(html`
            <toujou-blockquote-grid class="blockquote-grid" blockquote-grid-count="1">
                <toujou-blockquote role="figure" class="blockquote" blockquote-direction="vertical">
                    <img slot="image" class="blockquote__image" src="https://picsum.photos/200/200" alt="quote image">
                    <blockquote slot="quote" class="blockquote__blockquote">
                        <p class="blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
                    </blockquote>
                    <figcaption slot="author" class="blockquote__author">Jack Handey</figcaption>
                </toujou-blockquote>
            </toujou-blockquote-grid>
        `);
        blockquoteEl = blockquoteGridEl.querySelector('.blockquote')
    });

    it('can create component', () => {
        expect(blockquoteEl).to.not.be.undefined;
        expect(blockquoteGridEl?.nodeName).to.equal('TOUJOU-BLOCKQUOTE-GRID');
        expect(blockquoteEl?.nodeName).to.equal('TOUJOU-BLOCKQUOTE');
    })
});
