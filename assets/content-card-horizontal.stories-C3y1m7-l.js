import{M as d}from"./content-card.docs-Dj8_dj7C.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-DZP5esQ7.js";import"./iframe-BiGcBdBA.js";import"./preload-helper-C1FmrZbK.js";const h={title:"COMPONENTS/Content Card",parameters:{docs:{page:d}},argTypes:{columnCount:{table:{category:"Content card settings"},name:"Column count",description:"Number of columns",options:[1,2],control:{type:"radio"},required:!0},cardVariant:{table:{category:"Content card settings",defaultValue:{summary:"default"}},name:"Card variant",description:"Set the content card element design",options:["default","primary","secondary","inverted"],control:{type:"radio"},required:!0},hasLink:{table:{category:"Content card settings",defaultValue:{summary:"default"}},name:"Has link",description:"Set a link for the card",control:{type:"boolean"},required:!0}},tags:["autodocs"]},u=e=>{const r=document.createElement("toujou-content-card-grid");r.classList.add("content-card-grid");for(let o=0;o<e.columnCount;o++){const t=document.createElement(e.hasLink?"a":"toujou-content-card");t.classList.add("content-card"),t.setAttribute("card-variant",e.cardVariant),t.setAttribute("card-direction","horizontal"),t.setAttribute("role","article"),e.hasLink&&t.setAttribute("href","#"),t.innerHTML=`
            <figure class="content-card__figure">
                <img src="https://picsum.photos/640/640" alt="beautiful image" class="content-card__image">
            </figure>
            <div class="content-card__content">
                <h3 class="content-card__title">Eine etwas längere Headline über zwei Zeilen</h3>
                <p class="content-card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur excepturi officiis.</p>

                ${e.hasLink?`
                    <span class="content-card__button">
                        <toujou-icon class="icon" icon-name="arrow-right" icon-color="primary"></toujou-icon>
                        zur Beschreibung
                    </span>
                `:""}
            </div>
        `,r.appendChild(t)}const a=document.createElement("main");return a.appendChild(r),a},n=u.bind({});n.args={columnCount:2,cardVariant:"default",hasLink:!1};var c,i,s;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`(args: ContentCardStoryProps) => {
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
            </figure>
            <div class="content-card__content">
                <h3 class="content-card__title">Eine etwas längere Headline über zwei Zeilen</h3>
                <p class="content-card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur excepturi officiis.</p>

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
}`,...(s=(i=n.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const f=["HorizontalContentCard"];export{n as HorizontalContentCard,f as __namedExportsOrder,h as default};
