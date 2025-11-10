import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as l}from"./index-VaNW-EbP.js";import"./iframe-CbV_kBPj.js";import"./preload-helper-C1FmrZbK.js";function a(i){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"estimated-reading-time",children:"Estimated reading time"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"toujou-estimated-reading-time"})," is an element that estimated the time needed to read a document (in minutes) depending on a reading speed."]}),`
`,e.jsx(t.h2,{id:"markup-example",children:"Markup example"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`    <toujou-estimated-reading-time class="estimated-reading-time" target-selector="main">
        <span slot="label">Estimated reading time:</span>
    </toujou-estimated-reading-time>
`})}),`
`,e.jsx(t.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsxs(t.h3,{id:"class-required",children:["class ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"estimated-reading-time"})," class is required for the element to be displayed correctly"]}),`
`,e.jsxs(t.h3,{id:"target-selector-required",children:["target-selector ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"target-selector"})," attribute defines the container from which we will get the word count to estimate the reading time"]}),`
`,e.jsx(t.h3,{id:"reading-speed",children:"reading-speed"}),`
`,e.jsxs(t.p,{children:["With the ",e.jsx(t.code,{children:"reading-speed"})," attribute we can set a different reading speed."]}),`
`,e.jsx(t.p,{children:"The default is 250 words per minute"}),`
`,e.jsx(t.h3,{id:"minutes-singular-text",children:"minutes-singular-text"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"minutes-singular-text"})," attribute gives us the opportunity to set custom text for the word ",e.jsx(t.code,{children:"minute"}),"."]}),`
`,e.jsxs(t.p,{children:["Default is ",e.jsx(t.code,{children:"minute"})]}),`
`,e.jsx(t.p,{children:"Example:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`    <toujou-estimated-reading-time class="estimated-reading-time" target-selector="main" minutes-singular-text="Minuto">
        <span slot="label">Estimated reading time:</span>
    </toujou-estimated-reading-time>

renders: "Estimated reading time: 1 Minuto"
`})}),`
`,e.jsx(t.h3,{id:"minutes-plural-text",children:"minutes-plural-text"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"minutes-plural-text"})," attribute gives us the opportunity to set custom text for the word ",e.jsx(t.code,{children:"minutes"}),`
.`]}),`
`,e.jsxs(t.p,{children:["Default is ",e.jsx(t.code,{children:"minutes "}),`
Example:`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`    <toujou-estimated-reading-time class="estimated-reading-time" target-selector="main" minutes-plural-text="Minutos">
        <span slot="label">Estimated reading time:</span>
    </toujou-estimated-reading-time>

renders: "Estimated reading time: 2 Minutos"
`})}),`
`,e.jsx(t.h3,{id:"less-than-text",children:"less-than-text"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"less-than-text"})," attribute gives us the opportunity to set custom text for the word ",e.jsx(t.code,{children:"under"}),"."]}),`
`,e.jsxs(t.p,{children:["Default is ",e.jsx(t.code,{children:"under"})]}),`
`,e.jsx(t.p,{children:"Example:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`    <toujou-estimated-reading-time class="estimated-reading-time" target-selector="main" minutes-singular-text="minuto" less-than-text="Menos de">
        <span slot="label">Estimated reading time:</span>
    </toujou-estimated-reading-time>

renders: "Estimated reading time: Menos de 1 minuto"
`})})]})}function r(i={}){const{wrapper:t}={...l(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(a,{...i})}):a(i)}const g={title:"COMPONENTS/EstimatedReadingTime",parameters:{docs:{page:r}},tags:["autodocs"]},c=()=>`
        <toujou-text-block class="text-block" text-block-column-count="1">
            <toujou-estimated-reading-time class="estimated-reading-time" target-selector="body">
                <span slot="label" class="estimated-reading-time__label">
                    <toujou-icon class="icon" icon-name="clock-circle" icon-size="ms" icon-color="font"></toujou-icon>
                Estimated reading time:
                </span>
            </toujou-estimated-reading-time>
        </toujou-text-block>
        <toujou-text-block class="text-block" text-block-column-count="1">
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <h1>Left aligned H1 headline</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>

        <toujou-text-block class="text-block" text-block-column-count="1">
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <ul>
                        <li>item one</li>
                        <li>item two</li>
                        <li>item three lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                        <li>item four
                            <ul>
                                <li>item four a</li>
                                <li>item four b</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                                <li>item four c</li>
                                <li>item four d</li>
                                <li>item four e</li>
                            </ul>
                        </li>
                        <li>item five</li>
                    </ul>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>

        <toujou-text-block class="text-block" text-block-column-count="1">
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <h1>Left aligned H1 headline</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Volutpat odio facilisis mauris sit amet massa. A iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Neque sodales ut etiam sit amet nisl purus in mollis. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Amet cursus sit amet dictum sit amet justo donec enim. In tellus integer feugiat scelerisque varius. Arcu risus quis varius quam quisque id.</p>
                    <p>Vel turpis nunc eget lorem. Euismod in pellentesque massa placerat duis ultricies lacus sed turpis. Cursus eget nunc scelerisque viverra mauris in. Netus et malesuada fames ac turpis egestas integer eget aliquet. Risus feugiat in ante metus dictum at tempor. Eu facilisis sed odio morbi quis commodo odio aenean sed. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Odio facilisis mauris sit amet massa. Fusce id velit ut tortor pretium. Volutpat odio facilisis mauris sit amet massa vitae tortor condimentum. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Egestas pretium aenean pharetra magna. Urna duis convallis convallis tellus id interdum velit laoreet id. Tincidunt augue interdum velit euismod in pellentesque. Ultricies integer quis auctor elit sed vulputate mi. Massa massa ultricies mi quis. A arcu cursus vitae congue mauris. Tincidunt arcu non sodales neque sodales ut etiam sit amet.</p>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>
    `,s=c.bind({});var n,u,o;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return \`
        <toujou-text-block class="text-block" text-block-column-count="1">
            <toujou-estimated-reading-time class="estimated-reading-time" target-selector="body">
                <span slot="label" class="estimated-reading-time__label">
                    <toujou-icon class="icon" icon-name="clock-circle" icon-size="ms" icon-color="font"></toujou-icon>
                Estimated reading time:
                </span>
            </toujou-estimated-reading-time>
        </toujou-text-block>
        <toujou-text-block class="text-block" text-block-column-count="1">
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <h1>Left aligned H1 headline</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>

        <toujou-text-block class="text-block" text-block-column-count="1">
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <ul>
                        <li>item one</li>
                        <li>item two</li>
                        <li>item three lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                        <li>item four
                            <ul>
                                <li>item four a</li>
                                <li>item four b</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                                <li>item four c</li>
                                <li>item four d</li>
                                <li>item four e</li>
                            </ul>
                        </li>
                        <li>item five</li>
                    </ul>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>

        <toujou-text-block class="text-block" text-block-column-count="1">
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <h1>Left aligned H1 headline</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Volutpat odio facilisis mauris sit amet massa. A iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Neque sodales ut etiam sit amet nisl purus in mollis. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Amet cursus sit amet dictum sit amet justo donec enim. In tellus integer feugiat scelerisque varius. Arcu risus quis varius quam quisque id.</p>
                    <p>Vel turpis nunc eget lorem. Euismod in pellentesque massa placerat duis ultricies lacus sed turpis. Cursus eget nunc scelerisque viverra mauris in. Netus et malesuada fames ac turpis egestas integer eget aliquet. Risus feugiat in ante metus dictum at tempor. Eu facilisis sed odio morbi quis commodo odio aenean sed. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Odio facilisis mauris sit amet massa. Fusce id velit ut tortor pretium. Volutpat odio facilisis mauris sit amet massa vitae tortor condimentum. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Egestas pretium aenean pharetra magna. Urna duis convallis convallis tellus id interdum velit laoreet id. Tincidunt augue interdum velit euismod in pellentesque. Ultricies integer quis auctor elit sed vulputate mi. Massa massa ultricies mi quis. A arcu cursus vitae congue mauris. Tincidunt arcu non sodales neque sodales ut etiam sit amet.</p>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>
    \`;
}`,...(o=(u=s.parameters)==null?void 0:u.docs)==null?void 0:o.source}}};const h=["EstimatedReadingTime"];export{s as EstimatedReadingTime,h as __namedExportsOrder,g as default};
