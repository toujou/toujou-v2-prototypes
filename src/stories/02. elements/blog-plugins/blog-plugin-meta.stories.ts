import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import blogPluginsDocs from './blog-plugins.docs.mdx';

export default {
    title: 'COMPONENTS/Blog Plugin',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: blogPluginsDocs,
        },
    },
    tags: ['autodocs']
} satisfies Meta;

const Template = () => {
    return `
        <div class="post-meta">
            <div class="post-meta__group" group-type="author">
                <img src="https://i.pravatar.cc/80?img=27" alt="author avatar" class="post-meta__author-avatar">
                <p class="post-meta__text post-meta__author-name">Luke Skywalker</p>
            </div>
            <div class="post-meta__group" group-type="categories">
                <toujou-chip class="chip" chip-icon-position="left" chip-bg-color="primary-light" chip-border-radius="round" chip-size="normal" is-clickable>
                    <toujou-icon class="icon" icon-name="bookmark-filled" icon-size="ms" icon-color="bg"></toujou-icon>
                    Tutorials
                </toujou-chip>
            </div>
            <div class="post-meta__group" group-type="tags">
                <toujou-chip class="chip" chip-icon-position="left" chip-bg-color="primary-light" chip-border-radius="round" chip-size="normal" is-clickable>
                    <toujou-icon class="icon" icon-name="tag-filled" icon-size="ms" icon-color="bg"></toujou-icon>
                    TYPO3
                </toujou-chip>
                <toujou-chip class="chip" chip-icon-position="left" chip-bg-color="primary-light" chip-border-radius="round" chip-size="normal" is-clickable>
                    <toujou-icon class="icon" icon-name="tag-filled" icon-size="ms" icon-color="bg"></toujou-icon>
                    Hacks
                </toujou-chip>
            </div>
            <div class="post-meta__group" group-type="comments">
                <toujou-icon class="icon" icon-name="article" icon-size="m" icon-color="font"></toujou-icon>
                <p class="post-meta__text">6 comments</p>
            </div>
            <div class="post-meta__group" group-type="published">
                <toujou-icon class="icon" icon-name="calendar-lines" icon-size="m" icon-color="font"></toujou-icon>
                <p class="post-meta__text">01.02.2021</p>
            </div>
        </div>
    `;
};

export const PostMeta = Template.bind({});
