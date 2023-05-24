import{T as r}from"./badgeCustomConfig-e7a687d5.js";import{j as e}from"./jsx-runtime-ac05983f.js";import{u as l}from"./index-a9a8c754.js";import"./index-e0ddb630.js";import"./_commonjsHelpers-87174ba5.js";function a(t){const i=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3"},l(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"estimated-reading-time",children:"Estimated reading time"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"toujou-estimated-reading-time"})," is an element that estimated the time needed to read a document (in minutes) depending on a reading speed."]}),`
`,e.jsx(i.h2,{id:"markup-example",children:"Markup example"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`    <toujou-estimated-reading-time class="estimated-reading-time" target-selector="main">
        <span slot="label">Estimated reading time:</span>
    </toujou-estimated-reading-time>
`})}),`
`,e.jsx(i.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsxs(i.h3,{id:"class-required",children:["class ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"estimated-reading-time"})," class is required for the element to be displayed correctly"]}),`
`,e.jsxs(i.h3,{id:"target-selector-required",children:["target-selector ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"target-selector"})," attribute defines the container from which we will get the word count to estimate the reading time"]}),`
`,e.jsx(i.h3,{id:"reading-speed",children:"reading-speed"}),`
`,e.jsxs(i.p,{children:["With the ",e.jsx(i.code,{children:"reading-speed"})," attribute we can set a different reading speed."]}),`
`,e.jsx(i.p,{children:"The default is 250 words per minute"}),`
`,e.jsx(i.h3,{id:"minutes-singular-text",children:"minutes-singular-text"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"minutes-singular-text"})," attribute gives us the opportunity to set custom text for the word ",e.jsx(i.code,{children:"minute"}),"."]}),`
`,e.jsxs(i.p,{children:["Default is ",e.jsx(i.code,{children:"minute"})]}),`
`,e.jsx(i.p,{children:"Example:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`    <toujou-estimated-reading-time class="estimated-reading-time" target-selector="main" minutes-singular-text="Minuto">
        <span slot="label">Estimated reading time:</span>
    </toujou-estimated-reading-time>

renders: "Estimated reading time: 1 Minuto"
`})}),`
`,e.jsx(i.h3,{id:"minutes-plural-text",children:"minutes-plural-text"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"minutes-plural-text"})," attribute gives us the opportunity to set custom text for the word ",e.jsx(i.code,{children:"minutes"}),`
.`]}),`
`,e.jsxs(i.p,{children:["Default is ",e.jsx(i.code,{children:"minutes "}),`
Example:`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`    <toujou-estimated-reading-time class="estimated-reading-time" target-selector="main" minutes-plural-text="Minutos">
        <span slot="label">Estimated reading time:</span>
    </toujou-estimated-reading-time>

renders: "Estimated reading time: 2 Minutos"
`})}),`
`,e.jsx(i.h3,{id:"less-than-text",children:"less-than-text"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"less-than-text"})," attribute gives us the opportunity to set custom text for the word ",e.jsx(i.code,{children:"under"}),"."]}),`
`,e.jsxs(i.p,{children:["Default is ",e.jsx(i.code,{children:"under"})]}),`
`,e.jsx(i.p,{children:"Example:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`    <toujou-estimated-reading-time class="estimated-reading-time" target-selector="main" minutes-singular-text="minuto" less-than-text="Menos de">
        <span slot="label">Estimated reading time:</span>
    </toujou-estimated-reading-time>

renders: "Estimated reading time: Menos de 1 minuto"
`})})]})}function c(t={}){const{wrapper:i}=Object.assign({},l(),t.components);return i?e.jsx(i,Object.assign({},t,{children:e.jsx(a,t)})):a(t)}const b={title:"COMPONENTS/EstimatedReadingTime",parameters:{badges:[r.DONE],docs:{page:c}}},d=()=>`
        <toujou-estimated-reading-time class="estimated-reading-time" target-selector="#root">
            <span slot="label" class="estimated-reading-time__label">
                <toujou-icon class="icon" icon-name="clock-circle" icon-size="ms" icon-color="font"></toujou-icon>
            Estimated reading time:
            </span>
        </toujou-estimated-reading-time>
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
    `,s=d.bind({});var n,u,o;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return \`
        <toujou-estimated-reading-time class="estimated-reading-time" target-selector="#root">
            <span slot="label" class="estimated-reading-time__label">
                <toujou-icon class="icon" icon-name="clock-circle" icon-size="ms" icon-color="font"></toujou-icon>
            Estimated reading time:
            </span>
        </toujou-estimated-reading-time>
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
}`,...(o=(u=s.parameters)==null?void 0:u.docs)==null?void 0:o.source}}};const j=["EstimatedReadingTime"];export{s as EstimatedReadingTime,j as __namedExportsOrder,b as default};
//# sourceMappingURL=estimated-reading-time.stories-dccb8e52.js.map
