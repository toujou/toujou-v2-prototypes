import { LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('toujou-contact-box')
export class ToujouContactBox extends LitElement {

    @property({ type: HTMLElement })
    private _closeButton: HTMLElement | null = null;

    protected createRenderRoot(): Element | ShadowRoot {
        return this;
    }

    connectedCallback() {
        this._closeButton = this.querySelector('.contact-box__close');

        if (!this._closeButton) {
            console.error('TOUJOU: Could not find the close button for the contact box element');
            return;
        } else {
            addEventListener('click', this._handleClick.bind(this))
        }
    }

    disconnectedCallback() {
        removeEventListener('click', this._handleClick);
    }

    /**
     * Check if click target was the backdrop. if so, close contact box by "clicking" on close button
     * @param event
     */
    _handleClick(event: MouseEvent) {
        const clickedElement = event.target as HTMLElement;
        if (clickedElement === this && this._closeButton) {
            this._closeButton.click();
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-contact-box': ToujouContactBox
    }
}