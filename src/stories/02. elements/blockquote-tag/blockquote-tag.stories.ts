import { Meta } from '@storybook/web-components-vite';

// @ts-ignore
import blockquoteTagDocs from './blockquote-tag.docs.mdx';

export default {
    title: 'COMPONENTS/Blockquote',
    parameters: {
        docs: {
            page: blockquoteTagDocs,
        },
    },
    tags: ['autodocs']
} satisfies Meta;

const blockquoteTagComponent = () => {
    return `
        <blockquote>
            <p>This is a simple element containing a blockquote. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
        </blockquote>
        <p class="blockquote__author">Your Name</p>
    `;
}

const Template = () => {
    return `
        <main>
            ${blockquoteTagComponent()}

            <section class="chapter" background-color="primary">
                ${blockquoteTagComponent()}
            </section>
        </main>
    `;
};

export const BlockquoteTag = Template.bind({});
