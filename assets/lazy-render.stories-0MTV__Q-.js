import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as p}from"./index-CuTSUezd.js";import"./iframe-DEiyT2TL.js";import"./preload-helper-C1FmrZbK.js";function o(n){const r={code:"code",p:"p",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r.p,{children:"#lazy render"}),`
`,e.jsxs(r.p,{children:["User the ",e.jsx(r.code,{children:"toujou-lazy-render"})," web-component"]})]})}function m(n={}){const{wrapper:r}={...p(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(o,{...n})}):o(n)}const y={title:"COMPONENTS/Lazy Render",parameters:{docs:{page:m},layout:"fullscreen"}},d=()=>`
        <h1>Lazy render</h1>
        <p>This p element has been placed normally in the DOM</p>
        <toujou-lazy-render>
            <template>
                <p>This p element comes from inside the toujou-lazy-render element.</p>
            </template>
        </toujou-lazy-render>
    `,t=d.bind({});var a,s,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return \`
        <h1>Lazy render</h1>
        <p>This p element has been placed normally in the DOM</p>
        <toujou-lazy-render>
            <template>
                <p>This p element comes from inside the toujou-lazy-render element.</p>
            </template>
        </toujou-lazy-render>
    \`;
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const j=["LazyRender"];export{t as LazyRender,j as __namedExportsOrder,y as default};
