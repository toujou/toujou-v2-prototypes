import{T as l}from"./badgeCustomConfig-DUXiHpL4.js";function s(){const e=window.matchMedia("(prefers-reduced-motion: reduce)").matches,t=document.querySelectorAll('video[data-is-autoplay="1"]');console.log("11",t,e),t.forEach(a=>{e?a.setAttribute("controls",""):a.setAttribute("autoplay","")})}document.readyState!=="loading"?setTimeout(()=>{s()}):document.addEventListener("DOMContentLoaded",()=>{s()});const u={title:"COMPONENTS/Media",parameters:{badges:[l.DONE]},argTypes:{autoplay:{table:{category:"Video settings"},name:"Video autoplay",description:"Choose autoplay setting for the video element",control:{type:"boolean"},required:!0}}},n=e=>`
        <video
            playsinline
            poster
            loop
            class="video"
            controls
            ${e.autoplay?'data-is-autoplay="1"':""}
            ${e.autoplay?"muted":""}
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        ></video>
`,o=n.bind({});o.args={autoplay:!1};var r,i,d;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`(args: VideoAutoplayProps) => {
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
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const c=["VideoAutoplay"];export{o as VideoAutoplay,c as __namedExportsOrder,u as default};
