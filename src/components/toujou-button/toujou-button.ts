import { ToujouButtonVariant, ToujouButtonType, ToujouButtonSize } from "./types/toujou-button.types";

export class ToujouButton extends HTMLButtonElement {

    defaultButtonVariant: string = ToujouButtonVariant.PRIMARY;
    defaultButtonType: string = ToujouButtonType.DEFAULT;
    defaultButtonSize: string = ToujouButtonSize.NORMAL

    constructor() {
        super();
        // this.addEventListener('click', () => {
        //     console.log('TOUJOU BUTTON CLICKED!!!!!');
        // });
    }

    connectedCallback() {
        this._checkRequiredAttributes()
    }

    private _checkRequiredAttributes() {
        // Button variant
        const variant = this.getAttribute('button-variant');
        if (!variant) {
            this.setAttribute('button-variant', this.defaultButtonVariant);
        } else if (!Object.values(ToujouButtonVariant).includes(variant as ToujouButtonVariant)) {
            console.warn(`TOUJOU: Invalid button-variant value, falling back to default: "${this.defaultButtonVariant}"`)
            this.setAttribute('button-variant', this.defaultButtonVariant);
        }

        // Button size
        const size = this.getAttribute('button-size');
        if (!size) {
            this.setAttribute('button-size', this.defaultButtonSize);
        } else if (!Object.values(ToujouButtonSize).includes(size as ToujouButtonSize)) {
            console.warn(`TOUJOU: Invalid button-size value, falling back to default: "${this.defaultButtonSize}"`)
            this.setAttribute('button-size', this.defaultButtonSize);
        }

        // Button size
        const type = this.getAttribute('button-type');
        if (!type) {
            this.setAttribute('button-type', this.defaultButtonType);
        } else if (!Object.values(ToujouButtonType).includes(type as ToujouButtonType)) {
            console.warn(`TOUJOU: Invalid button-type value, falling back to default: "${this.defaultButtonType}"`)
            this.setAttribute('button-size', this.defaultButtonType);
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-button': ToujouButton
    }
}

customElements.define('toujou-button', ToujouButton, { extends: 'button' });
