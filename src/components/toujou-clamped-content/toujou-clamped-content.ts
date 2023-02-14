import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { ToujouClampedContentStyles } from "./toujou-clamped-content.styles";

@customElement('toujou-clamped-content')
export class ToujouClampedContent extends LitElement {
    static styles = [ToujouClampedContentStyles];

    @property({ type: Boolean, attribute: 'is-open', reflect: true })
    private isOpen: boolean = false;

    render() {
        return html`
            <div class="clamped-content">
                <slot name="clamped-content"></slot>
            </div>
            <slot name="show-button" class="button-slot" @click="${this.#toggleIsOpenState}"></slot>
            <slot name="hide-button" class="button-slot" @click="${this.#toggleIsOpenState}"></slot>
        `;
    }

    #toggleIsOpenState = () => {
        this.isOpen = !this.isOpen;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-clamped-content': ToujouClampedContent
    }
}
