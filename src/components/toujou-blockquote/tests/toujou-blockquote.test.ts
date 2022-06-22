import type { IWindow } from 'happy-dom';
import { expect, describe, it, beforeEach } from 'vitest';

import '../toujou-blockquote';
import { ToujouBlockquote } from "../toujou-blockquote";

declare global {
    interface Window extends IWindow {}
}

describe('Toujou blockquote', async () => {
    let blockquoteEl: ToujouBlockquote | null = null;

    beforeEach(async () => {
        document.body.innerHTML = `
            <toujou-blockquote-grid class="blockquote-grid" blockquote-grid-count="1">
                <toujou-blockquote role="figure" class="blockquote" blockquote-direction="vertical">
                    <img slot="image" class="blockquote__image" src="https://picsum.photos/200/200" alt="quote image">
                    <blockquote slot="quote" class="blockquote__blockquote">
                        <p class="blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
                    </blockquote>
                    <figcaption slot="author" class="blockquote__author">Jack Handey</figcaption>
                </toujou-blockquote>
            </toujou-blockquote-grid>
        `;
        await window.happyDOM.whenAsyncComplete();
        await new Promise(resolve => setTimeout(resolve, 0));
        blockquoteEl = document.body.querySelector('.blockquote') || null;
    });

    it('can create component', () => {
        expect(blockquoteEl).to.not.be.null;
        expect(blockquoteEl?.nodeName).to.equal('TOUJOU-BLOCKQUOTE');
    });

    it('has correct attributes', () => {
        const roleAttribute = blockquoteEl?.getAttribute('role');
        const classAttribute = blockquoteEl?.getAttribute('class');
        const blockquoteDirectionAttribute = blockquoteEl?.getAttribute('blockquote-direction');

        expect(roleAttribute).toBeTruthy();
        expect(roleAttribute).to.equal('figure');
        expect(classAttribute).toBeTruthy();
        expect(classAttribute).to.equal('blockquote');
        expect(blockquoteDirectionAttribute).toBeTruthy();
        expect(blockquoteDirectionAttribute).to.equal('vertical');
    });
});