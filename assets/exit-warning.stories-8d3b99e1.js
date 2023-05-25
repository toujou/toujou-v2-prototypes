import{T as l}from"./badgeCustomConfig-e7a687d5.js";import{j as e}from"./jsx-runtime-ac05983f.js";import{u as c}from"./index-a9a8c754.js";import"./index-e0ddb630.js";import"./_commonjsHelpers-87174ba5.js";function a(t){const n=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},c(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"exit-warning",children:"Exit warning"}),`
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
`,e.jsxs(n.p,{children:["The variables (",e.jsx(n.code,{children:"$secondsRemaining}"})," and ",e.jsx(n.code,{children:"${targetURL}"}),") need to be rendered like that so they are then filled by the webcomponent"]})]})}function g(t={}){const{wrapper:n}=Object.assign({},c(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(a,t)})):a(t)}const S={title:"COMPONENTS/Exit Warning",parameters:{badges:[l.DONE],docs:{page:g}},tags:["autodocs"]},p="${secondsRemaining}",r="${targetUrl}",h=()=>`
        <h1>EXIT WARNING</h1>
        <p>click on this <a href="https://www.google.com" target="toujou-exit-warning">link</a> to "leave the page" and open the exit warning</p>
        
        <exit-warning title="Sie sind dabei die Seite zu verlassen">
            <template>
                <span id="c283"></span>
                <p>Sie werden in <strong>${p} Sekunden</strong> auf die Seite <a href="${r}">${r}</a> weitergeleitet. Wenn Sie dies abbrechen wollen, schließen Sie dieses Popup.</p>
            </template>
        </exit-warning>
    `,i=h.bind({});var s,o,d;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(d=(o=i.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const b=["ExitWarning"];export{i as ExitWarning,b as __namedExportsOrder,S as default};
//# sourceMappingURL=exit-warning.stories-8d3b99e1.js.map
