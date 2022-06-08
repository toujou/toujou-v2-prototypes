import { LitElement, html } from 'lit';

export class ToujouBlockquote extends LitElement {
    constructor() {
        super();
        console.log('initing toujou-blockquote...');
    }

    render() {
        return html`
            <slot name="image"></slot>
            <slot name="quote"></slot>
            <slot name="author"></slot>
        `;
    }
}

customElements.define('toujou-blockquote', ToujouBlockquote);
