import { StoryFn, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import InpageNavDocs from './inpage-nav.docs.mdx';

export default {
    title: 'COMPONENTS/Inpage Nav',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: InpageNavDocs,
        }
    },
    argTypes: {
        width: {
            table: {
                category: "Inpage nav width",
                defaultValue: { summary: 'text' },
            },
            name: 'Width',
            description: "Set the element's width",
            options: ['text', 'wide', 'fullwidth'],
            control: { type: 'radio' },
            defaultValue: ['text'],
            required: true,
        },
        alignment: {
            table: {
                category: "Inpage nav settings",
                defaultValue: { summary: 'left' },
            },
            name: 'Alignment',
            description: "Set the Inpage nav alignment",
            options: ['left', 'center'],
            control: { type: 'radio' },
            defaultValue: ['left'],
            required: true,
        },
        showLabel: {
            table: {
                category: "Inpage nav settings",
                defaultValue: { summary: true },
            },
            name: 'Show label',
            description: "Toggle the label's visibility",
            control: { type: 'boolean' },
            defaultValue: [true],
            required: true,
        },
        showCTA: {
            table: {
                category: "Inpage nav settings",
                defaultValue: { summary: true },
            },
            name: 'Show CTA',
            description: "Toggle the CTA button visibility",
            control: { type: 'boolean' },
            defaultValue: [true],
            required: true,
        },
        isSticky: {
            table: {
                category: "Inpage nav settings",
                defaultValue: { summary: false },
            },
            name: 'Is sticky',
            description: "Should the inpage nav scroll with the content or stay sticky. PLease test on a page with a topbar and content",
            control: { type: 'boolean' },
            defaultValue: [false],
            required: true,
        },
        elementDesign: {
            table: {
                category: "Inpage nav settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Element design',
            description: "set the element design",
            options: ['default', 'primary', 'secondary', 'inverted'],
            control: { type: 'radio' },
            defaultValue: ['default'],
            required: true,
        },
    },
    tags: ['autodocs']
} satisfies Meta;

interface InpageNavStoryProps {
    width: string,
    alignment: string,
    showLabel: boolean,
    showCTA: boolean,
    isSticky: boolean,
    elementDesign: string,
}

const Template: StoryFn<InpageNavStoryProps> = (args: InpageNavStoryProps) => {
    return `
        <toujou-inpage-nav
            class="inpage-nav"
            element-width="${args.width}"
            alignment="${args.alignment}"
            ${args.isSticky ? 'is-sticky' : ''}
            element-design="${args.elementDesign}"
        >
            <button class="inpage-nav__toggle"
                    aria-label="Toggle the inpage navigation"
                    aria-expanded="false"
                    aria-hidden="false"
                    aria-controls="nav-uid">
                <toujou-icon class="icon" icon-size="m" icon-color="primary" icon-name="chevron-down"></toujou-icon>
            </button>

            ${args.showLabel
                ? `<span class="inpage-nav__label">Auf dieser Seite</span>`
                : `<span class="inpage-nav__label">Default label</span>`
            }

            <nav id="nav-uid" class="inpage-nav__nav">
                <ul class="inpage-nav__list">
                    <li class="inpage-nav__item" active>
                        <a class="inpage-nav__link" href="one">Link one</a>
                    </li>
                    <li class="inpage-nav__item">
                        <a class="inpage-nav__link" href="two">Link two</a>
                    </li>
                    <li class="inpage-nav__item">
                        <a class="inpage-nav__link" href="three">Link three</a>
                    </li>

                </ul>
            </nav>

            ${args.showCTA ? `
                <a href="#" slot="cta" class="button inpage-nav__cta">Buy now</a>
            ` : ''}

        </toujou-inpage-nav>

        <section style="opacity: 0; pointer-events: none;">
            <p id="one"></p>
            <p id="two"></p>
            <p id="three"></p>
            <p id="four"></p>
            <p id="five"></p>
        </section>
    `
};

export const InpageNav = Template.bind({});

InpageNav.args = {
    width: 'text',
    alignment: 'left',
    showLabel: true,
    showCTA: true,
    isSticky: false,
    elementDesign: 'default',
}

