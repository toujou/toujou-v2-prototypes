import { Story, Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import heroMediaDocs from "./hero-media.docs.mdx";

export default {
    title: 'COMPONENTS/Media',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/3d1d0926-79e2-4ae4-aa1c-162dcd451a3a-684e/screen/61e6af1e-563f-4ce8-92ba-ac3b191c5f0c/Desktop',
        },
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: heroMediaDocs,
        }
    },
    argTypes: {
        headerSize: {
            table: {
                category: "Hero Media settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Header size',
            description: "Choose header size",
            options: ['default', 'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'omega'],
            control: { type: 'radio' },
            defaultValue: ['default'],
            required: true,
        },
        headerAlignment: {
            table: {
                category: "Hero Media settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Header alignment',
            description: "Choose header alignment",
            options: ['default', 'center', 'right', 'left'],
            control: { type: 'radio' },
            defaultValue: ['default'],
            required: true,
        },
    }
} as Meta;

interface HeroMediaStoryProps {
    headerSize: string,
    headerAlignment: string,
}

const Template: Story<HeroMediaStoryProps> = (args: HeroMediaStoryProps) => {
    return `
        <a href="#" class="hero-media" headline-alignment="${args.headerAlignment}">
            <img src="https://picsum.photos/1200/1200" alt="beautiful image" class="hero-media__media">
            <h3 class="hero-media__title font--${args.headerSize}">Hero Media</h3>
            
            <toujou-media-info class="media-info">
                <button slot="open-button" class="media-info__toggle" aria-description="Toggle the image caption and / or copyright">
                    <toujou-icon class="icon" icon-color="background" icon-name="info" icon-size="ms"></toujou-icon>
                </button>
                <button slot="close-button" class="media-info__toggle" aria-description="Toggle the image caption and / or copyright">
                    <toujou-icon class="icon" icon-color="background" icon-name="close" icon-size="ms"></toujou-icon>
                </button>
                <figpaction slot="figcaption" class="media-info__figcaption">This is a beautiful description</figpaction>
                <small slot="copyright" class="media-info__copyright">@Nice photographer</small>
            </toujou-media-info>
        </a>
    `;
};

export const HeroMedia = Template.bind({});

HeroMedia.args = {
    headerSize: 'default',
    headerAlignment: 'default',
}