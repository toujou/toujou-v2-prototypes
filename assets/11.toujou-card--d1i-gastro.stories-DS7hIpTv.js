import{M as n}from"./toujou-collection-item.docs-CBy-2QIs.js";import{r as l}from"./_renderCardCategoriChips-D3lhH8UM.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-C2EXqPnf.js";import"./iframe-BgusOG1K.js";import"./preload-helper-C1FmrZbK.js";const g={title:"COMPONENTS/CollectionCards",parameters:{docs:{page:n}},argTypes:{elementDesign:{table:{category:"Toujou card settings",defaultValue:{summary:"default"}},name:"Element Design",description:"Choose element design for the cards",options:["default","primary","secondary","inverted"],control:{type:"radio"},required:!0}},tags:["autodocs"]},a=o=>`
        <main>
            <ul class="card-collection">
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="organisation" element-design="${o.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/id/64/200/300" alt="nice image" class="collection-item__image">
                            </figure>

                            <div class="collection-item__categories">
                                ${l(["Tutorials"],o.elementDesign)}
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

                            <h3 class="collection-item__title">Gastro A</h3>

                            <p class="collection-item__abstract">
                                <span class="collection-item__abstract-text">
                                    Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.
                                </span>
                            </p>

                            <address class="address collection-item__address">
                                <p class="address__item">
                                    <toujou-icon class="icon" icon-name="location" icon-color="font" icon-size="m"></toujou-icon>
                                    Comödien-Platz 1, 90762 Fürth
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
                    <toujou-collection-item class="collection-item" item-type="organisation" element-design="${o.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/id/64/200/300" alt="nice image" class="collection-item__image">
                            </figure>
                        </header>
                        <div class="collection-item__bottom">
                            <img src="https://via.placeholder.com/64x64/cccccc/969696?text=Logo" alt="" class="collection-item__logo">

                            <h3 class="collection-item__title">Gastro B</h3>

                            <p class="collection-item__abstract">
                                <span class="collection-item__abstract-text">
                                    Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                                </span>
                            </p>

                            <address class="address collection-item__address">
                                <p class="address__item">
                                    <toujou-icon class="icon" icon-name="location" icon-color="font" icon-size="m"></toujou-icon>
                                    Comödien-Platz 1, 90762 Fürth
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
                    <toujou-collection-item class="collection-item" item-type="organisation" element-design="${o.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/id/64/200/300" alt="nice image" class="collection-item__image">
                            </figure>
                        </header>
                        <div class="collection-item__bottom">
                            <img src="https://via.placeholder.com/64x64/cccccc/969696?text=Logo" alt="" class="collection-item__logo">

                            <h3 class="collection-item__title">Gastro C</h3>

                            <p class="collection-item__abstract">
                                <span class="collection-item__abstract-text">
                                    Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz.
                                </span>
                            </p>

                            <address class="address collection-item__address">
                                <p class="address__item">
                                    <toujou-icon class="icon" icon-name="location" icon-color="font" icon-size="m"></toujou-icon>
                                    Comödien-Platz 1
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
                    <toujou-collection-item class="collection-item" item-type="organisation" element-design="${o.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/id/64/200/300" alt="nice image" class="collection-item__image">
                            </figure>
                        </header>
                        <div class="collection-item__bottom">
                            <img src="https://via.placeholder.com/64x64/cccccc/969696?text=Logo" alt="" class="collection-item__logo">

                            <h3 class="collection-item__title">Gastro D</h3>

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
    `,e=a.bind({});e.args={elementDesign:"default"};var t,i,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`(args: ToujouCardStoryProps) => {
  return \`
        <main>
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

                            <h3 class="collection-item__title">Gastro A</h3>

                            <p class="collection-item__abstract">
                                <span class="collection-item__abstract-text">
                                    Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.
                                </span>
                            </p>

                            <address class="address collection-item__address">
                                <p class="address__item">
                                    <toujou-icon class="icon" icon-name="location" icon-color="font" icon-size="m"></toujou-icon>
                                    Comödien-Platz 1, 90762 Fürth
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
                    <toujou-collection-item class="collection-item" item-type="organisation" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/id/64/200/300" alt="nice image" class="collection-item__image">
                            </figure>
                        </header>
                        <div class="collection-item__bottom">
                            <img src="https://via.placeholder.com/64x64/cccccc/969696?text=Logo" alt="" class="collection-item__logo">

                            <h3 class="collection-item__title">Gastro B</h3>

                            <p class="collection-item__abstract">
                                <span class="collection-item__abstract-text">
                                    Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                                </span>
                            </p>

                            <address class="address collection-item__address">
                                <p class="address__item">
                                    <toujou-icon class="icon" icon-name="location" icon-color="font" icon-size="m"></toujou-icon>
                                    Comödien-Platz 1, 90762 Fürth
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
                    <toujou-collection-item class="collection-item" item-type="organisation" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/id/64/200/300" alt="nice image" class="collection-item__image">
                            </figure>
                        </header>
                        <div class="collection-item__bottom">
                            <img src="https://via.placeholder.com/64x64/cccccc/969696?text=Logo" alt="" class="collection-item__logo">

                            <h3 class="collection-item__title">Gastro C</h3>

                            <p class="collection-item__abstract">
                                <span class="collection-item__abstract-text">
                                    Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz.
                                </span>
                            </p>

                            <address class="address collection-item__address">
                                <p class="address__item">
                                    <toujou-icon class="icon" icon-name="location" icon-color="font" icon-size="m"></toujou-icon>
                                    Comödien-Platz 1
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
                    <toujou-collection-item class="collection-item" item-type="organisation" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/id/64/200/300" alt="nice image" class="collection-item__image">
                            </figure>
                        </header>
                        <div class="collection-item__bottom">
                            <img src="https://via.placeholder.com/64x64/cccccc/969696?text=Logo" alt="" class="collection-item__logo">

                            <h3 class="collection-item__title">Gastro D</h3>

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
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const p=["CardDestinationOneGastro"];export{e as CardDestinationOneGastro,p as __namedExportsOrder,g as default};
