import{T as m}from"./badgeCustomConfig-DUXiHpL4.js";import{j as a}from"./jsx-runtime-CS_Wz6c_.js";import{useMDXComponents as l}from"./index-C8FVCAkB.js";import"./index-Dy2Ak0OH.js";import"./_commonjsHelpers-Cpj98o6Y.js";function o(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...r.components};return a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"toujou-image-card",children:"<toujou-image-card>"}),`
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
`]})]})}function g(r={}){const{wrapper:e}={...l(),...r.components};return e?a.jsx(e,{...r,children:a.jsx(o,{...r})}):o(r)}const _={title:"COMPONENTS/Image Card",parameters:{badges:[m.DONE],docs:{page:g}},argTypes:{imageFormat:{table:{category:"Image card settings",defaultValue:{summary:"16-9"}},name:"Image format",description:"Set the image card's image format",options:["16-9","square"],control:{type:"radio"},defaultValue:["cinema"],required:!0},cardsAreLinks:{table:{category:"Image card settings"},name:"Cards are links",description:"Choose if the cards should be a link or not",control:{type:"boolean"},defaultValue:!0,required:!0},columnCount:{table:{category:"Image card settings"},name:"Column count",description:"Number of columns",options:[1,2,3,4],control:{type:"radio"},defaultValue:[1],required:!0},cardVariant:{table:{category:"Image card settings",defaultValue:{summary:"default"}},name:"Card variant",description:"Set the image card element design",options:["default","primary","secondary","inverted"],control:{type:"radio"},defaultValue:["default"],required:!0}},tags:["autodocs"]};function h(r,e){return`
        <a class="image-card" href="#" image-format="${r}" card-variant="${e}">
            <figure class="image-card__figure">
                <img src="https://picsum.photos/400/400" alt="beautiful image" class="image-card__image">
            </figure>
            <h3 class="image-card__title">
                <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon>
                Beautiful title
            </h3>
        </a>
    `}function j(r,e){return`
        <toujou-image-card class="image-card" image-format="${r}" card-variant="${e}">
            <figure class="image-card__figure">
                <img src="https://picsum.photos/400/400" alt="beautiful image" class="image-card__image">
            </figure>
            <h3 class="image-card__title">
                <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon>
                Beautiful title
            </h3>
        </toujou-image-card>
    `}const p=r=>{const e=document.createElement("toujou-image-card-grid");e.classList.add("image-card-grid");for(let n=0;n<r.columnCount;n++){const u=r.cardsAreLinks?h(r.imageFormat,r.cardVariant):j(r.imageFormat,r.cardVariant);e.insertAdjacentHTML("beforeend",u)}const t=document.createElement("main");return t.appendChild(e),t},i=p.bind({});i.args={imageFormat:"16-9",columnCount:4,cardsAreLinks:!0,cardVariant:"default"};var c,d,s;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`(args: ToujouImageCardStoryProps) => {
  const toujouImageCardGrid = document.createElement('toujou-image-card-grid');
  toujouImageCardGrid.classList.add('image-card-grid');
  for (let i = 0; i < args.columnCount; i++) {
    const imageCard = args.cardsAreLinks ? createImageCardLink(args.imageFormat, args.cardVariant) : createImageCardElement(args.imageFormat, args.cardVariant);
    toujouImageCardGrid.insertAdjacentHTML('beforeend', imageCard);
  }
  const mainEl = document.createElement('main');
  mainEl.appendChild(toujouImageCardGrid);
  return mainEl;
}`,...(s=(d=i.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const I=["ImageCard"];export{i as ImageCard,I as __namedExportsOrder,_ as default};
