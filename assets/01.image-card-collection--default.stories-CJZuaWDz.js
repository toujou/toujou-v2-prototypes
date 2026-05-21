const g={title:"COMPONENTS/CollectionImageCards",argTypes:{imageFormat:{table:{category:"Image card settings",defaultValue:{summary:"16-9"}},name:"Image format",description:"Set the image card's image format",options:["16-9","square"],control:{type:"radio"},required:!0},cardsAreLinks:{table:{category:"Image card settings"},name:"Cards are links",description:"Choose if the cards should be a link or not",control:{type:"boolean"},required:!0},columnCount:{table:{category:"Image card settings"},name:"Column count",description:"Number of columns",options:[1,2,3,4],control:{type:"radio"},required:!0},cardVariant:{table:{category:"Image card settings",defaultValue:{summary:"default"}},name:"Card variant",description:"Set the image card element design",options:["default","primary","secondary","inverted"],control:{type:"radio"},required:!0}}};function d(a,e){return`
        <a class="image-card" href="#" image-format="${a}" card-variant="${e}">
            <figure class="image-card__figure">
                <img src="https://picsum.photos/400/400" alt="beautiful image" class="image-card__image">
            </figure>
            <h3 class="image-card__title">
                <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon>
                Beautiful title
            </h3>
        </a>
    `}function s(a,e){return`
        <toujou-image-card class="image-card" image-format="${a}" card-variant="${e}">
            <figure class="image-card__figure">
                <img src="https://picsum.photos/400/400" alt="beautiful image" class="image-card__image">
            </figure>
            <h3 class="image-card__title">
                <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon>
                Beautiful title
            </h3>
        </toujou-image-card>
    `}const u=a=>{const e=document.createElement("toujou-image-card-grid");e.classList.add("image-card-grid");for(let i=0;i<a.columnCount;i++){const m=a.cardsAreLinks?d(a.imageFormat,a.cardVariant):s(a.imageFormat,a.cardVariant);e.insertAdjacentHTML("beforeend",m)}const t=document.createElement("main");return t.appendChild(e),t},r=u.bind({});r.args={imageFormat:"16-9",columnCount:4,cardsAreLinks:!0,cardVariant:"default"};var o,n,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`(args: ToujouImageCardStoryProps) => {
  const toujouImageCardGrid = document.createElement('toujou-image-card-grid');
  toujouImageCardGrid.classList.add('image-card-grid');
  for (let i = 0; i < args.columnCount; i++) {
    const imageCard = args.cardsAreLinks ? createImageCardLink(args.imageFormat, args.cardVariant) : createImageCardElement(args.imageFormat, args.cardVariant);
    toujouImageCardGrid.insertAdjacentHTML('beforeend', imageCard);
  }
  const mainEl = document.createElement('main');
  mainEl.appendChild(toujouImageCardGrid);
  return mainEl;
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const l=["ImageCardDefault"];export{r as ImageCardDefault,l as __namedExportsOrder,g as default};
