import{T as g}from"./badgeCustomConfig-e7a687d5.js";import{j as e}from"./jsx-runtime-87b2c1dd.js";import{u as m}from"./index-af127bdc.js";import"./index-afb52020.js";import"./_commonjsHelpers-725317a4.js";function c(r){const a={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"product-grid",children:"Product grid"}),`
`,e.jsx(a.p,{children:'The "product grid" content element renders a grid with image cards linking to product pages'}),`
`,e.jsxs(a.p,{children:["For more information about the ",e.jsx(a.code,{children:"toujou-image-card"})," element, please refer to the ",e.jsx(a.a,{href:"/docs/components-image-card--image-card",children:"Image Card Docs"})]}),`
`,e.jsx(a.h2,{id:"example-markup",children:"Example markup"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<toujou-image-card-grid class="image-card-grid">
    <a class="image-card" href="#" image-format="16-9" card-variant="default">
        <figure class="image-card__figure">
            <img src="https://picsum.photos/400/400" alt="beautiful image" class="image-card__image">
        </figure>
        <h3 class="image-card__title">
            <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon>
            Product name
        </h3>
    </a>

    <a class="image-card" href="#" image-format="16-9" card-variant="default">
        <figure class="image-card__figure">
            <img src="https://picsum.photos/400/400" alt="beautiful image" class="image-card__image">
        </figure>
        <h3 class="image-card__title">
            <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon>
            Product name
        </h3>
    </a>

    <a class="image-card" href="#" image-format="16-9" card-variant="default">
        <figure class="image-card__figure">
            <img src="https://picsum.photos/400/400" alt="beautiful image" class="image-card__image">
        </figure>
        <h3 class="image-card__title">
            <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon>
            Product name
        </h3>
    </a>

    <a class="image-card" href="#" image-format="16-9" card-variant="default">
        <figure class="image-card__figure">
            <img src="https://picsum.photos/400/400" alt="beautiful image" class="image-card__image">
        </figure>
        <h3 class="image-card__title">
            <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon>
            Product name
        </h3>
    </a>
</toujou-image-card-grid>
`})})]})}function l(r={}){const{wrapper:a}={...m(),...r.components};return a?e.jsx(a,{...r,children:e.jsx(c,{...r})}):c(r)}const C={title:"COMPONENTS/Product Grid",parameters:{badges:[g.DONE],docs:{page:l}},argTypes:{imageFormat:{table:{category:"Product grid card settings",defaultValue:{summary:"16-9"}},name:"Image format",description:"Set the product grid cards image format",options:["16-9","square"],control:{type:"radio"},defaultValue:["cinema"],required:!0},cardVariant:{table:{category:"Product grid card settings",defaultValue:{summary:"default"}},name:"Card variant",description:"Set the product grid cards element design",options:["default","primary","secondary","inverted"],control:{type:"radio"},defaultValue:["default"],required:!0}},tags:["autodocs"]};function p(r,a){return`
        <a class="image-card" href="#" image-format="${r}" card-variant="${a}">
            <figure class="image-card__figure">
                <img src="https://picsum.photos/400/400" alt="beautiful image" class="image-card__image">
            </figure>
            <h3 class="image-card__title">
                <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon>
                Product name
            </h3>
        </a>
    `}const f=r=>{const i=document.createElement("toujou-image-card-grid");i.classList.add("image-card-grid");for(let o=0;o<4;o++){const u=p(r.imageFormat,r.cardVariant);i.insertAdjacentHTML("beforeend",u)}return i},t=f.bind({});t.args={imageFormat:"16-9",cardVariant:"default"};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`(args: ProductGridStoryProps) => {
  const colNumber = 4;
  const toujouImageCardGrid = document.createElement('toujou-image-card-grid');
  toujouImageCardGrid.classList.add('image-card-grid');
  for (let i = 0; i < colNumber; i++) {
    const imageCard = createImageCardLink(args.imageFormat, args.cardVariant);
    toujouImageCardGrid.insertAdjacentHTML('beforeend', imageCard);
  }
  return toujouImageCardGrid;
}`,...(s=(d=t.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const P=["ProductGrid"];export{t as ProductGrid,P as __namedExportsOrder,C as default};