export class ToujouPnNav extends HTMLElement {
    private links: NodeListOf<HTMLElement> | undefined;

    constructor() {
        super();

        this._onLinkClick = this._onLinkClick.bind(this);
        console.log('constructor');
    }

    protected createRenderRoot(): HTMLElement | DocumentFragment {
        return this;
    }

    connectedCallback() {
        this.links = this.querySelectorAll('.pn-nav__link');
        console.log('links', this.links);
        if (!this.links) {
            console.error('TOUJOU: Could not get the prev-nav links');
            return;
        }

        this.links.forEach((link) => {
            console.log('link', link);
            link.addEventListener('click', this._onLinkClick);
        });
    }

    disconnectedCallback() {
        if (this.links) {
            this.links.forEach((link) => {
                link.removeEventListener('click', this._onLinkClick);
            });
        }
    }

    _onLinkClick = (event: MouseEvent) => {
        console.log('click');
        event.preventDefault();

        const link = event.currentTarget as HTMLElement;
        const targetUrl = link.getAttribute('href');
        console.log('targetUrl', targetUrl);
        if (!targetUrl) {
            console.error('TOUJOU: Could not get the target URL from the link', link);
            return;
        }

        if (document.startViewTransition) {
            document.startViewTransition(() => {
                console.log('starting transition...');
                window.location.href = targetUrl;
            });
        } else {
            console.log('transitions not supported...');
            window.location.href = targetUrl;
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-pn-nav': ToujouPnNav
    }
}

customElements.define('toujou-pn-nav', ToujouPnNav);
