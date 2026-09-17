import { LitElement, html } from 'lit';

export class ToujouBlockquote extends LitElement {
    constructor() {
        super();
    }

    render() {
        return html`
            <slot name="image"></slot>
            <slot name="quote"></slot>
            <slot name="author"></slot>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-blockquote': ToujouBlockquote
    }
}

customElements.define('toujou-blockquote', ToujouBlockquote);
