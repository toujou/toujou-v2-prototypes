import { LitElement, html } from 'lit';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { iframeResizer } from 'iframe-resizer';
import { openModalOnToujouModalTargetClick } from './toujou-modal-target';
import { ToujouModalStyles } from "./toujou-modal.styles.js";

const bodyScrollLockOptions = {
    reserveScrollBarGap: true,
};

const modalStack = [];

function pushToOpenStack(modal) {
    // eslint-disable-next-line no-shadow
    modalStack.forEach((modal) => modal.close());
    modalStack.push(modal);
}

function popFromOpenStack(modal) {
    if (modal === modalStack[modalStack.length - 1]) {
        modalStack.pop();
        const previous = modalStack.pop();
        // eslint-disable-next-line no-unused-expressions
        previous && previous.open();
    }
}

/**
 * @todo use toujou-iframe-resizer
 */
class ToujouModal extends LitElement {
    static get is() {
        return 'toujou-modal';
    }

    static styles = [ToujouModalStyles];


    render() {
        return html`
            <div id="scroller" @click="${this.onClick}" part="scroller">
                <div id="content" part="content">
                    <div id="modal-content" part="modal-content">
                        <div id="modal-header" part="modal-header">
                            ${this.noHeader
                                ? html`
                                    <button id="dog-ear-close" dialog-dismiss part="dog-ear-close"></button>`
                                : html`
                                    <h3 part="headline">${this.title}</h3>
                                    <button id="modal-header-close" dialog-dismiss part="modal-header-close">×</button>
                                `}
                            <div id="progress-bar" part="progress-bar"></div>
                        </div>
                        <slot id="slot" @slotchange="${this.onSlotchange}"></slot>
                    </div>
                </div>
            </div>
        `;
    }

    static get properties() {
        return {
            opened: {
                type: Boolean,
                reflect: true,
            },
            title: {
                type: String,
            },
            noHeader: {
                type: Boolean,
                attribute: 'no-header',
                reflect: true,
            },
            allowOutsideScroll: {
                type: Boolean,
                attribute: 'allow-outside-scroll',
                reflect: true,
            },
            noBackdrop: {
                type: Boolean,
                attribute: 'no-backdrop',
                reflect: true,
            },
            loading: {
                type: Boolean,
                reflect: true,
            },
        };
    }

    open() {
        this.opened = true;
    }

    close() {
        this.opened = false;
    }

    constructor(props) {
        super(props);
        this.opened = false;
        this.loading = false;
        this.intersectionObserver = new IntersectionObserver((entries) => {
            // eslint-disable-next-line no-unused-expressions
            entries[0] && this.onPosition(entries[0]);
        });
        this.iframeResizerMap = new Map();

        this.setAttribute('exportparts', 'scroller, content, modal-content, modal-header, headline, dog-ear-close, modal-header-close, progress-bar');
    }

    // eslint-disable-next-line class-methods-use-this
    disconnectedCallback() {
        clearAllBodyScrollLocks();
    }

    toggle() {
        this.opened = !this.opened;
    }

    firstUpdated() {
        this.$ = {
            scroller: this.shadowRoot.querySelector('#scroller'),
            content: this.shadowRoot.querySelector('#content'),
            modalContent: this.shadowRoot.querySelector('#modal-content'),
            slot: this.shadowRoot.querySelector('#slot'),
        };
    }

    updated(changedProperties) {
        if (changedProperties.has('opened')) {
            // eslint-disable-next-line no-unused-expressions
            this.opened ? this.onOpen() : this.onClose();
            this.hidden = !this.opened;
        }
    }

    onOpen() {
        this.intersectionObserver.observe(this);
        if (this.allowOutsideScroll) {
            document.body.styleposition = 'relative';
        } else {
            disableBodyScroll(this.$.scroller, bodyScrollLockOptions);
        }
        pushToOpenStack(this);
        setTimeout(() => {
            this.setAttribute('visible', '');
            this.dispatchModalEvent('toujou-modal-opened');
        });
    }

    onClose() {
        this.removeAttribute('visible');
        popFromOpenStack(this);
        if (this.allowOutsideScroll) {
            document.body.style.position = '';
        } else {
            enableBodyScroll(this.$.scroller);
        }
        this.intersectionObserver.unobserve(this);
        this.dispatchModalEvent('toujou-modal-closed');
    }

    onLoad(loading) {
        this.loading = loading;
    }

    onClick(event) {
        if (!event.composed) {
            return;
        }
        const composedPath = event.composedPath();
        if (!composedPath.includes(this.$.modalContent) || composedPath.some((node) => node instanceof HTMLElement && node.hasAttribute('dialog-dismiss'))) {
            this.close();
        }
    }

    onPosition(observerEntry) {
        // eslint-disable-next-line max-len
        const potentialTop = Math.max(observerEntry.intersectionRect.y, Math.abs(observerEntry.boundingClientRect.y));
        this.$.content.style['min-height'] = `${observerEntry.intersectionRect.height}px`;
        this.$.content.style.top = potentialTop ? `${potentialTop}px` : '';
    }

    onSlotchange() {
        const iframes = this.$.slot.assignedNodes().filter((node) => node instanceof HTMLIFrameElement);

        // eslint-disable-next-line no-shadow
        this.iframeResizerMap.forEach((iframeResizer, iframe) => {
            if (!iframes.includes(iframe)) {
                this.iframeResizerMap.delete(iframe);
            }
        });

        iframes.forEach((iframe) => {
            this.loading = true;
            iframe.addEventListener('load', () => {
                if (!this.iframeResizerMap.has(iframe)) {
                    this.listenToIframeReadyState(iframe);
                }
            });
        });
    }

    listenToIframeReadyState(iframe) {
        this.loading = true;
        this.iframeResizerMap.set(iframe, this.createIframeResizer(iframe));

        iframe.contentWindow.addEventListener('beforeunload', () => {
            this.loading = true;
        });

        try {
            this.title = iframe.contentWindow.document.title || this.title;
        } catch (e) {
            this.title = '';
        }
        this.loading = false;
        this.dispatchModalEvent('toujou-modal-loaded');
    }

    createIframeResizer(iframe) {
        let iframeOptions = {};

        try {
            iframeOptions = JSON.parse(iframe.getAttribute('toujou-iframe')) || {};
        } catch (e) {
            // eslint-disable-next-line no-console
            (console.error || console.log).call(console, e.stack || e);
        }

        iframeOptions.initCallback = () => {
            this.loading = false;
        };

        iframeOptions.closedCallback = () => {
            this.close();
        };

        return iframeResizer(iframeOptions, iframe);
    }

    dispatchModalEvent(eventName) {
        this.dispatchEvent(new CustomEvent(eventName, {
            bubbles: true,
            composed: true,
        }));
    }
}

customElements.define(ToujouModal.is, ToujouModal);

document.addEventListener('click', openModalOnToujouModalTargetClick);
