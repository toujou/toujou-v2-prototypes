import { StoryFn, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import blockquoteDocs from './blockquote.docs.mdx';

export default {
    title: 'COMPONENTS/Blockquote',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: blockquoteDocs,
        },
    },
    argTypes: {
        columnsLayout: {
            table: {
                category: "Grid settings",
                defaultValue: { summary: 'third-right' },
            },
            name: 'Two columns layout',
            description: "Define layout of the grid columns",
            options: ['third-right', 'third-left'],
            control: { type: 'radio' },
            defaultValue: ['third-right'],
            required: true,
        },
    },
} satisfies Meta;

interface BlockquoteWithTextStoryProps {
    columnsLayout: string;
}

function renderBlockquote() {
    return `
        <toujou-blockquote role="figure" class="blockquote" blockquote-direction="vertical" element-design="default" is-column>
            <img slot="image" class="blockquote__image" src="https://picsum.photos/200/200" alt="quote image" />
            <blockquote slot="quote" class="blockquote__blockquote">
                <p class="blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
            </blockquote>
            <figcaption slot="author" class="blockquote__author">Jack Handey</figcaption>
        </toujou-blockquote>
    `
}

function renderText() {
    return `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    `
}

const blockquoteWithTextBlock = (args: BlockquoteWithTextStoryProps) => {
    return `
        <toujou-grid class="grid" number-of-columns="2" grid-type="default" column-layout="${args.columnsLayout}" fullwidth>
            <toujou-grid-column class="grid-column">
                ${args.columnsLayout === 'third-left' ? renderBlockquote() : renderText()}
            </toujou-grid-column>
            <toujou-grid-column class="grid-column">
                ${args.columnsLayout === 'third-left' ? renderText() : renderBlockquote()}
            </toujou-grid-column>
        </toujou-grid>
    `;
}

const Template: StoryFn<BlockquoteWithTextStoryProps> = (args: BlockquoteWithTextStoryProps) => {
    return `
        <main>
            ${blockquoteWithTextBlock(args)}

            <section class="chapter" background-color="primary">
                ${blockquoteWithTextBlock(args)}
            </section>
        </main>
    `
};

export const BlockquoteWithText = Template.bind({});

BlockquoteWithText.args = {
    columnsLayout: 'third-right',
}
