export class ToujouButton extends HTMLButtonElement {
    constructor() {
        super();

        this.addEventListener('click', () => {
            console.log('TOUJOU BUTTON CLICKED!!!!!');
        });
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-button': ToujouButton
    }
}

customElements.define('toujou-button', ToujouButton, { extends: 'button' });
