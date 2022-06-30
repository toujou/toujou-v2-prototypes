import { Story, Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import TeaserDocs from './teaser.docs.mdx';

export default {
    title: 'COMPONENTS/Teaser',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/3d1d0926-79e2-4ae4-aa1c-162dcd451a3a-684e/screen/f783e300-5752-4a6a-8ed9-05047ec22750/Desktop',
        },
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: TeaserDocs,
        }
    },
    argTypes: {
        teaserType: {
            table: {
                category: "Teaser settings",
                defaultValue: { summary: 'cinema' },
            },
            name: 'Teaser type',
            description: "Choose the teaser type",
            options: ['cinema', 'media'],
            control: { type: 'radio' },
            defaultValue: ['cinema'],
            required: true,
        },
        imageWidth: {
            table: {
                category: "Teaser settings",
                defaultValue: { summary: '50' },
            },
            name: 'Image width',
            description: "Choose the teaser's image width",
            options: ['50', '33', '66'],
            control: { type: 'radio' },
            defaultValue: ['50'],
            required: true,
        },
        imageSide: {
            table: {
                category: "Teaser settings",
                defaultValue: { summary: 'left' },
            },
            name: 'Image side',
            description: "Choose the teaser's image side",
            options: ['left', 'right'],
            control: { type: 'radio' },
            defaultValue: ['left'],
            required: true,
        },
    }
} as Meta;


interface ToujouImageCardStoryProps {
    teaserType: string;
    imageWidth: string,
    imageSide: string,
}

const Template: Story<ToujouImageCardStoryProps> = (args: ToujouImageCardStoryProps) => {
    return `
        <toujou-teaser class="teaser" teaser-type="${args.teaserType}" image-width="${args.imageWidth}" image-side="${args.imageSide}">
            <div class="teaser__figure">
                <img class="teaser__image" src="https://picsum.photos/1024" alt="nice image" />
            </div>
            <div class="teaser__content">
                <h3>Nice headline</h3>
                <p>This is a simple element containing a headline and this text. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
            </div> 
        </toujou-teaser>
    `;
};

export const Teaser = Template.bind({});

Teaser.args = {
    teaserType: 'cinema',
    imageWidth: '50',
    imageSide: 'left',
}

