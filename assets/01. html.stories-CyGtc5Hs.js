import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as s}from"./index-VaNW-EbP.js";import"./iframe-CbV_kBPj.js";import"./preload-helper-C1FmrZbK.js";function o(i){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"html",children:"HTML"}),`
`,e.jsx(t.p,{children:"The HTML element allows users to add their own custom html to the page. You can add it to the page in the BE."}),`
`,e.jsx(t.h2,{id:"markup-example",children:"Markup example"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<toujou-html-container class="html-container" fullwidth>
    <!-- Here goes the custom html -->
</toujou-html-container>
`})}),`
`,e.jsx(t.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsx(t.h3,{id:"fullwidth",children:"fullwidth"}),`
`,e.jsx(t.p,{children:"There are two different HTML content elements widths that we can use:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"content width"}),`
`,e.jsx(t.li,{children:"fullwidth"}),`
`]}),`
`,e.jsxs(t.p,{children:["If the users select the fullwidth HTML content element, then it must have the ",e.jsx(t.code,{children:"fullwidth"})," attribute"]})]})}function u(i={}){const{wrapper:t}={...s(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(o,{...i})}):o(i)}const x={title:"COMPONENTS/HTML",parameters:{docs:{page:u},layout:"fullwidth"},argTypes:{isFullwidth:{table:{category:"html container Settings",defaultValue:{summary:"false"}},name:"Is fullwidth",description:"Toggle between fullwidth and content width",control:{type:"boolean"},required:!0}}},d=i=>`
        <main>
            <toujou-html-container class="html-container" ${i.isFullwidth?"fullwidth":""}>
                <div style="border: 3px dashed lightcoral; padding: 2rem;">
                    <h1>Hello</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-html-container>
        </main>
    `,n=d.bind({});n.args={isFullwidth:!1};var l,r,a;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`(args: HtmlStoryProps) => {
  return \`
        <main>
            <toujou-html-container class="html-container" \${args.isFullwidth ? 'fullwidth' : ''}>
                <div style="border: 3px dashed lightcoral; padding: 2rem;">
                    <h1>Hello</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-html-container>
        </main>
    \`;
}`,...(a=(r=n.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const f=["HTML"];export{n as HTML,f as __namedExportsOrder,x as default};
