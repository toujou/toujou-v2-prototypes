import{T as p}from"./badgeCustomConfig-e7a687d5.js";import{j as t}from"./jsx-runtime-ac05983f.js";import{u as h}from"./index-a9a8c754.js";import"./photoswipe-lightbox-creator-46720809.js";import"./index-e0ddb630.js";import"./_commonjsHelpers-87174ba5.js";function a(i){const e=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},h(),i.components);return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"gallery",children:"Gallery"}),`
`,t.jsx(e.p,{children:"This element displays a gallery and a lightbox on the page"}),`
`,t.jsxs(e.p,{children:["We use the ",t.jsx(e.a,{href:"https://photoswipe.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"PhotoSwipe"})]}),`
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
`]})]})}function r(i={}){const{wrapper:e}=Object.assign({},h(),i.components);return e?t.jsx(e,Object.assign({},i,{children:t.jsx(a,i)})):a(i)}const j={title:"COMPONENTS/Media",parameters:{badges:[p.DONE],docs:{page:r}},argTypes:{}},c=()=>`
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
    `,s=c.bind({});var l,o,n;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return \`
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
    \`;
}`,...(n=(o=s.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const x=["Gallery"];export{s as Gallery,x as __namedExportsOrder,j as default};
//# sourceMappingURL=gallery.stories-1b7bb867.js.map
