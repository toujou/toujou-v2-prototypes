import { StoryFn, Meta } from '@storybook/web-components-vite';

// @ts-ignore
import InpageNavDocs from './inpage-nav.docs.mdx';

export default {
    title: 'COMPONENTS/Inpage Nav',
    parameters: {
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
            required: true,
        },
        showLabel: {
            table: {
                category: "Inpage nav settings",
            },
            name: 'Show label',
            description: "Toggle the label's visibility",
            control: { type: 'boolean' },
            required: true,
        },
        showCTA: {
            table: {
                category: "Inpage nav settings",
            },
            name: 'Show CTA',
            description: "Toggle the CTA button visibility",
            control: { type: 'boolean' },
            required: true,
        },
        isSticky: {
            table: {
                category: "Inpage nav settings",
            },
            name: 'Is sticky',
            description: "Should the inpage nav scroll with the content or stay sticky. PLease test on a page with a topbar and content",
            control: { type: 'boolean' },
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
            required: true,
        },
    },
} satisfies Meta;

interface InpageNavStoryProps {
    width: string,
    alignment: string,
    showLabel: boolean,
    showCTA: boolean,
    isSticky: boolean,
    elementDesign: string,
}

const sectionsData = [
    {
        id: 'one',
        label: 'Section One',
        bgColor: 'primary-light'
    },
    {
        id: 'two',
        label: 'Section Two',
        bgColor: 'secondary-light'
    },
    {
        id: 'three',
        label: 'Section three',
        bgColor: 'font-light'
    }
]

const renderInpageNav = (args: InpageNavStoryProps) => {
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
                    ${sectionsData.map((sectionData) => {
                        return `
                            <li class="inpage-nav__item">
                                <a class="inpage-nav__link" href="#${sectionData.id}">${sectionData.label}</a>
                            </li>
                        `
                    }).join('')}
                </ul>
            </nav>

            ${args.showCTA ? `
                <a href="#" slot="cta" class="button inpage-nav__cta">Buy now</a>
            ` : ''}

        </toujou-inpage-nav>
    `
}

const renderDummySections = () => {
    return `
        ${sectionsData.map((sectionData) => {
            return `
                <section id="${sectionData.id}" class="chapter"  background-color="${sectionData.bgColor}">
                    <toujou-text-block class="text-block" text-blocks-column-count="1">
                        <toujou-text-block-column class="text-block-column">
                            <div class="text-block__content">
                                <h2>${sectionData.label}</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas!</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas!</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas!</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas!</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas!</p>
                                <h3>More content</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas!</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas!</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas!</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas!</p>
                                <h3>More extra content</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas!</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas!</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas!</p>
                            </div>
                        </toujou-text-block-column>
                    </toujou-text-block>
                </section>
            `
        }).join('')}
    `
}

const Template: StoryFn<InpageNavStoryProps> = (args: InpageNavStoryProps) => {
    return `
        <main>
            ${renderInpageNav(args)}
            ${renderDummySections()}
        </main>
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
