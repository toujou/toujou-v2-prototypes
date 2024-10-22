import { StoryFn, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import TeaserDocs from './teaser.docs.mdx';

export default {
    title: 'COMPONENTS/Teaser',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
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
        elementDesign: {
            table: {
                category: "Teaser settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Element design',
            description: "Choose the teaser's element design",
            options: ['default', 'primary', 'secondary', 'inverted'],
            control: { type: 'radio' },
            defaultValue: ['default'],
            required: true,
        },
    },
    tags: ['autodocs']
} satisfies Meta;


interface ToujouImageCardStoryProps {
    teaserType: string;
    imageWidth: string;
    imageSide: string;
    elementDesign: string;
}

const Template: StoryFn<ToujouImageCardStoryProps> = (args: ToujouImageCardStoryProps) => {
    return `
        <main>
            <toujou-teaser class="teaser" teaser-type="${args.teaserType}" image-width="${args.imageWidth}" image-side="${args.imageSide}" element-design="${args.elementDesign}">
                <div class="teaser__figure">
                    <img class="teaser__image" src="https://picsum.photos/1024/1480" alt="nice image" />
                    <toujou-media-info class="media-info">
                        <button slot="open-button" class="media-info__toggle" aria-label="Toggle the image caption and / or copyright">
                            <toujou-icon class="icon" icon-color="background" icon-name="info" icon-size="ms"></toujou-icon>
                        </button>
                        <button slot="close-button" class="media-info__toggle" aria-label="Toggle the image caption and / or copyright">
                            <toujou-icon class="icon" icon-color="background" icon-name="close" icon-size="ms"></toujou-icon>
                        </button>
                        <figpaction slot="figcaption" class="media-info__figcaption">This is a beautiful description</figpaction>
                        <small slot="copyright" class="media-info__copyright">@Nice photographer</small>
                    </toujou-media-info>
                </div>
                <div class="teaser__content">
                    <h3>Nice headline</h3>
                    <p>This is a simple element containing a headline and this text. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
                </div>
            </toujou-teaser>
        </main>
    `;
};

export const Teaser = Template.bind({});

Teaser.args = {
    teaserType: 'cinema',
    imageWidth: '50',
    imageSide: 'left',
    elementDesign: 'default'
}

