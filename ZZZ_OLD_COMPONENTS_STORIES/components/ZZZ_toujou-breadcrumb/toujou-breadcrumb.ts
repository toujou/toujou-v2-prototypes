import {html, LitElement} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {toujouBreadcrumbStyles} from "./toujou-breadcrumb.styles.js";

const IS_MOBILE_BUFFER_PER_ITEM = 16;

@customElement('toujou-breadcrumb')
export class ToujouBreadcrumb extends LitElement {
    static styles = [toujouBreadcrumbStyles];

    @property({type: Number}) breakpoint: number = 0;
    @property({ type: Boolean, reflect: true }) isMobile = false;
    @property({ type: HTMLOListElement }) list: HTMLOListElement | null = null;
    @property({ type: Array }) listItems: HTMLLIElement[] | null = [];
    @property({ type: Array }) toggleButtons: HTMLButtonElement[] | null = [];
    @property({ type: Boolean, reflect: true }) mobileMenuIsOpen: Boolean = false;


    private _mql: MediaQueryList | undefined;

    render() {
        return html`
            <slot name="toggle-buttons"></slot>
            <slot name="list"></slot>
            <div class="breadcrumb__fake-list"></div>
        `
    }

    constructor() {
        super();

        this._handleToggleClick = this._handleToggleClick.bind(this);
    }

    firstUpdated() {
        this.list = this.querySelector('.breadcrumb__list');
        this.listItems = Array.from(this.querySelectorAll('.breadcrumb__item'));

        this._calculateBreakpoint();

        if (this.breakpoint > 0) {
            this._mql = window.matchMedia(`(max-width: ${this.breakpoint}px)`);
            this._mql.addEventListener('change', (event) => {
                this.isMobile = event.matches

                if (!event.matches) {
                    this.mobileMenuIsOpen = false;
                }
            });

            this.isMobile = this._mql.matches;
        }

        this._populateFakeList()
    }

    connectedCallback() {
        super.connectedCallback();

        this.toggleButtons = Array.from(this.querySelectorAll('.breadcrumb__toggle'));

        if (this.toggleButtons) {
            this.toggleButtons.forEach((toggleButton) => {
                toggleButton.addEventListener('click', this._handleToggleClick)
            })
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        if (this.toggleButtons) {
            this.toggleButtons.forEach((toggleButton) => {
                toggleButton.removeEventListener('click', this._handleToggleClick)
            })
        }
    }

    _calculateBreakpoint() {
        let itemsWidth = 0;

        this.listItems!.forEach((item) => {
            itemsWidth += item.getBoundingClientRect().width;
            // @ts-ignore
            itemsWidth += parseInt(window.getComputedStyle(item)['margin-right']);
            itemsWidth += IS_MOBILE_BUFFER_PER_ITEM;
        });

        this.breakpoint = Math.ceil(itemsWidth);
    }

    _handleToggleClick() {
        this.mobileMenuIsOpen = !this.mobileMenuIsOpen;
    }

    _populateFakeList() {
        const fakeList = this.shadowRoot!.querySelector('.breadcrumb__fake-list');

        this.listItems?.forEach((listItem, i) => {
            if (i < this.listItems!.length - 1) {
                const newListItem = listItem.cloneNode(true);
                fakeList!.appendChild(newListItem);
            }
        })
    }
}


declare global {
    interface HTMLElementTagNameMap {
        'toujou-breadcrumb': ToujouBreadcrumb
    }
}
