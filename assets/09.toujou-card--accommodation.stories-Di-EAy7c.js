import{M as a}from"./toujou-collection-item.docs-3kY_c0Ds.js";import{r as e}from"./_renderCardCategoriChips-D3lhH8UM.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-DdPgtLQN.js";import"./iframe-CHg5-sk7.js";import"./preload-helper-C1FmrZbK.js";const d={title:"COMPONENTS/CollectionCards",parameters:{docs:{page:a}},argTypes:{elementDesign:{table:{category:"Toujou card settings",defaultValue:{summary:"default"}},name:"Element Design",description:"Choose element design for the cards",options:["default","primary","secondary","inverted"],control:{type:"radio"},required:!0}},tags:["autodocs"]},l=t=>`
        <main>
            <ul class="card-collection">
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="accommodation" element-design="${t.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                            <div class="collection-item__categories">
                                ${e(["Tutorials"],t.elementDesign)}
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
                            <h3 class="collection-item__title">Accommodation A</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">Accommodation subtitle</span>
                            </p>
                            
                            <p class="collection-item__rating">
                                <toujou-rating-stars
                                    class="rating-stars"
                                    rating-entity="★"
                                    rating-total="5"
                                    rating-value="4"
                                    rating-entity-size="normal"
                                    rating-suffix=""
                                >
                                </toujou-rating-stars>
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
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="accommodation" element-design="${t.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                            <div class="collection-item__categories">
                                ${e(["Tutorials"],t.elementDesign)}
                            </div>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Accommodation B</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">Nice subtitle</span>
                            </p>

                            <p class="collection-item__rating">
                                <toujou-rating-stars
                                    class="rating-stars"
                                    rating-entity="★"
                                    rating-total="5"
                                    rating-value="4.5"
                                    rating-entity-size="normal"
                                    rating-suffix="s"
                                >
                                </toujou-rating-stars>
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
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="accommodation" element-design="${t.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                            <div class="collection-item__categories">
                                ${e(["Tutorials"],t.elementDesign)}
                            </div>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Accommodation C</h3>

                            <p class="collection-item__rating">
                                <toujou-rating-stars
                                    class="rating-stars"
                                    rating-entity="★"
                                    rating-total="5"
                                    rating-value="3.7"
                                    rating-entity-size="normal"
                                    rating-suffix=""
                                >
                                </toujou-rating-stars>
                            </p>
                            
                            <p class="collection-item__abstract">
                                <span class="collection-item__abstract-text">
                                    Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz.
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
                    <toujou-collection-item class="collection-item" item-type="accommodation" element-design="${t.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                            <div class="collection-item__categories">
                                ${e(["Tutorials"],t.elementDesign)}
                            </div>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Accommodation D</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">Hotel name</span>
                            </p>
                            
                            <p class="collection-item__rating">
                                <toujou-rating-stars
                                    class="rating-stars"
                                    rating-entity="★"
                                    rating-total="5"
                                    rating-value="4.5"
                                    rating-entity-size="normal"
                                    rating-suffix=""
                                >
                                </toujou-rating-stars>
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
            </ul>
        </main>
    `,i=l.bind({});i.args={elementDesign:"default"};var o,n,c;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`(args: ToujouCardStoryProps) => {
  return \`
        <main>
            <ul class="card-collection">
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="accommodation" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
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
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Accommodation A</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">Accommodation subtitle</span>
                            </p>
                            
                            <p class="collection-item__rating">
                                <toujou-rating-stars
                                    class="rating-stars"
                                    rating-entity="★"
                                    rating-total="5"
                                    rating-value="4"
                                    rating-entity-size="normal"
                                    rating-suffix=""
                                >
                                </toujou-rating-stars>
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
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="accommodation" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                            <div class="collection-item__categories">
                                \${renderCardCategoryChips(['Tutorials'], args.elementDesign)}
                            </div>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Accommodation B</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">Nice subtitle</span>
                            </p>

                            <p class="collection-item__rating">
                                <toujou-rating-stars
                                    class="rating-stars"
                                    rating-entity="★"
                                    rating-total="5"
                                    rating-value="4.5"
                                    rating-entity-size="normal"
                                    rating-suffix="s"
                                >
                                </toujou-rating-stars>
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
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="accommodation" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                            <div class="collection-item__categories">
                                \${renderCardCategoryChips(['Tutorials'], args.elementDesign)}
                            </div>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Accommodation C</h3>

                            <p class="collection-item__rating">
                                <toujou-rating-stars
                                    class="rating-stars"
                                    rating-entity="★"
                                    rating-total="5"
                                    rating-value="3.7"
                                    rating-entity-size="normal"
                                    rating-suffix=""
                                >
                                </toujou-rating-stars>
                            </p>
                            
                            <p class="collection-item__abstract">
                                <span class="collection-item__abstract-text">
                                    Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz.
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
                    <toujou-collection-item class="collection-item" item-type="accommodation" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                            <div class="collection-item__categories">
                                \${renderCardCategoryChips(['Tutorials'], args.elementDesign)}
                            </div>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Accommodation D</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">Hotel name</span>
                            </p>
                            
                            <p class="collection-item__rating">
                                <toujou-rating-stars
                                    class="rating-stars"
                                    rating-entity="★"
                                    rating-total="5"
                                    rating-value="4.5"
                                    rating-entity-size="normal"
                                    rating-suffix=""
                                >
                                </toujou-rating-stars>
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
            </ul>
        </main>
    \`;
}`,...(c=(n=i.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const p=["CardAccommodation"];export{i as CardAccommodation,p as __namedExportsOrder,d as default};
