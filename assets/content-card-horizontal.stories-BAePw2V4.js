const u={title:"COMPONENTS/Content Card",argTypes:{columnCount:{table:{category:"Content card settings"},name:"Column count",description:"Number of columns",options:[1,2],control:{type:"radio"},required:!0},cardVariant:{table:{category:"Content card settings",defaultValue:{summary:"default"}},name:"Card variant",description:"Set the content card element design",options:["default","primary","secondary","inverted"],control:{type:"radio"},required:!0},hasLink:{table:{category:"Content card settings",defaultValue:{summary:"default"}},name:"Has link",description:"Set a link for the card",control:{type:"boolean"},required:!0}}};function d(){return`
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
    `}const l=e=>{const o=document.createElement("toujou-content-card-grid");o.classList.add("content-card-grid");for(let i=0;i<e.columnCount;i++){const t=document.createElement(e.hasLink?"a":"toujou-content-card");t.classList.add("content-card"),t.setAttribute("card-variant",e.cardVariant),t.setAttribute("card-direction","horizontal"),t.setAttribute("role","article"),e.hasLink&&t.setAttribute("href","#"),t.innerHTML=`
            <figure class="content-card__figure">
                <img src="https://picsum.photos/640/640" alt="beautiful image" class="content-card__image">
                ${d()}
            </figure>
            <div class="content-card__content">
                <h3 class="content-card__title">Eine etwas längere Headline über zwei Zeilen</h3>
                <div class="content-card__text"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur excepturi officiis.</p></div>

                ${e.hasLink?`
                    <span class="content-card__button">
                        <toujou-icon class="icon" icon-name="arrow-right" icon-color="primary"></toujou-icon>
                        zur Beschreibung
                    </span>
                `:""}
            </div>
        `,o.appendChild(t)}const a=document.createElement("main");return a.appendChild(o),a},n=l.bind({});n.args={columnCount:2,cardVariant:"default",hasLink:!1};var r,c,s;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`(args: ContentCardStoryProps) => {
  const contentCardGrid = document.createElement('toujou-content-card-grid');
  contentCardGrid.classList.add('content-card-grid');
  for (let i = 0; i < args.columnCount; i++) {
    const contentCard = document.createElement(args.hasLink ? 'a' : 'toujou-content-card');
    contentCard.classList.add('content-card');
    contentCard.setAttribute('card-variant', args.cardVariant);
    contentCard.setAttribute('card-direction', 'horizontal');
    contentCard.setAttribute('role', 'article');
    if (args.hasLink) {
      contentCard.setAttribute('href', '#');
    }
    contentCard.innerHTML = \`
            <figure class="content-card__figure">
                <img src="https://picsum.photos/640/640" alt="beautiful image" class="content-card__image">
                \${createMediaInfoElement()}
            </figure>
            <div class="content-card__content">
                <h3 class="content-card__title">Eine etwas längere Headline über zwei Zeilen</h3>
                <div class="content-card__text"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur excepturi officiis.</p></div>

                \${args.hasLink ? \`
                    <span class="content-card__button">
                        <toujou-icon class="icon" icon-name="arrow-right" icon-color="primary"></toujou-icon>
                        zur Beschreibung
                    </span>
                \` : ''}
            </div>
        \`;
    contentCardGrid.appendChild(contentCard);
  }
  const mainEl = document.createElement('main');
  mainEl.appendChild(contentCardGrid);
  return mainEl;
}`,...(s=(c=n.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};const m=["HorizontalContentCard"];export{n as HorizontalContentCard,m as __namedExportsOrder,u as default};
