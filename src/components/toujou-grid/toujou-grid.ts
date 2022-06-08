export class ToujouGrid extends HTMLElement {
    constructor() {
        super();
        console.log('initing toujou-grid...');
    }
}

customElements.define('toujou-grid', ToujouGrid);