import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import blogPluginsDocs from './blog-plugins.docs.mdx';

export default {
    title: 'COMPONENTS/Blog Plugin',
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: blogPluginsDocs,
        },
    },
} as Meta;

const Template = () => {
    return `
        <div class="chips-list categories-list">
            <h3 class="chips-list__title">Categories</h3>
            <ul class="chips-list__list">
                <li class="chips-list__item">
                    <a href="#" class="chips-list__link">
                        <toujou-chip class="chip" chip-icon-position="left" chip-bg-color="primary-light" chip-border-radius="round" chip-size="small" is-clickable>
                            <toujou-icon class="icon" icon-name="bookmark-filled" icon-size="normal" icon-color="font"></toujou-icon>
                            Tutorials
                        </toujou-chip>
                    </a>
                </li>
                <li class="chips-list__item">
                    <a href="#" class="chips-list__link">
                        <toujou-chip class="chip" chip-icon-position="left" chip-bg-color="primary-light" chip-border-radius="round" chip-size="small" is-clickable>
                            <toujou-icon class="icon" icon-name="bookmark-filled" icon-size="normal" icon-color="font"></toujou-icon>
                            TYPO3
                        </toujou-chip>
                    </a>
                </li>
                <li class="chips-list__item">
                    <a href="#" class="chips-list__link">
                        <toujou-chip class="chip" chip-icon-position="left" chip-bg-color="primary-light" chip-border-radius="round" chip-size="small" is-clickable>
                            <toujou-icon class="icon" icon-name="bookmark-filled" icon-size="normal" icon-color="font"></toujou-icon>
                            Content Management
                        </toujou-chip>
                    </a>
                </li>
                <li class="chips-list__item">
                    <a href="#" class="chips-list__link">
                        <toujou-chip class="chip" chip-icon-position="left" chip-bg-color="primary-light" chip-border-radius="round" chip-size="small" is-clickable>
                            <toujou-icon class="icon" icon-name="bookmark-filled" icon-size="normal" icon-color="font"></toujou-icon>
                            Elements
                        </toujou-chip>
                    </a>
                </li>
            </ul>
        </div>
    `;
};

export const Categories = Template.bind({});