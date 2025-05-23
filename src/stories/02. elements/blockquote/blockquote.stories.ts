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
        direction: {
            table: {
                category: "Blockquote settings",
                defaultValue: { summary: 'vertical' },
            },
            name: 'Direction',
            description: "Set the blockquote's direction",
            options: ['vertical', 'horizontal'],
            control: { type: 'radio' },
            required: true,
        },
        elementDesign: {
            table: {
                category: "Blockquote settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Element design',
            description: "Set the blockquote's element design",
            options: ['default', 'primary', 'secondary', 'inverted'],
            control: { type: 'radio' },
            required: true,
        },
    },
} satisfies Meta;

interface BlockquoteStoryProps {
    direction: any;
    elementDesign: string;
}

const blockquoteComponent = (args: BlockquoteStoryProps) => {
    return `
        <toujou-blockquote role="figure" class="blockquote" blockquote-direction="${args.direction}" element-design="${args.elementDesign}">
            <a href="#" class="blockquote__image-link" slot="image">
                <img slot="image" class="blockquote__image" src="https://picsum.photos/200/200" alt="quote image" />
            </a>
            <blockquote slot="quote" class="blockquote__blockquote">
                <div class="blockquote__content">
                    <p>Before you criticize someone, <a href="#">you should walk a mile</a> in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
                </div>
            </blockquote>
            <figcaption slot="author" class="blockquote__author">Jack Handey</figcaption>
        </toujou-blockquote>
    `;
}

const Template: StoryFn<BlockquoteStoryProps> = (args: BlockquoteStoryProps) => {
    return `
        <main>
            <toujou-blockquote-grid class="blockquote-grid" blockquote-grid-count="1">
                ${blockquoteComponent(args)}
            </toujou-blockquote-grid>

            <section class="chapter" background-color="primary">
                <toujou-blockquote-grid class="blockquote-grid" blockquote-grid-count="1">
                    ${blockquoteComponent(args)}
                </toujou-blockquote-grid>
            </section>
        </main>
    `;
};

export const Blockquote = Template.bind({});

Blockquote.args = {
    direction: 'vertical',
    elementDesign: 'default',
}
