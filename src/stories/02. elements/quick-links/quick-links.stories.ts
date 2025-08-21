import { StoryFn, Meta } from '@storybook/web-components';

// @ts-ignore
import quickLinksDocs from './quick-links.docs.mdx';

export default {
    title: 'COMPONENTS/QuickLinks',
    parameters: {
        docs: {
            page: quickLinksDocs,
        },
        layout: 'fullwidth',
    },
    argTypes: {
        verticalPos: {
            table: {
                category: "Quick Links Settings",
                defaultValue: { summary: 'bottom' },
            },
            name: 'Vertical position',
            description: "Set the vertical position for the element",
            options: ['top', 'middle', 'bottom'],
            control: { type: 'radio' },
            required: true,
        },
        horizontalPos: {
            table: {
                category: "Quick Links Settings",
                defaultValue: { summary: 'right' },
            },
            name: 'Horizontal position',
            description: "Set the horizontal position for the element",
            options: ['left', 'right'],
            control: { type: 'radio' },
            required: true,
        },
        bgColor: {
            table: {
                category: "Quick Links Settings",
                defaultValue: { summary: 'primary' },
            },
            name: 'Background color',
            description: "Set the background color / design for the element",
            options: ['primary', 'secondary', 'font'],
            control: { type: 'radio' },
            required: true,
        },
        iconOnly: {
            table: {
                category: "Quick Links Settings",
                defaultValue: { summary: 'false' },
            },
            name: 'Icon only',
            description: "Select if the quick link should show only icon or also the text",
            control: { type: 'boolean' },
            required: true,
        },
    },
} satisfies Meta;

interface quickLinksStoryProps {
    verticalPos: string;
    horizontalPos: string;
    bgColor: string;
    iconOnly: boolean;
}

const renderDummyContent = (paragraphCount: number) => {
    const paragraphs = Array.from({ length: paragraphCount }).map(() => {
        return `
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        `;
    }).join('');

    return `
        <section class="chapter chapter--default">
            <toujou-text-block class="text-block" text-block-column-count="1">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h1>Quick links dummy content</h1>

                        ${paragraphs}
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>
        </section>
    `
}

const renderQuickLink = (args: quickLinksStoryProps, text: string) => {
    return `
        <a
            class="quick-link"
            aria-label="This is a link"
            data-bg-color="${args.bgColor}"
            data-vertical-position="${args.verticalPos}"
            data-horizontal-position="${args.horizontalPos}"
            tabindex="0"
        >
            <figure class="quick-link__figure">
                <toujou-icon class="icon quick-link__image" icon-color="background" icon-name="star"></toujou-icon>
            </figure>
            ${args.iconOnly ? '' : `
                <span class="quick-link__text">${text}</span>
            `}
        </a>
    `
}

const Template: StoryFn<quickLinksStoryProps> = (args: quickLinksStoryProps) => {
    return `
        <nav
            class="quick-links"
            aria-label="Quick links"
            data-vertical-position="${args.verticalPos}"
            data-horizontal-position="${args.horizontalPos}"
        >
            <ul class="quick-links__list">
                <li class="quick-links__item">
                    ${renderQuickLink(args, 'First link')}
                </li>
                <li class="quick-links__item">
                    ${renderQuickLink(args, 'Second link')}
                </li>
                <li class="quick-links__item">
                    ${renderQuickLink(args, 'Third link')}
                </li>
            </ul>
        </nav>
        
        ${renderDummyContent(20)}
    `;
};

export const QuickLinks = Template.bind({});

QuickLinks.args = {
    verticalPos: 'bottom',
    horizontalPos: 'right',
    bgColor: 'primary',
    iconOnly: false,
}

