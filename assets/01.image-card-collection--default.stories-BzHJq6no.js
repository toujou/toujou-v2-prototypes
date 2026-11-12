const g={title:"COMPONENTS/CollectionImageCards",argTypes:{imageFormat:{table:{category:"Image card settings",defaultValue:{summary:"16-9"}},name:"Image format",description:"Set the image card's image format",options:["16-9","square"],control:{type:"radio"},required:!0},cardsAreLinks:{table:{category:"Image card settings"},name:"Cards are links",description:"Choose if the cards should be a link or not",control:{type:"boolean"},required:!0},columnCount:{table:{category:"Image card settings"},name:"Column count",description:"Number of columns",options:[1,2,3,4],control:{type:"radio"},required:!0},cardVariant:{table:{category:"Image card settings",defaultValue:{summary:"default"}},name:"Card variant",description:"Set the image card element design",options:["default","primary","secondary","inverted"],control:{type:"radio"},required:!0}}};function s(){return`
        <toujou-media-info class="media-info">
            <button slot="open-button" class="media-info__toggle" aria-label="Toggle the image caption and / or copyright">
                <toujou-icon class="icon" icon-color="background" icon-name="info" icon-size="ms"></toujou-icon>
            </button>
            <button slot="close-button" class="media-info__toggle" aria-label="Toggle the image caption and / or copyright">
                <toujou-icon class="icon" icon-color="background" icon-name="close" icon-size="ms"></toujou-icon>
            </button>
            <figcaption slot="figcaption" class="media-info__figcaption">This is a beautiful description</figcaption>
            <small slot="copyright" class="media-info__copyright">@Nice photographer</small>
        </toujou-media-info>
    `}function d(a,e){return`
        <a class="image-card" href="#" image-format="${a}" card-variant="${e}">
            <figure class="image-card__figure">
                <img src="https://picsum.photos/400/400" alt="beautiful image" class="image-card__image">
                ${s()}
            </figure>
            <h3 class="image-card__title">
                <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon>
                Beautiful title
            </h3>
        </a>
    `}function u(a,e){return`
        <toujou-image-card class="image-card" image-format="${a}" card-variant="${e}">
            <figure class="image-card__figure">
                <img src="https://picsum.photos/400/400" alt="beautiful image" class="image-card__image">
                ${s()}
            </figure>
            <h3 class="image-card__title">
                <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon>
                Beautiful title
            </h3>
        </toujou-image-card>
    `}const l=a=>{const e=document.createElement("toujou-image-card-grid");e.classList.add("image-card-grid");for(let r=0;r<a.columnCount;r++){const m=a.cardsAreLinks?d(a.imageFormat,a.cardVariant):u(a.imageFormat,a.cardVariant);e.insertAdjacentHTML("beforeend",m)}const o=document.createElement("main");return o.appendChild(e),o},t=l.bind({});t.args={imageFormat:"16-9",columnCount:4,cardsAreLinks:!0,cardVariant:"default"};var i,n,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`(args: ToujouImageCardStoryProps) => {
  const toujouImageCardGrid = document.createElement('toujou-image-card-grid');
  toujouImageCardGrid.classList.add('image-card-grid');
  for (let i = 0; i < args.columnCount; i++) {
    const imageCard = args.cardsAreLinks ? createImageCardLink(args.imageFormat, args.cardVariant) : createImageCardElement(args.imageFormat, args.cardVariant);
    toujouImageCardGrid.insertAdjacentHTML('beforeend', imageCard);
  }
  const mainEl = document.createElement('main');
  mainEl.appendChild(toujouImageCardGrid);
  return mainEl;
}`,...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const f=["ImageCardDefault"];export{t as ImageCardDefault,f as __namedExportsOrder,g as default};
