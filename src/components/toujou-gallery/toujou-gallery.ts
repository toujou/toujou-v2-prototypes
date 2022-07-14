import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

// import PhotoSwipeLightbox from 'photoswipe/lightbox';
// import PhotoSwipeStyles from 'photoswipe/dist/photoswipe.css';

// import PhotoSwipe from 'photoswipe';
// import splideSliderStyles from "@splidejs/splide/dist/css/splide.min.css";
// import PhotoSwipeStyles from 'photoswipe/src/photoswipe.css';

@customElement('toujou-gallery')
export class ToujouGallery extends LitElement {
    // public static styles = css`${unsafeCSS(PhotoSwipeStyles)}`

    constructor() {
        super();
        // console.log('aaa', PhotoSwipeLightbox);
    }

    // connectedCallback() {
    //     super.connectedCallback();
    //
    //     console.log('connected callback');
    //     const GL = new PhotoSwipe({
    //         gallery: 'toujou-gallery',
    //         children: 'toujou-gallery-item',
    //         pswpModule: PhotoSwipe
    //     })
    //
    //     GL.init();
    //
    //     const lb = new PhotoSwipeLightbox({
    //         gallery: 'toujou-gallery',
    //         children: 'a',
    //         pswModule: () => import('photoswipe')
    //     })
    //     console.log('222', lb);
    //     lb.init()
    // }
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-gallery': ToujouGallery
    }
}
