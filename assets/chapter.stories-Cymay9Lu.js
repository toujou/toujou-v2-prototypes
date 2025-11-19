import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as d}from"./index-b9Z6YEkR.js";import"./iframe-CHogCwWt.js";import"./preload-helper-C1FmrZbK.js";function r(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"chapter",children:"Chapter"}),`
`,t.jsxs(e.p,{children:["The chapter content element renders a ",t.jsx(e.code,{children:"section"}),", which helps us separate the page's content, tell an effective story, and add custom styles to other content elements."]}),`
`,t.jsx(e.h2,{id:"markup-example",children:"Markup example"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<section class="chapter chapter--primary">
    ...
</section>
`})}),`
`,t.jsx(e.h2,{id:"close-a-chapter",children:"Close a chapter"}),`
`,t.jsx(e.p,{children:'There is no "chapter end" content element. If we need to close a chapter, the easiest option is to create a new empty chapter. This will close the previous one, which might have had some custom classes, and create a new chapter, and thereby resetting all custom styles...'}),`
`,t.jsx(e.h2,{id:"options",children:"Options"}),`
`,t.jsxs(e.p,{children:["The chapter element by default has only the ",t.jsx(e.code,{children:"Chapter ID"}),' visible. To show the custom classes input we must add the following to the home page "Resources" tab: ',t.jsx(e.code,{children:"TCEFORM.tt_content.chapter_custom_classes.disabled = 0"})]}),`
`,t.jsxs(e.h3,{id:"chapter-id-required",children:["Chapter id ",t.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"Chapter ID"})," input field allows us to add a custom id to the chapter"]}),`
`,t.jsx(e.h3,{id:"custom-classes",children:"Custom classes"}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"Chapter custom CSS classes"}),` input allows us to add custom modifier classes to the chapter element.
We can either choose from the standard classes or write our own custom modifier classes`]}),`
`,t.jsxs(e.p,{children:["Example: ",t.jsx(e.code,{children:"chapter--wide-columns chapter--red-background"})]}),`
`,t.jsxs(e.p,{children:["| ⚠️   The ",t.jsx(e.code,{children:"chapter"}),` class will be added automatically, so we don't need to add it to the custom classes |
|----------------------------------------------------------------------------------------------|`]}),`
`,t.jsx(e.h3,{id:"chapter-without-padding",children:"Chapter without padding"}),`
`,t.jsx(e.p,{children:"The chapters have by default some padding on the top and the bottom. If we need a chapter without any paddings we can either use an attribute or a custom class (so users can add it on the content element)"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<section class="chapter" no-padding></section>

or

<section class="chapter chapter--no-padding"></section>
`})}),`
`,t.jsx(e.h3,{id:"chapter-background-color",children:"chapter background color"}),`
`,t.jsx(e.h3,{id:"chapter-font-color",children:"chapter font color"}),`
`,t.jsx(e.h3,{id:"chapter-minimum-height",children:"chapter minimum height"}),`
`,t.jsx(e.h3,{id:"chapter-vertical-position",children:"chapter vertical position"}),`
`,t.jsx(e.h3,{id:"chapter-background-media",children:"chapter background media"}),`
`,t.jsx(e.h3,{id:"chapter-background-media-scroll-typ",children:"chapter background media scroll typ"}),`
`,t.jsx(e.h3,{id:"chapter-padding-top",children:"chapter padding-top"}),`
`,t.jsx(e.h3,{id:"chapter-padding-bottom",children:"chapter padding-bottom"}),`
`,t.jsx(e.h3,{id:"chapter-margin-top",children:"chapter margin-top"}),`
`,t.jsx(e.h3,{id:"chapter-margin-bottom",children:"chapter margin-bottom"})]})}function p(o={}){const{wrapper:e}={...d(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(r,{...o})}):r(o)}const x={title:"COMPONENTS/Chapter",parameters:{docs:{page:p},layout:"fullscreen"},argTypes:{backgroundColor:{table:{category:"Chapter settings",defaultValue:{summary:"none"}},name:"Background color",description:"Choose a background-color for the chapter",options:["none","default","background","primary","primary-light","primary-dark","secondary","secondary-light","secondary-dark","font","font-light","font-dark"],control:{type:"radio"},required:!0},fontColor:{table:{category:"Chapter settings",defaultValue:{summary:"none"}},name:"Font color",description:"Choose a font-color for the chapter",options:["none","default","background","primary","primary-light","primary-dark","secondary","secondary-light","secondary-dark","font","font-light","font-dark"],control:{type:"radio"},required:!0},minHeight:{table:{category:"Chapter settings",defaultValue:{summary:"none"}},name:"Minimum height",description:"Choose a minimum height for the chapter",options:["auto","full","half","third","quarter"],control:{type:"radio"},required:!0},verticalPosition:{table:{category:"Chapter settings",defaultValue:{summary:"none"}},name:"Vertical position",description:"Choose a vertical for the chapter's content",options:["default","top","middle","bottom"],control:{type:"radio"},required:!0},showBackgroundImage:{table:{category:"Chapter settings",defaultValue:{summary:"none"}},name:"Show background image",description:"Show a background image on the chapter element",control:{type:"boolean"},required:!0},attachmentType:{table:{category:"Chapter settings",defaultValue:{summary:"none"}},name:"Background attachment type",description:"Choose the attachment type for the background image",options:["scroll","fixed"],control:{type:"radio"},required:!0},paddingTop:{table:{category:"Chapter settings"},name:"Padding top",description:"Choose the padding top for the chapter",options:["default","none","xs","s","base","m","l","xl"],control:{type:"radio"},defaultValue:["default"],required:!0},paddingBottom:{table:{category:"Chapter settings"},name:"Padding bottom",description:"Choose the padding bottom for the chapter",options:["default","none","xs","s","base","m","l","xl"],control:{type:"radio"},required:!0},marginTop:{table:{category:"Chapter settings"},name:"Margin top",description:"Choose the margin top for the chapter",options:["default","none","xs","s","base","m","l","xl"],control:{type:"radio"},required:!0},marginBottom:{table:{category:"Chapter settings"},name:"Margin bottom",description:"Choose the margin bottom for the chapter",options:["default","none","xs","s","base","m","l","xl"],control:{type:"radio"},required:!0}}};function n(o,e){return`
        <toujou-text-block class="text-block" text-block-column-count="1">
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <h1>${o}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <a href="#">sed do eiusmod tempor</a> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    ${e?`
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <a href="#">sed do eiusmod tempor</a> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <a href="#">sed do eiusmod tempor</a> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <a href="#">sed do eiusmod tempor</a> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    `:""}
                </div>
            </toujou-text-block-column>
        </toujou-text-block>
    `}const u=o=>{const e=o.backgroundColor!=="none"?`background-color=${o.backgroundColor}`:"",l=o.fontColor!=="none"?`font-color=${o.fontColor}`:"";return`
        <span id="c1"></span>
        <section class="chapter" background-color="font-light">
            ${n("Dummy content",!0)}
        </section>

        <span id="c2"></span>
        <section
            class="chapter"
            ${e}
            ${l}
            min-height="${o.minHeight}"
            vertical-position="${o.verticalPosition}"
            attachment-type="${o.attachmentType}"
            style="
        --chapter-bg-image-mobile: url(https://picsum.photos/840/840);
        --chapter-bg-image-tablet: url(https://picsum.photos/1024/1024);
        --chapter-bg-image-desktop: url(https://picsum.photos/1440/1440);
        --chapter-bg-image-wide: url(https://picsum.photos/1960/1960);
        --chapter-bg-image-original: url(https://picsum.photos/2400/2400);
    "
            ${o.showBackgroundImage?"has-background-media":""}
            chapter-padding-top="${o.paddingTop}"
            chapter-padding-bottom="${o.paddingBottom}"
            chapter-margin-top="${o.marginTop}"
            chapter-margin-bottom="${o.marginBottom}"
            is-test-target
        >
            ${n("Test chapter",!1)}
        </section>

        <span id="c2"></span>
        <section class="chapter" background-color="background">
            ${n("Dummy content",!0)}
        </section>
    `},a=u.bind({});a.args={backgroundColor:"none",fontColor:"none",minHeight:"auto",verticalPosition:"default",showBackgroundImage:!1,attachmentType:"scroll",paddingTop:"default",paddingBottom:"default",marginTop:"default",marginBottom:"default"};var i,c,s;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`(args: ChapterStoryProps) => {
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
}`,...(s=(c=a.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};const y=["Chapter"];export{a as Chapter,y as __namedExportsOrder,x as default};
