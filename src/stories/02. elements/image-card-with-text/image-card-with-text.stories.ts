import { Story, Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import imageCardWithTextDocs from '../content-card-with-text/content-card-with-text.docs.mdx';

export default {
    title: 'COMPONENTS/Image Card',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/3d1d0926-79e2-4ae4-aa1c-162dcd451a3a-684e/screen/f783e300-5752-4a6a-8ed9-05047ec22750/Desktop',
        },
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: imageCardWithTextDocs,
        }
    },
    argTypes: {
        direction: {
            table: {
                category: "Image card settings",
                defaultValue: { direction: 'left'},
            },
            name: 'Direction',
            description: "Set the column where the text will be shown",
            options: ['left', 'right'],
            control: { type: 'radio' },
            defaultValue: ['left'],
            required: true,
        },
    }
} as Meta;

interface ImageCardWithTextStoryProps {
    direction: string
}

function renderTextColumn() {
    return `
        <h1>Please insert your Heading here!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis blandit turpis cursus in hac habitasse. Integer quis auctor elit sed vulputate mi sit amet mauris. Dictum at tempor commodo ullamcorper. At auctor urna nunc id cursus metus. Non blandit massa enim nec dui nunc mattis enim ut. Placerat vestibulum lectus mauris ultrices eros in cursus. Id porta nibh venenatis cras sed. Est velit egestas dui id ornare arcu odio ut. Praesent semper feugiat nibh sed pulvinar proin gravida. Nec dui nunc mattis enim ut tellus elementum sagittis. Urna duis convallis convallis tellus. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Adipiscing enim eu turpis egestas pretium. At elementum eu facilisis sed odio morbi quis commodo odio. Diam quis enim lobortis scelerisque fermentum dui faucibus. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Sed faucibus turpis in eu mi bibendum neque egestas. Elementum eu facilisis sed odio morbi quis. Quisque id diam vel quam elementum pulvinar etiam non quam.</p>
    `;
}

function renderCardColumn() {
    return `
        <toujou-content-card-grid class="content-card-grid" fullwidth="">
            <a href="/" class="image-card" image-format="16-9" card-variant="secondary">
                <figure class="image-card__figure">
                    <img class="image-card__image" src="https://picsum.photos/640/640">
                </figure>
    
                <h3 class="image-card__title">
                    <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon>
                    Title one secondary
                </h3>
            </a>
        </toujou-content-card-grid>
    `;
}

const Template: Story<ImageCardWithTextStoryProps> = (args: ImageCardWithTextStoryProps) => {
    return `
        <toujou-grid class="grid" number-of-columns="2" grid-type="default" column-layout="default">
             <toujou-grid-column class="grid-column">          
                ${args.direction === 'left' ? renderTextColumn() : renderCardColumn()}
            </toujou-grid-column>
            <toujou-grid-column class="grid-column">
                ${args.direction === 'left' ? renderCardColumn() : renderTextColumn()}
            </toujou-grid-column>
        </toujou-grid>
    `;
};

export const ImageCardWithText = Template.bind({});

ImageCardWithText.args = {
    direction: 'left',
}

