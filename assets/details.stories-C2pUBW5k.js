import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as d}from"./index-kYMsDC90.js";import"./iframe-DILOFI4D.js";import"./preload-helper-C1FmrZbK.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"toujou-details",children:"<toujou-details>"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"<toujou-details>"})," renders a default html ",e.jsx(n.code,{children:"<details>"})," element."]}),`
`,e.jsx(n.h2,{id:"markup-example",children:"Markup example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<toujou-details id="details-1" class="toujou-details" element-design="default">
    <h3 slot="summary" class="toujou-details__title">I am simple &lt;toujou-details&gt; element</h3>
    <toujou-icon class="icon toujou-details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
    <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</toujou-details>
`})}),`
`,e.jsx(n.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsx(n.p,{children:"There are some attributes that allow us to customize the button"}),`
`,e.jsx(n.h3,{id:"is-open",children:"is-open"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"is-open"})," attribute allows us to define if the element is open or closed when the page loads. This is set by choosing the desired option on the BE."]}),`
`,e.jsx(n.p,{children:"Example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<toujou-details id="details-1" class="toujou-details" is-open>
    ...
</toujou-details>
`})}),`
`,e.jsx(n.h3,{id:"element-design",children:"element-design"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"element-design"})," attribute allows us to set the design for the details element. This is set by choosing the desired option on the BE."]}),`
`,e.jsxs(n.p,{children:["Possible values are: ",e.jsx(n.code,{children:"default"}),", ",e.jsx(n.code,{children:"primary"}),", ",e.jsx(n.code,{children:"secondary"})," and ",e.jsx(n.code,{children:"inverted"})]}),`
`,e.jsx(n.p,{children:"Example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<toujou-details id="details-1" class="toujou-details" element-design="primary">
    ...
</toujou-details>
`})})]})}function a(t={}){const{wrapper:n}={...d(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}const p={title:"COMPONENTS/Accordion",parameters:{docs:{page:a}},argTypes:{elementDesign:{table:{category:"Details Settings",defaultValue:{summary:"default"}},name:"Accordion element design",description:"Set the element design for the accordion element",options:["default","primary","secondary","inverted"],control:{type:"radio"},required:!0}}},u=t=>`
        <toujou-details id="details-0" class="details" is-open="" element-design="${t.elementDesign}">
            <h3 slot="summary" class="details__title">Warum gibt es nur Online-Termine? Gibt es auch eine andere Möglichkeit, einen Termin zu vereinbaren?</h3>
            <p slot="summary" class="details__subtitle"></p>
            <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
            <div slot="content">
                <toujou-text-block class="text-block" text-block-media-position="inside-right">
                    <toujou-text-block-column class="text-block-column">
                        <div class="text-block__content">
                            <p>Aufgrund der aktuell nach wie vor herrschenden Corona-Pandemie und der Regelungen durch den Freistaat Bayern (<a href="https://www.stmgp.bayern.de/coronavirus/rechtsgrundlagen/" target="toujou-exit-warning" rel="noreferrer">https://www.stmgp.bayern.de/coronavirus/rechtsgrundlagen/</a>), ist ein normaler Betrieb der Dienststellen und Ämter der Stadt Fürth zum gegenwärtigen Zeitpunkt noch nicht möglich. Auch um die städtischen Bediensteten zu schützen, können derzeit Behördengänge nur durch vorherige Terminvereinbarungen erfolgen. Ein spontaner Besuch im Amt ist daher grundsätzlich nicht möglich. Auch können außerhalb des Onlinesystems keine Termine individuell nach Wunsch vereinbart oder verändert werden.</p>
                            <p>Viele Leistungen können aktuell schon online und bequem von zu Hause aus erledigt werden, wie zum Beispiel die Beantragung eines Führungszeugnisses, einer Meldebescheinigung oder die Zulassung von Fahrzeugen. Aufgrund gesetzlicher Vorgaben, die für alle Behörden in Deutschland gelten, sind dafür Maßnahmen zur Authentifizierung erforderlich, die der Sicherheit der persönlichen Daten dienen. Eine Authentifizierung kann beispielsweise kostenfrei per Handy-App oder über ein Lesegerät erfolgen, das für wenig Geld im Handel erhältlich ist.</p>
                        </div>
                    </toujou-text-block-column>
                </toujou-text-block>
            </div>
        </toujou-details>

        <toujou-details id="details-1" class="details" element-design="${t.elementDesign}">
            <h3 slot="summary" class="details__title">I am just another simple title</h3>
            <ul slot="summary" class="details__subtitle details__subtitle-list">
                <li class="details__subtitle-list-item">Fruit</li>
                <li class="details__subtitle-list-item">Apple</li>
                <li class="details__subtitle-list-item">Pink Lady</li>
            </ul>
            <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
            <div slot="content">
                <toujou-text-block class="text-block" text-block-media-position="inside-right">
                    <toujou-text-block-column class="text-block-column">
                        <div class="text-block__content">
                            <p>Aufgrund der aktuell nach wie vor herrschenden Corona-Pandemie und der Regelungen durch den Freistaat Bayern (<a href="https://www.stmgp.bayern.de/coronavirus/rechtsgrundlagen/" target="toujou-exit-warning" rel="noreferrer">https://www.stmgp.bayern.de/coronavirus/rechtsgrundlagen/</a>), ist ein normaler Betrieb der Dienststellen und Ämter der Stadt Fürth zum gegenwärtigen Zeitpunkt noch nicht möglich. Auch um die städtischen Bediensteten zu schützen, können derzeit Behördengänge nur durch vorherige Terminvereinbarungen erfolgen. Ein spontaner Besuch im Amt ist daher grundsätzlich nicht möglich. Auch können außerhalb des Onlinesystems keine Termine individuell nach Wunsch vereinbart oder verändert werden.</p>
                            <p>Viele Leistungen können aktuell schon online und bequem von zu Hause aus erledigt werden, wie zum Beispiel die Beantragung eines Führungszeugnisses, einer Meldebescheinigung oder die Zulassung von Fahrzeugen. Aufgrund gesetzlicher Vorgaben, die für alle Behörden in Deutschland gelten, sind dafür Maßnahmen zur Authentifizierung erforderlich, die der Sicherheit der persönlichen Daten dienen. Eine Authentifizierung kann beispielsweise kostenfrei per Handy-App oder über ein Lesegerät erfolgen, das für wenig Geld im Handel erhältlich ist.</p>
                        </div>
                    </toujou-text-block-column>
                </toujou-text-block>
            </div>
        </toujou-details>
    `,i=u.bind({});i.args={elementDesign:"default"};var r,l,o;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`(args: DetailsStoryProps) => {
  return \`
        <toujou-details id="details-0" class="details" is-open="" element-design="\${args.elementDesign}">
            <h3 slot="summary" class="details__title">Warum gibt es nur Online-Termine? Gibt es auch eine andere Möglichkeit, einen Termin zu vereinbaren?</h3>
            <p slot="summary" class="details__subtitle"></p>
            <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
            <div slot="content">
                <toujou-text-block class="text-block" text-block-media-position="inside-right">
                    <toujou-text-block-column class="text-block-column">
                        <div class="text-block__content">
                            <p>Aufgrund der aktuell nach wie vor herrschenden Corona-Pandemie und der Regelungen durch den Freistaat Bayern (<a href="https://www.stmgp.bayern.de/coronavirus/rechtsgrundlagen/" target="toujou-exit-warning" rel="noreferrer">https://www.stmgp.bayern.de/coronavirus/rechtsgrundlagen/</a>), ist ein normaler Betrieb der Dienststellen und Ämter der Stadt Fürth zum gegenwärtigen Zeitpunkt noch nicht möglich. Auch um die städtischen Bediensteten zu schützen, können derzeit Behördengänge nur durch vorherige Terminvereinbarungen erfolgen. Ein spontaner Besuch im Amt ist daher grundsätzlich nicht möglich. Auch können außerhalb des Onlinesystems keine Termine individuell nach Wunsch vereinbart oder verändert werden.</p>
                            <p>Viele Leistungen können aktuell schon online und bequem von zu Hause aus erledigt werden, wie zum Beispiel die Beantragung eines Führungszeugnisses, einer Meldebescheinigung oder die Zulassung von Fahrzeugen. Aufgrund gesetzlicher Vorgaben, die für alle Behörden in Deutschland gelten, sind dafür Maßnahmen zur Authentifizierung erforderlich, die der Sicherheit der persönlichen Daten dienen. Eine Authentifizierung kann beispielsweise kostenfrei per Handy-App oder über ein Lesegerät erfolgen, das für wenig Geld im Handel erhältlich ist.</p>
                        </div>
                    </toujou-text-block-column>
                </toujou-text-block>
            </div>
        </toujou-details>

        <toujou-details id="details-1" class="details" element-design="\${args.elementDesign}">
            <h3 slot="summary" class="details__title">I am just another simple title</h3>
            <ul slot="summary" class="details__subtitle details__subtitle-list">
                <li class="details__subtitle-list-item">Fruit</li>
                <li class="details__subtitle-list-item">Apple</li>
                <li class="details__subtitle-list-item">Pink Lady</li>
            </ul>
            <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
            <div slot="content">
                <toujou-text-block class="text-block" text-block-media-position="inside-right">
                    <toujou-text-block-column class="text-block-column">
                        <div class="text-block__content">
                            <p>Aufgrund der aktuell nach wie vor herrschenden Corona-Pandemie und der Regelungen durch den Freistaat Bayern (<a href="https://www.stmgp.bayern.de/coronavirus/rechtsgrundlagen/" target="toujou-exit-warning" rel="noreferrer">https://www.stmgp.bayern.de/coronavirus/rechtsgrundlagen/</a>), ist ein normaler Betrieb der Dienststellen und Ämter der Stadt Fürth zum gegenwärtigen Zeitpunkt noch nicht möglich. Auch um die städtischen Bediensteten zu schützen, können derzeit Behördengänge nur durch vorherige Terminvereinbarungen erfolgen. Ein spontaner Besuch im Amt ist daher grundsätzlich nicht möglich. Auch können außerhalb des Onlinesystems keine Termine individuell nach Wunsch vereinbart oder verändert werden.</p>
                            <p>Viele Leistungen können aktuell schon online und bequem von zu Hause aus erledigt werden, wie zum Beispiel die Beantragung eines Führungszeugnisses, einer Meldebescheinigung oder die Zulassung von Fahrzeugen. Aufgrund gesetzlicher Vorgaben, die für alle Behörden in Deutschland gelten, sind dafür Maßnahmen zur Authentifizierung erforderlich, die der Sicherheit der persönlichen Daten dienen. Eine Authentifizierung kann beispielsweise kostenfrei per Handy-App oder über ein Lesegerät erfolgen, das für wenig Geld im Handel erhältlich ist.</p>
                        </div>
                    </toujou-text-block-column>
                </toujou-text-block>
            </div>
        </toujou-details>
    \`;
}`,...(o=(l=i.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const b=["Details"];export{i as Details,b as __namedExportsOrder,p as default};
