import { Meta, StoryFn } from '@storybook/web-components-vite';

// @ts-ignore
import htmlDocs from './html.docs.mdx';

export default {
    title: 'COMPONENTS/HTML',
    parameters: {
        docs: {
            page: htmlDocs,
        },
        layout: 'fullwidth',
    },
    argTypes: {
        isFullwidth: {
            table: {
                category: "html container Settings",
                defaultValue: { summary: 'false' },
            },
            name: 'Is fullwidth',
            description: "Toggle between fullwidth and content width",
            control: { type: 'boolean' },
            required: true,
        },
    },
} satisfies Meta;

interface HtmlStoryProps {
    isFullwidth: boolean,
}

const Template: StoryFn<HtmlStoryProps> = (args: HtmlStoryProps) => {
    return `
        <main>
            <toujou-html-container class="html-container" ${args.isFullwidth ? 'fullwidth' : ''}>
                <div style="border: 3px dashed lightcoral; padding: 2rem;">
                    <h1>Hello</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-html-container>
        </main>
    `
};

export const HTML = Template.bind({});

HTML.args = {
    isFullwidth: false,
}
