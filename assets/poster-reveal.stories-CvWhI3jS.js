let s=null,b=0;const l=new WeakMap,E=["autoplay","encrypted-media","picture-in-picture"],d="https://www.youtube.com/iframe_api",w="toujou-poster-reveal-activate",g="toujou-poster-reveal-video-play-requested",y="toujou-poster-reveal-video-playing",f="toujou-poster-reveal-video-error",_=["youtube.com","youtube-nocookie.com","youtu.be"],T=["vimeo.com"],h=5e3;function R(){return s||(s=new Promise((e,o)=>{if(typeof YT<"u"&&YT.Player){e();return}const t=window.onYouTubeIframeAPIReady;if(window.onYouTubeIframeAPIReady=()=>{t==null||t(),e()},!document.querySelector(`script[src="${d}"]`)){const n=document.createElement("script");n.src=d,n.onerror=()=>{o(new Error("Failed to load YouTube IFrame API."))},document.head.appendChild(n)}}),s)}function P(e){const o=l.get(e);if(o)return o;const t=R().then(()=>new Promise(n=>{e.id||(e.id=`youtube-player-${++b}`),new YT.Player(e.id,{events:{onReady:i=>n(i.target)}})}));return l.set(e,t),t}function A(e){const o=new Set(e.allow.split(";").map(n=>n.trim()).filter(Boolean));let t=!1;for(const n of E)o.has(n)||(o.add(n),t=!0);return t&&(e.allow=Array.from(o).join("; ")),t}function j(e){return new Promise((o,t)=>{let n;const i=()=>{window.clearTimeout(n),e.removeEventListener("load",i),o()};n=window.setTimeout(()=>{e.removeEventListener("load",i),t(new Error("Timed out while reloading iframe."))},h),e.addEventListener("load",i);try{const u=new URL(e.src,window.location.href);u.searchParams.set("_r",Date.now().toString()),e.src=u.toString()}catch(u){window.clearTimeout(n),e.removeEventListener("load",i),t(u)}})}async function S(e,o){try{a(e,g,{provider:"youtube"}),A(o)&&(await j(o),l.delete(o));const t=await P(o);V(t),a(e,y,{provider:"youtube"})}catch(t){a(e,f,{provider:"youtube",error:t}),console.warn("Could not start YouTube video playback.",{src:o.src,error:t})}}function V(e){e.mute(),e.setVolume(30),e.playVideo(),e.unMute()}function I(e,o){var t;a(e,g,{provider:"vimeo"}),(t=o.contentWindow)==null||t.postMessage({method:"play"},"*"),a(e,y,{provider:"vimeo"})}function q(e){try{const{hostname:o}=new URL(e.src,window.location.href);if(_.some(t=>o===t||o.endsWith(`.${t}`)))return"youtube";if(T.some(t=>o===t||o.endsWith(`.${t}`)))return"vimeo"}catch{}return null}function L(e,o){o.forEach(t=>{switch(q(t)){case"youtube":S(e,t);break;case"vimeo":I(e,t);break}})}function a(e,o,t){e.dispatchEvent(new CustomEvent(o,{bubbles:!0,detail:t}))}function O(){window.addEventListener(w,e=>{const o=e.target;if(!o)return;const t=o.querySelectorAll("iframe");L(o,t)})}O();const k={title:"COMPONENTS/Poster Reveal",argTypes:{contentType:{table:{category:"Poster Reveal settings",defaultValue:{summary:"youtube"}},name:"Content type",description:"Define the content type",options:["youtube","vimeo","text"],control:{type:"radio"},required:!0}}};function Y(){return`
        <button
            button-variant="primary"
            class="button poster-reveal__button"
            aria-label="Reveal text content"
            slot="trigger"
        >Show</button>
    `}function c(){return`
        <button
            class="poster-reveal__button"
            slot="trigger"
            aria-label="Reveal video content"
        >
            <toujou-icon class="icon" icon-color="background" icon-name="play" icon-size="xxxl"></toujou-icon>
        </button>
    `}function x(){return`
        <div class="poster-reveal__content" slot="content" style="border: 4px dashed tomato; padding: var(--spacing-normal);">
            <h2>This is the content</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi consequatur, doloribus eveniet exercitationem iusto labore maiores, nemo nihil odio optio perferendis perspiciatis praesentium quis rerum vel velit vitae voluptas?</p>
            <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti doloribus maxime rerum voluptatum. Cupiditate deleniti, dignissimos eaque nostrum possimus voluptates! Alias eligendi inventore iste minima sequi. Excepturi, saepe, tempore.</span><span>Aperiam aspernatur, autem consequatur illo in incidunt iusto modi. Aliquid animi inventore magnam modi praesentium quam reprehenderit soluta totam vel. Magnam numquam perspiciatis porro possimus, provident quae reiciendis soluta voluptatum?</span><span>Ad, aliquam animi aspernatur aut corporis doloribus facilis ipsum iure magni nihil nostrum quidem, quo recusandae sint velit. Autem consequuntur debitis fuga magnam molestiae neque nesciunt numquam, optio recusandae reprehenderit.</span></p>
        </div>
    `}function U(){return`
        <toujou-media-grid class="media-grid" media-grid-column-number="1" slot="content">
            <toujou-single-media class="single-media">
                <iframe
                    src="https://www.youtube-nocookie.com/embed/MRKy3kX8XUM?autohide=1&amp;controls=1&amp;loop=1&amp;playlist=MRKy3kX8XUM&amp;enablejsapi=1&amp;origin=${encodeURIComponent(window.location.origin)}"
                    allowfullscreen=""
                    playsinline=""
                    video-extension="youtube"
                    data-is-autoplay="0"
                    class="single-media__video video"
                    title="Bach - Violin Sonata no. 1 in G minor BWV 1001 - Sato | Netherlands Bach Society"
                    allow="fullscreen"
                ></iframe>    
            </toujou-single-media>
        </toujou-media-grid>
    `}function M(){return`
        <toujou-media-grid class="media-grid" media-grid-column-number="1" slot="content">
            <toujou-single-media class="single-media">
                <iframe
                    src="https://player.vimeo.com/video/347119375?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    video-extension="vimeo"
                    class="single-media__video video"
                    title="Sample Video"
                ></iframe>    
            </toujou-single-media>
        </toujou-media-grid>
    `}function $(e){switch(e){case"youtube":return`
                ${c()};
                ${U()};
            `;case"vimeo":return`
                ${c()};
                ${M()};
            `;case"text":default:return`
                ${Y()};
                ${x()};
            `}}const C=e=>`
        <main>
            <toujou-media-grid class="media-grid" media-grid-column-number="1">
                <toujou-single-media class="single-media">
                    <toujou-poster-reveal class="poster-reveal" content-type="${e.contentType}">
                        <img
                            src="https://picsum.photos/1600/900"
                            alt="beautiful image"
                            class="poster-reveal__image"
                            slot="poster"
                        />
                        ${$(e.contentType)}
                    </toujou-poster-reveal>
                </toujou-single-media>
            </toujou-media-grid>
        </main>
    `,r=C.bind({});r.args={contentType:"youtube"};var m,p,v;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`(args: PosterRevealProps) => {
  return \`
        <main>
            <toujou-media-grid class="media-grid" media-grid-column-number="1">
                <toujou-single-media class="single-media">
                    <toujou-poster-reveal class="poster-reveal" content-type="\${args.contentType}">
                        <img
                            src="https://picsum.photos/1600/900"
                            alt="beautiful image"
                            class="poster-reveal__image"
                            slot="poster"
                        />
                        \${renderConditionalElements(args.contentType)}
                    </toujou-poster-reveal>
                </toujou-single-media>
            </toujou-media-grid>
        </main>
    \`;
}`,...(v=(p=r.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};const B=["PosterReveal"];export{r as PosterReveal,B as __namedExportsOrder,k as default};
