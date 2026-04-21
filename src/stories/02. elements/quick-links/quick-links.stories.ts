import { StoryFn, Meta } from '@storybook/web-components';

export default {
    title: 'COMPONENTS/QuickLinks',
    parameters: {
        layout: 'fullscreen', // Changed from fullwidth to fullscreen (standard SB value)
    },
    argTypes: {
        verticalPos: {
            name: 'Vertical position',
            description: "Set the vertical position for the element",
            options: ['top', 'middle', 'bottom'],
            control: { type: 'radio' },
            table: {
                category: "Quick Links Settings",
                defaultValue: { summary: 'bottom' },
            },
        },
        horizontalPos: {
            name: 'Horizontal position',
            description: "Set the horizontal position for the element",
            options: ['left', 'right'],
            control: { type: 'radio' },
            table: {
                category: "Quick Links Settings",
                defaultValue: { summary: 'right' },
            },
        },
        bgColor: {
            name: 'Background color',
            description: "Set the background color / design for the element",
            options: ['default', 'primary', 'secondary', 'inverted'],
            control: { type: 'radio' },
            table: {
                category: "Quick Links Settings",
                defaultValue: { summary: 'primary' },
            },
        },
        iconOnly: {
            name: 'Icon only',
            description: "Select if the quick link should show only icon or also the text",
            control: { type: 'boolean' },
            table: {
                category: "Quick Links Settings",
                defaultValue: { summary: 'false' },
            },
        },
    },
} satisfies Meta;

interface QuickLinksStoryProps {
    verticalPos: string;
    horizontalPos: string;
    bgColor: string;
    iconOnly: boolean;
}

/**
 * Render dummy content to allow scrolling and testing of fixed/absolute positioning
 */
const renderDummyContent = (paragraphCount: number): string => {
    const paragraphs = Array.from({ length: paragraphCount })
        .map(() => `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>`)
        .join('');

    return `
        <section class="chapter chapter--default" style="padding: 2rem;">
            <toujou-text-block class="text-block">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h1>Quick links dummy content</h1>
                        ${paragraphs}
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>
        </section>
    `;
};

/**
 * Render an individual link item
 */
const renderQuickLink = (args: QuickLinksStoryProps, text: string, iconName: string): string => {
    return `
        <a
            href="#"
            class="quick-link"
            title="${text}"
            data-element-design="${args.bgColor || 'primary'}"
        >
            <figure class="quick-link__figure">
                <span
                    class="quick-link__icon"
                    style="--quick-link-image-icon: url('./assets/icons/icon-${iconName}.svg')"
                    aria-hidden="true"
                ></span>
            </figure>
            ${args.iconOnly ? '' : `<span class="quick-link__text">${text}</span>`}
        </a>
    `;
};

/**
 * Main Story Template
 */
export const QuickLinks: StoryFn<QuickLinksStoryProps> = (args) => {
    // Return the wrapper with the quick-links and the dummy content
    return `
        <nav
            class="quick-links"
            aria-label="Quick links"
            data-vertical-position="${args.verticalPos || 'bottom'}"
            data-horizontal-position="${args.horizontalPos || 'right'}"
        >
            <ul class="quick-links__list">
                <li class="quick-links__item">
                    ${renderQuickLink(args, 'First link', 'star')}
                </li>
                <li class="quick-links__item">
                    ${renderQuickLink(args, 'Second link', 'home')}
                </li>
                <li class="quick-links__item">
                    ${renderQuickLink(args, 'Third link', 'drink')}
                </li>
            </ul>
        </nav>
        
        ${renderDummyContent(15)}
    `;
};

// Default arguments
QuickLinks.args = {
    verticalPos: 'bottom',
    horizontalPos: 'right',
    bgColor: 'default',
    iconOnly: false,
};
