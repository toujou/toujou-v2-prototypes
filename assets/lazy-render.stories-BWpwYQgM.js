import{T as d}from"./badgeCustomConfig-DUXiHpL4.js";import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as p}from"./index-BcJeOPUZ.js";import"./index-B6tQ6Rz7.js";import"./_commonjsHelpers-Cpj98o6Y.js";function o(n){const r={code:"code",p:"p",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r.p,{children:"#lazy render"}),`
`,e.jsxs(r.p,{children:["User the ",e.jsx(r.code,{children:"toujou-lazy-render"})," web-component"]})]})}function l(n={}){const{wrapper:r}={...p(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(o,{...n})}):o(n)}const z={title:"COMPONENTS/Lazy Render",parameters:{badges:[d.DONE],docs:{page:l},layout:"fullscreen"},tags:["autodocs"]},c=()=>`
        <h1>Lazy render</h1>
        <p>This p element has been placed normally in the DOM</p>
        <toujou-lazy-render>
            <template>
                <p>This p element comes from inside the toujou-lazy-render element.</p>
            </template>
        </toujou-lazy-render>
    `,t=c.bind({});var a,s,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return \`
        <h1>Lazy render</h1>
        <p>This p element has been placed normally in the DOM</p>
        <toujou-lazy-render>
            <template>
                <p>This p element comes from inside the toujou-lazy-render element.</p>
            </template>
        </toujou-lazy-render>
    \`;
}`,...(m=(s=t.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const x=["LazyRender"];export{t as LazyRender,x as __namedExportsOrder,z as default};
