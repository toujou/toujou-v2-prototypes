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
        <toujou-gallery id="gallery1" class="gallery">
            <a href="#" class="gallery-item">
                <img src="https://picsum.photos/1800" alt="beautiful image" class="content-card__image">
            </a>
            <a href="#" class="gallery-item">
                <img src="https://picsum.photos/1800" alt="beautiful image" class="content-card__image">
            </a>
            <a href="#" class="gallery-item">
                <img src="https://picsum.photos/1800" alt="beautiful image" class="content-card__image">
            </a>
        </toujou-gallery>
    `;
};

export const Gallery = Template.bind({});