import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { ToujouClampedContentStyles } from "./toujou-clamped-content.styles";

@customElement('toujou-clamped-content')
export class ToujouClampedContent extends LitElement {
    static styles = [ToujouClampedContentStyles];

    @property({ type: Boolean, attribute: 'is-open', reflect: true })
    private isOpen: boolean = false;

    @property({ type: Boolean, attribute: 'clamp-disabled', reflect: true })
    protected clampDisabled: boolean = false;

    render() {
        return html`
            <div class="clamped-content">
                <slot name="clamped-content"></slot>
            </div>
            <slot name="show-button" class="button-slot" @click="${this.#toggleIsOpenState}"></slot>
            <slot name="hide-button" class="button-slot" @click="${this.#toggleIsOpenState}"></slot>
        `;
    }

    connectedCallback() {
        super.connectedCallback();

        this.#updateClampEnabledState();
    }

    /**
     * Toggle the isOpen state, which also reflect to an attribute (which sets the correct styles)
     * @private
     */
    #toggleIsOpenState = () => {
        this.isOpen = !this.isOpen;
    }

    /**
     * Check if there is enough content to enable the content clamping
     * @private
     */
    #updateClampEnabledState() {
        requestAnimationFrame(() => {
            const contentSlotElement = this.querySelector('.review__review');
            if (!contentSlotElement) {
                this.clampDisabled = true;
            } else {
                this.clampDisabled = contentSlotElement.scrollHeight <= contentSlotElement.clientHeight;
            }
        });
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-clamped-content': ToujouClampedContent
    }
}
