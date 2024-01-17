import{T as n}from"./badgeCustomConfig-e7a687d5.js";import{M as l}from"./toujou-collection-item.docs-70b39a13.js";import"./jsx-runtime-ccada58e.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-4fb8b842.js";const f={title:"COMPONENTS/Collections",parameters:{badges:[n.DONE],docs:{page:l}},argTypes:{elementDesign:{table:{category:"Toujou card settings",defaultValue:{summary:"default"}},name:"Element Design",description:"Choose element design for the cards",options:["default","primary","secondary","inverted"],control:{type:"radio"},defaultValue:["default"],required:!0}},tags:["autodocs"]},a=o=>`
        <ul class="card-collection">
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="trip" element-design="${o.elementDesign}" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                        <div class="collection-item__categories">
                            <a href="#" class="collection-item__category">
                                <toujou-icon class="icon collection-item__icon" icon-name="bookmark-filled" icon-size="normal" icon-color="bg"></toujou-icon>
                                Neu
                            </a>
                            <a href="#" class="collection-item__category">
                                <toujou-icon class="icon collection-item__icon" icon-name="bookmark-filled" icon-size="normal" icon-color="bg"></toujou-icon>
                                Jetzt 30% Rabatt
                            </a>
                        </div>
                        <div class="collection-item__location">
                            <h4 class="collection-item__location-city">
                                Marbella
                            </h4>
                            <h5 class="collection-item__location-country">
                                Spanien
                            </h5>
                        </div>
                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
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
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="trip" element-design="${o.elementDesign}" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                        <div class="collection-item__categories">
                            <a href="#" class="collection-item__category">
                                <toujou-icon class="icon collection-item__icon" icon-name="bookmark-filled" icon-size="normal" icon-color="bg"></toujou-icon>
                                Neu
                            </a>
                            <a href="#" class="collection-item__category">
                                <toujou-icon class="icon collection-item__icon" icon-name="bookmark-filled" icon-size="normal" icon-color="bg"></toujou-icon>
                                Jetzt 30% Rabatt
                            </a>
                        </div>
                        <div class="collection-item__location">
                            <h4 class="collection-item__location-city">
                                Marbella
                            </h4>
                            <h5 class="collection-item__location-country">
                                Spanien
                            </h5>
                        </div>
                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
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
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="trip" element-design="${o.elementDesign}" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                        <div class="collection-item__categories">
                            <a href="#" class="collection-item__category">
                                <toujou-icon class="icon collection-item__icon" icon-name="bookmark-filled" icon-size="normal" icon-color="bg"></toujou-icon>
                                Neu
                            </a>
                            <a href="#" class="collection-item__category">
                                <toujou-icon class="icon collection-item__icon" icon-name="bookmark-filled" icon-size="normal" icon-color="bg"></toujou-icon>
                                Jetzt 30% Rabatt
                            </a>
                        </div>
                        <div class="collection-item__location">
                            <h4 class="collection-item__location-city">
                                Marbella
                            </h4>
                            <h5 class="collection-item__location-country">
                                Spanien
                            </h5>
                        </div>
                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
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
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="trip" element-design="${o.elementDesign}" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                        <div class="collection-item__categories">
                            <a href="#" class="collection-item__category">
                                <toujou-icon class="icon collection-item__icon" icon-name="bookmark-filled" icon-size="normal" icon-color="bg"></toujou-icon>
                                Neu
                            </a>
                            <a href="#" class="collection-item__category">
                                <toujou-icon class="icon collection-item__icon" icon-name="bookmark-filled" icon-size="normal" icon-color="bg"></toujou-icon>
                                Jetzt 30% Rabatt
                            </a>
                        </div>
                        <div class="collection-item__location">
                            <h4 class="collection-item__location-city">
                                Marbella
                            </h4>
                            <h5 class="collection-item__location-country">
                                Spanien
                            </h5>
                        </div>
                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
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
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
        </ul>

    `,i=a.bind({});i.args={elementDesign:"default"};var e,t,c;i.parameters={...i.parameters,docs:{...(e=i.parameters)==null?void 0:e.docs,source:{originalSource:`(args: ToujouCardStoryProps) => {
  return \`
        <ul class="card-collection">
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="trip" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                        <div class="collection-item__categories">
                            <a href="#" class="collection-item__category">
                                <toujou-icon class="icon collection-item__icon" icon-name="bookmark-filled" icon-size="normal" icon-color="bg"></toujou-icon>
                                Neu
                            </a>
                            <a href="#" class="collection-item__category">
                                <toujou-icon class="icon collection-item__icon" icon-name="bookmark-filled" icon-size="normal" icon-color="bg"></toujou-icon>
                                Jetzt 30% Rabatt
                            </a>
                        </div>
                        <div class="collection-item__location">
                            <h4 class="collection-item__location-city">
                                Marbella
                            </h4>
                            <h5 class="collection-item__location-country">
                                Spanien
                            </h5>
                        </div>
                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
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
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
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
                            <a href="#" class="collection-item__category">
                                <toujou-icon class="icon collection-item__icon" icon-name="bookmark-filled" icon-size="normal" icon-color="bg"></toujou-icon>
                                Neu
                            </a>
                            <a href="#" class="collection-item__category">
                                <toujou-icon class="icon collection-item__icon" icon-name="bookmark-filled" icon-size="normal" icon-color="bg"></toujou-icon>
                                Jetzt 30% Rabatt
                            </a>
                        </div>
                        <div class="collection-item__location">
                            <h4 class="collection-item__location-city">
                                Marbella
                            </h4>
                            <h5 class="collection-item__location-country">
                                Spanien
                            </h5>
                        </div>
                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
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
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
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
                            <a href="#" class="collection-item__category">
                                <toujou-icon class="icon collection-item__icon" icon-name="bookmark-filled" icon-size="normal" icon-color="bg"></toujou-icon>
                                Neu
                            </a>
                            <a href="#" class="collection-item__category">
                                <toujou-icon class="icon collection-item__icon" icon-name="bookmark-filled" icon-size="normal" icon-color="bg"></toujou-icon>
                                Jetzt 30% Rabatt
                            </a>
                        </div>
                        <div class="collection-item__location">
                            <h4 class="collection-item__location-city">
                                Marbella
                            </h4>
                            <h5 class="collection-item__location-country">
                                Spanien
                            </h5>
                        </div>
                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
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
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
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
                            <a href="#" class="collection-item__category">
                                <toujou-icon class="icon collection-item__icon" icon-name="bookmark-filled" icon-size="normal" icon-color="bg"></toujou-icon>
                                Neu
                            </a>
                            <a href="#" class="collection-item__category">
                                <toujou-icon class="icon collection-item__icon" icon-name="bookmark-filled" icon-size="normal" icon-color="bg"></toujou-icon>
                                Jetzt 30% Rabatt
                            </a>
                        </div>
                        <div class="collection-item__location">
                            <h4 class="collection-item__location-city">
                                Marbella
                            </h4>
                            <h5 class="collection-item__location-country">
                                Spanien
                            </h5>
                        </div>
                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
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
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
        </ul>

    \`;
}`,...(c=(t=i.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};const g=["CardTrip"];export{i as CardTrip,g as __namedExportsOrder,f as default};
//# sourceMappingURL=04.toujou-card--trip.stories-9436db1d.js.map
