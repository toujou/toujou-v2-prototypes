import type { IWindow } from 'happy-dom';
import { expect, describe, it, beforeEach, } from 'vitest';

import '../toujou-details';
import { ToujouDetails } from "../toujou-details";

declare global {
    interface Window extends IWindow {}
}

describe('Toujou details', async () => {
    let detailsEl: ToujouDetails | null = null;

    beforeEach(async () => {
        document.body.innerHTML = `
            <toujou-details id="details-1" class="details">
                <h3 slot="summary" class="details__title">I am just another simple title</h3>
                <ul slot="summary" class="details__subtitle details__subtitle-list">
                    <li class="details__subtitle-list-item">Fruit</li>
                    <li class="details__subtitle-list-item">Apple</li>
                    <li class="details__subtitle-list-item">Pink Lady</li>
                </ul>
                <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </toujou-details>
        `;
        await window.happyDOM.whenAsyncComplete();
        await new Promise(resolve => setTimeout(resolve, 0));
        detailsEl = document.body.querySelector('.details') || null;
    });

    it('can create element', () => {
        expect(detailsEl).to.not.be.null;
        expect(detailsEl?.nodeName).to.equal('TOUJOU-DETAILS');
    });

    it('has summary content', () => {
        const summarySlot = detailsEl?.querySelectorAll('[slot="summary"]');
        expect(summarySlot).toBeTruthy();
        expect(summarySlot?.length).toEqual(2);
    });

    it('has chevron icon', () => {
        const icon = detailsEl?.querySelector('.details__chevron');
        expect(icon).toBeTruthy();
    });

    it('icon has correct slot', () => {
        const icon = detailsEl?.querySelector('.details__chevron');
        const iconSlot = icon?.getAttribute('slot');
        expect(iconSlot).toEqual('chevron');
    });

    it('has content', () => {
        const detailsContent = detailsEl?.querySelectorAll('[slot="content"]');
        expect(detailsContent).toBeTruthy();
        expect(detailsContent?.length).toEqual(2);
    });

    it('opens on click', async () => {
        // const summaryEl = document.querySelector('[slot="summary"]');

        // console.log('11111', summaryEl.hasAttribute('is-open'));
        // await new Promise(resolve => {
        //     setTimeout(() => {
        //         requestAnimationFrame(resolve);
        //     }, 100)
        // });
        // console.log('22222', summaryEl.hasAttribute('is-open'));
        // console.log('XXXXXX', detailsEl?.getAttribute('is-open'));
    });
});
