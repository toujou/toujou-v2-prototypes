import { Story, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import chapterDocs from "./chapter.docs.mdx";

export default {
    title: 'COMPONENTS/Chapter',
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: chapterDocs,
        },
        layout: "fullscreen",
    },
    argTypes: {
        variant: {
            table: {
                category: "Chapter settings",
                defaultValue: { summary: 'none' },
            },
            name: 'Chapter variant',
            description: "Choose between the possible standard chapter variants",
            options: ['none', 'default', 'primary', 'secondary', 'inverted', 'white', 'background'],
            control: { type: 'radio' },
            defaultValue: ['none'],
            required: true,
        },
    }
} as Meta;

interface ChapterStoryProps {
    variant: string,
}

const Template: Story<ChapterStoryProps> = (args: ChapterStoryProps) => {
    return `
        <section class="chapter" chapter-variant="${args.variant}">
            <toujou-text-block class="text-block" text-block-column-count="1">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h1>Left aligned H1 headline</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>
        </section>
    `
};

export const Chapter = Template.bind({});

Chapter.args = {
    variant: 'none',
}