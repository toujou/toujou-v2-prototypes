import{T as t}from"./badgeCustomConfig-e7a687d5.js";import{M as c}from"./toujou-collection-item.docs-70b39a13.js";import"./jsx-runtime-ccada58e.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-4fb8b842.js";const d={title:"COMPONENTS/Collections",parameters:{badges:[t.DONE],docs:{page:c}},argTypes:{elementDesign:{table:{category:"Toujou card settings",defaultValue:{summary:"default"}},name:"Element Design",description:"Choose element design for the cards",options:["default","primary","secondary","inverted"],control:{type:"radio"},defaultValue:["default"],required:!0}},tags:["autodocs"]},l=i=>`
        <ul class="card-collection">
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="event" element-design="${i.elementDesign}" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
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

                        <div
                            class="calendar-pages collection-item__date"
                            aria-label="calendar page with date / time information"
                            as-group
                        >
                            <time class="calendar-page" datetime="2025-11-14">
                                <div class="calendar-page__date">
                                    <p class="calendar-page__month">Nov</p>
                                    <p class="calendar-page__day">14</p>
                                    <p class="calendar-page__year">2025</p>
                                </div>
                            </time>

                            <span class="calendar-pages__until" aria-hidden="true">
                                <toujou-icon class="icon" icon-size="l" icon-name="chevron-right" icon-color="background"></toujou-icon>
                            </span>

                            <time class="calendar-page" datetime="2025-11-16">
                                <div class="calendar-page__date">
                                    <p class="calendar-page__month">Nov</p>
                                    <p class="calendar-page__day">16</p>
                                    <p class="calendar-page__year">2025</p>
                                </div>
                            </time>
                        </div>

                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                    </header>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">FourEver Tournee</span>
                        </p>
                        <div class="collection-item__info">
                            <toujou-icon icon-size="ms" icon-color="primary" icon-name="info" class="icon collection-item__info-icon"></toujou-icon>
                            <p class="collection-item__info-text">Meistersingerhalle - Nürnberg 19.30 - 23.00 Uhr, ab 50,00 €</p>
                        </div>
                        <p class="collection-item__status">
                            <toujou-chip class="chip" chip-bg-color="success" chip-border-radius="normal" chip-size="normal">Event geplannt</toujou-chip>
                        </p>
                        <p class="collection-item__abstract">
                            <span class="collection-item__abstract-text">
                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.
                            </span>
                        </p>
                        <a href="#" class="collection-item__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="event" element-design="${i.elementDesign}" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>

                        <div
                            class="calendar-pages collection-item__date"
                            aria-label="calendar page with date / time information"
                            as-group
                        >
                            <time class="calendar-page" datetime="2025-11-14">
                                <div class="calendar-page__date">
                                    <p class="calendar-page__month">Nov</p>
                                    <p class="calendar-page__day">14</p>
                                    <p class="calendar-page__year">2025</p>
                                </div>
                            </time>
                        </div>

                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                    </header>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Headline</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">FourEver Tournee</span>
                        </p>
                        <div class="collection-item__info">
                            <toujou-icon icon-size="ms" icon-color="primary" icon-name="info" class="icon collection-item__info-icon"></toujou-icon>
                            <p class="collection-item__info-text">Meistersingerhalle - Nürnberg 19.30 - 23.00 Uhr, ab 50,00 €</p>
                        </div>
                        <p class="collection-item__status">
                            <toujou-chip class="chip" chip-bg-color="error" chip-border-radius="normal" chip-size="normal">Event abgesagt</toujou-chip>
                        </p>
                        <p class="collection-item__abstract">
                            <span class="collection-item__abstract-text">
                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.
                            </span>
                        </p>
                        <a href="#" class="collection-item__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="event" element-design="${i.elementDesign}" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>

                        <div
                            class="calendar-pages collection-item__date"
                            aria-label="calendar page with date / time information"
                            on-light-background
                        >
                            <time class="calendar-page" datetime="2025-11-14">
                                <div class="calendar-page__date">
                                    <p class="calendar-page__month">Nov</p>
                                    <p class="calendar-page__day">14</p>
                                    <p class="calendar-page__year">2025</p>
                                </div>
                            </time>

                            <span class="calendar-pages__until" aria-hidden="true">
                                <toujou-icon class="icon" icon-size="l" icon-name="chevron-right" icon-color="background"></toujou-icon>
                            </span>

                            <time class="calendar-page" datetime="2025-11-16">
                                <div class="calendar-page__date">
                                    <p class="calendar-page__month">Nov</p>
                                    <p class="calendar-page__day">16</p>
                                    <p class="calendar-page__year">2025</p>
                                </div>
                            </time>
                        </div>

                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                    </header>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">FourEver Tournee</span>
                        </p>
                        <div class="collection-item__info">
                            <toujou-icon icon-size="ms" icon-color="primary" icon-name="info" class="icon collection-item__info-icon"></toujou-icon>
                            <p class="collection-item__info-text">Meistersingerhalle - Nürnberg 19.30 - 23.00 Uhr, ab 50,00 €</p>
                        </div>
                        <p class="collection-item__status">
                            <toujou-chip class="chip" chip-bg-color="error" chip-border-radius="normal" chip-size="normal">Event abgesagt</toujou-chip>
                        </p>
                        <p class="collection-item__abstract">
                            <span class="collection-item__abstract-text">
                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                            </span>
                        </p>
                        <a href="#" class="collection-item__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="event" element-design="${i.elementDesign}" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                        <div class="collection-item__date media-date">
                            <div class="media-date__months">
                                <span class="media-date__month">Jun</span>
                                <span class="media-date__month">Sep</span>
                            </div>
                            <div class="media-date__days">
                                <span class="media-date__day">25</span>
                                <span class="media-date__day-separator">-</span>
                                <span class="media-date__day">12</span>
                            </div>
                            <div class="media-date__years">
                                <span class="media-date__year">2023</span>
                                <span class="media-date__year">2025</span>
                            </div>
                        </div>
                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                    </header>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Headline</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">FourEver Tournee</span>
                        </p>
                        <p class="collection-item__status">
                            <toujou-chip class="chip" chip-bg-color="error" chip-border-radius="normal" chip-size="normal">Event abgesagt</toujou-chip>
                        </p>
                        <p class="collection-item__abstract">
                            <span class="collection-item__abstract-text">
                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                            </span>
                        </p>
                        <a href="#" class="collection-item__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
        </ul>

    `,e=l.bind({});e.args={elementDesign:"default"};var a,n,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`(args: ToujouCardStoryProps) => {
  return \`
        <ul class="card-collection">
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="event" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
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

                        <div
                            class="calendar-pages collection-item__date"
                            aria-label="calendar page with date / time information"
                            as-group
                        >
                            <time class="calendar-page" datetime="2025-11-14">
                                <div class="calendar-page__date">
                                    <p class="calendar-page__month">Nov</p>
                                    <p class="calendar-page__day">14</p>
                                    <p class="calendar-page__year">2025</p>
                                </div>
                            </time>

                            <span class="calendar-pages__until" aria-hidden="true">
                                <toujou-icon class="icon" icon-size="l" icon-name="chevron-right" icon-color="background"></toujou-icon>
                            </span>

                            <time class="calendar-page" datetime="2025-11-16">
                                <div class="calendar-page__date">
                                    <p class="calendar-page__month">Nov</p>
                                    <p class="calendar-page__day">16</p>
                                    <p class="calendar-page__year">2025</p>
                                </div>
                            </time>
                        </div>

                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                    </header>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">FourEver Tournee</span>
                        </p>
                        <div class="collection-item__info">
                            <toujou-icon icon-size="ms" icon-color="primary" icon-name="info" class="icon collection-item__info-icon"></toujou-icon>
                            <p class="collection-item__info-text">Meistersingerhalle - Nürnberg 19.30 - 23.00 Uhr, ab 50,00 €</p>
                        </div>
                        <p class="collection-item__status">
                            <toujou-chip class="chip" chip-bg-color="success" chip-border-radius="normal" chip-size="normal">Event geplannt</toujou-chip>
                        </p>
                        <p class="collection-item__abstract">
                            <span class="collection-item__abstract-text">
                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.
                            </span>
                        </p>
                        <a href="#" class="collection-item__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="event" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>

                        <div
                            class="calendar-pages collection-item__date"
                            aria-label="calendar page with date / time information"
                            as-group
                        >
                            <time class="calendar-page" datetime="2025-11-14">
                                <div class="calendar-page__date">
                                    <p class="calendar-page__month">Nov</p>
                                    <p class="calendar-page__day">14</p>
                                    <p class="calendar-page__year">2025</p>
                                </div>
                            </time>
                        </div>

                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                    </header>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Headline</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">FourEver Tournee</span>
                        </p>
                        <div class="collection-item__info">
                            <toujou-icon icon-size="ms" icon-color="primary" icon-name="info" class="icon collection-item__info-icon"></toujou-icon>
                            <p class="collection-item__info-text">Meistersingerhalle - Nürnberg 19.30 - 23.00 Uhr, ab 50,00 €</p>
                        </div>
                        <p class="collection-item__status">
                            <toujou-chip class="chip" chip-bg-color="error" chip-border-radius="normal" chip-size="normal">Event abgesagt</toujou-chip>
                        </p>
                        <p class="collection-item__abstract">
                            <span class="collection-item__abstract-text">
                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.
                            </span>
                        </p>
                        <a href="#" class="collection-item__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="event" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>

                        <div
                            class="calendar-pages collection-item__date"
                            aria-label="calendar page with date / time information"
                            on-light-background
                        >
                            <time class="calendar-page" datetime="2025-11-14">
                                <div class="calendar-page__date">
                                    <p class="calendar-page__month">Nov</p>
                                    <p class="calendar-page__day">14</p>
                                    <p class="calendar-page__year">2025</p>
                                </div>
                            </time>

                            <span class="calendar-pages__until" aria-hidden="true">
                                <toujou-icon class="icon" icon-size="l" icon-name="chevron-right" icon-color="background"></toujou-icon>
                            </span>

                            <time class="calendar-page" datetime="2025-11-16">
                                <div class="calendar-page__date">
                                    <p class="calendar-page__month">Nov</p>
                                    <p class="calendar-page__day">16</p>
                                    <p class="calendar-page__year">2025</p>
                                </div>
                            </time>
                        </div>

                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                    </header>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">FourEver Tournee</span>
                        </p>
                        <div class="collection-item__info">
                            <toujou-icon icon-size="ms" icon-color="primary" icon-name="info" class="icon collection-item__info-icon"></toujou-icon>
                            <p class="collection-item__info-text">Meistersingerhalle - Nürnberg 19.30 - 23.00 Uhr, ab 50,00 €</p>
                        </div>
                        <p class="collection-item__status">
                            <toujou-chip class="chip" chip-bg-color="error" chip-border-radius="normal" chip-size="normal">Event abgesagt</toujou-chip>
                        </p>
                        <p class="collection-item__abstract">
                            <span class="collection-item__abstract-text">
                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                            </span>
                        </p>
                        <a href="#" class="collection-item__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="event" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                        <div class="collection-item__date media-date">
                            <div class="media-date__months">
                                <span class="media-date__month">Jun</span>
                                <span class="media-date__month">Sep</span>
                            </div>
                            <div class="media-date__days">
                                <span class="media-date__day">25</span>
                                <span class="media-date__day-separator">-</span>
                                <span class="media-date__day">12</span>
                            </div>
                            <div class="media-date__years">
                                <span class="media-date__year">2023</span>
                                <span class="media-date__year">2025</span>
                            </div>
                        </div>
                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                    </header>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Headline</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">FourEver Tournee</span>
                        </p>
                        <p class="collection-item__status">
                            <toujou-chip class="chip" chip-bg-color="error" chip-border-radius="normal" chip-size="normal">Event abgesagt</toujou-chip>
                        </p>
                        <p class="collection-item__abstract">
                            <span class="collection-item__abstract-text">
                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                            </span>
                        </p>
                        <a href="#" class="collection-item__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
        </ul>

    \`;
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const g=["CardEvent"];export{e as CardEvent,g as __namedExportsOrder,d as default};
//# sourceMappingURL=03.toujou-card--event.stories-914e1b17.js.map
