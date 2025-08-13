import { StoryFn, Meta } from '@storybook/web-components-vite';

// @ts-ignore
import headerDocs from './header-3-1.docs.mdx';


export default {
    title: 'COMPONENTS/Header',
    parameters: {
        docs: {
            page: headerDocs,
        },
        layout: "fullscreen",
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
            required: true,
        },
    },
    tags: ['autodocs']
} satisfies Meta;

interface HeaderThreeToOneStoryProps {
    headerSize: string,
    headerAlignment: string,
}

const Template: StoryFn<HeaderThreeToOneStoryProps> = (args: HeaderThreeToOneStoryProps) => {
    return `
        <header class="header" image-height="3-1">
            <a href="#" class="hero-media" headline-alignment="${args.headerAlignment}">
                <img src="https://picsum.photos/1200/1200" alt="beautiful image" class="hero-media__media">
                <div class="hero-media__content">
                    <h3 class="hero-media__title font--${args.headerSize}">Hero Media</h3>
                </div>

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
            </a>
        </header>
    `
};

export const HeaderThreeToOne = Template.bind({});

// @ts-ignore
HeaderThreeToOne.args = {
    headerSize: 'default',
    headerAlignment: 'default',
}
