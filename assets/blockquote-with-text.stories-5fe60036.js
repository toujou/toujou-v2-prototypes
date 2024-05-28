import{T as a}from"./badgeCustomConfig-e7a687d5.js";import{M as n}from"./blockquote.docs-164a8c91.js";import"./jsx-runtime-2d96f316.js";import"./index-b6937ee2.js";import"./_commonjsHelpers-725317a4.js";import"./index-9d38a655.js";const f={title:"COMPONENTS/Blockquote",parameters:{badges:[a.DONE],docs:{page:n}},argTypes:{columnsLayout:{table:{category:"Grid settings",defaultValue:{summary:"third-right"}},name:"Two columns layout",description:"Define layout of the grid columns",options:["third-right","third-left"],control:{type:"radio"},defaultValue:["third-right"],required:!0}},tags:["autodocs"]};function e(){return`
        <toujou-blockquote role="figure" class="blockquote" blockquote-direction="vertical" element-design="default" is-column>
            <img slot="image" class="blockquote__image" src="https://picsum.photos/200/200" alt="quote image" />
            <blockquote slot="quote" class="blockquote__blockquote">
                <p class="blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
            </blockquote>
            <figcaption slot="author" class="blockquote__author">Jack Handey</figcaption>
        </toujou-blockquote>
    `}function u(){return`
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    `}const c=t=>`
        <toujou-grid class="grid" number-of-columns="2" grid-type="default" column-layout="${t.columnsLayout}" fullwidth>
            <toujou-grid-column class="grid-column">
                ${t.columnsLayout==="third-left"?e():u()}
            </toujou-grid-column>
            <toujou-grid-column class="grid-column">
                ${t.columnsLayout==="third-left"?u():e()}
            </toujou-grid-column>
        </toujou-grid>
    `,o=c.bind({});o.args={columnsLayout:"third-right"};var r,i,l;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`(args: BlockquoteWithTextStoryProps) => {
  return \`
        <toujou-grid class="grid" number-of-columns="2" grid-type="default" column-layout="\${args.columnsLayout}" fullwidth>
            <toujou-grid-column class="grid-column">
                \${args.columnsLayout === 'third-left' ? renderBlockquote() : renderText()}
            </toujou-grid-column>
            <toujou-grid-column class="grid-column">
                \${args.columnsLayout === 'third-left' ? renderText() : renderBlockquote()}
            </toujou-grid-column>
        </toujou-grid>
    \`;
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const q=["BlockquoteWithText"];export{o as BlockquoteWithText,q as __namedExportsOrder,f as default};
