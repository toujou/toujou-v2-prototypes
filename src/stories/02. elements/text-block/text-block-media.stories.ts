import { StoryFn, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import textBlockDocs from './text-block.docs.mdx';

export default {
    title: 'COMPONENTS/Text Elements',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: textBlockDocs,
        }
    },
    argTypes: {
        imageAspectRatio: {
            table: {
                category: "Image settings",
                defaultValue: { summary: '4-3' },
            },
            name: 'Image aspect ratio',
            description: "Set the image aspect ratio",
            options: ['auto', 'square', '4-3', '16-9', 'golden'],
            control: { type: 'radio' },
            required: true,
        },
    },
} satisfies Meta;

interface TextBlocksMediaStoryProps {
    imageAspectRatio: string;
}

const Template: StoryFn<TextBlocksMediaStoryProps> = (args: TextBlocksMediaStoryProps) => {
    return `
        <main>
            <toujou-text-block class="text-block" text-block-media-position="beside-left">
                <toujou-text-block-column class="text-block-column">
                    <figure class="text-block__figure">
                        <img src="https://picsum.photos/1800/3200" alt="beautiful image" class="text-block__image text-block__image--${args.imageAspectRatio}">
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
                    </figure>
                    <div class="text-block__content">
    <!--                    <h3>Left aligned H3 headline</h3>-->
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>

            <toujou-text-block class="text-block" text-block-media-position="beside-left">
                <toujou-text-block-column class="text-block-column">
                    <figure class="text-block__figure">
                        <a href="#">
                            <img src="https://picsum.photos/1800/3200" alt="beautiful image" class="text-block__image text-block__image--${args.imageAspectRatio}">
                            <toujou-media-info class="media-info">
                                <button slot="open-button" class="media-info__toggle" aria-label="Medien Beschriftung / Copyright umschalten">
                                    <toujou-icon class="icon " icon-name="info" icon-color="background" icon-size="ms"></toujou-icon>
                                </button>
                                <button slot="close-button" class="media-info__toggle" aria-label="Medien Beschriftung / Copyright umschalten">
                                    <toujou-icon class="icon " icon-name="close" icon-color="background" icon-size="ms"></toujou-icon>
                                </button>
                                <figpaction slot="figcaption" class="media-info__figcaption"></figpaction>
                                <small slot="copyright" class="media-info__copyright">© dfbsdfhsdghsfgjs</small>
                            </toujou-media-info>
                        </a>
                    </figure>
                    <div class="text-block__content">
                        <h3>Linked image</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>

            <toujou-text-block class="text-block" text-block-media-position="beside-right">
                <toujou-text-block-column class="text-block-column">
                    <figure class="text-block__figure">
                        <img src="https://picsum.photos/1800/3200" alt="beautiful image" class="text-block__image text-block__image--${args.imageAspectRatio}">
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
                    </figure>
                    <div class="text-block__content">
                        <h3>Left aligned H3 headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>

            <toujou-text-block class="text-block" text-block-media-position="inside-left">
                <toujou-text-block-column class="text-block-column">
                    <figure class="text-block__figure">
                        <img src="https://picsum.photos/1800/3200" alt="beautiful image" class="text-block__image text-block__image--${args.imageAspectRatio}">
                    </figure>
                    <div class="text-block__content">
                        <h3>Left aligned H3 headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>

            <toujou-text-block class="text-block" text-block-media-position="inside-right">
                <toujou-text-block-column class="text-block-column">
                    <figure class="text-block__figure">
                        <img src="https://picsum.photos/1800/3200" alt="beautiful image" class="text-block__image text-block__image--${args.imageAspectRatio}">
                    </figure>
                    <div class="text-block__content">
                        <h3>Left aligned H3 headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>
        </main>
    `;
};

export const TextBlockMedia = Template.bind({});

TextBlockMedia.args = {
    imageAspectRatio: 'golden'
}
