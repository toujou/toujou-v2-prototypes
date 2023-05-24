import{T as u}from"./badgeCustomConfig-e7a687d5.js";import{M as l}from"./details-accordion.docs-62228131.js";import"./jsx-runtime-ac05983f.js";import"./index-e0ddb630.js";import"./_commonjsHelpers-87174ba5.js";import"./index-a9a8c754.js";const q={title:"COMPONENTS/Accordion",parameters:{badges:[u.DONE],docs:{page:l}},argTypes:{columnsLayout:{table:{category:"Grid settings",defaultValue:{summary:"third-right"}},name:"Two columns layout",description:"Define layout of the grid columns",options:["third-right","third-left"],control:{type:"radio"},defaultValue:["third-right"],required:!0},elementDesign:{table:{category:"Details Settings",defaultValue:{summary:"default"}},name:"Accordion element design",description:"Set the element design for the accordion element",options:["default","primary","secondary","inverted"],control:{type:"radio"},defaultValue:["default"],required:!0}}};function t(i){return`
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
    `}function o(){return`
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    `}const d=i=>`
        <toujou-grid class="grid" number-of-columns="2" grid-type="default" column-layout="${i.columnsLayout}">
            <toujou-grid-column class="grid-column">
                ${i.columnsLayout==="third-right"?t(i):o()}
            </toujou-grid-column>
            <toujou-grid-column class="grid-column">
                ${i.columnsLayout==="third-right"?o():t(i)}
            </toujou-grid-column>
        </toujou-grid>
    `,e=d.bind({});e.args={columnsLayout:"third-right",elementDesign:"default"};var s,a,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`(args: DetailsAccordionStoryProps) => {
  return \`
        <toujou-grid class="grid" number-of-columns="2" grid-type="default" column-layout="\${args.columnsLayout}">
            <toujou-grid-column class="grid-column">
                \${args.columnsLayout === 'third-right' ? renderAccordion(args) : renderText()}
            </toujou-grid-column>
            <toujou-grid-column class="grid-column">
                \${args.columnsLayout === 'third-right' ? renderText() : renderAccordion(args)}
            </toujou-grid-column>
        </toujou-grid>
    \`;
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const y=["DetailsAccordionWithText"];export{e as DetailsAccordionWithText,y as __namedExportsOrder,q as default};
//# sourceMappingURL=details-accordion-with-text.stories-d32d3a5a.js.map
