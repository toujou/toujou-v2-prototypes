import { StoryFn, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import contentCardWithTextDocs from '../content-card-with-text/content-card-with-text.docs.mdx';

export default {
    title: 'COMPONENTS/Content Card',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: contentCardWithTextDocs,
        }
    },
    argTypes: {
        direction: {
            table: {
                category: "Content card settings",
                defaultValue: { summary: 'left' },
            },
            name: 'Direction',
            description: "Set the column where the text will be shown",
            options: ['left', 'right'],
            control: { type: 'radio' },
            required: true,
        },
    },
    tags: ['autodocs']
} satisfies Meta;

interface ContentCardWithTextStoryProps {
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
        <toujou-content-card-grid class="content-card-grid" fullwidth>
            <a href="/" class="content-card" card-direction="vertical" card-variant="default" fullwidth>
                <figure class="content-card__figure">
                    <img class="content-card__image" src="https://picsum.photos/640/640" alt="nice image">
                </figure>

                <div class="content-card__content">
                    <h3 class="content-card__title">Lorem Ipsum</h3>
                    <p class=" content-card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <span class="content-card__button">
                        <toujou-icon class="icon" icon-name="arrow-right" icon-color="primary"></toujou-icon>
                        more
                    </span>
                </div>
            </a>
        </toujou-content-card-grid>
    `;
}

const contentCardWithTextBLock = (args: ContentCardWithTextStoryProps) => {
    return `
        <toujou-grid class="grid" number-of-columns="2" grid-type="default" column-layout="${args.direction === 'left' ? 'third-right' : 'third-left'}">
             <toujou-grid-column class="grid-column">
                ${args.direction === 'left' ? renderTextColumn() : renderCardColumn()}
            </toujou-grid-column>
            <toujou-grid-column class="grid-column">
                ${args.direction === 'left' ? renderCardColumn() : renderTextColumn()}
            </toujou-grid-column>
        </toujou-grid>
    `;
}

const Template: StoryFn<ContentCardWithTextStoryProps> = (args: ContentCardWithTextStoryProps) => {
    return `
        <main>
            ${contentCardWithTextBLock(args)}

            <section class="chapter" background-color="primary">
                ${contentCardWithTextBLock(args)}
            </section>
        </main>
    `;
};

export const ContentCardWithText = Template.bind({});

ContentCardWithText.args = {
    direction: 'left',
}
