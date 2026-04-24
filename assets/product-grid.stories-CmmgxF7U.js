const g={title:"COMPONENTS/Product Grid",argTypes:{imageFormat:{table:{category:"Product grid card settings",defaultValue:{summary:"16-9"}},name:"Image format",description:"Set the product grid cards image format",options:["16-9","square"],control:{type:"radio"},required:!0},cardVariant:{table:{category:"Product grid card settings",defaultValue:{summary:"default"}},name:"Card variant",description:"Set the product grid cards element design",options:["default","primary","secondary","inverted"],control:{type:"radio"},required:!0}}};function s(r,t){return`
        <a class="image-card" href="#" image-format="${r}" card-variant="${t}">
            <figure class="image-card__figure">
                <img src="https://picsum.photos/400/400" alt="beautiful image" class="image-card__image">
            </figure>
            <h3 class="image-card__title">
                <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon>
                Product name
            </h3>
        </a>
    `}const u=r=>{const e=document.createElement("toujou-image-card-grid");e.classList.add("image-card-grid");for(let o=0;o<4;o++){const m=s(r.imageFormat,r.cardVariant);e.insertAdjacentHTML("beforeend",m)}const i=document.createElement("main");return i.appendChild(e),i},a=u.bind({});a.args={imageFormat:"16-9",cardVariant:"default"};var d,c,n;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`(args: ProductGridStoryProps) => {
  const colNumber = 4;
  const toujouImageCardGrid = document.createElement('toujou-image-card-grid');
  toujouImageCardGrid.classList.add('image-card-grid');
  for (let i = 0; i < colNumber; i++) {
    const imageCard = createImageCardLink(args.imageFormat, args.cardVariant);
    toujouImageCardGrid.insertAdjacentHTML('beforeend', imageCard);
  }
  const mainEl = document.createElement('main');
  mainEl.appendChild(toujouImageCardGrid);
  return mainEl;
}`,...(n=(c=a.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};const l=["ProductGrid"];export{a as ProductGrid,l as __namedExportsOrder,g as default};
