import { Story, Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/badgeCustomConfig.js'

// @ts-ignore
import toujouBlockquoteDocs from './toujou-blockquote.docs.mdx';

export default {
    title: 'COMPONENTS/Blockquote',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/57945f95-9455-4031-a7b6-76e6a7ec74a6-02c7/screen/16a665e8-5a1e-451f-ac52-717e48e2f4dd/Desktop',
        },
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: toujouBlockquoteDocs,
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
    }
} as Meta;

interface ToujouBlockquoteProps {
    direction: any;
}

const Template: Story<ToujouBlockquoteProps> = (args: ToujouBlockquoteProps) => {
    return `
        <toujou-blockquote role="figcaption" class="toujou-blockquote" blockquote-direction="${args.direction}">
            <img slot="image" class="toujou-blockquote__image" src="https://picsum.photos/200/200" alt="quote image" />
            <blockquote slot="quote" class="toujou-blockquote__blockquote">
                <p class="toujou-blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
            </blockquote>
            <figcaption slot="author" class="toujou-blockquote__author">Jack Handey</figcaption>
        </toujou-blockquote>
    `;
};

export const Blockquote = Template.bind({});

Blockquote.args = {
    direction: 'vertical'
}

