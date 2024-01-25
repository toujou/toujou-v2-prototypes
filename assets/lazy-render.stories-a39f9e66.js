import{T as c}from"./badgeCustomConfig-e7a687d5.js";import{j as e}from"./jsx-runtime-ccada58e.js";import{u as p}from"./index-4fb8b842.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";function o(n){const t=Object.assign({p:"p",code:"code"},p(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.p,{children:"#lazy render"}),`
`,e.jsxs(t.p,{children:["User the ",e.jsx(t.code,{children:"toujou-lazy-render"})," web-component"]})]})}function d(n={}){const{wrapper:t}=Object.assign({},p(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(o,n)})):o(n)}const z={title:"COMPONENTS/Lazy Render",parameters:{badges:[c.DONE],docs:{page:d},layout:"fullscreen"},tags:["autodocs"]},l=()=>`
        <h1>Lazy render</h1>
        <p>This p element has been placed normally in the DOM</p>
        <toujou-lazy-render>
            <template>
                <p>This p element comes from inside the toujou-lazy-render element.</p>
            </template>
        </toujou-lazy-render>
    `,r=l.bind({});var s,a,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return \`
        <h1>Lazy render</h1>
        <p>This p element has been placed normally in the DOM</p>
        <toujou-lazy-render>
            <template>
                <p>This p element comes from inside the toujou-lazy-render element.</p>
            </template>
        </toujou-lazy-render>
    \`;
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const x=["LazyRender"];export{r as LazyRender,x as __namedExportsOrder,z as default};
//# sourceMappingURL=lazy-render.stories-a39f9e66.js.map
