import{T as l}from"./badgeCustomConfig-DUXiHpL4.js";import{M as c}from"./toujou-collection-item.docs-BNMmCBJK.js";import{r as s}from"./_renderCardCategoriChips-D3lhH8UM.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-BcJeOPUZ.js";import"./index-B6tQ6Rz7.js";import"./_commonjsHelpers-Cpj98o6Y.js";const h={title:"COMPONENTS/CollectionCards",parameters:{badges:[l.DONE],docs:{page:c}},argTypes:{elementDesign:{table:{category:"Toujou card settings",defaultValue:{summary:"default"}},name:"Element Design",description:"Choose element design for the cards",options:["default","primary","secondary","inverted"],control:{type:"radio"},required:!0}},tags:["autodocs"]},a=e=>`
        <main>
            <ul class="card-collection">
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="default" element-design="${e.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>

                            <div class="collection-item__categories">
                                ${s(["Tutorials"],e.elementDesign)}
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
                                <toujou-icon class="icon" icon-name="link" icon-size="ms"></toujou-icon>
                                zur Beschreibung
                            </a>
                        </div>
                    </toujou-collection-item>
                </li>
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="default" element-design="${e.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
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
                                <toujou-icon class="icon" icon-name="link" icon-size="ms"></toujou-icon>
                                zur Beschreibung
                            </a>
                        </div>
                    </toujou-collection-item>
                </li>
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="default" element-design="${e.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">Dies ist ein Untertitel</span>
                            </p>
                            <p class="collection-item__abstract">
                                <span class="collection-item__abstract-text">
                                    Wie Sie ein Kontaktformular.
                                </span>
                            </p>
                            <a href="#" class="collection-item__button">
                                <toujou-icon class="icon" icon-name="link" icon-size="ms"></toujou-icon>
                                zur Beschreibung
                            </a>
                        </div>
                    </toujou-collection-item>
                </li>
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="default" element-design="${e.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Headline</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">Dies ist ein Untertitel</span>
                            </p>
                            <a href="#" class="collection-item__button">
                                <toujou-icon class="icon" icon-name="link" icon-size="ms"></toujou-icon>
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
                    <toujou-collection-item class="collection-item" item-type="default" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
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
                                <toujou-icon class="icon" icon-name="link" icon-size="ms"></toujou-icon>
                                zur Beschreibung
                            </a>
                        </div>
                    </toujou-collection-item>
                </li>
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="default" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
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
                                <toujou-icon class="icon" icon-name="link" icon-size="ms"></toujou-icon>
                                zur Beschreibung
                            </a>
                        </div>
                    </toujou-collection-item>
                </li>
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="default" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">Dies ist ein Untertitel</span>
                            </p>
                            <p class="collection-item__abstract">
                                <span class="collection-item__abstract-text">
                                    Wie Sie ein Kontaktformular.
                                </span>
                            </p>
                            <a href="#" class="collection-item__button">
                                <toujou-icon class="icon" icon-name="link" icon-size="ms"></toujou-icon>
                                zur Beschreibung
                            </a>
                        </div>
                    </toujou-collection-item>
                </li>
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="default" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Headline</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">Dies ist ein Untertitel</span>
                            </p>
                            <a href="#" class="collection-item__button">
                                <toujou-icon class="icon" icon-name="link" icon-size="ms"></toujou-icon>
                                zur Beschreibung
                            </a>
                        </div>
                    </toujou-collection-item>
                </li>
            </ul>
        </main>
    \`;
}`,...(n=(o=i.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const f=["CardExternalLink"];export{i as CardExternalLink,f as __namedExportsOrder,h as default};
