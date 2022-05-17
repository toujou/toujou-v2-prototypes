import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { toujouTopbarStyles } from "./toujou-topbar.styles.js";

@customElement('toujou-topbar')
export class ToujouTopbar extends LitElement {
    static styles = [toujouTopbarStyles];

    render() {
        return html`
            <div class="logo">
                <slot name="topbar-logo"></slot>
            </div>
            <div class="main-navbar">
                <slot name="topbar-main-navbar"></slot>
            </div>
            <div class="service-navbar">
                <slot name="topbar-service-navbar"></slot>
            </div>
        `
    }

    constructor() {
        super();

        console.log('initing topbar...')
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-topbar': ToujouTopbar
    }
}
