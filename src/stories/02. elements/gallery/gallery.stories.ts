import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import galleryDocs from "./gallery.docs.mdx";
import '../../../js/elements/photoswipe-lightbox-creator'

export default {
    title: 'COMPONENTS/Media',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: galleryDocs,
        }
    },
    argTypes: {
    }
} as Meta;

const Template = () => {
    return `
        <toujou-gallery id="test-gallery" class="gallery" lightbox-parent-id="1">
            <a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg" 
                data-pswp-width="1669" 
                data-pswp-height="2500" 
                target="_blank"
                class="gallery__item"
                title="This is a beautiful caption"
                lightbox-item-id="1"
            >
                <img class="gallery__image" src="https://picsum.photos/600" alt=""/>
            </a>
            <a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg" 
                data-pswp-width="1669" 
                data-pswp-height="2500" 
                target="_blank"
                class="gallery__item"
                title="This is a another nice caption"
                lightbox-item-id="2"
            >
                <img class="gallery__image" src="https://picsum.photos/601" alt="" />
            </a>
            <a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg" 
                data-pswp-width="1669" 
                data-pswp-height="2500" 
                target="_blank"
                class="gallery__item"
                title="This is a another nice caption"
                lightbox-item-id="3"
            >
                <img class="gallery__image" src="https://picsum.photos/602" alt="" />
            </a>
            <a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-2500.jpg" 
                data-pswp-width="1669" 
                data-pswp-height="2500" 
                target="_blank"
                class="gallery__item"
                title="This is a another nice caption"
                lightbox-item-id="4"
            >
                <img class="gallery__image" src="https://picsum.photos/603" alt="" />
            </a>
            <a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/5/img-2500.jpg" 
                data-pswp-width="1669" 
                data-pswp-height="2500" 
                target="_blank"
                class="gallery__item"
                title="This is a another nice caption"
                lightbox-item-id="5"
            >
                <img class="gallery__image" src="https://picsum.photos/604" alt="" />
            </a>
        </toujou-gallery>
    `;
};

export const Gallery = Template.bind({});
