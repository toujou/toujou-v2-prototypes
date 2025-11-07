import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as i}from"./index-C699k9hs.js";function c(t){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"toujou-blockquote",children:"<toujou-blockquote>"}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"<toujou-blockquote>"})," is a custom element that renders a blockquote element to the page."]}),`
`,e.jsx(o.h2,{id:"markup-example",children:"Markup example"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<toujou-blockquote role="figcaption" class="blockquote" blockquote-direction="\${args.direction}">
    <img slot="image" class="blockquote__image" src="https://picsum.photos/200/200" alt="quote image" />
    <blockquote slot="quote" class="blockquote__blockquote">
        <p class="blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
    </blockquote>
    <figcaption slot="author" class="blockquote__author">Jack Handey</figcaption>
</toujou-blockquote>
`})}),`
`,e.jsx(o.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsx(o.p,{children:"There are some attributes that allow us to customize the blockquote element:"}),`
`,e.jsxs(o.h3,{id:"role-required",children:["role ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"<toujou-blockquote>"})," must have the ",e.jsx(o.code,{children:"role"})," attribute. It must be set to ",e.jsx(o.code,{children:'role="figure"'}),"."]}),`
`,e.jsxs(o.h3,{id:"blockquote-direction-required",children:["blockquote-direction ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"<toujou-blockquote>"})," element has a ",e.jsx(o.code,{children:"blockquote-direction"})," attribute which defines the blockquote's content direction."]}),`
`,e.jsxs(o.p,{children:[`| value | Example |
|---|:---|
| horizontal | `,e.jsx(o.code,{children:'<toujou-blockquote role="figcaption" blockquote-direction="horizontal">'}),` |
| vertical | `,e.jsx(o.code,{children:'<toujou-blockquote role="figcaption" blockquote-direction="vertical">'})," |"]})]})}function l(t={}){const{wrapper:o}={...i(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(c,{...t})}):c(t)}export{l as M};
