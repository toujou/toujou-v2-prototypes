import { StoryFn, Meta } from '@storybook/web-components-vite';
import '../../../js/elements/poster-reveal-listener';

export default {
    title: 'COMPONENTS/Poster Reveal',
    argTypes: {
        contentType: {
            table: {
                category: "Poster Reveal settings",
                defaultValue: { summary: 'youtube' },
            },
            name: 'Content type',
            description: "Define the content type",
            options: ['youtube', 'vimeo', 'text'],
            control: { type: 'radio' },
            required: true,
        },
    },
} satisfies Meta;

interface PosterRevealProps {
    contentType: 'text' | 'youtube' | 'vimeo';
}

function renderTextButton() {
    return `
        <button
            button-variant="primary"
            class="button poster-reveal__button"
            aria-label="Reveal text content"
            slot="trigger"
        >Show</button>
    `;
}

function renderMediaButton() {
    return `
        <button
            class="poster-reveal__button"
            slot="trigger"
            aria-label="Reveal video content"
        >
            <toujou-icon class="icon" icon-color="background" icon-name="play" icon-size="xxxl"></toujou-icon>
        </button>
    `;
}

function renderTextContent() {
    return `
        <div class="poster-reveal__content" slot="content" style="border: 4px dashed tomato; padding: var(--spacing-normal);">
            <h2>This is the content</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi consequatur, doloribus eveniet exercitationem iusto labore maiores, nemo nihil odio optio perferendis perspiciatis praesentium quis rerum vel velit vitae voluptas?</p>
            <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti doloribus maxime rerum voluptatum. Cupiditate deleniti, dignissimos eaque nostrum possimus voluptates! Alias eligendi inventore iste minima sequi. Excepturi, saepe, tempore.</span><span>Aperiam aspernatur, autem consequatur illo in incidunt iusto modi. Aliquid animi inventore magnam modi praesentium quam reprehenderit soluta totam vel. Magnam numquam perspiciatis porro possimus, provident quae reiciendis soluta voluptatum?</span><span>Ad, aliquam animi aspernatur aut corporis doloribus facilis ipsum iure magni nihil nostrum quidem, quo recusandae sint velit. Autem consequuntur debitis fuga magnam molestiae neque nesciunt numquam, optio recusandae reprehenderit.</span></p>
        </div>
    `;
}

function renderYoutubeContent() {
    const origin = encodeURIComponent(window.location.origin);

    return `
        <toujou-media-grid class="media-grid" media-grid-column-number="1" slot="content">
            <toujou-single-media class="single-media">
                <iframe
                    src="https://www.youtube-nocookie.com/embed/MRKy3kX8XUM?autohide=1&amp;controls=1&amp;loop=1&amp;playlist=MRKy3kX8XUM&amp;enablejsapi=1&amp;origin=${origin}"
                    allowfullscreen=""
                    playsinline=""
                    video-extension="youtube"
                    data-is-autoplay="0"
                    class="single-media__video video"
                    title="Bach - Violin Sonata no. 1 in G minor BWV 1001 - Sato | Netherlands Bach Society"
                    allow="fullscreen"
                ></iframe>    
            </toujou-single-media>
        </toujou-media-grid>
    `
}

function renderVimeoContent() {
    return `
        <toujou-media-grid class="media-grid" media-grid-column-number="1" slot="content">
            <toujou-single-media class="single-media">
                <iframe
                    src="https://player.vimeo.com/video/347119375?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    video-extension="vimeo"
                    class="single-media__video video"
                    title="Sample Video"
                ></iframe>    
            </toujou-single-media>
        </toujou-media-grid>
    `
}

function renderConditionalElements(contentType: string) {
    switch (contentType) {
        case 'youtube':
            return `
                ${renderMediaButton()};
                ${renderYoutubeContent()};
            `

        case 'vimeo':
            return `
                ${renderMediaButton()};
                ${renderVimeoContent()};
            `

        case 'text':
        default:
            return `
                ${renderTextButton()};
                ${renderTextContent()};
            `
    }
}

const Template: StoryFn<PosterRevealProps> = (args: PosterRevealProps) => {
    return `
        <main>
            <toujou-poster-reveal class="poster-reveal" content-type="${args.contentType}">
                <img
                    src="https://picsum.photos/1600/900"
                    alt="beautiful image"
                    class="poster-reveal__image"
                    slot="poster"
                />
                
                ${renderConditionalElements(args.contentType)}
            </toujou-poster-reveal>
        </main>
    `;
};

export const PosterReveal = Template.bind({});

PosterReveal.args = {
    contentType: 'youtube',
}
