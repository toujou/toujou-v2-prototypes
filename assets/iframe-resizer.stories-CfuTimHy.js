const s={title:"COMPONENTS/IframeResizer"},o=()=>`
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
    `,e=o.bind({});var r,i,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(t=(i=e.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};const a=["IframeResizer"];export{e as IframeResizer,a as __namedExportsOrder,s as default};
