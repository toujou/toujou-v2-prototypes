import { StoryFn, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import chapterDocs from "./chapter.docs.mdx";

export default {
    title: 'COMPONENTS/Chapter',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: chapterDocs,
        },
        layout: "fullscreen",
    },
    argTypes: {
        backgroundColor: {
            table: {
                category: "Chapter settings",
                defaultValue: { summary: 'none' },
            },
            name: 'Background color',
            description: "Choose a background-color for the chapter",
            options: ['none', 'default', 'background', 'primary', 'primary-light', 'primary-dark', 'secondary', 'secondary-light', 'secondary-dark', 'font', 'font-light', 'font-dark'],
            control: { type: 'radio' },
            defaultValue: ['none'],
            required: true,
        },
        fontColor: {
            table: {
                category: "Chapter settings",
                defaultValue: { summary: 'none' },
            },
            name: 'Font color',
            description: "Choose a font-color for the chapter",
            options: ['none', 'default', 'background', 'primary', 'primary-light', 'primary-dark', 'secondary', 'secondary-light', 'secondary-dark', 'font', 'font-light', 'font-dark'],
            control: { type: 'radio' },
            defaultValue: ['none'],
            required: true,
        },
        minHeight: {
            table: {
                category: "Chapter settings",
                defaultValue: { summary: 'none' },
            },
            name: 'Minimum height',
            description: "Choose a minimum height for the chapter",
            options: ['auto', 'full', 'half', 'third', 'quarter'],
            control: { type: 'radio' },
            defaultValue: ['none'],
            required: true,
        },
        verticalPosition: {
            table: {
                category: "Chapter settings",
                defaultValue: { summary: 'none' },
            },
            name: 'Vertical position',
            description: "Choose a vertical for the chapter's content",
            options: ['default', 'top', 'middle', 'bottom'],
            control: { type: 'radio' },
            defaultValue: ['none'],
            required: true,
        },
        showBackgroundImage: {
            table: {
                category: "Chapter settings",
                defaultValue: { summary: 'none' },
            },
            name: 'Show background image',
            description: "Show a background image on the chapter element",
            control: { type: 'boolean' },
            defaultValue: ['false'],
            required: true,
        },
        attachmentType: {
            table: {
                category: "Chapter settings",
                defaultValue: { summary: 'none' },
            },
            name: 'Background attachment type',
            description: "Choose the attachment type for the background image",
            options: ['scroll', 'fixed'],
            control: { type: 'radio' },
            defaultValue: ['none'],
            required: true,
        },
    },
    tags: ['autodocs']
} satisfies Meta;

interface ChapterStoryProps {
    backgroundColor: string,
    fontColor: string,
    minHeight: string,
    verticalPosition: string,
    showBackgroundImage: boolean,
    attachmentType: string
}

function renderDummyContent(headlineText: string, hasLongText: boolean) {
    return `
        <toujou-text-block class="text-block" text-block-column-count="1">
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <h1>${headlineText}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <a href="#">sed do eiusmod tempor</a> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    ${hasLongText ? `
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <a href="#">sed do eiusmod tempor</a> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <a href="#">sed do eiusmod tempor</a> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <a href="#">sed do eiusmod tempor</a> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    ` : ''}
                </div>
            </toujou-text-block-column>
        </toujou-text-block>
    `
}

const Template: StoryFn<ChapterStoryProps> = (args: ChapterStoryProps) => {
    const bgColorAttr = args.backgroundColor !== 'none' ? `background-color=${args.backgroundColor}` : '';
    const fontColorAttr = args.fontColor !== 'none' ? `font-color=${args.fontColor}` : '';
    const chapterStyles = `
        --chapter-bg-image-mobile: url(https://picsum.photos/840/840);
        --chapter-bg-image-tablet: url(https://picsum.photos/1024/1024);
        --chapter-bg-image-desktop: url(https://picsum.photos/1440/1440);
        --chapter-bg-image-wide: url(https://picsum.photos/1960/1960);
        --chapter-bg-image-original: url(https://picsum.photos/2400/2400);
    `

    return `
        <span id="c1"></span>
        <section class="chapter" background-color="background">
            ${renderDummyContent('Dummy content', true)}
        </section>

        <span id="c2"></span>
        <section
            class="chapter"
            ${bgColorAttr}
            ${fontColorAttr}
            min-height="${args.minHeight}"
            vertical-position="${args.verticalPosition}"
            attachment-type="${args.attachmentType}"
            style="${chapterStyles}"
            ${args.showBackgroundImage ? 'has-background-media': ''}
            is-test-target
        >
            ${renderDummyContent('Test chapter', false)}
        </section>

        <span id="c2"></span>
        <section class="chapter" background-color="background">
            ${renderDummyContent('Dummy content', true)}
        </section>
    `
};

export const Chapter = Template.bind({});

Chapter.args = {
    backgroundColor: 'none',
    fontColor: 'none',
    minHeight: 'auto',
    verticalPosition: 'default',
    showBackgroundImage: false,
    attachmentType: 'scroll'
}
