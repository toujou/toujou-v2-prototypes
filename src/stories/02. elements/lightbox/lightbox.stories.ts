import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import lightboxDocs from './lightbox.docs.mdx';


export default {
    title: 'COMPONENTS/Lightbox',
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: lightboxDocs,
        },
    },
} as Meta;


const Template = () => {
    return `
        <h1>Grid 1</h1>
        <toujou-media-grid class="media-grid" media-grid-column-number="2" lightbox-parent-id="1">
            <toujou-single-media class="single-media">
                <a href="https://picsum.photos/2500/1600" 
                    data-pswp-width="2500" 
                    data-pswp-height="1600" 
                    target="_blank"
                    class="lightbox-item"
                    title="This the first image on the first grid"
                    lightbox-item-id="111"    
                >
                    <img class="single-media__image" src="https://picsum.photos/2500/1600" alt="Nice image">
                </a>
            </toujou-single-media>
            <toujou-single-media class="single-media">
                <a href="https://picsum.photos/2501/1600" 
                    data-pswp-width="2501" 
                    data-pswp-height="1600" 
                    target="_blank"
                    class="lightbox-item"
                    title="This is the second image"
                    lightbox-item-id="222"    
                >
                    <img class="single-media__image" src="https://picsum.photos/2501/1600" alt="Nice image">
                </a>
            </toujou-single-media>
        </toujou-media-grid>
        
        <h1>Grid 2</h1>
        <toujou-media-grid class="media-grid" media-grid-column-number="3" lightbox-parent-id="2">
            <toujou-single-media class="single-media">
                <a href="https://picsum.photos/2502/1600" 
                    data-pswp-width="2502" 
                    data-pswp-height="1600" 
                    target="_blank"
                    class="lightbox-item"
                    title="This is a beautiful caption"
                    lightbox-item-id="333"    
                >
                    <img class="single-media__image" src="https://picsum.photos/2502/1600" alt="Nice image">
                </a>
            </toujou-single-media>
            <toujou-single-media class="single-media">
                <a href="https://picsum.photos/2503/1600" 
                    data-pswp-width="2503" 
                    data-pswp-height="1600" 
                    target="_blank"
                    class="lightbox-item"
                    lightbox-item-id="444"    
                >
                    <img class="single-media__image" src="https://picsum.photos/2503/1600" alt="Nice image">
                </a>
            </toujou-single-media>
            <toujou-single-media class="single-media">
                <a href="https://picsum.photos/2499/1600" 
                    data-pswp-width="2499" 
                    data-pswp-height="1600" 
                    target="_blank"
                    class="lightbox-item"
                    title="Another gallery"
                    lightbox-item-id="555"    
                >
                    <img class="single-media__image" src="https://picsum.photos/2499/1600" alt="Nice image">
                </a>
            </toujou-single-media>
        </toujou-media-grid>
        
        <toujou-photoswipe-lightbox></toujou-photoswipe-lightbox>
    `;
};

export const Lightbox = Template.bind({});
