import{T as d}from"./badgeCustomConfig-DUXiHpL4.js";function a(){const o=window.matchMedia("(prefers-reduced-motion: reduce)").matches;document.querySelectorAll('video[data-is-autoplay="1"]').forEach(t=>{o?t.setAttribute("controls",""):t.setAttribute("autoplay","")})}document.readyState!=="loading"?setTimeout(()=>{a()}):document.addEventListener("DOMContentLoaded",()=>{a()});const u={title:"COMPONENTS/Media",parameters:{badges:[d.DONE]},argTypes:{autoplay:{table:{category:"Video settings"},name:"Video autoplay",description:"Choose autoplay setting for the video element",control:{type:"boolean"},required:!0}}},l=o=>`
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
`,e=l.bind({});e.args={autoplay:!1};var s,r,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`(args: VideoAutoplayProps) => {
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
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const c=["VideoAutoplay"];export{e as VideoAutoplay,c as __namedExportsOrder,u as default};
