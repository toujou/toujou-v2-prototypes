const l={title:"COMPONENTS/MediaPlaceholder",argTypes:{mediaType:{table:{category:"Single media settings"},name:"Media type",description:"Choose media type to display",options:["image","video","audio"],control:{type:"radio"},required:!0}}},r=i=>`
        <main>
            <div class="demo-media-placeholder-container">
                <toujou-media-placeholder media-type="${i.mediaType}" class="media-placeholder"></toujou-media-placeholder>
            </div>
        </main>
    `,e=r.bind({});e.args={mediaType:"image"};var a,d,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`(args: MediaPlaceholdderStoryProps) => {
  return \`
        <main>
            <div class="demo-media-placeholder-container">
                <toujou-media-placeholder media-type="\${args.mediaType}" class="media-placeholder"></toujou-media-placeholder>
            </div>
        </main>
    \`;
}`,...(o=(d=e.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};const t=["MediaPlaceholder"];export{e as MediaPlaceholder,t as __namedExportsOrder,l as default};
