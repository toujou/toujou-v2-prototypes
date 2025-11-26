import{j as i}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as l}from"./index-C2EXqPnf.js";import"./iframe-BgusOG1K.js";import"./preload-helper-C1FmrZbK.js";function s(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...l(),...t.components};return i.jsxs(i.Fragment,{children:[i.jsx(e.h1,{id:"media-elements",children:"Media elements;"}),`
`,i.jsxs(e.p,{children:["The media elements, both images and video, are placed inside a ",i.jsx(e.code,{children:"media-grid"})," element. It has the width of normal content."]}),`
`,i.jsxs(e.p,{children:["For each media element we use ",i.jsx(e.code,{children:"<toujou-single-media>"})," element."]}),`
`,i.jsx(e.p,{children:"Example:"}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-html",children:`<div class="media-grid" media-grid-column-number="2">
    <toujou-single-media class="single-media">
        <img class="single-media__image" src="https://picsum.photos/1599/900" alt="Nice image">
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
    </toujou-single-media>
    <toujou-single-media class="single-media">
        <img class="single-media__image" src="https://picsum.photos/1599/900" alt="Nice image">
    </toujou-single-media>
</div>
`})}),`
`,i.jsxs(e.p,{children:["| ⚠️ We still need to add the ",i.jsx(e.code,{children:"<toujou-third-party-content>"}),` element |
|--------------------------------------------------------------------|`]}),`
`,i.jsx(e.h2,{id:"attributes",children:"Attributes"}),`
`,i.jsxs(e.p,{children:["The ",i.jsx(e.code,{children:"media-grid"})," element has some attributes that allow us to configure how it is rendered"]}),`
`,i.jsx(e.h3,{id:"media-grid-column-number",children:"media-grid-column-number"}),`
`,i.jsx(e.p,{children:"This attribute allows us to defined the number of columns we want to render. The grid will automatically adjust to the different viewports."}),`
`,i.jsxs(e.p,{children:["Valid values are ",i.jsx(e.code,{children:"1"}),", ",i.jsx(e.code,{children:"2"}),", ",i.jsx(e.code,{children:"3"}),", and ",i.jsx(e.code,{children:"4"})]})]})}function u(t={}){const{wrapper:e}={...l(),...t.components};return e?i.jsx(e,{...t,children:i.jsx(s,{...t})}):s(t)}const x={title:"COMPONENTS/Media",parameters:{docs:{page:u}},argTypes:{mediaType:{table:{category:"Single media settings"},name:"Media type",description:"Choose media type to display",options:["image","video"],control:{type:"radio"},required:!0},numberOfCols:{table:{category:"Single media settings",defaultValue:{summary:"2"}},name:"Number of columns",description:"Choose the number of columns for the media grid",options:[1,2,3,4],control:{type:"radio"},required:!0}}};function g(t){const e=document.createElement("toujou-single-media");if(e.classList.add("single-media"),t==="image"){const o=document.createElement("img");o.classList.add("single-media__image"),o.setAttribute("src","https://picsum.photos/1600/900"),o.setAttribute("alt","Nice image"),e.appendChild(o)}else{const o=document.createElement("video");o.classList.add("single-media__video"),o.setAttribute("type","video/mp4"),o.setAttribute("controls",""),o.setAttribute("src","http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"),e.appendChild(o)}const n=`
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
    `;return e.innerHTML+=n,e}const p=t=>{const e=document.createElement("main"),n=document.createElement("toujou-media-grid");n.classList.add("media-grid"),n.setAttribute("media-grid-column-number",t.numberOfCols.toString());for(let o=0;o<t.numberOfCols;o++){const m=g(t.mediaType);n.appendChild(m)}return e.appendChild(n),e},a=p.bind({});a.args={mediaType:"image",numberOfCols:2};var d,c,r;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`(args: SingleMediaStoryProps) => {
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
}`,...(r=(c=a.parameters)==null?void 0:c.docs)==null?void 0:r.source}}};const _=["MediaGrid"];export{a as MediaGrid,_ as __namedExportsOrder,x as default};
