import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ToujouMediaInfoStyles } from "./toujou-media-info.styles";

@customElement('toujou-media-info')
export class ToujouMediaInfo extends LitElement {
    @property({ type: Boolean, reflect: true, attribute: 'open' })
    isOpen: boolean = false;

    static styles = [ToujouMediaInfoStyles];

    render() {
        return html`
            <slot name="open-button" class="open-button" @click="${this._toggleIsOpen}"></slot>
            <slot name="close-button" class="close-button" @click="${this._toggleIsOpen}"></slot>
            <slot name="figcaption"></slot>
            <slot name="copyright"></slot>
        `
    }

    private _toggleIsOpen() {
        this.isOpen = !this.isOpen;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-media-info': ToujouMediaInfo
    }
}
