import { html, fixture, expect, fixtureSync, oneEvent } from '@open-wc/testing';

import '../../components/toujou-breadcrumb/toujou-breadcrumb';
import { ToujouBreadcrumb } from "../../components/toujou-breadcrumb/toujou-breadcrumb";

describe('toujou-breadcrumb', () => {
    let breadcrumbEl: Element | null = null;

    beforeEach(async() => {
        breadcrumbEl = await fixture(html`
            <toujou-breadcrumb role="nav" aria-label="Breadcrumb" class="breadcrumb" ismobile="">
                <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--open">
                    <toujou-icon class="icon breadcrumb__toggle-icon" icon-name="arrow-left"></toujou-icon>
                </button>
                <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--close">
                    <toujou-icon class="icon breadcrumb__toggle-icon" icon-name="close"></toujou-icon>
                </button>
                <ol class="breadcrumb__list" slot="list">
                    <li class="breadcrumb__item">
                        <a href="#" class="breadcrumb__link">Home</a>
                    </li>
                    <li class="breadcrumb__item">
                        <a href="#" class="breadcrumb__link">Item One</a>
                    </li>
                    <li class="breadcrumb__item">
                        <a href="#" class="breadcrumb__link">Item Two</a>
                    </li>
                    <li class="breadcrumb__item">
                        <a href="#" class="breadcrumb__link" aria-current="page">Item Three</a>
                    </li>
                </ol>
            </toujou-breadcrumb>
        `);
    });

    it('can create component', () => {
        expect(breadcrumbEl).to.not.be.undefined;
        expect(breadcrumbEl?.nodeName).to.equal('TOUJOU-BREADCRUMB');
    })

    it('dispatches `toujou-breadcrumb-connected` on connectedCallback', async () => {
        const el: ToujouBreadcrumb = fixtureSync(`<toujou-breadcrumb></toujou-breadcrumb>`);
        setTimeout(() => el.connectedCallback());
        const ev = await oneEvent(el, 'toujou-breadcrumb-connected');
        expect(ev).to.exist;
    });

    it('gets list items correctly', async () => {
        // @ts-ignore
        expect(breadcrumbEl?.listItems.length).to.equal(4);
    });

    it('gets correct breakpoint', async () => {
        // @ts-ignore
        expect(breadcrumbEl?.breakpoint).to.equal(346);
    });

    it('gets toggle buttons correctly', async () => {
        // @ts-ignore
        expect(breadcrumbEl?.toggleButtons.length).to.equal(2);
    });

    /* todo: test to add => open / close mobile menu on click */
    // it('can open mobile menu', async () => {
        // const openButton = breadcrumbEl?.querySelector('.breadcrumb__toggle--open') as HTMLButtonElement;
        // expect(breadcrumbEl?.hasAttribute('mobilemenuisopen')).to.equal(false);
        //
        // openButton?.click();
        //
        // await elementUpdated(breadcrumbEl!);
        //
        // expect(breadcrumbEl?.hasAttribute('mobilemenuisopen')).to.equal(false);
        // expect(breadcrumbEl?.hasAttribute('mobilemenuisopen')).to.equal(false);
        // expect(breadcrumbEl?.hasAttribute('mobilemenuisopen')).to.equal(false);
        // expect(breadcrumbEl?.hasAttribute('mobilemenuisopen')).to.equal(false);
    // })
});
