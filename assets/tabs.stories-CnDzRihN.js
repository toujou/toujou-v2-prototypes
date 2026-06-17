const o=[{id:1,label:"Item One",content:"<h3>This is the content for Item One</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",image:"https://picsum.photos/seed/tab-1/800/500"},{id:2,label:"Item Two",content:"<h3>This is item two!</h3><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"},{id:3,label:"Item Three",content:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>"},{id:4,label:"Item Four with a longer name",content:"<p>Some small content</p>"},{id:5,label:"Item Five",content:"<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>"}],r=e=>e.map((t,n)=>`
    <button
        role="tab"
        aria-selected="${n===0?"true":"false"}"
        aria-controls="panel-${t.id}"
        id="tab-${t.id}"
        tabindex="${n===0?"0":"-1"}"
        class="tabs__button"
    >${t.label}</button>
`).join(""),c=e=>e.map((t,n)=>`
    <div
        id="panel-${t.id}"
        role="tabpanel"
        tabindex="0"
        aria-labelledby="tab-${t.id}"
        class="tabs__panel"
        ${n!==0?"hidden":""}
    >
        <toujou-text-block class="text-block" text-block-media-position="inside-right">
            <toujou-text-block-column class="text-block-column">
                ${t.image?`
                    <figure class="text-block__figure">
                        <img class="text-block__image" src="${t.image}" alt="" title="" loading="lazy">
                    </figure>
                `:""}
            
                <div class="text-block__content">
                    ${t.content}
                </div>
            </toujou-text-block-column>
        </toujou-text-block>
    </div>
`).join(""),u={title:"COMPONENTS/Tabs",args:{elementDesign:"default",orientation:"horizontal",alignment:"left"},argTypes:{elementDesign:{name:"Element design",description:"Set the element design for the tabs element",options:["default","primary","secondary","inverted"],control:{type:"radio"},table:{category:"Tabs Settings",defaultValue:{summary:"default"}}},orientation:{name:"Orientation",description:"Set the tabs element orientation",options:["vertical","horizontal"],control:{type:"radio"},table:{category:"Tabs Settings",defaultValue:{summary:"vertical"}}},alignment:{name:"Alignment",description:"Set the alignment for the tabs buttons",options:["left","center","right"],control:{type:"radio"},table:{category:"Tabs Settings",defaultValue:{summary:"left"}}}}},a=e=>`
    <main>
        <toujou-tabs
            class="tabs"
            data-orientation="${e.orientation}"
            data-alignment="${e.alignment}"
            element-design="${e.elementDesign}"
        >
            <div class="tabs__header">
                <button
                    class="tabs__scroll-button tabs__scroll-button--prev"
                    aria-hidden="true"
                    aria-label="Scroll tab list left"
                    tabindex="-1"
                    hidden
                >
                    <toujou-icon class="icon" icon-name="chevron-left" icon-size="m" icon-color="font"></toujou-icon>
                </button>

                <div role="tablist" aria-label="Select a tab" class="tabs__buttons">
                    ${r(o)}
                </div>

                <button
                    class="tabs__scroll-button tabs__scroll-button--next"
                    aria-hidden="true"
                    aria-label="Scroll tab list right"
                    tabindex="-1"
                    hidden
                >
                    <toujou-icon class="icon" icon-name="chevron-right" icon-size="m" icon-color="font"></toujou-icon>
                </button>
            </div>

            <div class="tabs__panels">
                ${c(o)}
            </div>
        </toujou-tabs>
    </main>
`;var i,l,s;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`(args: TabsStoryArgs) => \`
    <main>
        <toujou-tabs
            class="tabs"
            data-orientation="\${args.orientation}"
            data-alignment="\${args.alignment}"
            element-design="\${args.elementDesign}"
        >
            <div class="tabs__header">
                <button
                    class="tabs__scroll-button tabs__scroll-button--prev"
                    aria-hidden="true"
                    aria-label="Scroll tab list left"
                    tabindex="-1"
                    hidden
                >
                    <toujou-icon class="icon" icon-name="chevron-left" icon-size="m" icon-color="font"></toujou-icon>
                </button>

                <div role="tablist" aria-label="Select a tab" class="tabs__buttons">
                    \${renderTabButtons(TAB_ITEMS)}
                </div>

                <button
                    class="tabs__scroll-button tabs__scroll-button--next"
                    aria-hidden="true"
                    aria-label="Scroll tab list right"
                    tabindex="-1"
                    hidden
                >
                    <toujou-icon class="icon" icon-name="chevron-right" icon-size="m" icon-color="font"></toujou-icon>
                </button>
            </div>

            <div class="tabs__panels">
                \${renderTabPanels(TAB_ITEMS)}
            </div>
        </toujou-tabs>
    </main>
\``,...(s=(l=a.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const d=["Tabs"];export{a as Tabs,d as __namedExportsOrder,u as default};
