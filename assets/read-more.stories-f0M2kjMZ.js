import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as m}from"./index-CRzp4L3x.js";import"./iframe-D5j8fre0.js";import"./preload-helper-C1FmrZbK.js";function a(t){const i={code:"code",h1:"h1",p:"p",...m(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"toujou-read-more",children:"<toujou-read-more>"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"&lt;toujou-read-more&gt;"})," is a custom element that renders a alert element to the page."]})]})}function c(t={}){const{wrapper:i}={...m(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(a,{...t})}):a(t)}const j={title:"COMPONENTS/ReadMore",parameters:{docs:{page:c}}},n=()=>`
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet
            felis lorem. Aenean vehicula magna vitae purus dictum, sit amet suscipit
            erat malesuada. Integer ut velit nec sapien condimentum feugiat. Nam ut
            dui ac sapien ultrices suscipit. Aliquam erat volutpat. Fusce pretium orci
            sed magna dapibus, ut sodales magna tincidunt. Vestibulum volutpat risus
            non sapien luctus, non ultrices nisi hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet
            felis lorem. Aenean vehicula magna vitae purus dictum, sit amet suscipit
            erat malesuada. Integer ut velit nec sapien condimentum feugiat. Nam ut
            dui ac sapien ultrices suscipit. Aliquam erat volutpat. Fusce pretium orci
            sed magna dapibus, ut sodales magna tincidunt. Vestibulum volutpat risus
            non sapien luctus, non ultrices nisi hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet
            felis lorem. Aenean vehicula magna vitae purus dictum, sit amet suscipit
            erat malesuada. Integer ut velit nec sapien condimentum feugiat. Nam ut
            dui ac sapien ultrices suscipit. Aliquam erat volutpat. Fusce pretium orci
            sed magna dapibus, ut sodales magna tincidunt. Vestibulum volutpat risus
            non sapien luctus, non ultrices nisi hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet
            felis lorem. Aenean vehicula magna vitae purus dictum, sit amet suscipit
            erat malesuada. Integer ut velit nec sapien condimentum feugiat. Nam ut
            dui ac sapien ultrices suscipit. Aliquam erat volutpat. Fusce pretium orci
            sed magna dapibus, ut sodales magna tincidunt. Vestibulum volutpat risus
            non sapien luctus, non ultrices nisi hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet
            felis lorem. Aenean vehicula magna vitae purus dictum, sit amet suscipit
            erat malesuada. Integer ut velit nec sapien condimentum feugiat. Nam ut
            dui ac sapien ultrices suscipit. Aliquam erat volutpat. Fusce pretium orci
            sed magna dapibus, ut sodales magna tincidunt. Vestibulum volutpat risus
            non sapien luctus, non ultrices nisi hendrerit.
        </p>
    `,o=()=>`
        <button class="button" button-variant="primary" slot="open-button">Read more</button>
        <button class="button" button-variant="secondary" slot="close-button">Read less</button>
    `,d=()=>`
        <toujou-text-block class="text-block" text-block-column-count="1">
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <h3>read-more with a single &lt;p&gt; element:</h3>
                    
                    <toujou-read-more class="read-more">
                        ${n()}
                        ${o()} 
                    </toujou-read-more>
                    
                    <h3>read-more with a single &lt;p&gt; element and custom max-lines:</h3>
                    
                    <toujou-read-more class="read-more" max-lines="5">
                        ${n()}
                        ${o()}
                    </toujou-read-more>
                    
                    <h3>read-more with multiple tags</h3>
                    
                    <toujou-read-more class="read-more">
                        <h4>This is a h4</h4>
                        ${n()}
                        <h5>This is a h5</h5>
                        ${n()}
                        ${o()}
                    </toujou-read-more>
                    
                    <h3>read-more with a list</h3>
                    
                    <toujou-read-more class="read-more">
                        <ul class="list list-in-columns list-in-columns--two">
                            <li>item one</li>
                            <li>item two</li>
                            <li>item three</li>
                            <li>item four</li>
                            <li>item five</li>
                            <li>item six</li>
                            <li>item seven</li>
                            <li>item eight</li>
                        </ul>
                        ${o()}
                    </toujou-read-more>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>
    `,s=d.bind({});var u,r,l;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return \`
        <toujou-text-block class="text-block" text-block-column-count="1">
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <h3>read-more with a single &lt;p&gt; element:</h3>
                    
                    <toujou-read-more class="read-more">
                        \${renderPTag()}
                        \${renderButtons()} 
                    </toujou-read-more>
                    
                    <h3>read-more with a single &lt;p&gt; element and custom max-lines:</h3>
                    
                    <toujou-read-more class="read-more" max-lines="5">
                        \${renderPTag()}
                        \${renderButtons()}
                    </toujou-read-more>
                    
                    <h3>read-more with multiple tags</h3>
                    
                    <toujou-read-more class="read-more">
                        <h4>This is a h4</h4>
                        \${renderPTag()}
                        <h5>This is a h5</h5>
                        \${renderPTag()}
                        \${renderButtons()}
                    </toujou-read-more>
                    
                    <h3>read-more with a list</h3>
                    
                    <toujou-read-more class="read-more">
                        <ul class="list list-in-columns list-in-columns--two">
                            <li>item one</li>
                            <li>item two</li>
                            <li>item three</li>
                            <li>item four</li>
                            <li>item five</li>
                            <li>item six</li>
                            <li>item seven</li>
                            <li>item eight</li>
                        </ul>
                        \${renderButtons()}
                    </toujou-read-more>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>
    \`;
}`,...(l=(r=s.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const v=["ReadMore"];export{s as ReadMore,v as __namedExportsOrder,j as default};
