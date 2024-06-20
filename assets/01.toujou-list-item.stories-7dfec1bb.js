import{T as n}from"./badgeCustomConfig-e7a687d5.js";import{M as l}from"./toujou-collection-item.docs-8f740b30.js";import{r as c}from"./_renderCardCategoriChips-1ee0e70d.js";import"./jsx-runtime-87b2c1dd.js";import"./index-afb52020.js";import"./_commonjsHelpers-725317a4.js";import"./index-af127bdc.js";const g={title:"COMPONENTS/Collections",parameters:{badges:[n.DONE],docs:{page:l}},tags:["autodocs"]},s=()=>`
        <ol class="item-collection">
            <li class="item-collection__item">
                <toujou-collection-item class="collection-item" item-type="default" element-design="default" item-orientation="horizontal" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>

                        <div class="collection-item__categories">
                            ${c(["Tutorials","New","Web-design","A11y"],"primary")}
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
                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel and some more text to make sure it is long enough.
                            </span>
                        </p>
                        <a href="#" class="collection-item__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="item-collection__item">
                <toujou-collection-item class="collection-item" item-type="default" element-design="default" item-orientation="horizontal" role="article">
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
            <li class="item-collection__item">
                <toujou-collection-item class="collection-item" item-type="default" element-design="default" item-orientation="horizontal" role="article">
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
                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz.
                            </span>
                        </p>
                        <a href="#" class="collection-item__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="item-collection__item">
                <toujou-collection-item class="collection-item" item-type="default" element-design="default" item-orientation="horizontal" role="article">
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
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
        </ol>
    `,e=s.bind({});var t,i,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  return \`
        <ol class="item-collection">
            <li class="item-collection__item">
                <toujou-collection-item class="collection-item" item-type="default" element-design="default" item-orientation="horizontal" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>

                        <div class="collection-item__categories">
                            \${renderCardCategoryChips(['Tutorials', 'New', 'Web-design', "A11y"], 'primary')}
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
                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel and some more text to make sure it is long enough.
                            </span>
                        </p>
                        <a href="#" class="collection-item__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="item-collection__item">
                <toujou-collection-item class="collection-item" item-type="default" element-design="default" item-orientation="horizontal" role="article">
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
            <li class="item-collection__item">
                <toujou-collection-item class="collection-item" item-type="default" element-design="default" item-orientation="horizontal" role="article">
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
                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz.
                            </span>
                        </p>
                        <a href="#" class="collection-item__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="item-collection__item">
                <toujou-collection-item class="collection-item" item-type="default" element-design="default" item-orientation="horizontal" role="article">
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
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
        </ol>
    \`;
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const h=["ListItemDefault"];export{e as ListItemDefault,h as __namedExportsOrder,g as default};
