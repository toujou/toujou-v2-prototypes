import{T as s}from"./badgeCustomConfig-oxGPBDYz.js";import{M as i}from"./header.docs-BeL88qcl.js";import"./jsx-runtime-DPda6Ybg.js";import"./index-DhrokLn_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-4_AlzpT7.js";const u={title:"COMPONENTS/Header",parameters:{badges:[s.DONE],docs:{page:i},layout:"fullscreen"},argTypes:{imageHeight:{table:{category:"Header Settings",defaultValue:{summary:"default"}},name:"Header image height",description:"Set the header image height",options:["default","full","half","quarter","3-1"],control:{type:"select"},defaultValue:["default"],required:!0}},tags:["autodocs"]},d=o=>`
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