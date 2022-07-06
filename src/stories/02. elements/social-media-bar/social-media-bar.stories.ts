import { Story, Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import socialMediaBarDocs from "./social-media-bar.docs.mdx";

export default {
    title: 'COMPONENTS/Social Media Bar',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/57945f95-9455-4031-a7b6-76e6a7ec74a6-02c7/screen/3edbd260-09a0-4b35-ad8a-73b46782965e/Desktop',
        },
        badges: [TOUJOU_BADGES.TESTING],
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
            defaultValue: ['default'],
            required: true,
        },
        hideHeadline: {
            table: {
                category: "Social media bar settings",
                defaultValue: { summary: false },
            },
            name: 'Hide headline',
            description: "Hide the social media bar's headline",
            control: { type: 'boolean' },
            defaultValue: [false],
            required: true,
        }
    }
} as Meta;

interface SliderStoryProps {
    elementDesign: string;
    hideHeadline: boolean;
}

const Template: Story<SliderStoryProps> = (args: SliderStoryProps) => {
    return `       
        <toujou-social-media-bar class="social-media-bar" element-design="${args.elementDesign}">
            ${args.hideHeadline ? '' : `<h3 class="social-media-bar__headline">Get in touch</h3>`}
            <div class="social-media-bar__links">
                <a href="#" class="social-media-bar__link" aria-label="Our facebook account">
                    <toujou-icon class="icon" icon-name="sm-facebook" icon-size="xxl" icon-color="primary" aria-hidden></toujou-icon>
                </a>
                <a href="#" class="social-media-bar__link" aria-label="Our twitter account">
                    <toujou-icon class="icon" icon-name="sm-twitter" icon-size="xxl" icon-color="primary" aria-hidden></toujou-icon>
                </a>
                <a href="#" class="social-media-bar__link" aria-label="Our instagram account">
                    <toujou-icon class="icon" icon-name="sm-instagram" icon-size="xxl" icon-color="primary" aria-hidden></toujou-icon>
                </a>
                <a href="#" class="social-media-bar__link" aria-label="Our youtube account">
                    <toujou-icon class="icon" icon-name="sm-youtube" icon-size="xxl" icon-color="primary" aria-hidden></toujou-icon>
                </a>
            </div>
        </toujou-social-media-bar>
     `;
};

export const SocialMediaBar = Template.bind({});

SocialMediaBar.args = {
    elementDesign: 'default',
    hideHeadline: false,
}

