import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as c}from"./index-CRzp4L3x.js";import"./iframe-D5j8fre0.js";import"./preload-helper-C1FmrZbK.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"blockquote",children:"<blockquote>"}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"<blockquote>"}),' is added when the user uses the "Blockquote" content element from the "Blockquotes" tab']}),`
`,e.jsx(o.h2,{id:"markup-example",children:"Markup example"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<blockquote>
    <p>This is a simple element containing a blockquote. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
</blockquote>
<p class="blockquote__author">– Your Name</p>
`})})]})}function l(t={}){const{wrapper:o}={...c(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}const b={title:"COMPONENTS/Blockquote",parameters:{docs:{page:l}},tags:["autodocs"]},a=()=>`
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <blockquote>
            <p>This is a simple element containing a blockquote. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
        </blockquote>
        <p class="blockquote__author">Your Name</p>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
         <blockquote>
            <p>This is a simple element containing a blockquote. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
        </blockquote>
    
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    
    `,m=()=>`
        <main>
            ${a()}

            <section class="chapter" background-color="primary">
                ${a()}
            </section>
        </main>
    `,i=m.bind({});var r,u,s;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  return \`
        <main>
            \${blockquoteTagComponent()}

            <section class="chapter" background-color="primary">
                \${blockquoteTagComponent()}
            </section>
        </main>
    \`;
}`,...(s=(u=i.parameters)==null?void 0:u.docs)==null?void 0:s.source}}};const f=["BlockquoteTag"];export{i as BlockquoteTag,f as __namedExportsOrder,b as default};
