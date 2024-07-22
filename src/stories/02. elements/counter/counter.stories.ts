import { StoryFn, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import counterDocs from './counter.docs.mdx';

export default {
    title: 'COMPONENTS/Counter',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: counterDocs,
        },
    },
    argTypes: {
        elementDesign: {
            table: {
                category: "Counter Settings",
                defaultValue: { summary: 'primary' },
            },
            name: 'Element design',
            description: "Set the counter's element design",
            options: ['default', 'primary', 'secondary', 'inverted'],
            control: { type: 'radio' },
            defaultValue: ['default'],
            required: true,
        },
        animationDuration: {
            table: {
                category: "Counter Settings",
                defaultValue: { summary: 'primary' },
            },
            name: 'Animation duration',
            description: "Set the counter's number animation duration",
            options: ['slow', 'medium', 'fast'],
            control: { type: 'radio' },
            defaultValue: ['medium'],
            required: true,
        },
        startValue: {
            table: {
                category: "Counter Settings",
            },
            name: 'animation start value',
            description: "Set the counter's animation start value",
            control: {
                type: 'number',
            },
            defaultValue: 1,
            required: true,
        },
        endValue: {
            table: {
                category: "Counter Settings",
            },
            name: 'animation end value',
            description: "Set the counter's animation end value",
            control: {
                type: 'number',
            },
            defaultValue: 123,
            required: true,
        },
        numberOfItems: {
            table: {
                category: "Counter Settings",
            },
            name: 'number of Items',
            description: "Set the number of counter items visible on the story",
            control: {
                type: 'number',
                min: 1,
                max: 12,
            },
            defaultValue: 1,
            required: true,
        },
        showPrefix: {
            table: {
                category: "Counter Settings",
            },
            name: 'Show prefix',
            description: "Show the value prefix",
            control: { type: 'boolean' },
            defaultValue: false,
            required: true,
        },
        showSuffix: {
            table: {
                category: "Counter Settings",
            },
            name: 'Show suffix',
            description: "Show the value suffix",
            control: { type: 'boolean' },
            defaultValue: true,
            required: true,
        },
    },
    tags: ['autodocs']
} satisfies Meta;

interface counterStoryProps {
    elementDesign: any;
    animationDuration: string;
    startValue: number;
    endValue: number;
    numberOfItems: number;
    showPrefix: boolean;
    showSuffix: boolean;
}

const renderCounterItem = (args: counterStoryProps) => {
    let counterItems = '';

    for (let i = 0; i < args.numberOfItems; i++) {
        counterItems += `
            <toujou-counter
                class="counter"
                aria-label="1000 - Default"
                element-design="${args.elementDesign}"
                start-number="${args.startValue}"
                end-number="${args.endValue}"
                animation-speed="${args.animationDuration}"
                tabindex="0"
                >

                <figure class="counter__figure">
                    <img class="counter__image" src="https://picsum.photos/84" alt="" loading="lazy">
                </figure>

                <span class="counter__number">
                    ${args.showPrefix ? `<span class="counter__number-prefix">+</span>` : ''}
                    <span class="counter__number-text">1.000</span>
                    ${args.showSuffix ? `<span class="counter__number-suffix">Km</span>` : ''}
                </span>

                <p class="counter__title">Default</p>
            </toujou-counter>
        `;
    }

    return counterItems;
}

const Template: StoryFn<counterStoryProps> = (args: counterStoryProps) => {
    return `
        <div class="counter-grid" number-of-items="${args.numberOfItems.toString()}">
            ${renderCounterItem(args)}
        </div>
    `;
};

export const Counter = Template.bind({});

Counter.args = {
    elementDesign: 'default',
    animationDuration: 'medium',
    startValue: 1,
    endValue: 123,
    numberOfItems: 1,
    showPrefix: false,
    showSuffix: true,
}

