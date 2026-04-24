const l={title:"COMPONENTS/HTML",parameters:{layout:"fullwidth"},argTypes:{isFullwidth:{table:{category:"html container Settings",defaultValue:{summary:"false"}},name:"Is fullwidth",description:"Toggle between fullwidth and content width",control:{type:"boolean"},required:!0}}},r=o=>`
        <main>
            <toujou-html-container class="html-container" ${o.isFullwidth?"fullwidth":""}>
                <div style="border: 3px dashed lightcoral; padding: 2rem;">
                    <h1>Hello</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-html-container>
        </main>
    `,e=r.bind({});e.args={isFullwidth:!1};var t,i,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`(args: HtmlStoryProps) => {
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
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const n=["HTML"];export{e as HTML,n as __namedExportsOrder,l as default};
