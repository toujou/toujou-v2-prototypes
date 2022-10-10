import { Story, Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import blockquoteDocs from './blockquote.docs.mdx';

export default {
    title: 'COMPONENTS/Blockquote',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/0bd327cf-3d4a-42b8-b2a2-6e5f149165f8-5e80/screen/5e18e259-dce9-4e39-b5d0-7c0861d5cdcf/Desktop',
        },
        badges: [TOUJOU_BADGES.TESTING],
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
            defaultValue: ['vertical'],
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
            defaultValue: ['default'],
            required: true,
        },
    }
} as Meta;

interface BlockquoteStoryProps {
    direction: any;
    elementDesign: string;
}

const Template: Story<BlockquoteStoryProps> = (args: BlockquoteStoryProps) => {
    return `
        <toujou-blockquote role="figure" class="blockquote" blockquote-direction="${args.direction}" blockquote-design="${args.elementDesign}">
            <img slot="image" class="blockquote__image" src="https://picsum.photos/200/200" alt="quote image" />
            <blockquote slot="quote" class="blockquote__blockquote">
                <p class="blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
            </blockquote>
            <figcaption slot="author" class="blockquote__author">Jack Handey</figcaption>
        </toujou-blockquote>
    `;
};

export const Blockquote = Template.bind({});

Blockquote.args = {
    direction: 'vertical',
    elementDesign: 'default',
}

