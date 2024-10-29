import{T as c}from"./badgeCustomConfig-DUXiHpL4.js";import{M as s}from"./toujou-collection-item.docs-g3XyL0zL.js";import{r as a}from"./_renderCardCategoriChips-D3lhH8UM.js";import"./jsx-runtime-DPda6Ybg.js";import"./index-DhrokLn_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-4_AlzpT7.js";const g={title:"COMPONENTS/Collections/Cards",parameters:{badges:[c.DONE],docs:{page:s}},argTypes:{elementDesign:{table:{category:"Toujou card settings",defaultValue:{summary:"default"}},name:"Element Design",description:"Choose element design for the cards",options:["default","primary","secondary","inverted"],control:{type:"radio"},defaultValue:["default"],required:!0}},tags:["autodocs"]},l=e=>`
        <main>
            <ul class="card-collection">
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="person" element-design="${e.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/id/64/200/300" alt="nice image" class="collection-item__image">
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
                            <h3 class="collection-item__title">Dr. Max Mustermann</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">Team-Lead</span>
                            </p>

                            <p class="collection-item__abstract">
                                <span class="collection-item__abstract-text">
                                    Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.
                                </span>
                            </p>

                            <address class="address collection-item__address">
                                <p class="address__item">
                                    <a href="#" class="address__link">
                                        <toujou-icon class="icon" icon-name="telephone" icon-color="font"
                                                     icon-size="m"></toujou-icon>
                                        0123 123456789
                                    </a>
                                </p>
                                <p class="address__item">
                                    <a href="#" class="address__link">
                                        <toujou-icon class="icon" icon-name="fax" icon-color="font" icon-size="m"></toujou-icon>
                                        0123 123456789
                                    </a>
                                </p>
                                <p class="address__item">
                                    <a href="#" class="address__link">
                                        <toujou-icon class="icon" icon-name="globe" icon-color="font"
                                                     icon-size="m"></toujou-icon>
                                        www.abcdef.com
                                    </a>
                                </p>
                                <p class="address__item">
                                    <a href="#" class="address__link">
                                        <toujou-icon class="icon" icon-name="email" icon-color="font"
                                                     icon-size="m"></toujou-icon>
                                        max@abcdef.com
                                    </a>
                                </p>
                            </address>
                            <a href="#" class="collection-item__button">
                                <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                Mehr erfahren
                            </a>
                        </div>
                    </toujou-collection-item>
                </li>
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="person" element-design="${e.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/id/64/200/300" alt="nice image" class="collection-item__image">
                            </figure>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Dr. Max Mustermann</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">Team-Lead</span>
                            </p>

                            <p class="collection-item__abstract">
                                <span class="collection-item__abstract-text">
                                    Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                                </span>
                            </p>

                            <address class="address collection-item__address">
                                <p class="address__item">
                                    <a href="#" class="address__link">
                                        <toujou-icon class="icon" icon-name="telephone" icon-color="font"
                                                     icon-size="m"></toujou-icon>
                                        0123 123456789
                                    </a>
                                </p>
                                <p class="address__item">
                                    <a href="#" class="address__link">
                                        <toujou-icon class="icon" icon-name="fax" icon-color="font" icon-size="m"></toujou-icon>
                                        0123 123456789
                                    </a>
                                </p>
                                <p class="address__item">
                                    <a href="#" class="address__link">
                                        <toujou-icon class="icon" icon-name="globe" icon-color="font"
                                                     icon-size="m"></toujou-icon>
                                        www.abcdef.com
                                    </a>
                                </p>
                                <p class="address__item">
                                    <a href="#" class="address__link">
                                        <toujou-icon class="icon" icon-name="email" icon-color="font"
                                                     icon-size="m"></toujou-icon>
                                        max@abcdef.com
                                    </a>
                                </p>
                            </address>
                            <a href="#" class="collection-item__button">
                                <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                Mehr erfahren
                            </a>
                        </div>
                    </toujou-collection-item>
                </li>
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="person" element-design="${e.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/id/64/200/300" alt="nice image" class="collection-item__image">
                            </figure>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Dr. Max Mustermann</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">Team-Lead</span>
                            </p>

                            <p class="collection-item__abstract">
                                <span class="collection-item__abstract-text">
                                    Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                                </span>
                            </p>

                            <address class="address collection-item__address">
                                <p class="address__item">
                                    <a href="#" class="address__link">
                                        <toujou-icon class="icon" icon-name="telephone" icon-color="font"
                                                     icon-size="m"></toujou-icon>
                                        0123 123456789
                                    </a>
                                </p>
                                <p class="address__item">
                                    <a href="#" class="address__link">
                                        <toujou-icon class="icon" icon-name="fax" icon-color="font" icon-size="m"></toujou-icon>
                                        0123 123456789
                                    </a>
                                </p>
                            </address>
                            <a href="#" class="collection-item__button">
                                <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                Mehr erfahren
                            </a>
                        </div>
                    </toujou-collection-item>
                </li>
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="person" element-design="${e.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/id/64/200/300" alt="nice image" class="collection-item__image">
                            </figure>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Dr. Max Mustermann</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">Team-Lead</span>
                            </p>

                            <p class="collection-item__abstract">
                                <span class="collection-item__abstract-text">
                                    Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                                </span>
                            </p>

                            <a href="#" class="collection-item__button">
                                <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                Mehr erfahren
                            </a>
                        </div>
                    </toujou-collection-item>
                </li>
            </ul>
        </main>
    `,o=l.bind({});o.args={elementDesign:"default"};var n,i,t;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`(args: ToujouCardStoryProps) => {
  return \`
        <main>
            <ul class="card-collection">
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="person" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/id/64/200/300" alt="nice image" class="collection-item__image">
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
                            <h3 class="collection-item__title">Dr. Max Mustermann</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">Team-Lead</span>
                            </p>

                            <p class="collection-item__abstract">
                                <span class="collection-item__abstract-text">
                                    Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.
                                </span>
                            </p>

                            <address class="address collection-item__address">
                                <p class="address__item">
                                    <a href="#" class="address__link">
                                        <toujou-icon class="icon" icon-name="telephone" icon-color="font"
                                                     icon-size="m"></toujou-icon>
                                        0123 123456789
                                    </a>
                                </p>
                                <p class="address__item">
                                    <a href="#" class="address__link">
                                        <toujou-icon class="icon" icon-name="fax" icon-color="font" icon-size="m"></toujou-icon>
                                        0123 123456789
                                    </a>
                                </p>
                                <p class="address__item">
                                    <a href="#" class="address__link">
                                        <toujou-icon class="icon" icon-name="globe" icon-color="font"
                                                     icon-size="m"></toujou-icon>
                                        www.abcdef.com
                                    </a>
                                </p>
                                <p class="address__item">
                                    <a href="#" class="address__link">
                                        <toujou-icon class="icon" icon-name="email" icon-color="font"
                                                     icon-size="m"></toujou-icon>
                                        max@abcdef.com
                                    </a>
                                </p>
                            </address>
                            <a href="#" class="collection-item__button">
                                <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                Mehr erfahren
                            </a>
                        </div>
                    </toujou-collection-item>
                </li>
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="person" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/id/64/200/300" alt="nice image" class="collection-item__image">
                            </figure>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Dr. Max Mustermann</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">Team-Lead</span>
                            </p>

                            <p class="collection-item__abstract">
                                <span class="collection-item__abstract-text">
                                    Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                                </span>
                            </p>

                            <address class="address collection-item__address">
                                <p class="address__item">
                                    <a href="#" class="address__link">
                                        <toujou-icon class="icon" icon-name="telephone" icon-color="font"
                                                     icon-size="m"></toujou-icon>
                                        0123 123456789
                                    </a>
                                </p>
                                <p class="address__item">
                                    <a href="#" class="address__link">
                                        <toujou-icon class="icon" icon-name="fax" icon-color="font" icon-size="m"></toujou-icon>
                                        0123 123456789
                                    </a>
                                </p>
                                <p class="address__item">
                                    <a href="#" class="address__link">
                                        <toujou-icon class="icon" icon-name="globe" icon-color="font"
                                                     icon-size="m"></toujou-icon>
                                        www.abcdef.com
                                    </a>
                                </p>
                                <p class="address__item">
                                    <a href="#" class="address__link">
                                        <toujou-icon class="icon" icon-name="email" icon-color="font"
                                                     icon-size="m"></toujou-icon>
                                        max@abcdef.com
                                    </a>
                                </p>
                            </address>
                            <a href="#" class="collection-item__button">
                                <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                Mehr erfahren
                            </a>
                        </div>
                    </toujou-collection-item>
                </li>
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="person" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/id/64/200/300" alt="nice image" class="collection-item__image">
                            </figure>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Dr. Max Mustermann</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">Team-Lead</span>
                            </p>

                            <p class="collection-item__abstract">
                                <span class="collection-item__abstract-text">
                                    Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                                </span>
                            </p>

                            <address class="address collection-item__address">
                                <p class="address__item">
                                    <a href="#" class="address__link">
                                        <toujou-icon class="icon" icon-name="telephone" icon-color="font"
                                                     icon-size="m"></toujou-icon>
                                        0123 123456789
                                    </a>
                                </p>
                                <p class="address__item">
                                    <a href="#" class="address__link">
                                        <toujou-icon class="icon" icon-name="fax" icon-color="font" icon-size="m"></toujou-icon>
                                        0123 123456789
                                    </a>
                                </p>
                            </address>
                            <a href="#" class="collection-item__button">
                                <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                Mehr erfahren
                            </a>
                        </div>
                    </toujou-collection-item>
                </li>
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="person" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/id/64/200/300" alt="nice image" class="collection-item__image">
                            </figure>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Dr. Max Mustermann</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">Team-Lead</span>
                            </p>

                            <p class="collection-item__abstract">
                                <span class="collection-item__abstract-text">
                                    Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                                </span>
                            </p>

                            <a href="#" class="collection-item__button">
                                <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                Mehr erfahren
                            </a>
                        </div>
                    </toujou-collection-item>
                </li>
            </ul>
        </main>
    \`;
}`,...(t=(i=o.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};const h=["CardPerson"];export{o as CardPerson,h as __namedExportsOrder,g as default};