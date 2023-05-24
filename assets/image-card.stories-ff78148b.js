import{T as l}from"./badgeCustomConfig-e7a687d5.js";import{j as a}from"./jsx-runtime-ac05983f.js";import{u as d}from"./index-a9a8c754.js";import"./index-e0ddb630.js";import"./_commonjsHelpers-87174ba5.js";function n(r){const e=Object.assign({h1:"h1",p:"p",code:"code",a:"a",pre:"pre",h2:"h2",h3:"h3",ul:"ul",li:"li"},d(),r.components);return a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"toujou-image-card",children:"<toujou-image-card>"}),`
`,a.jsxs(e.p,{children:["The ",a.jsx(e.code,{children:"<toujou-image-card>"})," is a simple element that renders an image card on the page (image, with a title, either as link or as a simple card)"]}),`
`,a.jsxs(e.p,{children:["| ⚠️ The ",a.jsx(e.code,{children:"<toujou-image-card>"})," element must be rendered inside a ",a.jsx(e.code,{children:"<toujou-image-card-grid>"}),` element |
|---------------------------------------------------------------------------------------------------|`]}),`
`,a.jsxs(e.p,{children:["If there is a link available, the whole card will be linked. If no link is available, instead of an ",a.jsx(e.code,{children:"<a>"})," it will be rendered as a ",a.jsx(e.code,{children:"<toujou-image-card>"})," element."]}),`
`,a.jsxs(e.p,{children:["| ℹ️ The ",a.jsx(e.code,{children:"toujou-image-card"})," are also used on the ",a.jsx(e.a,{href:"/story/components-product-grid--product-grid",children:"Product Grid"}),` |
|---------------------------------------------------------------------------------------------------|`]}),`
`,a.jsx(e.p,{children:"Markup Example:"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<toujou-image-card-grid class="image-card-grid">
    <a class="image-card" href="#" image-format="square" card-variant="secondary">
        <figure class="image-card__figure">
            <img src="https://picsum.photos/400/400" alt="beautiful image" class="image-card__image" />
        </figure>
        <h3 class="image-card__title">
            <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon>
            Beautiful title
        </h3>
    </a>
</toujou-image-card-grid>
`})}),`
`,a.jsx(e.h2,{id:"attributes",children:"Attributes"}),`
`,a.jsxs(e.p,{children:["There are a couple of attributes that allow us to customize the ",a.jsx(e.code,{children:"<toujou-image-card>"})," element"]}),`
`,a.jsxs(e.h3,{id:"card-variant-required",children:["card variant ",a.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,a.jsxs(e.p,{children:["By setting the ",a.jsx(e.code,{children:"card-variant"})," attribute we can choose between the default, primary, secondary or inverted element designs (can be set on the BE by the users)."]}),`
`,a.jsx(e.p,{children:"Valid values are:"}),`
`,a.jsxs(e.ul,{children:[`
`,a.jsx(e.li,{children:a.jsx(e.code,{children:"default"})}),`
`,a.jsx(e.li,{children:a.jsx(e.code,{children:"primary"})}),`
`,a.jsx(e.li,{children:a.jsx(e.code,{children:"secondary"})}),`
`,a.jsx(e.li,{children:a.jsx(e.code,{children:"inverted"})}),`
`]}),`
`,a.jsxs(e.h3,{id:"image-format-required",children:["image format ",a.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,a.jsxs(e.p,{children:["By setting the ",a.jsx(e.code,{children:"image-format"}),' attribute we can choose between the "cinema" and "square" formats for the image cards image (depending on the BE element used)']}),`
`,a.jsx(e.p,{children:"Valid values are:"}),`
`,a.jsxs(e.ul,{children:[`
`,a.jsx(e.li,{children:a.jsx(e.code,{children:"16-9"})}),`
`,a.jsx(e.li,{children:a.jsx(e.code,{children:"square"})}),`
`]})]})}function m(r={}){const{wrapper:e}=Object.assign({},d(),r.components);return e?a.jsx(e,Object.assign({},r,{children:a.jsx(n,r)})):n(r)}const y={title:"COMPONENTS/Image Card",parameters:{badges:[l.DONE],docs:{page:m}},argTypes:{imageFormat:{table:{category:"Image card settings",defaultValue:{summary:"16-9"}},name:"Image format",description:"Set the image card's image format",options:["16-9","square"],control:{type:"radio"},defaultValue:["cinema"],required:!0},cardsAreLinks:{table:{category:"Image card settings",defaultValue:{summary:!0}},name:"Cards are links",description:"Choose if the cards should be a link or not",control:{type:"boolean"},defaultValue:!0,required:!0},columnCount:{table:{category:"Image card settings",defaultValue:{summary:4}},name:"Column count",description:"Number of columns",options:[1,2,3,4],control:{type:"radio"},defaultValue:[1],required:!0},cardVariant:{table:{category:"Image card settings",defaultValue:{summary:"default"}},name:"Card variant",description:"Set the image card element design",options:["default","primary","secondary","inverted"],control:{type:"radio"},defaultValue:["default"],required:!0}}};function g(r,e){return`
        <a class="image-card" href="#" image-format="${r}" card-variant="${e}">
            <figure class="image-card__figure">
                <img src="https://picsum.photos/400/400" alt="beautiful image" class="image-card__image">
            </figure>
            <h3 class="image-card__title">
                <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon>
                Beautiful title
            </h3>
        </a>
    `}function h(r,e){return`
        <toujou-image-card class="image-card" image-format="${r}" card-variant="${e}">
            <figure class="image-card__figure">
                <img src="https://picsum.photos/400/400" alt="beautiful image" class="image-card__image">
            </figure>
            <h3 class="image-card__title">
                <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon>
                Beautiful title
            </h3>
        </toujou-image-card>
    `}const j=r=>{const e=document.createElement("toujou-image-card-grid");e.classList.add("image-card-grid");for(let t=0;t<r.columnCount;t++){const u=r.cardsAreLinks?g(r.imageFormat,r.cardVariant):h(r.imageFormat,r.cardVariant);e.insertAdjacentHTML("beforeend",u)}return e},i=j.bind({});i.args={imageFormat:"16-9",columnCount:4,cardsAreLinks:!0,cardVariant:"default"};var c,o,s;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`(args: ToujouImageCardStoryProps) => {
  const toujouImageCardGrid = document.createElement('toujou-image-card-grid');
  toujouImageCardGrid.classList.add('image-card-grid');
  for (let i = 0; i < args.columnCount; i++) {
    const imageCard = args.cardsAreLinks ? createImageCardLink(args.imageFormat, args.cardVariant) : createImageCardElement(args.imageFormat, args.cardVariant);
    toujouImageCardGrid.insertAdjacentHTML('beforeend', imageCard);
  }
  return toujouImageCardGrid;
}`,...(s=(o=i.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const _=["ImageCard"];export{i as ImageCard,_ as __namedExportsOrder,y as default};
//# sourceMappingURL=image-card.stories-ff78148b.js.map
