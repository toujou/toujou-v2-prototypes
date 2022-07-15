import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import PhotoSwipe from 'photoswipe';
import PhotoSwipeLightbox from 'photoswipe/lightbox';

@customElement('toujou-gallery')
export class ToujouGallery extends LitElement {
    // public static styles = css`${unsafeCSS(PhotoSwipeStyles)}`

    constructor() {
        super();
        console.log('aaddddda', PhotoSwipe);
    }

    connectedCallback() {
        super.connectedCallback();

        const lb = new PhotoSwipeLightbox({
            gallery: `#gallery--getting-started`,
            children: 'a',
            pswpModule: PhotoSwipe
        })

        console.log('LS', lb)

        lb.init();
    }
}



declare global {
    interface HTMLElementTagNameMap {
        'toujou-gallery': ToujouGallery
    }
}
