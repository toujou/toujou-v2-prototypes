import{M as o}from"./toujou-collection-item.docs-BepitAw1.js";import{r as s}from"./_renderCardCategoriChips-D3lhH8UM.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-D_Kao2mr.js";import"./iframe-B7QF7yTA.js";import"./preload-helper-C1FmrZbK.js";const d={title:"COMPONENTS/CollectionCards",parameters:{docs:{page:o}},tags:["autodocs"]},c=()=>`
        <main>
            <toujou-slider
                class="slider"
                aria-label="Toujou slider example"
                element-design="primary"
                auto-play-interval="6000"
                slides-to-show="4"
                slider-breakpoints='{"540":{"perPage":1},"768":{"perPage":2},"840":{"perPage":3}}'
                slider-gap="var(--content-spacing-between-columns)"
                slider-aspect-ratio="auto"
                content-type="card-collection"
                arrow-first-aria-label="Go to first slide"
                arrow-last-aria-label="Go to last slide"
                arrow-prev-aria-label="Go to previous slide"
                arrow-next-aria-label="Go to next slide"
                slides-count="8"
            >
                <div class="splide slider__slider">
                    <div class="splide__arrows slider-controls">
                        <button class="splide__arrow splide__arrow--prev slider-control slider-control--prev">
                            <toujou-icon class="icon slider-control__icon slider-control__icon--prev" icon-name="arrow-left"></toujou-icon>
                        </button>
                        <button class="splide__arrow splide__arrow--next slider-control slider-control--next">
                            <toujou-icon class="icon slider-control__icon slider-control__icon--next" icon-name="arrow-right"></toujou-icon>
                        </button>
                    </div>

                    <div class="splide__track slider__track">
                        <ul class="splide__list slider__list">
                            <li class="splide__slide slider-slide card-collection__item" data-splide-interval="6000">
                                <toujou-collection-item class="collection-item" item-type="default" element-design="default" item-orientation="vertical" role="article">
                                    <header class="collection-item__top">
                                        <figure class="collection-item__figure">
                                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                                        </figure>

                                        <div class="collection-item__categories">
                                            ${s(["Tutorials"],"primary")}
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
                                    </header>
                                    <div class="collection-item__bottom">
                                        <h3 class="collection-item__title">Headline</h3>
                                        <p class="collection-item__subtitles">
                                            <span class="collection-item__subtitle">Dies ist ein Untertitel</span>
                                        </p>
                                        <p class="collection-item__abstract">
                                            <span class="collection-item__abstract-text">
                                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.
                                            </span>
                                        </p>
                                        <a href="#" class="collection-item__button">
                                            <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                            zur Beschreibung
                                        </a>
                                    </div>
                                </toujou-collection-item>
                            </li>
                            <li class="splide__slide slider-slide card-collection__item" data-splide-interval="6000">
                                <toujou-collection-item class="collection-item" item-type="default" element-design="primary" item-orientation="vertical" role="article">
                                    <header class="collection-item__top">
                                        <figure class="collection-item__figure">
                                            <img src="https://picsum.photos/641" alt="nice image" class="collection-item__image">
                                        </figure>
                                    </header>
                                    <div class="collection-item__bottom">
                                        <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                                        <p class="collection-item__subtitles">
                                            <span class="collection-item__subtitle">Dies ist ein Untertitel</span>
                                        </p>
                                        <p class="collection-item__abstract">
                                            <span class="collection-item__abstract-text">
                                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                                            </span>
                                        </p>
                                        <a href="#" class="collection-item__button">
                                            <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                            zur Beschreibung
                                        </a>
                                    </div>
                                </toujou-collection-item>
                            </li>
                            <li class="splide__slide slider-slide card-collection__item" data-splide-interval="6000">
                                <toujou-collection-item class="collection-item" item-type="default" element-design="default" item-orientation="vertical" role="article">
                                    <header class="collection-item__top">
                                        <figure class="collection-item__figure">
                                            <img src="https://picsum.photos/642" alt="nice image" class="collection-item__image">
                                        </figure>
                                    </header>
                                    <div class="collection-item__bottom">
                                        <h3 class="collection-item__title">Headline</h3>
                                        <p class="collection-item__subtitles">
                                            <span class="collection-item__subtitle">Dies ist ein Untertitel</span>
                                        </p>
                                        <p class="collection-item__abstract">
                                            <span class="collection-item__abstract-text">
                                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.
                                            </span>
                                        </p>
                                        <a href="#" class="collection-item__button">
                                            <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                            zur Beschreibung
                                        </a>
                                    </div>
                                </toujou-collection-item>
                            </li>
                            <li class="splide__slide slider-slide card-collection__item" data-splide-interval="6000">
                                <toujou-collection-item class="collection-item" item-type="default" element-design="secondary" item-orientation="vertical" role="article">
                                    <header class="collection-item__top">
                                        <figure class="collection-item__figure">
                                            <img src="https://picsum.photos/643" alt="nice image" class="collection-item__image">
                                        </figure>
                                    </header>
                                    <div class="collection-item__bottom">
                                        <h3 class="collection-item__title">Headline</h3>
                                        <p class="collection-item__subtitles">
                                            <span class="collection-item__subtitle">Dies ist ein Untertitel</span>
                                        </p>
                                        <p class="collection-item__abstract">
                                            <span class="collection-item__abstract-text">
                                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.
                                            </span>
                                        </p>
                                        <a href="#" class="collection-item__button">
                                            <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                            zur Beschreibung
                                        </a>
                                    </div>
                                </toujou-collection-item>
                            </li>
                            <li class="splide__slide slider-slide card-collection__item" data-splide-interval="6000">
                                <toujou-collection-item class="collection-item" item-type="default" element-design="default" item-orientation="vertical" role="article">
                                    <header class="collection-item__top">
                                        <figure class="collection-item__figure">
                                            <img src="https://picsum.photos/644" alt="nice image" class="collection-item__image">
                                        </figure>
                                    </header>
                                    <div class="collection-item__bottom">
                                        <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                                        <p class="collection-item__subtitles">
                                            <span class="collection-item__subtitle">Dies ist ein Untertitel</span>
                                        </p>
                                        <p class="collection-item__abstract">
                                            <span class="collection-item__abstract-text">
                                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                                            </span>
                                        </p>
                                        <a href="#" class="collection-item__button">
                                            <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                            zur Beschreibung
                                        </a>
                                    </div>
                                </toujou-collection-item>
                            </li>
                            <li class="splide__slide slider-slide card-collection__item" data-splide-interval="6000">
                                <toujou-collection-item class="collection-item" item-type="default" element-design="inverted" item-orientation="vertical" role="article">
                                    <header class="collection-item__top">
                                        <figure class="collection-item__figure">
                                            <img src="https://picsum.photos/645" alt="nice image" class="collection-item__image">
                                        </figure>
                                    </header>
                                    <div class="collection-item__bottom">
                                        <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                                        <p class="collection-item__subtitles">
                                            <span class="collection-item__subtitle">Dies ist ein Untertitel</span>
                                        </p>
                                        <p class="collection-item__abstract">
                                            <span class="collection-item__abstract-text">
                                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.
                                            </span>
                                        </p>
                                        <a href="#" class="collection-item__button">
                                            <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                            zur Beschreibung
                                        </a>
                                    </div>
                                </toujou-collection-item>
                            </li>
                            <li class="splide__slide slider-slide card-collection__item" data-splide-interval="6000">
                                <toujou-collection-item class="collection-item" item-type="default" element-design="default" item-orientation="vertical" role="article">
                                    <header class="collection-item__top">
                                        <figure class="collection-item__figure">
                                            <img src="https://picsum.photos/646" alt="nice image" class="collection-item__image">
                                        </figure>
                                    </header>
                                    <div class="collection-item__bottom">
                                        <h3 class="collection-item__title">Headline</h3>
                                        <p class="collection-item__subtitles">
                                            <span class="collection-item__subtitle">Dies ist ein Untertitel</span>
                                        </p>
                                        <p class="collection-item__abstract">
                                            <span class="collection-item__abstract-text">
                                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                                            </span>
                                        </p>
                                        <a href="#" class="collection-item__button">
                                            <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                            zur Beschreibung
                                        </a>
                                    </div>
                                </toujou-collection-item>
                            </li>
                            <li class="splide__slide slider-slide card-collection__item" data-splide-interval="6000">
                                <toujou-collection-item class="collection-item" item-type="default" element-design="default" item-orientation="vertical" role="article">
                                    <header class="collection-item__top">
                                        <figure class="collection-item__figure">
                                            <img src="https://picsum.photos/647" alt="nice image" class="collection-item__image">
                                        </figure>
                                    </header>
                                    <div class="collection-item__bottom">
                                        <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                                        <p class="collection-item__subtitles">
                                            <span class="collection-item__subtitle">Dies ist ein Untertitel</span>
                                        </p>
                                        <p class="collection-item__abstract">
                                        <span class="collection-item__abstract-text">
                                            Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.
                                        </span>
                                        </p>
                                        <a href="#" class="collection-item__button">
                                            <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                            zur Beschreibung
                                        </a>
                                    </div>
                                </toujou-collection-item>
                            </li>
                        </ul>
                    </div>
                    <div class="splide__progress slider-progress">
                        <div class="splide__progress__bar slider-progress__bar"></div>
                    </div>
                </div>

                <toujou-slider-count class="slider-count">
                    <span class="slider-count__current"></span>
                    <span class="slider-count__separator">of</span>
                    <span class="slider-count__total"></span>
                </toujou-slider-count>
            </toujou-slider>
        </main>
    `,e=c.bind({});var i,t,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return \`
        <main>
            <toujou-slider
                class="slider"
                aria-label="Toujou slider example"
                element-design="primary"
                auto-play-interval="6000"
                slides-to-show="4"
                slider-breakpoints='{"540":{"perPage":1},"768":{"perPage":2},"840":{"perPage":3}}'
                slider-gap="var(--content-spacing-between-columns)"
                slider-aspect-ratio="auto"
                content-type="card-collection"
                arrow-first-aria-label="Go to first slide"
                arrow-last-aria-label="Go to last slide"
                arrow-prev-aria-label="Go to previous slide"
                arrow-next-aria-label="Go to next slide"
                slides-count="8"
            >
                <div class="splide slider__slider">
                    <div class="splide__arrows slider-controls">
                        <button class="splide__arrow splide__arrow--prev slider-control slider-control--prev">
                            <toujou-icon class="icon slider-control__icon slider-control__icon--prev" icon-name="arrow-left"></toujou-icon>
                        </button>
                        <button class="splide__arrow splide__arrow--next slider-control slider-control--next">
                            <toujou-icon class="icon slider-control__icon slider-control__icon--next" icon-name="arrow-right"></toujou-icon>
                        </button>
                    </div>

                    <div class="splide__track slider__track">
                        <ul class="splide__list slider__list">
                            <li class="splide__slide slider-slide card-collection__item" data-splide-interval="6000">
                                <toujou-collection-item class="collection-item" item-type="default" element-design="default" item-orientation="vertical" role="article">
                                    <header class="collection-item__top">
                                        <figure class="collection-item__figure">
                                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                                        </figure>

                                        <div class="collection-item__categories">
                                            \${renderCardCategoryChips(['Tutorials'], 'primary')}
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
                                    </header>
                                    <div class="collection-item__bottom">
                                        <h3 class="collection-item__title">Headline</h3>
                                        <p class="collection-item__subtitles">
                                            <span class="collection-item__subtitle">Dies ist ein Untertitel</span>
                                        </p>
                                        <p class="collection-item__abstract">
                                            <span class="collection-item__abstract-text">
                                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.
                                            </span>
                                        </p>
                                        <a href="#" class="collection-item__button">
                                            <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                            zur Beschreibung
                                        </a>
                                    </div>
                                </toujou-collection-item>
                            </li>
                            <li class="splide__slide slider-slide card-collection__item" data-splide-interval="6000">
                                <toujou-collection-item class="collection-item" item-type="default" element-design="primary" item-orientation="vertical" role="article">
                                    <header class="collection-item__top">
                                        <figure class="collection-item__figure">
                                            <img src="https://picsum.photos/641" alt="nice image" class="collection-item__image">
                                        </figure>
                                    </header>
                                    <div class="collection-item__bottom">
                                        <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                                        <p class="collection-item__subtitles">
                                            <span class="collection-item__subtitle">Dies ist ein Untertitel</span>
                                        </p>
                                        <p class="collection-item__abstract">
                                            <span class="collection-item__abstract-text">
                                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                                            </span>
                                        </p>
                                        <a href="#" class="collection-item__button">
                                            <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                            zur Beschreibung
                                        </a>
                                    </div>
                                </toujou-collection-item>
                            </li>
                            <li class="splide__slide slider-slide card-collection__item" data-splide-interval="6000">
                                <toujou-collection-item class="collection-item" item-type="default" element-design="default" item-orientation="vertical" role="article">
                                    <header class="collection-item__top">
                                        <figure class="collection-item__figure">
                                            <img src="https://picsum.photos/642" alt="nice image" class="collection-item__image">
                                        </figure>
                                    </header>
                                    <div class="collection-item__bottom">
                                        <h3 class="collection-item__title">Headline</h3>
                                        <p class="collection-item__subtitles">
                                            <span class="collection-item__subtitle">Dies ist ein Untertitel</span>
                                        </p>
                                        <p class="collection-item__abstract">
                                            <span class="collection-item__abstract-text">
                                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.
                                            </span>
                                        </p>
                                        <a href="#" class="collection-item__button">
                                            <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                            zur Beschreibung
                                        </a>
                                    </div>
                                </toujou-collection-item>
                            </li>
                            <li class="splide__slide slider-slide card-collection__item" data-splide-interval="6000">
                                <toujou-collection-item class="collection-item" item-type="default" element-design="secondary" item-orientation="vertical" role="article">
                                    <header class="collection-item__top">
                                        <figure class="collection-item__figure">
                                            <img src="https://picsum.photos/643" alt="nice image" class="collection-item__image">
                                        </figure>
                                    </header>
                                    <div class="collection-item__bottom">
                                        <h3 class="collection-item__title">Headline</h3>
                                        <p class="collection-item__subtitles">
                                            <span class="collection-item__subtitle">Dies ist ein Untertitel</span>
                                        </p>
                                        <p class="collection-item__abstract">
                                            <span class="collection-item__abstract-text">
                                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.
                                            </span>
                                        </p>
                                        <a href="#" class="collection-item__button">
                                            <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                            zur Beschreibung
                                        </a>
                                    </div>
                                </toujou-collection-item>
                            </li>
                            <li class="splide__slide slider-slide card-collection__item" data-splide-interval="6000">
                                <toujou-collection-item class="collection-item" item-type="default" element-design="default" item-orientation="vertical" role="article">
                                    <header class="collection-item__top">
                                        <figure class="collection-item__figure">
                                            <img src="https://picsum.photos/644" alt="nice image" class="collection-item__image">
                                        </figure>
                                    </header>
                                    <div class="collection-item__bottom">
                                        <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                                        <p class="collection-item__subtitles">
                                            <span class="collection-item__subtitle">Dies ist ein Untertitel</span>
                                        </p>
                                        <p class="collection-item__abstract">
                                            <span class="collection-item__abstract-text">
                                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                                            </span>
                                        </p>
                                        <a href="#" class="collection-item__button">
                                            <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                            zur Beschreibung
                                        </a>
                                    </div>
                                </toujou-collection-item>
                            </li>
                            <li class="splide__slide slider-slide card-collection__item" data-splide-interval="6000">
                                <toujou-collection-item class="collection-item" item-type="default" element-design="inverted" item-orientation="vertical" role="article">
                                    <header class="collection-item__top">
                                        <figure class="collection-item__figure">
                                            <img src="https://picsum.photos/645" alt="nice image" class="collection-item__image">
                                        </figure>
                                    </header>
                                    <div class="collection-item__bottom">
                                        <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                                        <p class="collection-item__subtitles">
                                            <span class="collection-item__subtitle">Dies ist ein Untertitel</span>
                                        </p>
                                        <p class="collection-item__abstract">
                                            <span class="collection-item__abstract-text">
                                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.
                                            </span>
                                        </p>
                                        <a href="#" class="collection-item__button">
                                            <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                            zur Beschreibung
                                        </a>
                                    </div>
                                </toujou-collection-item>
                            </li>
                            <li class="splide__slide slider-slide card-collection__item" data-splide-interval="6000">
                                <toujou-collection-item class="collection-item" item-type="default" element-design="default" item-orientation="vertical" role="article">
                                    <header class="collection-item__top">
                                        <figure class="collection-item__figure">
                                            <img src="https://picsum.photos/646" alt="nice image" class="collection-item__image">
                                        </figure>
                                    </header>
                                    <div class="collection-item__bottom">
                                        <h3 class="collection-item__title">Headline</h3>
                                        <p class="collection-item__subtitles">
                                            <span class="collection-item__subtitle">Dies ist ein Untertitel</span>
                                        </p>
                                        <p class="collection-item__abstract">
                                            <span class="collection-item__abstract-text">
                                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                                            </span>
                                        </p>
                                        <a href="#" class="collection-item__button">
                                            <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                            zur Beschreibung
                                        </a>
                                    </div>
                                </toujou-collection-item>
                            </li>
                            <li class="splide__slide slider-slide card-collection__item" data-splide-interval="6000">
                                <toujou-collection-item class="collection-item" item-type="default" element-design="default" item-orientation="vertical" role="article">
                                    <header class="collection-item__top">
                                        <figure class="collection-item__figure">
                                            <img src="https://picsum.photos/647" alt="nice image" class="collection-item__image">
                                        </figure>
                                    </header>
                                    <div class="collection-item__bottom">
                                        <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                                        <p class="collection-item__subtitles">
                                            <span class="collection-item__subtitle">Dies ist ein Untertitel</span>
                                        </p>
                                        <p class="collection-item__abstract">
                                        <span class="collection-item__abstract-text">
                                            Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.
                                        </span>
                                        </p>
                                        <a href="#" class="collection-item__button">
                                            <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                            zur Beschreibung
                                        </a>
                                    </div>
                                </toujou-collection-item>
                            </li>
                        </ul>
                    </div>
                    <div class="splide__progress slider-progress">
                        <div class="splide__progress__bar slider-progress__bar"></div>
                    </div>
                </div>

                <toujou-slider-count class="slider-count">
                    <span class="slider-count__current"></span>
                    <span class="slider-count__separator">of</span>
                    <span class="slider-count__total"></span>
                </toujou-slider-count>
            </toujou-slider>
        </main>
    \`;
}`,...(l=(t=e.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const p=["CollectionSlider"];export{e as CollectionSlider,p as __namedExportsOrder,d as default};
