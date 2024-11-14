import{T as l}from"./badgeCustomConfig-DUXiHpL4.js";import{j as o}from"./jsx-runtime-DPda6Ybg.js";import{useMDXComponents as i}from"./index-4_AlzpT7.js";import"./index-DhrokLn_.js";import"./_commonjsHelpers-Cpj98o6Y.js";function r(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(e.h1,{id:"blockquote",children:"<blockquote>"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"<blockquote>"}),' is added when the user uses the "Blockquote" content element from the "Blockquotes" tab']}),`
`,o.jsx(e.h2,{id:"markup-example",children:"Markup example"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-html",children:`<blockquote>
    <p>This is a simple element containing a blockquote. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
</blockquote>
<p class="blockquote__author">– Your Name</p>
`})})]})}function m(t={}){const{wrapper:e}={...i(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(r,{...t})}):r(t)}const g={title:"COMPONENTS/Blockquote",parameters:{badges:[l.DONE],docs:{page:m}},tags:["autodocs"]},s=()=>`
        <blockquote>
            <p>This is a simple element containing a blockquote. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
        </blockquote>
        <p class="blockquote__author">Your Name</p>
    `,p=()=>`
        <main>
            ${s()}

            <section class="chapter" background-color="primary">
                ${s()}
            </section>
        </main>
    `,n=p.bind({});var a,c,u;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return \`
        <main>
            \${blockquoteTagComponent()}

            <section class="chapter" background-color="primary">
                \${blockquoteTagComponent()}
            </section>
        </main>
    \`;
}`,...(u=(c=n.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const f=["BlockquoteTag"];export{n as BlockquoteTag,f as __namedExportsOrder,g as default};
