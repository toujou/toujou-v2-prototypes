import{T as l}from"./badgeCustomConfig-e7a687d5.js";import{M as n}from"./toujou-collection-item.docs-12476081.js";import"./jsx-runtime-ac05983f.js";import"./index-e0ddb630.js";import"./_commonjsHelpers-87174ba5.js";import"./index-a9a8c754.js";const d={title:"COMPONENTS/Collections",parameters:{badges:[l.DONE],docs:{page:n}},argTypes:{elementDesign:{table:{category:"Toujou card settings",defaultValue:{summary:"default"}},name:"Element Design",description:"Choose element design for the cards",options:["default","primary","secondary","inverted"],control:{type:"radio"},defaultValue:["default"],required:!0}},tags:["autodocs"]},a=e=>`
        <ul class="card-collection">
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="product" element-design="${e.elementDesign}" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                        <div class="collection-item__categories">
                            <a href="#" class="collection-item__category">
                                <toujou-icon class="icon collection-item__icon" icon-name="bookmark-filled" icon-size="normal" icon-color="font"></toujou-icon>
                                New
                            </a>
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
                            <a href="#" class="collection-item__category">
                                <toujou-icon class="icon collection-item__icon" icon-name="bookmark-filled" icon-size="normal" icon-color="font"></toujou-icon>
                                Rabatt
                            </a>
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
    `,o=a.bind({});o.args={elementDesign:"default"};var t,i,c;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`(args: ToujouCardStoryProps) => {
  return \`
        <ul class="card-collection">
            <li class="card-collection__item">
                <toujou-collection-item class="collection-item" item-type="product" element-design="\${args.elementDesign}" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                        <div class="collection-item__categories">
                            <a href="#" class="collection-item__category">
                                <toujou-icon class="icon collection-item__icon" icon-name="bookmark-filled" icon-size="normal" icon-color="font"></toujou-icon>
                                New
                            </a>
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
                            <a href="#" class="collection-item__category">
                                <toujou-icon class="icon collection-item__icon" icon-name="bookmark-filled" icon-size="normal" icon-color="font"></toujou-icon>
                                Rabatt
                            </a>
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
    \`;
}`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const p=["CardProduct"];export{o as CardProduct,p as __namedExportsOrder,d as default};
//# sourceMappingURL=05.toujou-card--product.stories-12fa84d5.js.map
