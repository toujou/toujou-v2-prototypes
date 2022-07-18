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
        <h1>Gallery!!!</h1>
        <toujou-gallery id="gallery1" class="gallery pswp">
            <div class="pswp-gallery" id="my-gallery">
                <a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg" 
                    data-pswp-width="1669" 
                    data-pswp-height="2500" 
                    target="_blank">
                    <img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg" alt="" />
                  </a>
                  <!-- cropped thumbnail: -->
                  <a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/7/img-2500.jpg" 
                    data-pswp-width="1875" 
                    data-pswp-height="2500" 
                    data-cropped="true" 
                    target="_blank">
                    <img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/7/img-200.jpg" alt="" />
                    Cropped
                  </a>
                  <!-- data-pswp-src with custom URL in href -->
                  <a href="https://unsplash.com" 
                    data-pswp-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
                    data-pswp-width="2500" 
                    data-pswp-height="1666" 
                    target="_blank">
                    <img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg" alt="" />
                  </a>
                  <!-- Without thumbnail: -->
                  <a href="http://example.com" 
                    data-pswp-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/5/img-2500.jpg"
                    data-pswp-width="2500" 
                    data-pswp-height="1668" 
                    target="_blank">
                    No thumbnail
                  </a>
          </div>
        </toujou-gallery>
    `;
};

export const Gallery = Template.bind({});