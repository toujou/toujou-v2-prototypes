import { Story, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import headerDocs from './header.docs.mdx';


export default {
    title: 'COMPONENTS/Header',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: headerDocs,
        },
        layout: "fullscreen",
    },
    argTypes: {
        imageHeight: {
            table: {
                category: "Header Settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Header image height',
            description: "Set the header image height",
            options: ['default', 'full', 'half', 'quarter', '3-1'],
            control: { type: 'select' },
            defaultValue: ['default'],
            required: true,
        }
    },
    tags: ['autodocs']
} as Meta;

interface HeaderStoryProps {
    isTitleOnly: boolean,
    imageHeight: string,
    headerVerticalPos: string,
    headerHorizontalPos: string,
    headerContentSize: string,
    headlineSize: string,
    headerTextAlignment: string,
    accentColor: string,
}

const Template: Story<HeaderStoryProps> = (args: HeaderStoryProps) => {
    return `
        <header class="header" image-height="${args.imageHeight}">            
            <figure class="header__figure">
                <video
                    playsinline
                    poster
                    loop
                    class="video"
                    controls src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                ></video>
            </figure>
        </header>
    `
};

export const HeaderVideo = Template.bind({});

// @ts-ignore
HeaderVideo.args = {
    imageHeight: 'default',
}
