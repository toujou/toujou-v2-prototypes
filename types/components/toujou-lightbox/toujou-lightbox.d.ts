import { LitElement, PropertyValues } from 'lit';
export declare class ToujouLightbox extends LitElement {
    lightboxItems: HTMLElement[];
    lightboxParents: Set<HTMLElement>;
    lightboxes: Set<PhotoSwipeLightbox>;
    private readonly parentIdAttribute;
    protected createRenderRoot(): Element | ShadowRoot;
    updated(changed: PropertyValues<this>): void;
    connectedCallback(): void;
    /**
     * Register a new UI element: caption
     * @param {PhotoSwipeLightbox} lightbox
     */
    _handleUiRegister: (lightbox: PhotoSwipeLightbox) => void;
    /**
     * React to change on the lightbox so that we can add the correct caption text
     * @param {HTMLElement} el
     * @param {PhotoSwipeLightbox} lightbox
     */
    _handleChange: (el: HTMLElement, lightbox: PhotoSwipeLightbox) => void;
    /**
     * Set the lightboxParents elements according to the lightboxItems found
     */
    _handleLightboxItemsChange: () => void;
    /**
     * Initialize a lightbox element for each of the lightbox parents
     */
    _handleLightboxParentsChange: () => void;
    /**
     * Initialize  single instance of a PhotoSwipe lightbox and save it to the lightboxParents set
     * @param {HTMLElement} lightboxParent
     */
    _initLightbox: (lightboxParent: HTMLElement) => void;
}
declare global {
    interface HTMLElementTagNameMap {
        'toujou-lightbox': ToujouLightbox;
    }
}
