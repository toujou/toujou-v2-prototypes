import { Story, Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import logoSliderDocs from "./logo-slider.docs.mdx";

export default {
    title: 'COMPONENTS/Media',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/3d1d0926-79e2-4ae4-aa1c-162dcd451a3a-684e/Desktop',
        },
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: logoSliderDocs,
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

interface LogoSliderStoryProps {
    designColor: any;
    isFullwidth: any;
}

const Template: Story<LogoSliderStoryProps> = (args: LogoSliderStoryProps) => {
    return `
        <toujou-logo-slider class="slider slider" slider-design="${args.designColor}" ${args.isFullwidth ? 'slider-fullwidth' : ''}>
            <div class="slider__top">
                <div class="slider__frame glider draggable" data-autoslide="0" data-slideinterval="6">
                    <div class="glider-track slider__track">
                        <toujou-slider-slide class="slider-slide glider-slide active center visible" aria-label="slide 1 of 2">
                            <img src="https://picsum.photos/1200" alt="nice image" class="slider-slide__media slider-slide__media--image">
                        </toujou-slider-slide>
                    </div>
                </div>
                <button class="slider-control slider-control--prev" aria-label="Previous slide">
                    <toujou-icon class="icon slider-control__icon slider-control__icon--prev" icon-name="arrow-left"></toujou-icon>
                </button>
                <button class="slider-control slider-control--next" aria-label="Next slide">
                    <toujou-icon class="icon slider-control__icon slider-control__icon--next" icon-name="arrow-right"></toujou-icon>
                </button>
                <toujou-slider-bullets class="slider-bullets slider__bullets glider-dots" bullets-design="${args.designColor}">
                    <button data-index="0" aria-label="Page 1" role="tab" class="slider-bullets__bullet slider__bullet glider-dot active" aria-current="true">
                        <span class="slider-bullets__circle"></span>
                    </button>
                    <button data-index="1" aria-label="Page 2" role="tab" class="slider-bullets__bullet slider__bullet glider-dot ">
                        <span class="slider-bullets__circle"></span>
                    </button>
                    <button data-index="2" aria-label="Page 3" role="tab" class="slider-bullets__bullet slider__bullet glider-dot ">
                        <span class="slider-bullets__circle"></span>
                    </button>
                    <button data-index="3" aria-label="Page 4" role="tab" class="slider-bullets__bullet slider__bullet glider-dot ">
                        <span class="slider-bullets__circle"></span>
                    </button>
                </toujou-slider-bullets>
            </div>
        </toujou-logo-slider>
    `;
};

export const LogoSlider = Template.bind({});

LogoSlider.args = {
    designColor: 'default',
    isFullwidth: false,
}
