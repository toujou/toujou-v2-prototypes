import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as n}from"./index-D9wuXIGf.js";import"./iframe-DfUGg3_U.js";import"./preload-helper-C1FmrZbK.js";function o(r){const i={code:"code",h1:"h1",p:"p",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"toujou-iframe-resizer",children:"<toujou-iframe-resizer>"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"<toujou-iframe-resizer>"})," is a wrapper for Iframes to help us resize the iFrame to fit the content"]})]})}function f(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(o,{...r})}):o(r)}const p={title:"COMPONENTS/IframeResizer",parameters:{docs:{page:f}},tags:["autodocs"]},c=()=>`
        <h1>toujou-iframe-resizer</h1>
        <p>Test if the iframes grows to correct size after some mock content is loaded. Content will load in 3s.</p>

        <h4><span style="color: tomato;">Without</span> the toujou-iframe-resizer</h4>
        <iframe
            src='/iframe.html?viewMode=story&id=components-iframeresizer--iframe-resizer-mock-iframe'
            width="100%"
            height="100%"
            scrolling="yes"
            style="border: 0;"
            title="iframe without resizer">
        </iframe>

        <br>
        <br>
        <br>

        <h4><span style="color: mediumseagreen;">With</span> the toujou-iframe-resizer</h4>
        <toujou-iframe-resizer>
             <iframe
                src='/iframe.html?viewMode=story&id=components-iframeresizer--iframe-resizer-mock-iframe'
                width="100%"
                height="100%"
                scrolling="yes"
                style="border: 0;"
                title="iframe with resizer">
            </iframe>
        </toujou-iframe-resizer>
    `,t=c.bind({});var s,a,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return \`
        <h1>toujou-iframe-resizer</h1>
        <p>Test if the iframes grows to correct size after some mock content is loaded. Content will load in 3s.</p>

        <h4><span style="color: tomato;">Without</span> the toujou-iframe-resizer</h4>
        <iframe
            src='/iframe.html?viewMode=story&id=components-iframeresizer--iframe-resizer-mock-iframe'
            width="100%"
            height="100%"
            scrolling="yes"
            style="border: 0;"
            title="iframe without resizer">
        </iframe>

        <br>
        <br>
        <br>

        <h4><span style="color: mediumseagreen;">With</span> the toujou-iframe-resizer</h4>
        <toujou-iframe-resizer>
             <iframe
                src='/iframe.html?viewMode=story&id=components-iframeresizer--iframe-resizer-mock-iframe'
                width="100%"
                height="100%"
                scrolling="yes"
                style="border: 0;"
                title="iframe with resizer">
            </iframe>
        </toujou-iframe-resizer>
    \`;
}`,...(m=(a=t.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const z=["IframeResizer"];export{t as IframeResizer,z as __namedExportsOrder,p as default};
