import{T as i}from"./badgeCustomConfig-e7a687d5.js";import{j as o}from"./jsx-runtime-689cd42e.js";import{u as l}from"./index-8a890fec.js";import"./index-ab13a269.js";import"./_commonjsHelpers-725317a4.js";function r(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...l(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(e.h1,{id:"blockquote",children:"<blockquote>"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"<blockquote>"}),' is added when the user uses the "Blockquote" content element from the "Blockquotes" tab']}),`
`,o.jsx(e.h2,{id:"markup-example",children:"Markup example"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-html",children:`<blockquote>
    <p>This is a simple element containing a blockquote. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
</blockquote>
<p class="blockquote__author">– Your Name</p>
`})})]})}function m(t={}){const{wrapper:e}={...l(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(r,{...t})}):r(t)}const g={title:"COMPONENTS/Blockquote",parameters:{badges:[i.DONE],docs:{page:m}},tags:["autodocs"]},s=()=>`
        <blockquote>
            <p>This is a simple element containing a blockquote. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
        </blockquote>
        <p class="blockquote__author">Your Name</p>
    `,p=()=>`
        ${s()}

        <section class="chapter" background-color="primary">
            ${s()}
        </section>
    `,n=p.bind({});var c,a,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return \`
        \${blockquoteTagComponent()}

        <section class="chapter" background-color="primary">
            \${blockquoteTagComponent()}
        </section>
    \`;
}`,...(u=(a=n.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};const f=["BlockquoteTag"];export{n as BlockquoteTag,f as __namedExportsOrder,g as default};
