import { LitElement, css, unsafeCSS } from 'lit'
import { customElement } from 'lit/decorators.js'
import PhotoSwipe from 'photoswipe';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
// @ts-ignore
import PhotoSwipeStyles from 'photoswipe/dist/photoswipe.css';

@customElement('toujou-gallery')
export class ToujouGallery extends LitElement {
    public static styles = css`${unsafeCSS(PhotoSwipeStyles)}`
    private lightbox: any;

    constructor() {
        super();
    }

    createRenderRoot() { return this;}

    connectedCallback() {
        super.connectedCallback();

        this.lightbox = new PhotoSwipeLightbox({
            gallery: `#my-gallery`,
            children: 'a',
            pswpModule: PhotoSwipe
        })

        this.lightbox.init();
        console.log('2222', this.lightbox)
    }
}



declare global {
    interface HTMLElementTagNameMap {
        'toujou-gallery': ToujouGallery
    }
}
