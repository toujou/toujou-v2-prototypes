import{T as n}from"./badgeCustomConfig-oxGPBDYz.js";import{M as s}from"./toujou-collection-item.docs-D8vaUW05.js";import{r as a}from"./_renderCardCategoriChips-D3lhH8UM.js";import"./jsx-runtime-DPda6Ybg.js";import"./index-DhrokLn_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-4_AlzpT7.js";const h={title:"COMPONENTS/Collections",parameters:{badges:[n.DONE],docs:{page:s}},argTypes:{elementDesign:{table:{category:"Toujou card settings",defaultValue:{summary:"default"}},name:"Element Design",description:"Choose element design for the cards",options:["default","primary","secondary","inverted"],control:{type:"radio"},defaultValue:["default"],required:!0}},tags:["autodocs"]},c=e=>`
        <ul class="card-collection">
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="event" element-design="${e.elementDesign}" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>

                        <div class="collection-item__categories">
                            ${a(["Tutorials"],e.elementDesign)}
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
                            <span class="collection-item__subtitle">Hiring organization</span>
                        </p>

                        <div class="collection-item__subheading">
                            <ul class="separated-list collection-item__separated-list" list-separator="comma" type-weight="bold">
                                <li class="separated-list__item">Part-time</li>
                                <li class="separated-list__item">Volunteer</li>
                                <li class="separated-list__item">Immediate start</li>
                            </ul>
                        </div>

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
                <toujou-collection-item class="collection-item" item-type="event" element-design="${e.elementDesign}" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                    </header>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Headline</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">Hiring organization • Employment unit</span>
                        </p>

                        <div class="collection-item__subheading">
                            <ul class="separated-list collection-item__separated-list" list-separator="comma" type-weight="bold">
                                <li class="separated-list__item">Part-time</li>
                                <li class="separated-list__item">Volunteer</li>
                                <li class="separated-list__item">Immediate start</li>
                            </ul>
                        </div>

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
                <toujou-collection-item class="collection-item" item-type="event" element-design="${e.elementDesign}" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                    </header>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">Hiring organization • Augsburg</span>
                        </p>

                        <div class="collection-item__subheading">
                            <ul class="separated-list collection-item__separated-list" list-separator="comma" type-weight="bold">
                                <li class="separated-list__item">Part-time</li>
                                <li class="separated-list__item">Volunteer</li>
                                <li class="separated-list__item">Immediate start</li>
                            </ul>
                        </div>

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
                <toujou-collection-item class="collection-item" item-type="event" element-design="${e.elementDesign}" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                    </header>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Nice headline</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">Hiring organization • Employment unit • Augsburg</span>
                        </p>

                        <div class="collection-item__subheading">
                            <ul class="separated-list collection-item__separated-list" list-separator="comma" type-weight="bold">
                                <li class="separated-list__item">Part-time</li>
                                <li class="separated-list__item">Volunteer</li>
                                <li class="separated-list__item">Immediate start</li>
                            </ul>
                        </div>

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
    `,t=c.bind({});t.args={elementDesign:"default"};var i,l,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`(args: ToujouCardStoryProps) => {
  return \`
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
                    </header>
                    <div class="collection-item__bottom">

                        <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">Hiring organization</span>
                        </p>

                        <div class="collection-item__subheading">
                            <ul class="separated-list collection-item__separated-list" list-separator="comma" type-weight="bold">
                                <li class="separated-list__item">Part-time</li>
                                <li class="separated-list__item">Volunteer</li>
                                <li class="separated-list__item">Immediate start</li>
                            </ul>
                        </div>

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
                    </header>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Headline</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">Hiring organization • Employment unit</span>
                        </p>

                        <div class="collection-item__subheading">
                            <ul class="separated-list collection-item__separated-list" list-separator="comma" type-weight="bold">
                                <li class="separated-list__item">Part-time</li>
                                <li class="separated-list__item">Volunteer</li>
                                <li class="separated-list__item">Immediate start</li>
                            </ul>
                        </div>

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
                    </header>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">Hiring organization • Augsburg</span>
                        </p>

                        <div class="collection-item__subheading">
                            <ul class="separated-list collection-item__separated-list" list-separator="comma" type-weight="bold">
                                <li class="separated-list__item">Part-time</li>
                                <li class="separated-list__item">Volunteer</li>
                                <li class="separated-list__item">Immediate start</li>
                            </ul>
                        </div>

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
                    </header>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Nice headline</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">Hiring organization • Employment unit • Augsburg</span>
                        </p>

                        <div class="collection-item__subheading">
                            <ul class="separated-list collection-item__separated-list" list-separator="comma" type-weight="bold">
                                <li class="separated-list__item">Part-time</li>
                                <li class="separated-list__item">Volunteer</li>
                                <li class="separated-list__item">Immediate start</li>
                            </ul>
                        </div>

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
}`,...(o=(l=t.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const b=["CardJob"];export{t as CardJob,b as __namedExportsOrder,h as default};
