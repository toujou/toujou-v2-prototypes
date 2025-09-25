function a(){const o=window.matchMedia("(prefers-reduced-motion: reduce)").matches;document.querySelectorAll('video[data-is-autoplay="1"]').forEach(t=>{o?t.setAttribute("controls",""):(t.setAttribute("autoplay",""),t.play().then(()=>{}))})}document.readyState!=="loading"?setTimeout(()=>{a()}):document.addEventListener("DOMContentLoaded",()=>{a()});const n={title:"COMPONENTS/Media",argTypes:{autoplay:{table:{category:"Video settings"},name:"Video autoplay",description:"Choose autoplay setting for the video element",control:{type:"boolean"},required:!0}}},d=o=>`
        <video
            playsinline
            poster
            loop
            class="video"
            controls
            ${o.autoplay?'data-is-autoplay="1"':""}
            ${o.autoplay?"muted":""}
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        ></video>
`,e=d.bind({});e.args={autoplay:!1};var s,i,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`(args: VideoAutoplayProps) => {
  return \`
        <video
            playsinline
            poster
            loop
            class="video"
            controls
            \${args.autoplay ? 'data-is-autoplay="1"' : ''}
            \${args.autoplay ? 'muted' : ''}
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        ></video>
\`;
}`,...(r=(i=e.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const p=["VideoAutoplay"];export{e as VideoAutoplay,p as __namedExportsOrder,n as default};
