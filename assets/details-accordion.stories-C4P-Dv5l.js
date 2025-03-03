import{T as a}from"./badgeCustomConfig-DUXiHpL4.js";import{M as o}from"./details-accordion.docs--zKgnySI.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-BcJeOPUZ.js";import"./index-B6tQ6Rz7.js";import"./_commonjsHelpers-Cpj98o6Y.js";const g={title:"COMPONENTS/Accordion",parameters:{badges:[a.DONE],docs:{page:o}},argTypes:{singleExpandMode:{table:{category:"Details accordion Settings",defaultValue:{summary:"false"}},name:"Single expand mode",description:"Allow just one accordion items to be open at a time",control:{type:"boolean"},defaultValue:["false"],required:!0},expandedItem:{table:{category:"Details accordion Settings",defaultValue:{summary:"first"}},name:"Expanded items",description:"Define which accordion items are open when the page loads",options:["none","first","all"],control:{type:"radio"},defaultValue:["first"],required:!0},elementDesign:{table:{category:"Details Settings",defaultValue:{summary:"default"}},name:"Accordion element design",description:"Set the element design for the accordion element",options:["default","primary","secondary","inverted"],control:{type:"radio"},defaultValue:["default"],required:!0}},tags:["autodocs"]},r=e=>`
        <main>
            <toujou-details-accordion class="details-accordion" ${e.singleExpandMode?"single-expand-mode":""}>
                <toujou-details id="details-1" class="details" ${e.expandedItem==="first"||e.expandedItem==="all"?"is-open":""} element-design="${e.elementDesign}">
                    <h3 slot="summary" class="details__title">This is the summary</h3>
                    <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                    <div slot="content">
                        <toujou-text-block class="text-block" text-block-media-position="inside-right">
                            <toujou-text-block-column class="text-block-column">
                                <figure class="text-block__figure">
                                    <img class="text-block__image" src="https://picsum.photos/800/800">
                                </figure>
                                <div class="text-block__content">
                                    <h2>Headline</h2>
                                    <p>Id neque aliquam vestibulum morbi blandit. Ornare quam viverra orci sagittis eu volutpat odio facilisis. Mattis enim ut tellus elementum sagittis vitae et. Nibh praesent tristique magna sit amet purus gravida quis. Senectus et netus et malesuada fames ac turpis. A arcu cursus vitae congue mauris rhoncus aenean vel. Pulvinar neque laoreet suspendisse interdum consectetur libero id. Nec nam aliquam sem et tortor consequat id porta. Sit amet nisl suscipit adipiscing bibendum est. Congue mauris rhoncus aenean vel elit. Amet dictum sit amet justo donec enim. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi. Amet est placerat in egestas erat imperdiet sed euismod. In nibh mauris cursus mattis molestie a iaculis at.</p>
                                </div>
                            </toujou-text-block-column>
                        </toujou-text-block>
                    </div>
                </toujou-details>

                <toujou-details id="details-2" class="details" ${e.expandedItem==="all"?"is-open":""} element-design="${e.elementDesign}">
                    <h3 slot="summary" class="details__title">Text with image</h3>
                    <p slot="summary" class="details__subtitle">I am a subtitle which complements the title</p>
                    <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>

                    <div slot="content">
                        <toujou-text-block class="text-block" text-block-media-position="inside-right">
                            <toujou-text-block-column class="text-block-column">
                                <figure class="text-block__figure">
                                    <img class="text-block__image" src="https://picsum.photos/800/800">
                                </figure>
                                <div class="text-block__content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vulputate ut pharetra sit amet. A pellentesque sit amet porttitor eget. Feugiat nisl pretium fusce id velit. Justo donec enim diam vulputate ut pharetra sit. Enim diam vulputate ut pharetra sit amet aliquam. Viverra nam libero justo laoreet sit amet cursus. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Magna etiam tempor orci eu lobortis elementum. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Massa vitae tortor condimentum lacinia. Sed risus pretium quam vulputate dignissim. Et ultrices neque ornare aenean euismod elementum nisi.</p>
                                </div>
                            </toujou-text-block-column>
                        </toujou-text-block>
                    </div>
                </toujou-details>

                <toujou-details id="details-3" class="details" ${e.expandedItem==="all"?"is-open":""} element-design="${e.elementDesign}">
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

                <toujou-details id="details-4" class="details" ${e.expandedItem==="all"?"is-open":""} element-design="${e.elementDesign}">
                    <h3 slot="summary" class="details__title">This is the summary</h3>
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
            </toujou-details-accordion>
        </main>
    `,t=r.bind({});t.args={singleExpandMode:!1,expandedItem:"first",elementDesign:"default"};var i,n,s;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`(args: DetailsAccordionStoryProps) => {
  return \`
        <main>
            <toujou-details-accordion class="details-accordion" \${args.singleExpandMode ? 'single-expand-mode' : ''}>
                <toujou-details id="details-1" class="details" \${args.expandedItem === 'first' || args.expandedItem === 'all' ? 'is-open' : ''} element-design="\${args.elementDesign}">
                    <h3 slot="summary" class="details__title">This is the summary</h3>
                    <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                    <div slot="content">
                        <toujou-text-block class="text-block" text-block-media-position="inside-right">
                            <toujou-text-block-column class="text-block-column">
                                <figure class="text-block__figure">
                                    <img class="text-block__image" src="https://picsum.photos/800/800">
                                </figure>
                                <div class="text-block__content">
                                    <h2>Headline</h2>
                                    <p>Id neque aliquam vestibulum morbi blandit. Ornare quam viverra orci sagittis eu volutpat odio facilisis. Mattis enim ut tellus elementum sagittis vitae et. Nibh praesent tristique magna sit amet purus gravida quis. Senectus et netus et malesuada fames ac turpis. A arcu cursus vitae congue mauris rhoncus aenean vel. Pulvinar neque laoreet suspendisse interdum consectetur libero id. Nec nam aliquam sem et tortor consequat id porta. Sit amet nisl suscipit adipiscing bibendum est. Congue mauris rhoncus aenean vel elit. Amet dictum sit amet justo donec enim. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi. Amet est placerat in egestas erat imperdiet sed euismod. In nibh mauris cursus mattis molestie a iaculis at.</p>
                                </div>
                            </toujou-text-block-column>
                        </toujou-text-block>
                    </div>
                </toujou-details>

                <toujou-details id="details-2" class="details" \${args.expandedItem === 'all' ? 'is-open' : ''} element-design="\${args.elementDesign}">
                    <h3 slot="summary" class="details__title">Text with image</h3>
                    <p slot="summary" class="details__subtitle">I am a subtitle which complements the title</p>
                    <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>

                    <div slot="content">
                        <toujou-text-block class="text-block" text-block-media-position="inside-right">
                            <toujou-text-block-column class="text-block-column">
                                <figure class="text-block__figure">
                                    <img class="text-block__image" src="https://picsum.photos/800/800">
                                </figure>
                                <div class="text-block__content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vulputate ut pharetra sit amet. A pellentesque sit amet porttitor eget. Feugiat nisl pretium fusce id velit. Justo donec enim diam vulputate ut pharetra sit. Enim diam vulputate ut pharetra sit amet aliquam. Viverra nam libero justo laoreet sit amet cursus. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Magna etiam tempor orci eu lobortis elementum. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Massa vitae tortor condimentum lacinia. Sed risus pretium quam vulputate dignissim. Et ultrices neque ornare aenean euismod elementum nisi.</p>
                                </div>
                            </toujou-text-block-column>
                        </toujou-text-block>
                    </div>
                </toujou-details>

                <toujou-details id="details-3" class="details" \${args.expandedItem === 'all' ? 'is-open' : ''} element-design="\${args.elementDesign}">
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

                <toujou-details id="details-4" class="details" \${args.expandedItem === 'all' ? 'is-open' : ''} element-design="\${args.elementDesign}">
                    <h3 slot="summary" class="details__title">This is the summary</h3>
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
            </toujou-details-accordion>
        </main>
    \`;
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const p=["DetailsAccordion"];export{t as DetailsAccordion,p as __namedExportsOrder,g as default};
