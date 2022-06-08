export class ToujouButton extends HTMLButtonElement {
    constructor() {
        super();

        console.log('initing toujou-button...');

        this.addEventListener('click', () => {
            console.log('TOUJOU BUTTON CLICKED!!!!!');
        });
    }
}

customElements.define('toujou-button', ToujouButton, { extends: 'button' });
