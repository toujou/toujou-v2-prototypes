import{M as s}from"./header.docs-vU61Hop9.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-CA-6ZBib.js";import"./iframe-Bgj8hcLu.js";import"./preload-helper-C1FmrZbK.js";const m={title:"COMPONENTS/Header",parameters:{docs:{page:s},layout:"fullscreen"},argTypes:{imageHeight:{table:{category:"Header Settings",defaultValue:{summary:"default"}},name:"Header image height",description:"Set the header image height",options:["default","full","half","quarter","3-1"],control:{type:"select"},required:!0}}},i=o=>`
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
    `,e=i.bind({});e.args={imageHeight:"default"};var a,r,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`(args: HeaderStoryProps) => {
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
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const p=["HeaderVideo"];export{e as HeaderVideo,p as __namedExportsOrder,m as default};
