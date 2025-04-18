import { StoryFn, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import socialMediaBarDocs from "./social-media-bar.docs.mdx";

export default {
    title: 'COMPONENTS/Social Media Bar',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: socialMediaBarDocs,
        }
    },
    argTypes: {
        elementDesign: {
            table: {
                category: "Social media bar settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Element design',
            description: "Set the social media bar's design color",
            options: ['default', 'primary', 'secondary', 'inverted'],
            control: { type: 'radio' },
            required: true,
        },
        hideHeadline: {
            table: {
                category: "Social media bar settings",
            },
            name: 'Hide headline',
            description: "Hide the social media bar's headline",
            control: { type: 'boolean' },
            required: true,
        },
        isInline: {
            table: {
                category: "Social media bar settings",
            },
            name: 'Add the "inline" attribute',
            description: 'Adding the "inline" attribute allows us to place the social-media-bar inside other elements',
            control: { type: 'boolean' },
            required: true,
        }
    },
    tags: ['autodocs']
} satisfies Meta;

interface SliderStoryProps {
    elementDesign: string;
    hideHeadline: boolean;
    isInline: boolean;
}

const Template: StoryFn<SliderStoryProps> = (args: SliderStoryProps) => {
    const iconSize = args.isInline ? 'xl' : 'xxl';
    return `
        <toujou-social-media-bar class="social-media-bar" element-design="${args.elementDesign}" ${args.hideHeadline ? 'no-headline' : ''} ${args.isInline ? 'inline' : ''}>
            ${args.hideHeadline ? '' : `<h3 class="social-media-bar__headline">Get in touch</h3>`}
            <div class="social-media-bar__links">
                <a href="#" class="social-media-bar__link" aria-label="Our facebook account">
                    <toujou-icon class="icon" icon-name="sm-facebook" icon-size="${iconSize}" icon-color="primary" aria-hidden></toujou-icon>
                </a>
                <a href="#" class="social-media-bar__link" aria-label="Our twitter account">
                    <toujou-icon class="icon" icon-name="sm-twitter" icon-size="${iconSize}" icon-color="primary" aria-hidden></toujou-icon>
                </a>
                <a href="#" class="social-media-bar__link" aria-label="Our instagram account">
                    <toujou-icon class="icon" icon-name="sm-instagram" icon-size="${iconSize}" icon-color="primary" aria-hidden></toujou-icon>
                </a>
                <a href="#" class="social-media-bar__link" aria-label="Our youtube account">
                    <toujou-icon class="icon" icon-name="sm-youtube" icon-size="${iconSize}" icon-color="primary" aria-hidden></toujou-icon>
                </a>
            </div>
        </toujou-social-media-bar>
     `;
};

export const SocialMediaBar = Template.bind({});

SocialMediaBar.args = {
    elementDesign: 'default',
    hideHeadline: false,
    isInline: false,
}
