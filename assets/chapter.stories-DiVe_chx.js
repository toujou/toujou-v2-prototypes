const l={title:"COMPONENTS/Chapter",parameters:{layout:"fullscreen"},argTypes:{backgroundColor:{table:{category:"Chapter settings",defaultValue:{summary:"none"}},name:"Background color",description:"Choose a background-color for the chapter",options:["none","default","background","primary","primary-light","primary-dark","secondary","secondary-light","secondary-dark","font","font-light","font-dark"],control:{type:"radio"},required:!0},fontColor:{table:{category:"Chapter settings",defaultValue:{summary:"none"}},name:"Font color",description:"Choose a font-color for the chapter",options:["none","default","background","primary","primary-light","primary-dark","secondary","secondary-light","secondary-dark","font","font-light","font-dark"],control:{type:"radio"},required:!0},minHeight:{table:{category:"Chapter settings",defaultValue:{summary:"none"}},name:"Minimum height",description:"Choose a minimum height for the chapter",options:["auto","full","half","third","quarter"],control:{type:"radio"},required:!0},verticalPosition:{table:{category:"Chapter settings",defaultValue:{summary:"none"}},name:"Vertical position",description:"Choose a vertical for the chapter's content",options:["default","top","middle","bottom"],control:{type:"radio"},required:!0},showBackgroundImage:{table:{category:"Chapter settings",defaultValue:{summary:"none"}},name:"Show background image",description:"Show a background image on the chapter element",control:{type:"boolean"},required:!0},attachmentType:{table:{category:"Chapter settings",defaultValue:{summary:"none"}},name:"Background attachment type",description:"Choose the attachment type for the background image",options:["scroll","fixed"],control:{type:"radio"},required:!0},paddingTop:{table:{category:"Chapter settings"},name:"Padding top",description:"Choose the padding top for the chapter",options:["default","none","xs","s","base","m","l","xl"],control:{type:"radio"},defaultValue:["default"],required:!0},paddingBottom:{table:{category:"Chapter settings"},name:"Padding bottom",description:"Choose the padding bottom for the chapter",options:["default","none","xs","s","base","m","l","xl"],control:{type:"radio"},required:!0},marginTop:{table:{category:"Chapter settings"},name:"Margin top",description:"Choose the margin top for the chapter",options:["default","none","xs","s","base","m","l","xl"],control:{type:"radio"},required:!0},marginBottom:{table:{category:"Chapter settings"},name:"Margin bottom",description:"Choose the margin bottom for the chapter",options:["default","none","xs","s","base","m","l","xl"],control:{type:"radio"},required:!0}}};function a(t,o){return`
        <toujou-text-block class="text-block" text-block-column-count="1">
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <h1>${t}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <a href="#">sed do eiusmod tempor</a> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    ${o?`
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <a href="#">sed do eiusmod tempor</a> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <a href="#">sed do eiusmod tempor</a> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <a href="#">sed do eiusmod tempor</a> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    `:""}
                </div>
            </toujou-text-block-column>
        </toujou-text-block>
    `}const c=t=>{const o=t.backgroundColor!=="none"?`background-color=${t.backgroundColor}`:"",s=t.fontColor!=="none"?`font-color=${t.fontColor}`:"";return`
        <span id="c1"></span>
        <section class="chapter" background-color="font-light">
            ${a("Dummy content",!0)}
        </section>

        <span id="c2"></span>
        <section
            class="chapter"
            ${o}
            ${s}
            min-height="${t.minHeight}"
            vertical-position="${t.verticalPosition}"
            attachment-type="${t.attachmentType}"
            style="
        --chapter-bg-image-mobile: url(https://picsum.photos/840/840);
        --chapter-bg-image-tablet: url(https://picsum.photos/1024/1024);
        --chapter-bg-image-desktop: url(https://picsum.photos/1440/1440);
        --chapter-bg-image-wide: url(https://picsum.photos/1960/1960);
        --chapter-bg-image-original: url(https://picsum.photos/2400/2400);
    "
            ${t.showBackgroundImage?"has-background-media":""}
            chapter-padding-top="${t.paddingTop}"
            chapter-padding-bottom="${t.paddingBottom}"
            chapter-margin-top="${t.marginTop}"
            chapter-margin-bottom="${t.marginBottom}"
            is-test-target
        >
            ${a("Test chapter",!1)}
        </section>

        <span id="c2"></span>
        <section class="chapter" background-color="background">
            ${a("Dummy content",!0)}
        </section>
    `},e=c.bind({});e.args={backgroundColor:"none",fontColor:"none",minHeight:"auto",verticalPosition:"default",showBackgroundImage:!1,attachmentType:"scroll",paddingTop:"default",paddingBottom:"default",marginTop:"default",marginBottom:"default"};var n,r,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`(args: ChapterStoryProps) => {
  const bgColorAttr = args.backgroundColor !== 'none' ? \`background-color=\${args.backgroundColor}\` : '';
  const fontColorAttr = args.fontColor !== 'none' ? \`font-color=\${args.fontColor}\` : '';
  const chapterStyles = \`
        --chapter-bg-image-mobile: url(https://picsum.photos/840/840);
        --chapter-bg-image-tablet: url(https://picsum.photos/1024/1024);
        --chapter-bg-image-desktop: url(https://picsum.photos/1440/1440);
        --chapter-bg-image-wide: url(https://picsum.photos/1960/1960);
        --chapter-bg-image-original: url(https://picsum.photos/2400/2400);
    \`;
  return \`
        <span id="c1"></span>
        <section class="chapter" background-color="font-light">
            \${renderDummyContent('Dummy content', true)}
        </section>

        <span id="c2"></span>
        <section
            class="chapter"
            \${bgColorAttr}
            \${fontColorAttr}
            min-height="\${args.minHeight}"
            vertical-position="\${args.verticalPosition}"
            attachment-type="\${args.attachmentType}"
            style="\${chapterStyles}"
            \${args.showBackgroundImage ? 'has-background-media' : ''}
            chapter-padding-top="\${args.paddingTop}"
            chapter-padding-bottom="\${args.paddingBottom}"
            chapter-margin-top="\${args.marginTop}"
            chapter-margin-bottom="\${args.marginBottom}"
            is-test-target
        >
            \${renderDummyContent('Test chapter', false)}
        </section>

        <span id="c2"></span>
        <section class="chapter" background-color="background">
            \${renderDummyContent('Dummy content', true)}
        </section>
    \`;
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const p=["Chapter"];export{e as Chapter,p as __namedExportsOrder,l as default};
