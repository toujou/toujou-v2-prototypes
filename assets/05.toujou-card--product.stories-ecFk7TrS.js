import{T as n}from"./badgeCustomConfig-DUXiHpL4.js";import{M as a}from"./toujou-collection-item.docs-g3XyL0zL.js";import{r as o}from"./_renderCardCategoriChips-D3lhH8UM.js";import"./jsx-runtime-DPda6Ybg.js";import"./index-DhrokLn_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-4_AlzpT7.js";const h={title:"COMPONENTS/Collections/Cards",parameters:{badges:[n.DONE],docs:{page:a}},argTypes:{elementDesign:{table:{category:"Toujou card settings",defaultValue:{summary:"default"}},name:"Element Design",description:"Choose element design for the cards",options:["default","primary","secondary","inverted"],control:{type:"radio"},defaultValue:["default"],required:!0}},tags:["autodocs"]},s=e=>`
        <main>
            <ul class="card-collection">
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="product" element-design="${e.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                            <div class="collection-item__categories">
                                ${o(["Tutorials"],e.elementDesign)}
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
                        <a href="#" class="collection-item__bottom">
                            <h3 class="collection-item__title">Product A</h3>
                        </a>
                    </toujou-collection-item>
                </li>
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="product" element-design="${e.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                            <div class="collection-item__categories">
                                ${o(["Rabatt"],e.elementDesign)}
                            </div>
                        </header>
                        <a href="#" class="collection-item__bottom">
                            <h3 class="collection-item__title">Product B</h3>
                        </a>
                    </toujou-collection-item>
                </li>
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="product" element-design="${e.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                        </header>
                        <a href="#" class="collection-item__bottom">
                            <h3 class="collection-item__title">Product C</h3>
                        </a>
                    </toujou-collection-item>
                </li>
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="product" element-design="${e.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                        </header>
                        <a href="#" class="collection-item__bottom">
                            <h3 class="collection-item__title">Product D</h3>
                        </a>
                    </toujou-collection-item>
                </li>
            </ul>
        </main>
    `,t=s.bind({});t.args={elementDesign:"default"};var i,c,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`(args: ToujouCardStoryProps) => {
  return \`
        <main>
            <ul class="card-collection">
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="product" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
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
                        <a href="#" class="collection-item__bottom">
                            <h3 class="collection-item__title">Product A</h3>
                        </a>
                    </toujou-collection-item>
                </li>
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="product" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                            <div class="collection-item__categories">
                                \${renderCardCategoryChips(['Rabatt'], args.elementDesign)}
                            </div>
                        </header>
                        <a href="#" class="collection-item__bottom">
                            <h3 class="collection-item__title">Product B</h3>
                        </a>
                    </toujou-collection-item>
                </li>
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="product" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                        </header>
                        <a href="#" class="collection-item__bottom">
                            <h3 class="collection-item__title">Product C</h3>
                        </a>
                    </toujou-collection-item>
                </li>
                <li class="card-collection__item">
                    <toujou-collection-item class="collection-item" item-type="product" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                        </header>
                        <a href="#" class="collection-item__bottom">
                            <h3 class="collection-item__title">Product D</h3>
                        </a>
                    </toujou-collection-item>
                </li>
            </ul>
        </main>
    \`;
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const f=["CardProduct"];export{t as CardProduct,f as __namedExportsOrder,h as default};
