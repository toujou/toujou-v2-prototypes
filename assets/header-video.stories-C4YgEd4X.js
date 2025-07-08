import{T as s}from"./badgeCustomConfig-DUXiHpL4.js";import{M as i}from"./header.docs-k8q1e-sx.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-DpH9cx3q.js";import"./index-DO8khQO4.js";import"./_commonjsHelpers-Cpj98o6Y.js";const u={title:"COMPONENTS/Header",parameters:{badges:[s.DONE],docs:{page:i},layout:"fullscreen"},argTypes:{imageHeight:{table:{category:"Header Settings",defaultValue:{summary:"default"}},name:"Header image height",description:"Set the header image height",options:["default","full","half","quarter","3-1"],control:{type:"select"},required:!0}}},d=o=>`
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
