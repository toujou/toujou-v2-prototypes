import { LitElement, html, PropertyValues } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ToujouMediaInfoStyles } from "./toujou-media-info.styles";

@customElement('toujou-media-info')
export class ToujouMediaInfo extends LitElement {
    @property({ type: Boolean, reflect: true, attribute: 'open' })
    isOpen: boolean = false;

    private readonly isOpenParentAttribute = 'media-info-child-is-open';

    static styles = [ToujouMediaInfoStyles];

    render() {
        return html`
            <slot name="open-button" class="open-button"></slot>
            <slot name="close-button" class="close-button"></slot>
            <slot name="figcaption"></slot>
            <slot name="copyright"></slot>
        `
    }

    constructor() {
        super();

        this.addEventListener('click', this._handleClick);
    }

    updated(changed: PropertyValues<this>) {
        if (changed.has('isOpen')) {
            this.isOpen
                ? this.parentElement?.setAttribute(this.isOpenParentAttribute, '')
                : this.parentElement?.removeAttribute(this.isOpenParentAttribute);
        }
    }

    /**
     * Handle click on whole element to prevent click on element behind when open
     * @param event
     */
    _handleClick = (event: any): void => {
        event.preventDefault();
        event.stopPropagation();
        const clickedTarget = event.target as HTMLElement;

        if (clickedTarget.closest('[slot="open-button"], [slot="close-button"]')) {
            this._toggleIsOpen();
        }
    }

    /**
     * Toggle to "isOpen" property, which also reflects as an attribute on the element
     * @private
     */
    private _toggleIsOpen(): void {
        this.isOpen = !this.isOpen;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-media-info': ToujouMediaInfo
    }
}
