const i={title:"COMPONENTS/Header",parameters:{layout:"fullscreen"},argTypes:{imageHeight:{table:{category:"Header Settings",defaultValue:{summary:"default"}},name:"Header image height",description:"Set the header image height",options:["default","full","half","quarter","3-1"],control:{type:"select"},required:!0}}},o=s=>`
        <header class="header" image-height="${s.imageHeight}">
            <figure class="header__figure">
                <video
                    playsinline
                    poster
                    loop
                    class="video"
                    controls src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                ></video>
            </figure>
        </header>
    `,e=o.bind({});e.args={imageHeight:"default"};var a,r,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`(args: HeaderStoryProps) => {
  return \`
        <header class="header" image-height="\${args.imageHeight}">
            <figure class="header__figure">
                <video
                    playsinline
                    poster
                    loop
                    class="video"
                    controls src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                ></video>
            </figure>
        </header>
    \`;
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const d=["HeaderVideo"];export{e as HeaderVideo,d as __namedExportsOrder,i as default};
