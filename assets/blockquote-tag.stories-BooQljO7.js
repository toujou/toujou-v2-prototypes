import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as l}from"./index-D_Kao2mr.js";import"./iframe-B7QF7yTA.js";import"./preload-helper-C1FmrZbK.js";function r(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...l(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(e.h1,{id:"blockquote",children:"<blockquote>"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"<blockquote>"}),' is added when the user uses the "Blockquote" content element from the "Blockquotes" tab']}),`
`,o.jsx(e.h2,{id:"markup-example",children:"Markup example"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-html",children:`<blockquote>
    <p>This is a simple element containing a blockquote. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
</blockquote>
<p class="blockquote__author">– Your Name</p>
`})})]})}function i(t={}){const{wrapper:e}={...l(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(r,{...t})}):r(t)}const q={title:"COMPONENTS/Blockquote",parameters:{docs:{page:i}},tags:["autodocs"]},s=()=>`
        <blockquote>
            <p>This is a simple element containing a blockquote. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
        </blockquote>
        <p class="blockquote__author">Your Name</p>
    `,m=()=>`
        <main>
            ${s()}

            <section class="chapter" background-color="primary">
                ${s()}
            </section>
        </main>
    `,n=m.bind({});var c,a,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return \`
        <main>
            \${blockquoteTagComponent()}

            <section class="chapter" background-color="primary">
                \${blockquoteTagComponent()}
            </section>
        </main>
    \`;
}`,...(u=(a=n.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};const b=["BlockquoteTag"];export{n as BlockquoteTag,b as __namedExportsOrder,q as default};
