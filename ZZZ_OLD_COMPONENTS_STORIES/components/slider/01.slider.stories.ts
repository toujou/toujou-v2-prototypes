import { Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../.storybook/badgeCustomConfig.js'

export default {
    title: 'COMPONENTS/Slider',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/3d1d0926-79e2-4ae4-aa1c-162dcd451a3a-684e/Desktop',
        },
        badges: [TOUJOU_BADGES.TESTING]
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
        <div class="slider slider--single slider--design-${args.designColor} ${args.isFullwidth ? 'slider--fullwidth' : ''}">
            <div class="slider__top">
                <div class="slider__frame glider draggable" data-autoslide="0" data-slideinterval="6">
                    <div class="glider-track slider__track">
                        <div class="glider-slide slider__slide active center visible" aria-label="slide 1 of 2">
                            <img src="https://picsum.photos/1200" alt="nice image" class="slider__media slider__media--image">
                        </div>
                    </div>
                </div>
                <button class="slider__control slider__control--prev" aria-label="Previous slide">
                    <span class="icon icon--arrow-left slider__control-icon slider__control-icon--prev"></span>
                </button>
                <button class="slider__control slider__control--next" aria-label="Next slide">
                    <span class="icon icon--arrow-right slider__control-icon slider__control-icon--next"></span>
                </button>
            </div>
	        <div class="bullets bullets--design-${args.designColor} slider__bullets glider-dots">
	            <button data-index="0" aria-label="Page 1" role="tab" class="bullets__bullet slider__bullet glider-dot active" aria-current="true">
	                <span class="bullets__icon"></span>
                </button>
	            <button data-index="1" aria-label="Page 2" role="tab" class="bullets__bullet slider__bullet glider-dot ">
	                <span class="bullets__icon"></span>
                </button>
	            <button data-index="2" aria-label="Page 3" role="tab" class="bullets__bullet slider__bullet glider-dot ">
	                <span class="bullets__icon"></span>
                </button>
	            <button data-index="3" aria-label="Page 4" role="tab" class="bullets__bullet slider__bullet glider-dot ">
	                <span class="bullets__icon"></span>
                </button>
            </div>
        </div>
    `;
};

export const ImageSliderNormal = Template.bind({});

// @ts-ignore
ImageSliderNormal.args = {
    designColor: 'default',
    isFullwidth: false,
}
