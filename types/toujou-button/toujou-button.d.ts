export declare class ToujouButton extends HTMLButtonElement {
    defaultButtonVariant: string;
    defaultButtonType: string;
    defaultButtonSize: string;
    constructor();
    connectedCallback(): void;
    private _checkRequiredAttributes;
}
declare global {
    interface HTMLElementTagNameMap {
        'toujou-button': ToujouButton;
    }
}
