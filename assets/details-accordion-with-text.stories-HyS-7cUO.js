import{M as u}from"./details-accordion.docs-DpOti-5X.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-wUAnol_h.js";import"./iframe-CDgTqnN9.js";import"./preload-helper-C1FmrZbK.js";const g={title:"COMPONENTS/Accordion",parameters:{docs:{page:u}},argTypes:{columnsLayout:{table:{category:"Grid settings",defaultValue:{summary:"third-right"}},name:"Two columns layout",description:"Define layout of the grid columns",options:["third-right","third-left"],control:{type:"radio"},required:!0},elementDesign:{table:{category:"Details Settings",defaultValue:{summary:"default"}},name:"Accordion element design",description:"Set the element design for the accordion element",options:["default","primary","secondary","inverted"],control:{type:"radio"},required:!0}},tags:["autodocs"]};function o(i){return`
        <toujou-details-accordion class="details-accordion" single-expand-mode>
            <toujou-details id="details-1" class="details" is-open element-design="${i.elementDesign}">
                <h3 slot="summary" class="details__title">This is the summary</h3>
                <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                <div slot="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </toujou-details>

            <toujou-details id="details-2" class="details" element-design="${i.elementDesign}">
                <h3 slot="summary" class="details__title">I am just another simple title</h3>
                <p slot="summary" class="details__subtitle">I am a subtitle which complements the title</p>
                <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                <div slot="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </toujou-details>

            <toujou-details id="details-3" class="details" element-design="${i.elementDesign}">
                <h3 slot="summary" class="details__title">I am just another simple title</h3>
                <ul slot="summary" class="details__subtitle details__subtitle-list">
                    <li class="details__subtitle-list-item">Fruit</li>
                    <li class="details__subtitle-list-item">Apple</li>
                    <li class="details__subtitle-list-item">Pink Lady</li>
                </ul>
                <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                <div slot="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </toujou-details>

            <toujou-details id="details-4" class="details" element-design="${i.elementDesign}">
                <h3 slot="summary" class="details__title">This is the summary</h3>
                <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                <div slot="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </toujou-details>
        </toujou-details-accordion>
    `}function t(){return`
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    `}const l=i=>`
        <main>
            <toujou-grid class="grid" number-of-columns="2" grid-type="default" column-layout="${i.columnsLayout}">
                <toujou-grid-column class="grid-column">
                    ${i.columnsLayout==="third-right"?o(i):t()}
                </toujou-grid-column>
                <toujou-grid-column class="grid-column">
                    ${i.columnsLayout==="third-right"?t():o(i)}
                </toujou-grid-column>
            </toujou-grid>
        </main>
    `,e=l.bind({});e.args={columnsLayout:"third-right",elementDesign:"default"};var s,a,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`(args: DetailsAccordionStoryProps) => {
  return \`
        <main>
            <toujou-grid class="grid" number-of-columns="2" grid-type="default" column-layout="\${args.columnsLayout}">
                <toujou-grid-column class="grid-column">
                    \${args.columnsLayout === 'third-right' ? renderAccordion(args) : renderText()}
                </toujou-grid-column>
                <toujou-grid-column class="grid-column">
                    \${args.columnsLayout === 'third-right' ? renderText() : renderAccordion(args)}
                </toujou-grid-column>
            </toujou-grid>
        </main>
    \`;
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const h=["DetailsAccordionWithText"];export{e as DetailsAccordionWithText,h as __namedExportsOrder,g as default};
