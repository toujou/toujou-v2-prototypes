const o={title:"COMPONENTS/Lazy Render",parameters:{layout:"fullscreen"}},a=()=>`
        <h1>Lazy render</h1>
        <p>This p element has been placed normally in the DOM</p>
        <toujou-lazy-render>
            <template>
                <p>This p element comes from inside the toujou-lazy-render element.</p>
            </template>
        </toujou-lazy-render>
    `,e=a.bind({});var r,n,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  return \`
        <h1>Lazy render</h1>
        <p>This p element has been placed normally in the DOM</p>
        <toujou-lazy-render>
            <template>
                <p>This p element comes from inside the toujou-lazy-render element.</p>
            </template>
        </toujou-lazy-render>
    \`;
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const l=["LazyRender"];export{e as LazyRender,l as __namedExportsOrder,o as default};
