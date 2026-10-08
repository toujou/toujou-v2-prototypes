import { StoryFn, Meta } from '@storybook/web-components-vite';

export default {
    title: 'COMPONENTS/Header',
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {
        numberOfSlides: {
            table: {
                category: "Header Teaser Settings",
                defaultValue: { summary: '1' },
            },
            name: 'Teaser layout',
            description: "Set the number of items in the header teaser",
            options: ['1', '2', '3', '4'],
            control: { type: 'select' },
            required: true,
        },
        teaserLayout: {
            table: {
                category: "Header Teaser Settings",
                defaultValue: { summary: 'text_media' },
            },
            name: 'Teaser layout',
            description: "Set the header teaser layout",
            options: ['text_media', 'media_text'],
            control: { type: 'select' },
            required: true,
        },
        mediaRatio: {
            table: {
                category: "Header Teaser Settings",
                defaultValue: { summary: '16_9' },
            },
            name: 'Teaser element media ratio',
            description: "Set the header teaser media ratio",
            options: ['16_9', '1_1', '3_2', '4_3'],
            control: { type: 'select' },
            required: true,
        },
        elementDesign: {
            table: {
                category: "Header Teaser Settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Teaser element design',
            description: "Set the header teaser design",
            options: ['default', 'primary', 'secondary', 'inverted'],
            control: { type: 'select' },
            required: true,
        },
        sliderAccentColor: {
            table: {
                category: "Header Teaser Settings",
                defaultValue: { summary: 'default' },
            },
            name: 'header teaser slider accent color',
            description: "Set the header teaser slider design",
            options: ['default', 'primary', 'secondary', 'inverted'],
            control: { type: 'select' },
            required: true,
        },
    },
} satisfies Meta;

interface HeaderTeaserStoryProps {
    numberOfSlides: '1' | '2' | '3' | '4',
    teaserLayout: 'text_media' | 'media_text',
    mediaRatio: '16_9' | '1_1' | '3_2' | '4_3',
    elementDesign: 'default' | 'primary' | 'secondary' | 'inverted',
    sliderAccentColor: 'default' | 'primary' | 'secondary' | 'inverted'
}

interface articleProps {
    headline: string,
    contentText?: string,
    imgUrl: string,
    elementDesign: string,
    teaserLayout: 'text_media' | 'media_text',
    mediaRatio: '1_1' | '16_9' | '3_2' | '4_3'
}

interface articleMediaProps {
    imgUrl: string,
}

interface articleContentProps {
    headline: string,
    contentText?: string,
}

const articlesData = [
    {
        headline: 'Einsatzbereit. Individuell. SCHMITZ.',
        contentText: 'Wir entwickeln und bauen Feuerwehrfahrzeuge, die präzise auf Ihre Anforderungen abgestimmt sind. Normkonform, bewährt und persönlich betreut.',
        imgUrl: 'https://picsum.photos/id/1015/2500/1600',
    },
    {
        headline: 'Zuverlässig im Einsatz',
        contentText: 'Von der Planung bis zur Übergabe begleiten wir Sie persönlich.',
        imgUrl: 'https://picsum.photos/id/1018/2500/1600',
    },
    {
        headline: 'Made in Germany',
        imgUrl: 'https://picsum.photos/id/1039/2500/1600',
    },
    {
        headline: 'Service, der bleibt',
        contentText: 'Ersatzteile, Wartung und Schulungen aus einer Hand.',
        imgUrl: 'https://picsum.photos/id/1043/2500/1600',
    },
];

const renderArticleMedia = ({imgUrl}: articleMediaProps) => {
    return `
        <a href="#" class="header-teaser__media-link">
            <figure class="header-teaser__figure">
                <img class="header-teaser__image" src="${imgUrl}" alt="">
            </figure>
        </a>
    `;
}

const renderArticleContent = ({headline, contentText}: articleContentProps) => {
    return `
        <div class="header-teaser__content">
            <h1>${headline}</h1>
            ${contentText ? `<p>${contentText}</p>` : ``}
        </div>
    `;
}

const renderArticle = ({headline, contentText, imgUrl, elementDesign, teaserLayout, mediaRatio}: articleProps) => {
    return `
        <article
            class="header-teaser"
            data-element-design="${elementDesign}"
            data-teaser-layout="${teaserLayout}"
            data-media-ratio="${mediaRatio}"
        >
            ${teaserLayout === 'text_media' ? `
                ${renderArticleContent({ headline, contentText })}
                ${renderArticleMedia({ imgUrl })}
            ` : `
                ${renderArticleMedia({ imgUrl })}
                ${renderArticleContent({ headline, contentText })}
            `}
        </article>
    `;
}

const renderSingleArticle = (args: HeaderTeaserStoryProps) => {
    const article = articlesData[0];

    return `
        <header
            class="header"
            data-headercontent-teaser-type="single"
            data-media-ratio="${args.mediaRatio}"
        >
            ${renderArticle({
                ...article,
                elementDesign: args.elementDesign,
                teaserLayout: args.teaserLayout,
                mediaRatio: args.mediaRatio,
            })}
        </header>
    `
}

const renderMultipleArticles = (args: HeaderTeaserStoryProps) => {
    const count = Number(args.numberOfSlides);
    const slides = articlesData.slice(0, count);

    return `
        <header
            class="header headercontent-teaser"
            data-headercontent-teaser-type="slider"
            data-media-ratio="${args.mediaRatio}"
        >
            <toujou-slider
                class="slider"
                content-type="header-teaser"
                aria-label="Toujou slider example"
                element-design="${args.sliderAccentColor}"
                slides-to-show="1"
                slider-type="slide"
                slider-aspect-ratio="auto"
            >
                <div class="splide slider__slider">
                    <div class="splide__arrows slider-controls">
                        <button class="splide__arrow splide__arrow--prev slider-control slider-control--prev" aria-label="Previous slide">
                            <toujou-icon class="icon slider-control__icon slider-control__icon--prev" icon-name="arrow-left"></toujou-icon>
                        </button>
                        <button class="splide__arrow splide__arrow--next slider-control slider-control--next" aria-label="Next slide">
                            <toujou-icon class="icon slider-control__icon slider-control__icon--next" icon-name="arrow-right"></toujou-icon>
                        </button>
                    </div>

                    <div class="splide__track slider__track">
                        <ul class="splide__list slider__list">
                            ${slides.map((slide) => {
                                return `
                                    <li class="splide__slide slider__slide" data-splide-interval="1000">
                                        <div class="slider__item" slot="slider-item">
                                            ${renderArticle({
                                               ...slide,
                                               elementDesign: args.elementDesign,
                                               teaserLayout: args.teaserLayout,
                                               mediaRatio: args.mediaRatio,
                                           })}
                                        </div>
                                    </li>
                               `
                            }).join('')}
                        </ul>
                    </div>
                </div>
            </toujou-slider>
        </header>
    `
}

const Template: StoryFn<HeaderTeaserStoryProps> = (args: HeaderTeaserStoryProps) => {
    const count = Number(args.numberOfSlides);

    if (count === 1) {
        return renderSingleArticle(args);
    } else {
        return renderMultipleArticles(args);
    }
};

export const HeaderTeaser = Template.bind({});

// @ts-ignore
HeaderTeaser.args = {
    numberOfSlides: '1',
    teaserLayout: 'text_media',
    mediaRatio: '16_9',
    elementDesign: 'default',
    sliderAccentColor: 'default'
}
