export class ToujouButton extends HTMLButtonElement {
    constructor() {
        super();

        this.addEventListener('click', () => {
            console.log('TOUJOU BUTTON CLICKED!!!!!');
        });
    }
}

customElements.define('toujou-button', ToujouButton, { extends: 'button' });
