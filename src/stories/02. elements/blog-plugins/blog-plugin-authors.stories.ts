import { Meta, Story } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import blogPluginAuthorsDocs from './blog-plugin-authors.docs.mdx';

export default {
    title: 'COMPONENTS/Blog Plugin',
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: blogPluginAuthorsDocs,
        },
    },
    argTypes: {
        hasAvatar: {
            table: {
                category: "Author Settings",
                defaultValue: { summary: 'true' },
            },
            name: 'Has avatar',
            description: "Toggle between view with and without user avatar",
            control: { type: 'boolean' },
            defaultValue: ['true'],
            required: true,
        },
    }
} as Meta;

interface BlogPluginAuthorsStoryProps {
    hasAvatar: boolean
}

const Template: Story<BlogPluginAuthorsStoryProps> = (args: BlogPluginAuthorsStoryProps) => {
    return `
        <div class="post-authors">
            <div class="post-author" itemprop="author" itemscope="" itemtype="http://schema.org/Person" ${args.hasAvatar ? '' : 'no-avatar'}>
                ${args.hasAvatar ? `
                    <figure class="post-author__figure">
                        <img src="https://i.pravatar.cc/80?img=27" alt="author avatar" class="post-author__avatar">
                    </figure>
                ` : ''}
                
                <div class="post-author__meta">
                    <span class="post-author__name" itemprop="name">Han Solo</span>
                    <span class="post-author__title" itemprop="jobTitle">Pilot</span>
                    <span class="post-author__location" itemprop="homeLocation">Tatooine</span>
                </div>
                <p class="post-author__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                <toujou-social-media-bar class="social-media-bar post-author__socials" element-design="default" no-headline inline no-margins>
                    <div class="social-media-bar__links">
                        <a href="#" class="social-media-bar__link" aria-label="Our facebook account">
                            <toujou-icon class="icon" icon-name="sm-facebook" icon-size="xl" icon-color="primary" aria-hidden=""></toujou-icon>
                        </a>
                        <a href="#" class="social-media-bar__link" aria-label="Our twitter account">
                            <toujou-icon class="icon" icon-name="sm-twitter" icon-size="xl" icon-color="primary" aria-hidden=""></toujou-icon>
                        </a>
                        <a href="#" class="social-media-bar__link" aria-label="Our instagram account">
                            <toujou-icon class="icon" icon-name="sm-instagram" icon-size="xl" icon-color="primary" aria-hidden=""></toujou-icon>
                        </a>
                        <a href="#" class="social-media-bar__link" aria-label="Our youtube account">
                            <toujou-icon class="icon" icon-name="sm-youtube" icon-size="xl" icon-color="primary" aria-hidden=""></toujou-icon>
                        </a>
                    </div>
                </toujou-social-media-bar>
            </div>
            
            <div class="post-author" itemprop="author" itemscope="" itemtype="http://schema.org/Person" ${args.hasAvatar ? '' : 'no-avatar'}>
                ${args.hasAvatar ? `
                    <figure class="post-author__figure">
                        <img src="https://i.pravatar.cc/80?img=27" alt="author avatar" class="post-author__avatar">
                    </figure>
                ` : ''}
                <div class="post-author__meta">
                    <span class="post-author__name" itemprop="name">Han Solo</span>
                    <span class="post-author__title" itemprop="jobTitle">Pilot</span>
                    <span class="post-author__location" itemprop="homeLocation">Tatooine</span>
                </div>
                <p class="post-author__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                <toujou-social-media-bar class="social-media-bar post-author__socials" element-design="default" no-headline inline no-margins>
                    <div class="social-media-bar__links">
                        <a href="#" class="social-media-bar__link" aria-label="Our facebook account">
                            <toujou-icon class="icon" icon-name="sm-facebook" icon-size="xl" icon-color="primary" aria-hidden=""></toujou-icon>
                        </a>
                        <a href="#" class="social-media-bar__link" aria-label="Our twitter account">
                            <toujou-icon class="icon" icon-name="sm-twitter" icon-size="xl" icon-color="primary" aria-hidden=""></toujou-icon>
                        </a>
                        <a href="#" class="social-media-bar__link" aria-label="Our instagram account">
                            <toujou-icon class="icon" icon-name="sm-instagram" icon-size="xl" icon-color="primary" aria-hidden=""></toujou-icon>
                        </a>
                        <a href="#" class="social-media-bar__link" aria-label="Our youtube account">
                            <toujou-icon class="icon" icon-name="sm-youtube" icon-size="xl" icon-color="primary" aria-hidden=""></toujou-icon>
                        </a>
                    </div>
                </toujou-social-media-bar>
            </div>
        </div>
    `;
};

export const Authors = Template.bind({});

Authors.args = {
    hasAvatar: true,
}
