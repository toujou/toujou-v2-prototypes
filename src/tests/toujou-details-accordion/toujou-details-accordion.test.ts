import { html, fixture, expect } from '@open-wc/testing';
import { ToujouDetailsAccordion } from "../../components/toujou-details-accordion/toujou-details-accordion";

describe('toujou-details-accordion', () => {
    let toujouDetailsAccordion: ToujouDetailsAccordion | null = null;

    beforeEach(async () => {
        // @ts-ignore
        toujouDetailsAccordion = await fixture(html`
            <toujou-details-accordion class="details-accordion">
                <toujou-details id="details-1" class="details" is-open="">
                    <h3 slot="summary" class="details__title">This is the summary</h3>
                    <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                    <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </toujou-details>
                <toujou-details id="details-2" class="details">
                    <h3 slot="summary" class="details__title">I am just another simple title</h3>
                    <p slot="summary" class="details__subtitle">I am a subtitle which complements the title</p>
                    <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                    <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </toujou-details>
            </toujou-details-accordion>
        `);
    })

    it('can create component', () => {
        expect(toujouDetailsAccordion).to.not.be.null;
        expect(toujouDetailsAccordion?.nodeName).to.equal('TOUJOU-DETAILS-ACCORDION');
    })

    it('passes a11y audit', () => {
        expect(toujouDetailsAccordion).to.be.accessible();
    })

    /* todo: write relevant tests */
});