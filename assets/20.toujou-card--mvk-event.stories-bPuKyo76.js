import{M as c}from"./toujou-collection-item.docs-3kY_c0Ds.js";import{r as l}from"./_renderCardCategoriChips-D3lhH8UM.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-DdPgtLQN.js";import"./iframe-CHg5-sk7.js";import"./preload-helper-C1FmrZbK.js";const p={title:"COMPONENTS/CollectionCards",parameters:{docs:{page:c}},argTypes:{elementDesign:{table:{category:"Toujou card settings",defaultValue:{summary:"default"}},name:"Element Design",description:"Choose element design for the cards",options:["default","primary","secondary","inverted"],control:{type:"radio"},required:!0}},tags:["autodocs"]},a=e=>`
        <main>
            <ul class="card-collection">
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="event" element-design="${e.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>

                            <div class="collection-item__categories">
                                ${l(["Tutorials"],e.elementDesign)}
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

                            <toujou-fav-item class="fav-item"></toujou-fav-item>
                        </header>
                        <div class="collection-item__bottom">

                            <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">FourEver Tournee</span>
                            </p>

                            <time class="collection-item__date" datetime="2025-11-14" inline single-day>
                                <toujou-icon class="icon" icon-color="font" icon-name="calendar-lines" icon-size="ms"></toujou-icon>
                                <span class="collection-item__date-text">24.12.2025</span>
                            </time>

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
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="event" element-design="${e.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>

                            <toujou-fav-item class="fav-item"></toujou-fav-item>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Headline</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">FourEver Tournee</span>
                            </p>
                            <time class="collection-item__date" datetime="2025-11-14" inline single-day>
                                <toujou-icon class="icon" icon-color="font" icon-name="calendar-lines" icon-size="ms"></toujou-icon>
                                <span class="collection-item__date-text">24.12.2025, 10:30 - 18:30</span>
                            </time>
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
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="event" element-design="${e.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                            <toujou-fav-item class="fav-item"></toujou-fav-item>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">FourEver Tournee</span>
                            </p>

                            <time class="collection-item__date" datetime="2025-11-14" inline single-day>
                                <toujou-icon class="icon" icon-color="font" icon-name="calendar-lines" icon-size="ms"></toujou-icon>
                                <span class="collection-item__date-text">24.12.2025 - 30.12.2025</span>
                            </time>

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
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="event" element-design="${e.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                            <toujou-fav-item class="fav-item"></toujou-fav-item>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Nice headline</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">FourEver Tournee</span>
                            </p>

                            <time class="collection-item__date" datetime="2025-11-14" inline single-day>
                                <toujou-icon class="icon" icon-color="font" icon-name="calendar-lines" icon-size="ms" aria-hidden="true"></toujou-icon>
                                <span class="collection-item__date-text">24.12.2025, 08:30 - 30.12.2025, 22:00</span>
                            </time>
                            
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
            </ul>
        </main>
    `,i=a.bind({});i.args={elementDesign:"default"};var t,o,n;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`(args: ToujouCardStoryProps) => {
  return \`
        <main>
            <ul class="card-collection">
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="event" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>

                            <div class="collection-item__categories">
                                \${renderCardCategoryChips(['Tutorials'], args.elementDesign)}
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

                            <toujou-fav-item class="fav-item"></toujou-fav-item>
                        </header>
                        <div class="collection-item__bottom">

                            <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">FourEver Tournee</span>
                            </p>

                            <time class="collection-item__date" datetime="2025-11-14" inline single-day>
                                <toujou-icon class="icon" icon-color="font" icon-name="calendar-lines" icon-size="ms"></toujou-icon>
                                <span class="collection-item__date-text">24.12.2025</span>
                            </time>

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
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="event" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>

                            <toujou-fav-item class="fav-item"></toujou-fav-item>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Headline</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">FourEver Tournee</span>
                            </p>
                            <time class="collection-item__date" datetime="2025-11-14" inline single-day>
                                <toujou-icon class="icon" icon-color="font" icon-name="calendar-lines" icon-size="ms"></toujou-icon>
                                <span class="collection-item__date-text">24.12.2025, 10:30 - 18:30</span>
                            </time>
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
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="event" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                            <toujou-fav-item class="fav-item"></toujou-fav-item>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">FourEver Tournee</span>
                            </p>

                            <time class="collection-item__date" datetime="2025-11-14" inline single-day>
                                <toujou-icon class="icon" icon-color="font" icon-name="calendar-lines" icon-size="ms"></toujou-icon>
                                <span class="collection-item__date-text">24.12.2025 - 30.12.2025</span>
                            </time>

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
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="event" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                            <toujou-fav-item class="fav-item"></toujou-fav-item>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Nice headline</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">FourEver Tournee</span>
                            </p>

                            <time class="collection-item__date" datetime="2025-11-14" inline single-day>
                                <toujou-icon class="icon" icon-color="font" icon-name="calendar-lines" icon-size="ms" aria-hidden="true"></toujou-icon>
                                <span class="collection-item__date-text">24.12.2025, 08:30 - 30.12.2025, 22:00</span>
                            </time>
                            
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
            </ul>
        </main>
    \`;
}`,...(n=(o=i.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const g=["CardMvkEvent"];export{i as CardMvkEvent,g as __namedExportsOrder,p as default};
