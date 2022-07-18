import { Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import galleryDocs from "./gallery.docs.mdx";

export default {
    title: 'COMPONENTS/Media',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/3d1d0926-79e2-4ae4-aa1c-162dcd451a3a-684e/screen/61e6af1e-563f-4ce8-92ba-ac3b191c5f0c/Desktop',
        },
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: galleryDocs,
        }
    },
    argTypes: {
    }
} as Meta;

const Template = () => {
    return `
        <toujou-gallery id="test-gallery" class="gallery">
            <a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg" 
                data-pswp-width="1669" 
                data-pswp-height="2500" 
                target="_blank"
                class="gallery__item"
                title="This is a beautiful caption">
                <img class="gallery__image" src="https://picsum.photos/600" alt=""/>
              </a>
              <a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg" 
                data-pswp-width="1669" 
                data-pswp-height="2500" 
                target="_blank"
                class="gallery__item"
                title="This is a another nice caption">
                <img class="gallery__image" src="https://picsum.photos/601" alt="" />
              </a>
              <a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg" 
                data-pswp-width="1669" 
                data-pswp-height="2500" 
                target="_blank"
                class="gallery__item">
                <img class="gallery__image" src="https://picsum.photos/602" alt="" />
              </a>
              <a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-2500.jpg" 
                data-pswp-width="1669" 
                data-pswp-height="2500" 
                target="_blank"
                class="gallery__item">
                <img class="gallery__image" src="https://picsum.photos/603" alt="" />
              </a>
              <a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/5/img-2500.jpg" 
                data-pswp-width="1669" 
                data-pswp-height="2500" 
                target="_blank"
                class="gallery__item">
                <img class="gallery__image" src="https://picsum.photos/604" alt="" />
              </a>
        </toujou-gallery>
    `;
};

export const Gallery = Template.bind({});
