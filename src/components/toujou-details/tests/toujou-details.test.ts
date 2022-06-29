import { html, fixture, expect, fixtureSync, oneEvent } from '@open-wc/testing';

import '../toujou-details';
import { ToujouDetails } from "../toujou-details";

describe('toujou-details', () => {
    let detailsEl: ToujouDetails | null = null;

    beforeEach(async() => {
        // @ts-ignore
        detailsEl = await fixture(html`
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
        `);
    });


    it('can create component', async () => {
        expect(detailsEl).to.not.be.null;
        expect(detailsEl?.nodeName).to.equal('TOUJOU-DETAILS');
    })

    it('passes the a11y audit', () => {
        expect(detailsEl).to.be.accessible();
    });

    it('has correct default `isAccordionItem` value', async () => {
        expect(detailsEl?.isAccordionItem).to.equal(false);
    })

    it('has correct default `isAccordionItem` value when inside an accordion', async () => {
        const detailsAccordion = await fixture(html`
            <toujou-details-accordion>
                <toujou-details id="details-1" class="details"></toujou-details>
            </toujou-details-accordion>
        `);
        const detailsElInsideAccordion: ToujouDetails = detailsAccordion.querySelector('.details')!;
        expect(detailsElInsideAccordion?.isAccordionItem).to.equal(true);
    })

    it('is closed by default', async () => {
        expect(detailsEl?.isOpen).to.equal(false);
    })

    it('dispatches `toujou-details-connected` on connectedCallback when inside an accordion', async () => {
        const detailsAccordion = await fixtureSync(html`
            <toujou-details-accordion>
                <toujou-details id="details-1" class="details"></toujou-details>
            </toujou-details-accordion>
        `);
        const detailsElInsideAccordion: ToujouDetails = detailsAccordion.querySelector('.details')!;

        setTimeout(() => detailsElInsideAccordion.connectedCallback());
        const ev = await oneEvent(detailsElInsideAccordion, 'toujou-details-connected');
        expect(ev).to.exist;
    })

    /* todo: still nned to test => open on click, dispatches event on toggle*/
    // it('opens on summary click', async () => {
    //     const summary = detailsEl!.querySelector('.details__title') as HTMLHeadingElement;
    //     summary.click();
    //
    //     // @ts-ignore
    //     await elementUpdated(detailsEl);
    //
    //     expect(detailsEl?.hasAttribute('is-open')).to.equal(true);
    // })
});

