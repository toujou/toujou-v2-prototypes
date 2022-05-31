import {Meta} from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";

export default {
    title: 'COMPONENTS/Blockquote',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/57945f95-9455-4031-a7b6-76e6a7ec74a6-02c7/screen/16a665e8-5a1e-451f-ac52-717e48e2f4dd/Desktop',
        }
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

const BlockquoteTemplate = (args) => {
    return `
        <figure class="blockquote blockquote--${args.direction}">
            <img src="https://picsum.photos/200/200" alt="quote image" class="blockquote__image">
            <blockquote class="blockquote__quote">
                <p class="blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
            </blockquote>
            <figcaption class="blockquote__author">Jack Handey</figcaption>
        </figure>
    `;
};

export const Blockquote = BlockquoteTemplate.bind({});

// @ts-ignore
Blockquote.args = {
    direction: 'vertical'
}