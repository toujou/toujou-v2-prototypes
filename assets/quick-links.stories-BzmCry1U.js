import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as d}from"./index-BaOfGPA4.js";import"./iframe-By-4hsAT.js";import"./preload-helper-C1FmrZbK.js";function o(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h1,{id:"quick-links",children:"Quick links"}),`
`,n.jsx(i.p,{children:`The Quick Links component renders a fixed-position navigation menu of floating action links.
It helps users quickly access important areas of the site, and is always visible on the page.`}),`
`,n.jsx(i.h2,{id:"markup-example",children:"Markup example"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-html",children:`<nav
    class="quick-links"
    aria-label="Quick links"
    data-vertical-position="bottom"
    data-horizontal-position="right"
>
    <ul class="quick-links__list">
        <li class="quick-links__item">
            <a
                href="#"
                class="quick-link"
                title="This is a link"
                data-element-design="primary"
            >
                <figure class="quick-link__figure">
                    <span
                        class="quick-link__icon"
                        style="--quick-link-image-icon: url('./assets/icons/icon-star.svg')"
                        aria-hidden="true"
                    ></span>
                </figure>
                <span class="quick-link__text">First link</span>
            </a>
        </li>
    </ul>
</nav>
`})}),`
`,n.jsx(i.h2,{id:"attributes",children:"Attributes"}),`
`,n.jsxs(i.h3,{id:"data-vertical-position-required",children:["data-vertical-position ",n.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,n.jsx(i.p,{children:'Controls the vertical alignment of the quick links block. Possible values are "top", "middle" and "bottom"'}),`
`,n.jsxs(i.h3,{id:"data-horizontal-position-required",children:["data-horizontal-position ",n.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,n.jsx(i.p,{children:'Controls the horizontal alignment of the quick links block. Possible values are "left" or "right"'}),`
`,n.jsxs(i.h3,{id:"data-element-required",children:["data-element ",n.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,n.jsx(i.p,{children:'Defines the background design of each quick link. Possible values are "primary", "secondary" and "font"'}),`
`,n.jsx(i.h3,{id:"icononly",children:"iconOnly"}),`
`,n.jsx(i.p,{children:"Defines whether the quick link displays only the icon, or both the icon and the text."}),`
`,n.jsx(i.p,{children:"When iconOnly is true, text element is omitted."}),`
`,n.jsx(i.h2,{id:"accessibility-notes",children:"Accessibility notes"}),`
`,n.jsx(i.p,{children:"Each link element must include an accessible aria-label if the visible text is hidden (icon-only mode)."}),`
`,n.jsx(i.p,{children:'The quick-links nav element must have an aria-label="Quick links" or a similar descriptive label.'})]})}function h(e={}){const{wrapper:i}={...d(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(o,{...e})}):o(e)}const x={title:"COMPONENTS/QuickLinks",parameters:{docs:{page:h},layout:"fullscreen"},argTypes:{verticalPos:{name:"Vertical position",description:"Set the vertical position for the element",options:["top","middle","bottom"],control:{type:"radio"},table:{category:"Quick Links Settings",defaultValue:{summary:"bottom"}}},horizontalPos:{name:"Horizontal position",description:"Set the horizontal position for the element",options:["left","right"],control:{type:"radio"},table:{category:"Quick Links Settings",defaultValue:{summary:"right"}}},bgColor:{name:"Background color",description:"Set the background color / design for the element",options:["default","primary","secondary","font"],control:{type:"radio"},table:{category:"Quick Links Settings",defaultValue:{summary:"primary"}}},iconOnly:{name:"Icon only",description:"Select if the quick link should show only icon or also the text",control:{type:"boolean"},table:{category:"Quick Links Settings",defaultValue:{summary:"false"}}}}},m=e=>`
        <section class="chapter chapter--default" style="padding: 2rem;">
            <toujou-text-block class="text-block">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h1>Quick links dummy content</h1>
                        ${Array.from({length:e}).map(()=>"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>").join("")}
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>
        </section>
    `,s=(e,i,k)=>`
        <a
            href="#"
            class="quick-link"
            title="${i}"
            data-element-design="${e.bgColor||"primary"}"
        >
            <figure class="quick-link__figure">
                <span
                    class="quick-link__icon"
                    style="--quick-link-image-icon: url('./assets/icons/icon-${k}.svg')"
                    aria-hidden="true"
                ></span>
            </figure>
            ${e.iconOnly?"":`<span class="quick-link__text">${i}</span>`}
        </a>
    `,t=e=>`
        <nav
            class="quick-links"
            aria-label="Quick links"
            data-vertical-position="${e.verticalPos||"bottom"}"
            data-horizontal-position="${e.horizontalPos||"right"}"
        >
            <ul class="quick-links__list">
                <li class="quick-links__item">
                    ${s(e,"First link","star")}
                </li>
                <li class="quick-links__item">
                    ${s(e,"Second link","home")}
                </li>
                <li class="quick-links__item">
                    ${s(e,"Third link","drink")}
                </li>
            </ul>
        </nav>
        
        ${m(15)}
    `;t.args={verticalPos:"bottom",horizontalPos:"right",bgColor:"default",iconOnly:!1};var l,a,r,c,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  // Return the wrapper with the quick-links and the dummy content
  return \`
        <nav
            class="quick-links"
            aria-label="Quick links"
            data-vertical-position="\${args.verticalPos || 'bottom'}"
            data-horizontal-position="\${args.horizontalPos || 'right'}"
        >
            <ul class="quick-links__list">
                <li class="quick-links__item">
                    \${renderQuickLink(args, 'First link', 'star')}
                </li>
                <li class="quick-links__item">
                    \${renderQuickLink(args, 'Second link', 'home')}
                </li>
                <li class="quick-links__item">
                    \${renderQuickLink(args, 'Third link', 'drink')}
                </li>
            </ul>
        </nav>
        
        \${renderDummyContent(15)}
    \`;
}`,...(r=(a=t.parameters)==null?void 0:a.docs)==null?void 0:r.source},description:{story:"Main Story Template",...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.description}}};const q=["QuickLinks"];export{t as QuickLinks,q as __namedExportsOrder,x as default};
