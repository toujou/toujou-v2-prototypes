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
        numberOfItems: {
            table: {
                category: "Counter Settings",
            },
            name: 'number of Items',
            description: "Set the number of counter items visible on the story",
            options: [1, 2, 3, 4],
            control: { type: 'radio' },
            required: true,
        },
        elementDesign: {
            table: {
                category: "Counter Settings",
                defaultValue: { summary: 'primary' },
            },
            name: 'Element design',
            description: "Set the counter's element design",
            options: ['default', 'primary', 'secondary', 'inverted'],
            control: { type: 'radio' },
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
            required: true,
        },
        showPrefix: {
            table: {
                category: "Counter Settings",
            },
            name: 'Show prefix',
            description: "Show the value prefix",
            control: { type: 'boolean' },
            required: true,
        },
        showSuffix: {
            table: {
                category: "Counter Settings",
            },
            name: 'Show suffix',
            description: "Show the value suffix",
            control: { type: 'boolean' },
            required: true,
        },
    },
} satisfies Meta;

interface counterStoryProps {
    numberOfItems: number;
    elementDesign: any;
    animationDuration: string;
    startValue: number;
    endValue: number;
    showPrefix: boolean;
    showSuffix: boolean;
}

const renderCounterItem = (args: counterStoryProps) => {
    let counterItems = '';

    for (let i = 0; i < args.numberOfItems; i++) {
        counterItems += `
            <li class="counter-grid__item">
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
            </li>
        `;
    }

    return counterItems;
}

const Template: StoryFn<counterStoryProps> = (args: counterStoryProps) => {
    return `
        <main>
            <ul class="counter-grid" number-of-items="${args.numberOfItems.toString()}">
                ${renderCounterItem(args)}
            </ul>
        </main>
    `;
};

export const Counter = Template.bind({});

Counter.args = {
    numberOfItems: 1,
    elementDesign: 'default',
    animationDuration: 'medium',
    startValue: 1,
    endValue: 123,
    showPrefix: false,
    showSuffix: true,
}
