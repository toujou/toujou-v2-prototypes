const k={title:"COMPONENTS/QuickLinks",parameters:{layout:"fullscreen"},argTypes:{verticalPos:{name:"Vertical position",description:"Set the vertical position for the element",options:["top","middle","bottom"],control:{type:"radio"},table:{category:"Quick Links Settings",defaultValue:{summary:"bottom"}}},horizontalPos:{name:"Horizontal position",description:"Set the horizontal position for the element",options:["left","right"],control:{type:"radio"},table:{category:"Quick Links Settings",defaultValue:{summary:"right"}}},bgColor:{name:"Background color",description:"Set the background color / design for the element",options:["default","primary","secondary","inverted"],control:{type:"radio"},table:{category:"Quick Links Settings",defaultValue:{summary:"primary"}}},iconOnly:{name:"Icon only",description:"Select if the quick link should show only icon or also the text",control:{type:"boolean"},table:{category:"Quick Links Settings",defaultValue:{summary:"false"}}}}},u=i=>`
        <section class="chapter chapter--default" style="padding: 2rem;">
            <toujou-text-block class="text-block">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h1>Quick links dummy content</h1>
                        ${Array.from({length:i}).map(()=>"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>").join("")}
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>
        </section>
    `,o=(i,e,c)=>`
        <a
            href="#"
            class="quick-link"
            title="${e}"
            data-element-design="${i.bgColor||"primary"}"
        >
            <figure class="quick-link__figure">
                <span
                    class="quick-link__icon"
                    style="--quick-link-image-icon: url('./assets/icons/icon-${c}.svg')"
                    aria-hidden="true"
                ></span>
            </figure>
            ${i.iconOnly?"":`<span class="quick-link__text">${e}</span>`}
        </a>
    `,t=i=>`
        <nav
            class="quick-links"
            aria-label="Quick links"
            data-vertical-position="${i.verticalPos||"bottom"}"
            data-horizontal-position="${i.horizontalPos||"right"}"
        >
            <ul class="quick-links__list">
                <li class="quick-links__item">
                    ${o(i,"First link","star")}
                </li>
                <li class="quick-links__item">
                    ${o(i,"Second link","home")}
                </li>
                <li class="quick-links__item">
                    ${o(i,"Third link","drink")}
                </li>
            </ul>
        </nav>
        
        ${u(15)}
    `;t.args={verticalPos:"bottom",horizontalPos:"right",bgColor:"default",iconOnly:!1};var n,s,a,l,r;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
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
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source},description:{story:"Main Story Template",...(r=(l=t.parameters)==null?void 0:l.docs)==null?void 0:r.description}}};const d=["QuickLinks"];export{t as QuickLinks,d as __namedExportsOrder,k as default};
