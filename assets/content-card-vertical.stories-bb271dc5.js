import{T as s}from"./badgeCustomConfig-e7a687d5.js";import{M as d}from"./content-card.docs-84da3cbe.js";import"./jsx-runtime-6a2ad889.js";import"./index-56d4de0b.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-1b6e96e1.js";const _={title:"COMPONENTS/Content Card",parameters:{badges:[s.DONE],docs:{page:d}},argTypes:{columnCount:{table:{category:"Content card settings",defaultValue:{summary:4}},name:"Column count",description:"Number of columns",options:[1,2,3,4],control:{type:"radio"},defaultValue:[1],required:!0},cardVariant:{table:{category:"Content card settings",defaultValue:{summary:"default"}},name:"Card variant",description:"Set the content  card element design",options:["default","primary","secondary","inverted"],control:{type:"radio"},defaultValue:["default"],required:!0},hasLink:{table:{category:"Content card settings",defaultValue:{summary:"default"}},name:"Has link",description:"Set a link for the card",control:{type:"boolean"},defaultValue:!1,required:!0}},tags:["autodocs"]},u=e=>{const r=document.createElement("toujou-content-card-grid");r.classList.add("content-card-grid");for(let a=0;a<e.columnCount;a++){const t=document.createElement(e.hasLink?"a":"toujou-content-card");t.classList.add("content-card"),t.setAttribute("card-variant",e.cardVariant),t.setAttribute("card-direction","vertical"),t.setAttribute("role","article"),e.hasLink&&t.setAttribute("href","#"),t.innerHTML=`
            <figure class="content-card__figure">
                <img src="https://picsum.photos/640/640" alt="beautiful image" class="content-card__image">
            </figure>
            <div class="content-card__content">
                <h3 class="content-card__title">Eine etwas längere Headline über zwei Zeilen</h3>
                ${a==2?`
                    <p class="content-card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur excepturi officiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur excepturi officiis.</p>
                `:`
                    <p class="content-card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur excepturi officiis.</p>
                `}

                ${e.hasLink?`
                    <span class="content-card__button">
                        <toujou-icon class="icon" icon-name="arrow-right" icon-color="primary"></toujou-icon>
                        zur Beschreibung
                    </span>
                `:""}
            </div>
        `,r.appendChild(t)}return r},n=u.bind({});n.args={columnCount:4,cardVariant:"default",hasLink:!1};var c,i,o;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`(args: ContentCardStoryProps) => {
  const contentCardGrid = document.createElement('toujou-content-card-grid');
  contentCardGrid.classList.add('content-card-grid');
  for (let i = 0; i < args.columnCount; i++) {
    const contentCard = document.createElement(args.hasLink ? 'a' : 'toujou-content-card');
    contentCard.classList.add('content-card');
    contentCard.setAttribute('card-variant', args.cardVariant);
    contentCard.setAttribute('card-direction', 'vertical');
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
                \${i == 2 ? \`
                    <p class="content-card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur excepturi officiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur excepturi officiis.</p>
                \` : \`
                    <p class="content-card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur excepturi officiis.</p>
                \`}

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
  return contentCardGrid;
}`,...(o=(i=n.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const h=["VerticalContentCard"];export{n as VerticalContentCard,h as __namedExportsOrder,_ as default};
