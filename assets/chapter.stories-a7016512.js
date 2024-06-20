import{T as h}from"./badgeCustomConfig-e7a687d5.js";import{j as t}from"./jsx-runtime-87b2c1dd.js";import{u as d}from"./index-af127bdc.js";import"./index-afb52020.js";import"./_commonjsHelpers-725317a4.js";function a(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"chapter",children:"Chapter"}),`
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
`,t.jsx(e.h3,{id:"standard-modifiers",children:"Standard modifiers"}),`
`,t.jsxs(e.p,{children:["We can choose between the standard modifiers: ",t.jsx(e.code,{children:"chapter--default"}),", ",t.jsx(e.code,{children:"chapter--primary"}),", ",t.jsx(e.code,{children:"chapter--secondary"}),", ",t.jsx(e.code,{children:"chapter--inverted"}),", ",t.jsx(e.code,{children:"chapter--white"}),",",t.jsx(e.code,{children:"chapter--background"}),"."]}),`
`,t.jsx(e.p,{children:'The "background" variant has a "font color with 10% opacity" background.'}),`
`,t.jsx(e.p,{children:`The "default" variant doesn't have any special styles, but can be used for customizing the page...`})]})}function p(o={}){const{wrapper:e}={...d(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(a,{...o})}):a(o)}const b={title:"COMPONENTS/Chapter",parameters:{badges:[h.DONE],docs:{page:p},layout:"fullscreen"},argTypes:{backgroundColor:{table:{category:"Chapter settings",defaultValue:{summary:"none"}},name:"Background color",description:"Choose a background-color for the chapter",options:["none","default","background","primary","primary-light","primary-dark","secondary","secondary-light","secondary-dark","font","font-light","font-dark"],control:{type:"radio"},defaultValue:["none"],required:!0},fontColor:{table:{category:"Chapter settings",defaultValue:{summary:"none"}},name:"Font color",description:"Choose a font-color for the chapter",options:["none","default","background","primary","primary-light","primary-dark","secondary","secondary-light","secondary-dark","font","font-light","font-dark"],control:{type:"radio"},defaultValue:["none"],required:!0},minHeight:{table:{category:"Chapter settings",defaultValue:{summary:"none"}},name:"Minimum height",description:"Choose a minimum height for the chapter",options:["auto","full","half","third","fourth"],control:{type:"radio"},defaultValue:["none"],required:!0},verticalPosition:{table:{category:"Chapter settings",defaultValue:{summary:"none"}},name:"Vertical position",description:"Choose a vertical for the chapter's content",options:["default","top","middle","bottom"],control:{type:"radio"},defaultValue:["none"],required:!0}},tags:["autodocs"]};function r(o){return`
        <toujou-text-block class="text-block" text-block-column-count="1">
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <h1>${o}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <a href="#">sed do eiusmod tempor</a> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>
    `}const u=o=>{const e=o.backgroundColor!=="none"?`background-color=${o.backgroundColor}`:"",l=o.fontColor!=="none"?`font-color=${o.fontColor}`:"";return`
        <span id="c1"></span>
        <section class="chapter">
            ${r("Dummy content")}
        </section>

        <span id="c2"></span>
        <section
            class="chapter"
            ${e}
            ${l}
            min-height="${o.minHeight}"
            vertical-position="${o.verticalPosition}"
        >
            ${r("Test chapter")}
        </section>

        <span id="c2"></span>
        <section class="chapter" background-color="font">
            ${r("Dummy content")}
        </section>
    `},n=u.bind({});n.args={backgroundColor:"none",fontColor:"none",minHeight:"auto",verticalPosition:"default"};var s,c,i;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`(args: ChapterStoryProps) => {
  const bgColorAttr = args.backgroundColor !== 'none' ? \`background-color=\${args.backgroundColor}\` : '';
  const fontColorAttr = args.fontColor !== 'none' ? \`font-color=\${args.fontColor}\` : '';
  return \`
        <span id="c1"></span>
        <section class="chapter">
            \${renderDummyContent('Dummy content')}
        </section>

        <span id="c2"></span>
        <section
            class="chapter"
            \${bgColorAttr}
            \${fontColorAttr}
            min-height="\${args.minHeight}"
            vertical-position="\${args.verticalPosition}"
        >
            \${renderDummyContent('Test chapter')}
        </section>

        <span id="c2"></span>
        <section class="chapter" background-color="font">
            \${renderDummyContent('Dummy content')}
        </section>
    \`;
}`,...(i=(c=n.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const C=["Chapter"];export{n as Chapter,C as __namedExportsOrder,b as default};
