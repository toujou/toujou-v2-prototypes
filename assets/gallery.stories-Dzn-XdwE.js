import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as n}from"./index-C699k9hs.js";import"./photoswipe-lightbox-creator-JZb7R8tM.js";import"./iframe-Cb7BSVq4.js";import"./preload-helper-C1FmrZbK.js";function a(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...n(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"gallery",children:"Gallery"}),`
`,t.jsx(e.p,{children:"This element displays a gallery and a lightbox on the page"}),`
`,t.jsxs(e.p,{children:["We use the ",t.jsx(e.a,{href:"https://photoswipe.com/",rel:"nofollow",children:"PhotoSwipe"})]}),`
`,t.jsx(e.h2,{id:"markup-example",children:"Markup Example"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<toujou-gallery id="test-gallery" class="gallery" lightbox-parent-id="123">
    <a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
        data-pswp-width="1669"
        data-pswp-height="2500"
        target="_blank"
        class="gallery__item"
        title="This is a beautiful caption"
        lightbox-item-id="1"
    >
        <img class="gallery__image" src="https://picsum.photos/600" alt=""/>
    </a>
    <a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
        data-pswp-width="1669"
        data-pswp-height="2500"
        target="_blank"
        class="gallery__item"
        lightbox-item-id="2"
    >
        <img class="gallery__image" src="https://picsum.photos/601" alt="" />
    </a>
</toujou-gallery>
`})}),`
`,t.jsx(e.h2,{id:"attributes",children:"Attributes"}),`
`,t.jsxs(e.h3,{id:"id-required",children:["id ",t.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"toujou-gallery"})," element must have a unique ",t.jsx(e.code,{children:"id"})," attribute"]}),`
`,t.jsx(e.h3,{id:"photoswipe-attributes",children:"photoswipe attributes"}),`
`,t.jsxs(e.p,{children:["The Gallery element must have ",t.jsx(e.code,{children:'lightbox-parent-id="..."'})," attribute"]}),`
`,t.jsxs(e.p,{children:["The gallery items (the ",t.jsx(e.code,{children:"a"})," elements inside the ",t.jsx(e.code,{children:"toujou-gallery"}),") must have:"]}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.code,{children:'class="gallery__item"'})}),`
`,t.jsx(e.li,{children:t.jsx(e.code,{children:'target="_blank"'})}),`
`,t.jsxs(e.li,{children:[t.jsx(e.code,{children:'data-pswp-width="..."'})," (width of the target image)"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.code,{children:'data-pswp-height="..."'})," (height of the target image)"]}),`
`,t.jsx(e.li,{children:t.jsx(e.code,{children:'lightbox-item-id="..."'})}),`
`]}),`
`,t.jsx(e.p,{children:"They may also have:"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.code,{children:'title="..."'})," (this is the caption that will be shown on the lightbox)"]}),`
`]})]})}function p(i={}){const{wrapper:e}={...n(),...i.components};return e?t.jsx(e,{...i,children:t.jsx(a,{...i})}):a(i)}const u={title:"COMPONENTS/Media",parameters:{docs:{page:p}},argTypes:{}},r=()=>`
        <main>
            <toujou-gallery id="test-gallery" class="gallery" lightbox-parent-id="1">
                <a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
                    data-pswp-width="1669"
                    data-pswp-height="2500"
                    target="_blank"
                    class="gallery__item"
                    title="This is a beautiful caption"
                    lightbox-item-id="1"
                >
                    <img class="gallery__image" src="https://picsum.photos/600" alt=""/>
                </a>
                <a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
                    data-pswp-width="1669"
                    data-pswp-height="2500"
                    target="_blank"
                    class="gallery__item"
                    title="This is a another nice caption"
                    lightbox-item-id="2"
                >
                    <img class="gallery__image" src="https://picsum.photos/601" alt="" />
                </a>
                <a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
                    data-pswp-width="1669"
                    data-pswp-height="2500"
                    target="_blank"
                    class="gallery__item"
                    title="This is a another nice caption"
                    lightbox-item-id="3"
                >
                    <img class="gallery__image" src="https://picsum.photos/602" alt="" />
                </a>
                <a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-2500.jpg"
                    data-pswp-width="1669"
                    data-pswp-height="2500"
                    target="_blank"
                    class="gallery__item"
                    title="This is a another nice caption"
                    lightbox-item-id="4"
                >
                    <img class="gallery__image" src="https://picsum.photos/603" alt="" />
                </a>
                <a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/5/img-2500.jpg"
                    data-pswp-width="1669"
                    data-pswp-height="2500"
                    target="_blank"
                    class="gallery__item"
                    title="This is a another nice caption"
                    lightbox-item-id="5"
                >
                    <img class="gallery__image" src="https://picsum.photos/604" alt="" />
                </a>
            </toujou-gallery>
        </main>
    `,s=r.bind({});var l,o,h;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return \`
        <main>
            <toujou-gallery id="test-gallery" class="gallery" lightbox-parent-id="1">
                <a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg"
                    data-pswp-width="1669"
                    data-pswp-height="2500"
                    target="_blank"
                    class="gallery__item"
                    title="This is a beautiful caption"
                    lightbox-item-id="1"
                >
                    <img class="gallery__image" src="https://picsum.photos/600" alt=""/>
                </a>
                <a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg"
                    data-pswp-width="1669"
                    data-pswp-height="2500"
                    target="_blank"
                    class="gallery__item"
                    title="This is a another nice caption"
                    lightbox-item-id="2"
                >
                    <img class="gallery__image" src="https://picsum.photos/601" alt="" />
                </a>
                <a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
                    data-pswp-width="1669"
                    data-pswp-height="2500"
                    target="_blank"
                    class="gallery__item"
                    title="This is a another nice caption"
                    lightbox-item-id="3"
                >
                    <img class="gallery__image" src="https://picsum.photos/602" alt="" />
                </a>
                <a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-2500.jpg"
                    data-pswp-width="1669"
                    data-pswp-height="2500"
                    target="_blank"
                    class="gallery__item"
                    title="This is a another nice caption"
                    lightbox-item-id="4"
                >
                    <img class="gallery__image" src="https://picsum.photos/603" alt="" />
                </a>
                <a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/5/img-2500.jpg"
                    data-pswp-width="1669"
                    data-pswp-height="2500"
                    target="_blank"
                    class="gallery__item"
                    title="This is a another nice caption"
                    lightbox-item-id="5"
                >
                    <img class="gallery__image" src="https://picsum.photos/604" alt="" />
                </a>
            </toujou-gallery>
        </main>
    \`;
}`,...(h=(o=s.parameters)==null?void 0:o.docs)==null?void 0:h.source}}};const _=["Gallery"];export{s as Gallery,_ as __namedExportsOrder,u as default};
