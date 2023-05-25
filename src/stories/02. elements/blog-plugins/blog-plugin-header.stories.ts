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
        layout: 'fullwidth'
    },
    tags: ['autodocs']
} as Meta;

const Template = () => {
    return `
        <header class="header blog-header" image-height="default">
            <img class="header__image" src="https://picsum.photos/2000" alt="quote image">

            <div class="blog-header__content">
                <h1 class="blog-header__content-title">This is the blog title</h1>
            </div>            
        </header>
    `;
};

export const Header = Template.bind({});
