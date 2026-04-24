const l={title:"COMPONENTS/Media",argTypes:{mediaType:{table:{category:"Single media settings"},name:"Media type",description:"Choose media type to display",options:["image","video"],control:{type:"radio"},required:!0},numberOfCols:{table:{category:"Single media settings",defaultValue:{summary:"2"}},name:"Number of columns",description:"Choose the number of columns for the media grid",options:[1,2,3,4],control:{type:"radio"},required:!0}}};function m(o){const i=document.createElement("toujou-single-media");if(i.classList.add("single-media"),o==="image"){const e=document.createElement("img");e.classList.add("single-media__image"),e.setAttribute("src","https://picsum.photos/1600/900"),e.setAttribute("alt","Nice image"),i.appendChild(e)}else{const e=document.createElement("video");e.classList.add("single-media__video"),e.setAttribute("type","video/mp4"),e.setAttribute("controls",""),e.setAttribute("src","http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"),i.appendChild(e)}const t=`
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
    `;return i.innerHTML+=t,i}const c=o=>{const i=document.createElement("main"),t=document.createElement("toujou-media-grid");t.classList.add("media-grid"),t.setAttribute("media-grid-column-number",o.numberOfCols.toString());for(let e=0;e<o.numberOfCols;e++){const r=m(o.mediaType);t.appendChild(r)}return i.appendChild(t),i},a=c.bind({});a.args={mediaType:"image",numberOfCols:2};var n,s,d;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`(args: SingleMediaStoryProps) => {
  const mainEl = document.createElement('main');
  const mediaGrid = document.createElement('toujou-media-grid');
  mediaGrid.classList.add('media-grid');
  mediaGrid.setAttribute('media-grid-column-number', args.numberOfCols.toString());
  for (let i = 0; i < args.numberOfCols; i++) {
    const mediaEl = createMediaElement(args.mediaType);
    mediaGrid.appendChild(mediaEl);
  }
  mainEl.appendChild(mediaGrid);
  return mainEl;
}`,...(d=(s=a.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const u=["MediaGrid"];export{a as MediaGrid,u as __namedExportsOrder,l as default};
