const o={title:"COMPONENTS/Exit Warning"},r="${secondsRemaining}",n="${targetUrl}",s=()=>`
        <h1>EXIT WARNING</h1>
        <p>click on this <a href="https://www.google.com" target="toujou-exit-warning">link</a> to "leave the page" and open the exit warning</p>

        <exit-warning title="Sie sind dabei die Seite zu verlassen">
            <template>
                <span id="c283"></span>
                <p>Sie werden in <strong>${r} Sekunden</strong> auf die Seite <a href="${n}">${n}</a> weitergeleitet. Wenn Sie dies abbrechen wollen, schließen Sie dieses Popup.</p>
            </template>
        </exit-warning>
    `,e=s.bind({});var t,i,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
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
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const g=["ExitWarning"];export{e as ExitWarning,g as __namedExportsOrder,o as default};
