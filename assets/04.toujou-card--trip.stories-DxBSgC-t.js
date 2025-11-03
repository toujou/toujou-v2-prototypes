import{M as l}from"./toujou-collection-item.docs-DvQZBlE4.js";import{r as t}from"./_renderCardCategoriChips-D3lhH8UM.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-a2jptjEC.js";import"./iframe-m5HmrZn4.js";import"./preload-helper-C1FmrZbK.js";const d={title:"COMPONENTS/CollectionCards",parameters:{docs:{page:l}},argTypes:{elementDesign:{table:{category:"Toujou card settings",defaultValue:{summary:"default"}},name:"Element Design",description:"Choose element design for the cards",options:["default","primary","secondary","inverted"],control:{type:"radio"},required:!0}},tags:["autodocs"]},s=i=>`
        <main>
            <ul class="card-collection">
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="trip" element-design="${i.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                            <div class="collection-item__categories">
                                ${t(["Tutorials"],i.elementDesign)}
                            </div>
                            <div class="collection-item__location">
                                <h4 class="collection-item__location-city">
                                    Marbella
                                </h4>
                                <h5 class="collection-item__location-country">
                                    Spanien
                                </h5>
                            </div>
                            <toujou-fav-item class="fav-item"></toujou-fav-item>
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
                            <h3 class="collection-item__title">Musterreise: Svastha medizinische Spezialkur</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">Hotel name</span>
                            </p>

                            <p class="collection-item__abstract">
                                <span class="collection-item__abstract-text">
                                    Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.
                                </span>
                            </p>

                            <div class="collection-item__trip-infos">
                                <p class="collection-item__trip-info">14 Tage Gruppenreise</p>
                                <p class="collection-item__trip-info">1 bis 8 Teilnehmner</p>
                            </div>

                            <p class="collection-item__trip-price">
                                <span class="collection-item__trip-price-prefix">ab</span>
                                <span class="collection-item__trip-price-amount">1.500,00 €</span>
                                <span class="collection-item__trip-price-suffix">(inkl. Flug)</span>
                            </p>

                            <a href="#" class="collection-item__button">
                                <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                zur Beschreibung
                            </a>
                        </div>
                    </toujou-collection-item>
                </li>
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="trip" element-design="${i.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                            <div class="collection-item__categories">
                                ${t(["Tutorials"],i.elementDesign)}
                            </div>
                            <div class="collection-item__location">
                                <h4 class="collection-item__location-city">
                                    Marbella
                                </h4>
                                <h5 class="collection-item__location-country">
                                    Spanien
                                </h5>
                            </div>
                            <toujou-fav-item class="fav-item"></toujou-fav-item>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Musterreise</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">Hotel name</span>
                            </p>

                            <p class="collection-item__abstract">
                                <span class="collection-item__abstract-text">
                                    Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                                </span>
                            </p>

                            <div class="collection-item__trip-infos">
                                <p class="collection-item__trip-info">14 Tage Gruppenreise</p>
                                <p class="collection-item__trip-info">1 bis 8 Teilnehmner</p>
                            </div>

                            <p class="collection-item__trip-price">
                                <span class="collection-item__trip-price-prefix">ab</span>
                                <span class="collection-item__trip-price-amount">1.500,00 €</span>
                                <span class="collection-item__trip-price-suffix">(inkl. Flug)</span>
                            </p>

                            <a href="#" class="collection-item__button">
                                <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                zur Beschreibung
                            </a>
                        </div>
                    </toujou-collection-item>
                </li>
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="trip" element-design="${i.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                            <div class="collection-item__categories">
                                ${t(["Tutorials"],i.elementDesign)}
                            </div>
                            <div class="collection-item__location">
                                <h4 class="collection-item__location-city">
                                    Marbella
                                </h4>
                                <h5 class="collection-item__location-country">
                                    Spanien
                                </h5>
                            </div>
                            <toujou-fav-item class="fav-item"></toujou-fav-item>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Musterreise: Svastha medizinische Spezialkur</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">Hotel name</span>
                            </p>

                            <p class="collection-item__abstract">
                                <span class="collection-item__abstract-text">
                                    Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz.
                                </span>
                            </p>

                            <p class="collection-item__trip-price">
                                <span class="collection-item__trip-price-prefix">ab</span>
                                <span class="collection-item__trip-price-amount">1.500,00 €</span>
                                <span class="collection-item__trip-price-suffix">(inkl. Flug)</span>
                            </p>

                            <a href="#" class="collection-item__button">
                                <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                zur Beschreibung
                            </a>
                        </div>
                    </toujou-collection-item>
                </li>
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="trip" element-design="${i.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                            <div class="collection-item__categories">
                                ${t(["Tutorials"],i.elementDesign)}
                            </div>
                            <div class="collection-item__location">
                                <h4 class="collection-item__location-city">
                                    Marbella
                                </h4>
                                <h5 class="collection-item__location-country">
                                    Spanien
                                </h5>
                            </div>
                            <toujou-fav-item class="fav-item"></toujou-fav-item>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Musterreise</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">Hotel name</span>
                            </p>

                            <p class="collection-item__abstract">
                                <span class="collection-item__abstract-text">
                                    Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                                </span>
                            </p>

                            <p class="collection-item__trip-price">
                                <span class="collection-item__trip-price-prefix">ab</span>
                                <span class="collection-item__trip-price-amount">1.500,00 €</span>
                                <span class="collection-item__trip-price-suffix">(inkl. Flug)</span>
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
    `,e=s.bind({});e.args={elementDesign:"default"};var o,n,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`(args: ToujouCardStoryProps) => {
  return \`
        <main>
            <ul class="card-collection">
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="trip" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                            <div class="collection-item__categories">
                                \${renderCardCategoryChips(['Tutorials'], args.elementDesign)}
                            </div>
                            <div class="collection-item__location">
                                <h4 class="collection-item__location-city">
                                    Marbella
                                </h4>
                                <h5 class="collection-item__location-country">
                                    Spanien
                                </h5>
                            </div>
                            <toujou-fav-item class="fav-item"></toujou-fav-item>
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
                            <h3 class="collection-item__title">Musterreise: Svastha medizinische Spezialkur</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">Hotel name</span>
                            </p>

                            <p class="collection-item__abstract">
                                <span class="collection-item__abstract-text">
                                    Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.
                                </span>
                            </p>

                            <div class="collection-item__trip-infos">
                                <p class="collection-item__trip-info">14 Tage Gruppenreise</p>
                                <p class="collection-item__trip-info">1 bis 8 Teilnehmner</p>
                            </div>

                            <p class="collection-item__trip-price">
                                <span class="collection-item__trip-price-prefix">ab</span>
                                <span class="collection-item__trip-price-amount">1.500,00 €</span>
                                <span class="collection-item__trip-price-suffix">(inkl. Flug)</span>
                            </p>

                            <a href="#" class="collection-item__button">
                                <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                zur Beschreibung
                            </a>
                        </div>
                    </toujou-collection-item>
                </li>
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="trip" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                            <div class="collection-item__categories">
                                \${renderCardCategoryChips(['Tutorials'], args.elementDesign)}
                            </div>
                            <div class="collection-item__location">
                                <h4 class="collection-item__location-city">
                                    Marbella
                                </h4>
                                <h5 class="collection-item__location-country">
                                    Spanien
                                </h5>
                            </div>
                            <toujou-fav-item class="fav-item"></toujou-fav-item>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Musterreise</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">Hotel name</span>
                            </p>

                            <p class="collection-item__abstract">
                                <span class="collection-item__abstract-text">
                                    Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                                </span>
                            </p>

                            <div class="collection-item__trip-infos">
                                <p class="collection-item__trip-info">14 Tage Gruppenreise</p>
                                <p class="collection-item__trip-info">1 bis 8 Teilnehmner</p>
                            </div>

                            <p class="collection-item__trip-price">
                                <span class="collection-item__trip-price-prefix">ab</span>
                                <span class="collection-item__trip-price-amount">1.500,00 €</span>
                                <span class="collection-item__trip-price-suffix">(inkl. Flug)</span>
                            </p>

                            <a href="#" class="collection-item__button">
                                <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                zur Beschreibung
                            </a>
                        </div>
                    </toujou-collection-item>
                </li>
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="trip" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                            <div class="collection-item__categories">
                                \${renderCardCategoryChips(['Tutorials'], args.elementDesign)}
                            </div>
                            <div class="collection-item__location">
                                <h4 class="collection-item__location-city">
                                    Marbella
                                </h4>
                                <h5 class="collection-item__location-country">
                                    Spanien
                                </h5>
                            </div>
                            <toujou-fav-item class="fav-item"></toujou-fav-item>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Musterreise: Svastha medizinische Spezialkur</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">Hotel name</span>
                            </p>

                            <p class="collection-item__abstract">
                                <span class="collection-item__abstract-text">
                                    Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz.
                                </span>
                            </p>

                            <p class="collection-item__trip-price">
                                <span class="collection-item__trip-price-prefix">ab</span>
                                <span class="collection-item__trip-price-amount">1.500,00 €</span>
                                <span class="collection-item__trip-price-suffix">(inkl. Flug)</span>
                            </p>

                            <a href="#" class="collection-item__button">
                                <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                zur Beschreibung
                            </a>
                        </div>
                    </toujou-collection-item>
                </li>
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="trip" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                            <div class="collection-item__categories">
                                \${renderCardCategoryChips(['Tutorials'], args.elementDesign)}
                            </div>
                            <div class="collection-item__location">
                                <h4 class="collection-item__location-city">
                                    Marbella
                                </h4>
                                <h5 class="collection-item__location-country">
                                    Spanien
                                </h5>
                            </div>
                            <toujou-fav-item class="fav-item"></toujou-fav-item>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Musterreise</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">Hotel name</span>
                            </p>

                            <p class="collection-item__abstract">
                                <span class="collection-item__abstract-text">
                                    Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                                </span>
                            </p>

                            <p class="collection-item__trip-price">
                                <span class="collection-item__trip-price-prefix">ab</span>
                                <span class="collection-item__trip-price-amount">1.500,00 €</span>
                                <span class="collection-item__trip-price-suffix">(inkl. Flug)</span>
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
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const g=["CardTrip"];export{e as CardTrip,g as __namedExportsOrder,d as default};
