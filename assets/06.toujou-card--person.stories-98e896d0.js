import{T as c}from"./badgeCustomConfig-e7a687d5.js";import{M as s}from"./toujou-collection-item.docs-b6e358c5.js";import"./jsx-runtime-6a2ad889.js";import"./index-56d4de0b.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-1b6e96e1.js";const p={title:"COMPONENTS/Collections",parameters:{badges:[c.DONE],docs:{page:s}},argTypes:{elementDesign:{table:{category:"Toujou card settings",defaultValue:{summary:"default"}},name:"Element Design",description:"Choose element design for the cards",options:["default","primary","secondary","inverted"],control:{type:"radio"},defaultValue:["default"],required:!0}},tags:["autodocs"]},a=o=>`
        <ul class="card-collection">
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="person" element-design="${o.elementDesign}" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/id/64/200/300" alt="nice image" class="collection-item__image">
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
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            Mehr erfahren
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="person" element-design="${o.elementDesign}" item-orientation="vertical" role="article">
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
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            Mehr erfahren
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="person" element-design="${o.elementDesign}" item-orientation="vertical" role="article">
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
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            Mehr erfahren
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="person" element-design="${o.elementDesign}" item-orientation="vertical" role="article">
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
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            Mehr erfahren
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
        </ul>
    `,e=a.bind({});e.args={elementDesign:"default"};var n,i,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`(args: ToujouCardStoryProps) => {
  return \`
        <ul class="card-collection">
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="person" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/id/64/200/300" alt="nice image" class="collection-item__image">
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
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
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
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
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
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
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
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            Mehr erfahren
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
        </ul>
    \`;
}`,...(t=(i=e.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};const f=["CardPerson"];export{e as CardPerson,f as __namedExportsOrder,p as default};
