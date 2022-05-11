import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('toujou-example')
export class ToujouExample extends LitElement {
    static styles = css`
    :host {
      display: inline-block;
      background-color: tomato;
      color: white;
      padding: .25rem 1rem;
    }
  `

    render() {
        return html`<h1><slot></slot></h1>`
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-example': ToujouExample
    }
}
