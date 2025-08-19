import { Meta } from '@storybook/web-components-vite';

// @ts-ignore
import blogPluginsDocs from './blog-plugins.docs.mdx';

export default {
    title: 'COMPONENTS/Blog Plugin',
    parameters: {
        docs: {
            page: blogPluginsDocs,
        },
    },
} satisfies Meta;

const Template = () => {
    return `
        <div class="chips-list tags-list">
            <h3 class="chips-list__title">Tags</h3>
            <ul class="chips-list__list">
                <li class="chips-list__item">
                    <a href="#" class="chips-list__link">
                        <toujou-chip class="chip" chip-icon-position="left" chip-bg-color="primary-light" chip-border-radius="round" chip-size="normal" is-clickable>
                            <toujou-icon class="icon" icon-name="tag-filled" icon-size="ms" icon-color="bg"></toujou-icon>
                            Tutorials
                        </toujou-chip>
                    </a>
                </li>
                <li class="chips-list__item">
                    <a href="#" class="chips-list__link">
                        <toujou-chip class="chip" chip-icon-position="left" chip-bg-color="primary-light" chip-border-radius="round" chip-size="normal" is-clickable>
                            <toujou-icon class="icon" icon-name="tag-filled" icon-size="ms" icon-color="bg"></toujou-icon>
                            TYPO3
                        </toujou-chip>
                    </a>
                </li>
                <li class="chips-list__item">
                    <a href="#" class="chips-list__link">
                        <toujou-chip class="chip" chip-icon-position="left" chip-bg-color="primary-light" chip-border-radius="round" chip-size="normal" is-clickable>
                            <toujou-icon class="icon" icon-name="tag-filled" icon-size="ms" icon-color="bg"></toujou-icon>
                            Content Management
                        </toujou-chip>
                    </a>
                </li>
                <li class="chips-list__item">
                    <a href="#" class="chips-list__link">
                        <toujou-chip class="chip" chip-icon-position="left" chip-bg-color="primary-light" chip-border-radius="round" chip-size="normal" is-clickable>
                            <toujou-icon class="icon" icon-name="tag-filled" icon-size="ms" icon-color="bg"></toujou-icon>
                            Elements
                        </toujou-chip>
                    </a>
                </li>
            </ul>
        </div>
    `;
};

export const Tags = Template.bind({});
