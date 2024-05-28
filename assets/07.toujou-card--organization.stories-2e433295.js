import{T as t}from"./badgeCustomConfig-e7a687d5.js";import{M as s}from"./toujou-collection-item.docs-df6770e9.js";import{r as a}from"./_renderCardCategoriChips-1ee0e70d.js";import"./jsx-runtime-2d96f316.js";import"./index-b6937ee2.js";import"./_commonjsHelpers-725317a4.js";import"./index-9d38a655.js";const f={title:"COMPONENTS/Collections",parameters:{badges:[t.DONE],docs:{page:s}},argTypes:{elementDesign:{table:{category:"Toujou card settings",defaultValue:{summary:"default"}},name:"Element Design",description:"Choose element design for the cards",options:["default","primary","secondary","inverted"],control:{type:"radio"},defaultValue:["default"],required:!0}},tags:["autodocs"]},l=o=>`
        <ul class="card-collection">
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="organisation" element-design="${o.elementDesign}" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/id/64/200/300" alt="nice image" class="collection-item__image">
                        </figure>

                        <div class="collection-item__categories">
                            ${a(["Tutorials"],o.elementDesign)}
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
                        <img src="https://via.placeholder.com/64x64/cccccc/969696?text=Logo" alt="" class="collection-item__logo">

                        <h3 class="collection-item__title">Adidas AG</h3>

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
                <toujou-collection-item class="collection-item" item-type="organisation" element-design="${o.elementDesign}" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/id/64/200/300" alt="nice image" class="collection-item__image">
                        </figure>
                    </header>
                    <div class="collection-item__bottom">
                        <img src="https://via.placeholder.com/64x64/cccccc/969696?text=Logo" alt="" class="collection-item__logo">

                        <h3 class="collection-item__title">Adidas AG</h3>

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
                <toujou-collection-item class="collection-item" item-type="organisation" element-design="${o.elementDesign}" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/id/64/200/300" alt="nice image" class="collection-item__image">
                        </figure>
                    </header>
                    <div class="collection-item__bottom">
                        <img src="https://via.placeholder.com/64x64/cccccc/969696?text=Logo" alt="" class="collection-item__logo">

                        <h3 class="collection-item__title">Adidas AG</h3>

                        <p class="collection-item__abstract">
                            <span class="collection-item__abstract-text">
                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz.
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
                <toujou-collection-item class="collection-item" item-type="organisation" element-design="${o.elementDesign}" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/id/64/200/300" alt="nice image" class="collection-item__image">
                        </figure>
                    </header>
                    <div class="collection-item__bottom">
                        <img src="https://via.placeholder.com/64x64/cccccc/969696?text=Logo" alt="" class="collection-item__logo">

                        <h3 class="collection-item__title">Adidas AG</h3>

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
    `,e=l.bind({});e.args={elementDesign:"default"};var i,n,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`(args: ToujouCardStoryProps) => {
  return \`
        <ul class="card-collection">
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="organisation" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
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
                        <img src="https://via.placeholder.com/64x64/cccccc/969696?text=Logo" alt="" class="collection-item__logo">

                        <h3 class="collection-item__title">Adidas AG</h3>

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
                <toujou-collection-item class="collection-item" item-type="organisation" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/id/64/200/300" alt="nice image" class="collection-item__image">
                        </figure>
                    </header>
                    <div class="collection-item__bottom">
                        <img src="https://via.placeholder.com/64x64/cccccc/969696?text=Logo" alt="" class="collection-item__logo">

                        <h3 class="collection-item__title">Adidas AG</h3>

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
                <toujou-collection-item class="collection-item" item-type="organisation" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/id/64/200/300" alt="nice image" class="collection-item__image">
                        </figure>
                    </header>
                    <div class="collection-item__bottom">
                        <img src="https://via.placeholder.com/64x64/cccccc/969696?text=Logo" alt="" class="collection-item__logo">

                        <h3 class="collection-item__title">Adidas AG</h3>

                        <p class="collection-item__abstract">
                            <span class="collection-item__abstract-text">
                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz.
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
                <toujou-collection-item class="collection-item" item-type="organisation" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/id/64/200/300" alt="nice image" class="collection-item__image">
                        </figure>
                    </header>
                    <div class="collection-item__bottom">
                        <img src="https://via.placeholder.com/64x64/cccccc/969696?text=Logo" alt="" class="collection-item__logo">

                        <h3 class="collection-item__title">Adidas AG</h3>

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
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const h=["CardOrganization"];export{e as CardOrganization,h as __namedExportsOrder,f as default};
