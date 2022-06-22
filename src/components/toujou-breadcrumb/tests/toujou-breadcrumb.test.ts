import type { IWindow } from 'happy-dom';
import { expect, describe, it, beforeEach } from 'vitest';

import '../toujou-breadcrumb';
import { ToujouBreadcrumb } from "../toujou-breadcrumb";


declare global {
    interface Window extends IWindow {}
}

describe('Toujou blockquote', async () => {
    let breadcrumbEl: ToujouBreadcrumb | null = null;

    beforeEach(async () => {
        document.body.innerHTML = `
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
        `;
        await window.happyDOM.whenAsyncComplete();
        await new Promise(resolve => setTimeout(resolve, 0));
        breadcrumbEl = document.body.querySelector('.breadcrumb') || null;
    });

    it('can create element', () => {
        expect(breadcrumbEl).to.not.be.null;
        expect(breadcrumbEl?.nodeName).to.equal('TOUJOU-BREADCRUMB');
    });

    it('has aria-label', () => {
        const ariaLabel = breadcrumbEl?.getAttribute('aria-label');
        expect(ariaLabel).toBeTruthy();
        expect(ariaLabel).to.equal('Breadcrumb');
    })

    it('has correct role', () => {
        const role = breadcrumbEl?.getAttribute('role');
        expect(role).toBeTruthy();
        expect(role).to.equal('nav');
    })
});