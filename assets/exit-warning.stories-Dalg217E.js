import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as l}from"./index-CcmLKVFS.js";import"./iframe-B-FpRVsO.js";import"./preload-helper-C1FmrZbK.js";function a(t){const n={code:"code",h1:"h1",p:"p",pre:"pre",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"exit-warning",children:"Exit warning"}),`
`,e.jsxs(n.p,{children:["The link must have the ",e.jsx(n.code,{children:"toujou-exit-warning"})," attribute:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`    <a class="link" target="toujou-exit-warning" href="https://google.com">Link</a>
`})}),`
`,e.jsxs(n.p,{children:["and we also need to add the ",e.jsx(n.code,{children:"exit warning"})," element to the page"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<exit-warning title="Sie sind dabei die Seite zu verlassen">
    <template>
        <span id="c283"></span>
        <p>Sie werden in <strong>\${secondsRemaining} Sekunden</strong> auf die Seite <a href="\${targetUrl}">\${targetUrl}</a> weitergeleitet. Wenn Sie dies abbrechen wollen, schließen Sie dieses Popup.</p>
    </template>
</exit-warning>
`})}),`
`,e.jsxs(n.p,{children:["The variables (",e.jsx(n.code,{children:"$secondsRemaining}"})," and ",e.jsx(n.code,{children:"${targetURL}"}),") need to be rendered like that so they are then filled by the webcomponent"]})]})}function c(t={}){const{wrapper:n}={...l(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}const w={title:"COMPONENTS/Exit Warning",parameters:{docs:{page:c}},tags:["autodocs"]},g="${secondsRemaining}",r="${targetUrl}",p=()=>`
        <h1>EXIT WARNING</h1>
        <p>click on this <a href="https://www.google.com" target="toujou-exit-warning">link</a> to "leave the page" and open the exit warning</p>

        <exit-warning title="Sie sind dabei die Seite zu verlassen">
            <template>
                <span id="c283"></span>
                <p>Sie werden in <strong>${g} Sekunden</strong> auf die Seite <a href="${r}">${r}</a> weitergeleitet. Wenn Sie dies abbrechen wollen, schließen Sie dieses Popup.</p>
            </template>
        </exit-warning>
    `,i=p.bind({});var s,o,d;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return \`
        <h1>EXIT WARNING</h1>
        <p>click on this <a href="https://www.google.com" target="toujou-exit-warning">link</a> to "leave the page" and open the exit warning</p>

        <exit-warning title="Sie sind dabei die Seite zu verlassen">
            <template>
                <span id="c283"></span>
                <p>Sie werden in <strong>\${secondsRemainingVar} Sekunden</strong> auf die Seite <a href="\${targetUrlVar}">\${targetUrlVar}</a> weitergeleitet. Wenn Sie dies abbrechen wollen, schließen Sie dieses Popup.</p>
            </template>
        </exit-warning>
    \`;
}`,...(d=(o=i.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const S=["ExitWarning"];export{i as ExitWarning,S as __namedExportsOrder,w as default};
