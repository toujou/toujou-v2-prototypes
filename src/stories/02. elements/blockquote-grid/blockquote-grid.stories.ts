import { StoryFn, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import blockquoteGridDocs from './blockquote-grid.docs.mdx';

export default {
    title: 'COMPONENTS/Blockquote',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: blockquoteGridDocs,
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
            defaultValue: ['vertical'],
            required: true,
        },
        gridCount: {
            table: {
                category: "Blockquote grid settings",
                defaultValue: { summary: 'vertical' },
            },
            name: 'Grid count',
            description: "Set the number of columns per row ond desktop",
            options: ['1', '2', '3'],
            control: { type: 'radio' },
            defaultValue: ['1'],
            required: true,
        },
    },
    tags: ['autodocs']
} as Meta;

interface BlockquoteGridStoryProps {
    gridCount: string;
    direction: string;
}

const Template: StoryFn<BlockquoteGridStoryProps> = (args: BlockquoteGridStoryProps) => {
    return `
        <toujou-blockquote-grid class="blockquote-grid" blockquote-grid-count="${args.gridCount}">
            <toujou-blockquote role="figure" class="blockquote" blockquote-direction="${args.direction}" element-design="default">
                <img slot="image" class="blockquote__image" src="https://picsum.photos/200/200" alt="quote image" />
                <blockquote slot="quote" class="blockquote__blockquote">
                    <p class="blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
                </blockquote>
                <figcaption slot="author" class="blockquote__author">Jack Handey</figcaption>
            </toujou-blockquote>

            <toujou-blockquote role="figure" class="blockquote" blockquote-direction="${args.direction}" element-design="default">
                <img slot="image" class="blockquote__image" src="https://picsum.photos/200/200" alt="quote image" />
                <blockquote slot="quote" class="blockquote__blockquote">
                    <p class="blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
                </blockquote>
                <figcaption slot="author" class="blockquote__author">Jack Handey</figcaption>
            </toujou-blockquote>

            <toujou-blockquote role="figure" class="blockquote" blockquote-direction="${args.direction}" element-design="default">
                <img slot="image" class="blockquote__image" src="https://picsum.photos/200/200" alt="quote image" />
                <blockquote slot="quote" class="blockquote__blockquote">
                    <p class="blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
                </blockquote>
                <figcaption slot="author" class="blockquote__author">Jack Handey</figcaption>
            </toujou-blockquote>

            <toujou-blockquote role="figure" class="blockquote" blockquote-direction="${args.direction}" element-design="default">
                <img slot="image" class="blockquote__image" src="https://picsum.photos/200/200" alt="quote image" />
                <blockquote slot="quote" class="blockquote__blockquote">
                    <p class="blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
                </blockquote>
                <figcaption slot="author" class="blockquote__author">Jack Handey</figcaption>
            </toujou-blockquote>

        </toujou-blockquote-grid>
    `;
};

export const ToujouBlockquoteGrid = Template.bind({});

ToujouBlockquoteGrid.args = {
    gridCount: '1',
    direction: 'vertical',
}
