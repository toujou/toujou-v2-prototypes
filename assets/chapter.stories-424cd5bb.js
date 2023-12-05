import{T as d}from"./badgeCustomConfig-e7a687d5.js";import{j as e}from"./jsx-runtime-ccada58e.js";import{u as i}from"./index-4fb8b842.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";function o(a){const t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3"},i(),a.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"chapter",children:"Chapter"}),`
`,e.jsxs(t.p,{children:["The chapter content element renders a ",e.jsx(t.code,{children:"section"}),", which helps us separate the page's content, tell an effective story, and add custom styles to other content elements."]}),`
`,e.jsx(t.h2,{id:"markup-example",children:"Markup example"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<section class="chapter chapter--primary">
    ...
</section>
`})}),`
`,e.jsx(t.h2,{id:"close-a-chapter",children:"Close a chapter"}),`
`,e.jsx(t.p,{children:'There is no "chapter end" content element. If we need to close a chapter, the easiest option is to create a new empty chapter. This will close the previous one, which might have had some custom classes, and create a new chapter, and thereby resetting all custom styles...'}),`
`,e.jsx(t.h2,{id:"options",children:"Options"}),`
`,e.jsxs(t.p,{children:["The chapter element by default has only the ",e.jsx(t.code,{children:"Chapter ID"}),' visible. To show the custom classes input we must add the following to the home page "Resources" tab: ',e.jsx(t.code,{children:"TCEFORM.tt_content.chapter_custom_classes.disabled = 0"})]}),`
`,e.jsxs(t.h3,{id:"chapter-id-required",children:["Chapter id ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"Chapter ID"})," input field allows us to add a custom id to the chapter"]}),`
`,e.jsx(t.h3,{id:"custom-classes",children:"Custom classes"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"Chapter custom CSS classes"}),` input allows us to add custom modifier classes to the chapter element.
We can either choose from the standard classes or write our own custom modifier classes`]}),`
`,e.jsxs(t.p,{children:["Example: ",e.jsx(t.code,{children:"chapter--wide-columns chapter--red-background"})]}),`
`,e.jsxs(t.p,{children:["| ⚠️   The ",e.jsx(t.code,{children:"chapter"}),` class will be added automatically, so we don't need to add it to the custom classes |
|----------------------------------------------------------------------------------------------|`]}),`
`,e.jsx(t.h3,{id:"chapter-without-padding",children:"Chapter without padding"}),`
`,e.jsx(t.p,{children:"The chapters have by default some padding on the top and the bottom. If we need a chapter without any paddings we can either use an attribute or a custom class (so users can add it on the content element)"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<section class="chapter" no-padding></section>

or

<section class="chapter chapter--no-padding"></section>
`})}),`
`,e.jsx(t.h3,{id:"standard-modifiers",children:"Standard modifiers"}),`
`,e.jsxs(t.p,{children:["We can choose between the standard modifiers: ",e.jsx(t.code,{children:"chapter--default"}),", ",e.jsx(t.code,{children:"chapter--primary"}),", ",e.jsx(t.code,{children:"chapter--secondary"}),", ",e.jsx(t.code,{children:"chapter--inverted"}),", ",e.jsx(t.code,{children:"chapter--white"}),",",e.jsx(t.code,{children:"chapter--background"}),"."]}),`
`,e.jsx(t.p,{children:'The "background" variant has a "font color with 10% opacity" background.'}),`
`,e.jsx(t.p,{children:`The "default" variant doesn't have any special styles, but can be used for customizing the page...`})]})}function l(a={}){const{wrapper:t}=Object.assign({},i(),a.components);return t?e.jsx(t,Object.assign({},a,{children:e.jsx(o,a)})):o(a)}const j={title:"COMPONENTS/Chapter",parameters:{badges:[d.DONE],docs:{page:l},layout:"fullscreen"},argTypes:{variant:{table:{category:"Chapter settings",defaultValue:{summary:"none"}},name:"Chapter variant",description:"Choose between the possible standard chapter variants",options:["none","default","primary","secondary","inverted","white","background"],control:{type:"radio"},defaultValue:["none"],required:!0},hasNoPaddingAttr:{table:{category:"Chapter settings",defaultValue:{summary:"false"}},name:"Chapter without padding",description:"Set the 'no-padding' attribute, which remove the default chapter padding",control:{type:"boolean"},defaultValue:["false"],required:!0}},tags:["autodocs"]},h=a=>`
        <section class="chapter chapter--${a.variant}" ${a.hasNoPaddingAttr?"no-padding":""}>
            <toujou-text-block class="text-block" text-block-column-count="1">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h1>Left aligned H1 headline</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <a href="#">sed do eiusmod tempor</a> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>
        </section>
    `,n=h.bind({});n.args={variant:"none",hasNoPaddingAttr:!1};var s,c,r;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`(args: ChapterStoryProps) => {
  return \`
        <section class="chapter chapter--\${args.variant}" \${args.hasNoPaddingAttr ? 'no-padding' : ''}>
            <toujou-text-block class="text-block" text-block-column-count="1">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h1>Left aligned H1 headline</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <a href="#">sed do eiusmod tempor</a> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>
        </section>
    \`;
}`,...(r=(c=n.parameters)==null?void 0:c.docs)==null?void 0:r.source}}};const b=["Chapter"];export{n as Chapter,b as __namedExportsOrder,j as default};
//# sourceMappingURL=chapter.stories-424cd5bb.js.map
