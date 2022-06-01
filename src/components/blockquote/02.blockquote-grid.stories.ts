import {Meta} from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../.storybook/badgeCustomConfig.js'
export default {
    title: 'COMPONENTS/Blockquote',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/57945f95-9455-4031-a7b6-76e6a7ec74a6-02c7/screen/16a665e8-5a1e-451f-ac52-717e48e2f4dd/Desktop',
        },
        badges: [TOUJOU_BADGES.TESTING]
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
    }
} as Meta;

const BlockquoteGridTemplate = (args: { gridCount: string; direction: string; }) => {
    return `
        <div class="blockquote-grid blockquote-grid--${args.gridCount}">
            <figure class="blockquote blockquote--${args.direction}">
                <img src="https://picsum.photos/200/200" alt="quote image" class="blockquote__image">
                <blockquote class="blockquote__quote">
                    <p class="blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
                </blockquote>
                <figcaption class="blockquote__author">Jack Handey</figcaption>
            </figure>
            
            <figure class="blockquote blockquote--${args.direction}">
                <img src="https://picsum.photos/200/200" alt="quote image" class="blockquote__image">
                <blockquote class="blockquote__quote">
                    <p class="blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
                </blockquote>
                <figcaption class="blockquote__author">Jack Handey</figcaption>
            </figure>
            
            <figure class="blockquote blockquote--${args.direction}">
                <img src="https://picsum.photos/200/200" alt="quote image" class="blockquote__image">
                <blockquote class="blockquote__quote">
                    <p class="blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
                </blockquote>
                <figcaption class="blockquote__author">Jack Handey</figcaption>
            </figure>
            
            <figure class="blockquote blockquote--${args.direction}">
                <img src="https://picsum.photos/200/200" alt="quote image" class="blockquote__image">
                <blockquote class="blockquote__quote">
                    <p class="blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
                </blockquote>
                <figcaption class="blockquote__author">Jack Handey</figcaption>
            </figure>
        
        </div>

    `;
};

export const BlockquoteGrid = BlockquoteGridTemplate.bind({});

// @ts-ignore
BlockquoteGrid.args = {
    gridCount: '1',
    direction: 'vertical',
}
