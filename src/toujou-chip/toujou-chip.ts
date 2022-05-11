import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('toujou-chip')
export class ToujouChip extends LitElement {
    static styles = css`
    :host {
      display: inline-block;
      border: solid 1px red;
    }
    
    :host([blue]) {
      border: solid 1px blue;
    }
  `

    /**
     * The name to say "Hello" to.
     */
    @property({ type: String })
    text = "chip"

    render() {
        return html`<h1>I'm a ${this.text}!</h1>`
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-chip': ToujouChip
    }
}
