import{j as i}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as c}from"./index-DiBHS0bC.js";import"./iframe-Cx1EYarR.js";import"./preload-helper-C1FmrZbK.js";function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...c(),...e.components};return i.jsxs(i.Fragment,{children:[i.jsx(n.h1,{id:"quick-links",children:"Quick links"}),`
`,i.jsx(n.p,{children:`The Quick Links component renders a fixed-position navigation menu of floating action links.
It helps users quickly access important areas of the site, and is always visible on the page.`}),`
`,i.jsx(n.h2,{id:"markup-example",children:"Markup example"}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-html",children:`<nav class="quick-links" aria-label="Quick links" data-vertical-position="bottom" data-horizontal-position="right">
    <ul class="quick-links__list">
        <li class="quick-links__item">
            <a
                href="#"
                class="quick-link"
                aria-label="This is a link"
                data-bg-color="primary"
                tabindex="0"
            >
                <figure class="quick-link__figure">
                    <img class="icon quick-link__image" src="#"/>
                </figure>
                <span class="quick-link__text">First link</span>
            </a>
        </li>
    </ul>
</nav>
`})}),`
`,i.jsx(n.h2,{id:"attributes",children:"Attributes"}),`
`,i.jsxs(n.h3,{id:"data-vertical-position-required",children:["data-vertical-position ",i.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,i.jsx(n.p,{children:'Controls the vertical alignment of the quick links block. Possible values are "top", "middle" and "bottom"'}),`
`,i.jsxs(n.h3,{id:"data-horizontal-position-required",children:["data-horizontal-position ",i.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,i.jsx(n.p,{children:'Controls the horizontal alignment of the quick links block. Possible values are "left" or "right"'}),`
`,i.jsxs(n.h3,{id:"data-bg-color-required",children:["data-bg-color ",i.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,i.jsx(n.p,{children:'Defines the background design of each quick link. Possible values are "primary", "secondary" and "font"'}),`
`,i.jsx(n.h3,{id:"icononly",children:"iconOnly"}),`
`,i.jsx(n.p,{children:"Defines whether the quick link displays only the icon, or both the icon and the text."}),`
`,i.jsx(n.p,{children:"When iconOnly is true, ttext element is omitted."}),`
`,i.jsx(n.h2,{id:"accessibility-notes",children:"Accessibility notes"}),`
`,i.jsx(n.p,{children:"Each link element must include an accessible aria-label if the visible text is hidden (icon-only mode)."}),`
`,i.jsx(n.p,{children:'The quick-links nav element must have an aria-label="Quick links" or a similar descriptive label.'})]})}function u(e={}){const{wrapper:n}={...c(),...e.components};return n?i.jsx(n,{...e,children:i.jsx(l,{...e})}):l(e)}const g={title:"COMPONENTS/QuickLinks",parameters:{docs:{page:u},layout:"fullwidth"},argTypes:{verticalPos:{table:{category:"Quick Links Settings",defaultValue:{summary:"bottom"}},name:"Vertical position",description:"Set the vertical position for the element",options:["top","middle","bottom"],control:{type:"radio"},required:!0},horizontalPos:{table:{category:"Quick Links Settings",defaultValue:{summary:"right"}},name:"Horizontal position",description:"Set the horizontal position for the element",options:["left","right"],control:{type:"radio"},required:!0},bgColor:{table:{category:"Quick Links Settings",defaultValue:{summary:"primary"}},name:"Background color",description:"Set the background color / design for the element",options:["primary","secondary","font"],control:{type:"radio"},required:!0},iconOnly:{table:{category:"Quick Links Settings",defaultValue:{summary:"false"}},name:"Icon only",description:"Select if the quick link should show only icon or also the text",control:{type:"boolean"},required:!0}}},d=e=>`
        <section class="chapter chapter--default">
            <toujou-text-block class="text-block" text-block-column-count="1">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h1>Quick links dummy content</h1>

                        ${Array.from({length:e}).map(()=>`
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        `).join("")}
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>
        </section>
    `,o=(e,n)=>`
        <a
            class="quick-link"
            aria-label="This is a link"
            data-bg-color="${e.bgColor}"
            data-vertical-position="${e.verticalPos}"
            data-horizontal-position="${e.horizontalPos}"
            tabindex="0"
        >
            <figure class="quick-link__figure">
                <toujou-icon class="icon quick-link__image" icon-color="background" icon-name="star"></toujou-icon>
            </figure>
            ${e.iconOnly?"":`
                <span class="quick-link__text">${n}</span>
            `}
        </a>
    `,k=e=>`
        <nav
            class="quick-links"
            aria-label="Quick links"
            data-vertical-position="${e.verticalPos}"
            data-horizontal-position="${e.horizontalPos}"
        >
            <ul class="quick-links__list">
                <li class="quick-links__item">
                    ${o(e,"First link")}
                </li>
                <li class="quick-links__item">
                    ${o(e,"Second link")}
                </li>
                <li class="quick-links__item">
                    ${o(e,"Third link")}
                </li>
            </ul>
        </nav>
        
        ${d(20)}
    `,t=k.bind({});t.args={verticalPos:"bottom",horizontalPos:"right",bgColor:"primary",iconOnly:!1};var a,s,r;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`(args: quickLinksStoryProps) => {
  return \`
        <nav
            class="quick-links"
            aria-label="Quick links"
            data-vertical-position="\${args.verticalPos}"
            data-horizontal-position="\${args.horizontalPos}"
        >
            <ul class="quick-links__list">
                <li class="quick-links__item">
                    \${renderQuickLink(args, 'First link')}
                </li>
                <li class="quick-links__item">
                    \${renderQuickLink(args, 'Second link')}
                </li>
                <li class="quick-links__item">
                    \${renderQuickLink(args, 'Third link')}
                </li>
            </ul>
        </nav>
        
        \${renderDummyContent(20)}
    \`;
}`,...(r=(s=t.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const x=["QuickLinks"];export{t as QuickLinks,x as __namedExportsOrder,g as default};
