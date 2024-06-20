import{T as m}from"./badgeCustomConfig-e7a687d5.js";import{j as i}from"./jsx-runtime-87b2c1dd.js";import{u as l}from"./index-af127bdc.js";import"./index-afb52020.js";import"./_commonjsHelpers-725317a4.js";function s(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...l(),...o.components};return i.jsxs(i.Fragment,{children:[i.jsx(e.h1,{id:"media-elements",children:"Media elements;"}),`
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
`,i.jsxs(e.p,{children:["Valid values are ",i.jsx(e.code,{children:"1"}),", ",i.jsx(e.code,{children:"2"}),", ",i.jsx(e.code,{children:"3"}),", and ",i.jsx(e.code,{children:"4"})]})]})}function u(o={}){const{wrapper:e}={...l(),...o.components};return e?i.jsx(e,{...o,children:i.jsx(s,{...o})}):s(o)}const x={title:"COMPONENTS/Media",parameters:{badges:[m.DONE],docs:{page:u}},argTypes:{mediaType:{table:{category:"Single media settings",defaultValue:{summary:2}},name:"Media type",description:"Choose media type to display",options:["image","video"],control:{type:"radio"},defaultValue:[2],required:!0},numberOfCols:{table:{category:"Single media settings",defaultValue:{summary:"2"}},name:"Number of columns",description:"Choose the number of columns for the media grid",options:[1,2,3,4],control:{type:"radio"},defaultValue:["image"],required:!0}},tags:["autodocs"]};function g(o){const e=document.createElement("toujou-single-media");if(e.classList.add("single-media"),o==="image"){const t=document.createElement("img");t.classList.add("single-media__image"),t.setAttribute("src","https://picsum.photos/1600/900"),t.setAttribute("alt","Nice image"),e.appendChild(t)}else{const t=document.createElement("video");t.classList.add("single-media__video"),t.setAttribute("type","video/mp4"),t.setAttribute("controls",""),t.setAttribute("src","http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"),e.appendChild(t)}const a=`
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
    `;return e.innerHTML+=a,e}const p=o=>{const e=document.createElement("toujou-media-grid");e.classList.add("media-grid"),e.setAttribute("media-grid-column-number",o.numberOfCols.toString());for(let a=0;a<o.numberOfCols;a++){const t=g(o.mediaType);e.appendChild(t)}return e},n=p.bind({});n.args={mediaType:"image",numberOfCols:2};var d,r,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`(args: SingleMediaStoryProps) => {
  const mediaGrid = document.createElement('toujou-media-grid');
  mediaGrid.classList.add('media-grid');
  mediaGrid.setAttribute('media-grid-column-number', args.numberOfCols.toString());
  for (let i = 0; i < args.numberOfCols; i++) {
    const mediaEl = createMediaElement(args.mediaType);
    mediaGrid.appendChild(mediaEl);
  }
  return mediaGrid;
}`,...(c=(r=n.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const y=["MediaGrid"];export{n as MediaGrid,y as __namedExportsOrder,x as default};
