import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import PhotoSwipe from 'photoswipe';
import PhotoSwipeLightbox from 'photoswipe/lightbox';

@customElement('toujou-gallery')
export class ToujouGallery extends LitElement {

    protected createRenderRoot(): Element | ShadowRoot {
        return this;
    }

    connectedCallback() {
        super.connectedCallback();

        const lb = new PhotoSwipeLightbox({
            gallery: `#gallery--getting-started`,
            children: 'a',
            pswpModule: PhotoSwipe
        })

        lb.init();
    }
}



declare global {
    interface HTMLElementTagNameMap {
        'toujou-gallery': ToujouGallery
    }
}
