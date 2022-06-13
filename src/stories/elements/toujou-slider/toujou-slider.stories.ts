import { Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/badgeCustomConfig.js'
// @ts-ignore
import ToujouSliderDocs from "./toujou-slider.docs.mdx";

export default {
    title: 'COMPONENTS/Slider',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/3d1d0926-79e2-4ae4-aa1c-162dcd451a3a-684e/Desktop',
        },
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: ToujouSliderDocs,
        }
    },
    argTypes: {
        designColor: {
            table: {
                category: "Slider settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Slider design',
            description: "Set the value for the slider design color",
            options: ['default', 'primary', 'secondary', 'light-grey'],
            control: { type: 'radio' },
            defaultValue: ['default'],
            required: true,
        },
        isFullwidth: {
            table: {
                category: "Slider settings",
                defaultValue: { summary: 'false' },
            },
            name: 'Fullwidth',
            description: "Toggle the fullwidth attribute",
            control: { type: 'boolean' },
            defaultValue: 'false',
            required: true,
        },
    }
} as Meta;


const Template = (args: { designColor: any; isFullwidth: any; }) => {
    return `
        <toujou-slider class="toujou-slider slider" slider-design="${args.designColor}" ${args.isFullwidth ? 'slider-fullwidth' : ''}>
            <div class="toujou-slider__top">
                <div class="toujou-slider__frame glider draggable" data-autoslide="0" data-slideinterval="6">
                    <div class="glider-track toujou-slider__track">
                        <toujou-slider-slide class="toujou-slider-slide glider-slide active center visible" aria-label="slide 1 of 2">
                            <img src="https://picsum.photos/1200" alt="nice image" class="toujou-slider-slide__media toujou-slider-slide__media--image">
                        </toujou-slider-slide>
                    </div>
                </div>
                <button class="toujou-slider-control toujou-slider-control--prev" aria-label="Previous slide">
                    <toujou-icon class="toujou-icon toujou-slider-control__icon toujou-slider-control__icon--prev" icon-name="arrow-left"></toujou-icon>
                </button>
                <button class="toujou-slider-control toujou-slider-control--next" aria-label="Next slide">
                    <toujou-icon class="toujou-icon toujou-slider-control__icon toujou-slider-control__icon--next" icon-name="arrow-right"></toujou-icon>
                </button>
            </div>
	        <toujou-bullets class="toujou-bullets toujou-slider__bullets glider-dots" bullets-design="${args.designColor}">
	            <button data-index="0" aria-label="Page 1" role="tab" class="toujou-bullets__bullet toujou-slider__bullet glider-dot active" aria-current="true">
	                <span class="toujou-bullets__circle"></span>
                </button>
	            <button data-index="1" aria-label="Page 2" role="tab" class="toujou-bullets__bullet toujou-slider__bullet glider-dot ">
	                <span class="toujou-bullets__circle"></span>
                </button>
	            <button data-index="2" aria-label="Page 3" role="tab" class="toujou-bullets__bullet toujou-slider__bullet glider-dot ">
	                <span class="toujou-bullets__circle"></span>
                </button>
	            <button data-index="3" aria-label="Page 4" role="tab" class="toujou-bullets__bullet toujou-slider__bullet glider-dot ">
	                <span class="toujou-bullets__circle"></span>
                </button>
            </toujou-bullets>
        </toujou-slider>
    `;
};

export const ImageSliderNormal = Template.bind({});

// @ts-ignore
ImageSliderNormal.args = {
    designColor: 'default',
    isFullwidth: false,
}
