import{T as s}from"./badgeCustomConfig-e7a687d5.js";import{M as i}from"./header.docs-2ea5eb1f.js";import"./jsx-runtime-ac05983f.js";import"./index-e0ddb630.js";import"./_commonjsHelpers-87174ba5.js";import"./index-a9a8c754.js";const u={title:"COMPONENTS/Header",parameters:{badges:[s.DONE],docs:{page:i},layout:"fullscreen"},argTypes:{imageHeight:{table:{category:"Header Settings",defaultValue:{summary:"default"}},name:"Header image height",description:"Set the header image height",options:["default","full","half","quarter","3-1"],control:{type:"select"},defaultValue:["default"],required:!0}}},d=o=>`
        <header class="header" image-height="${o.imageHeight}">            
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
    `,e=d.bind({});e.args={imageHeight:"default"};var a,r,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`(args: HeaderStoryProps) => {
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
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const h=["HeaderVideo"];export{e as HeaderVideo,h as __namedExportsOrder,u as default};
//# sourceMappingURL=header-video.stories-12a9fb6f.js.map
