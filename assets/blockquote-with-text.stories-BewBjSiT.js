import{T as l}from"./badgeCustomConfig-oxGPBDYz.js";import{M as n}from"./blockquote.docs-BOxMyvWQ.js";import"./jsx-runtime-DPda6Ybg.js";import"./index-DhrokLn_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-4_AlzpT7.js";const k={title:"COMPONENTS/Blockquote",parameters:{badges:[l.DONE],docs:{page:n}},argTypes:{columnsLayout:{table:{category:"Grid settings",defaultValue:{summary:"third-right"}},name:"Two columns layout",description:"Define layout of the grid columns",options:["third-right","third-left"],control:{type:"radio"},defaultValue:["third-right"],required:!0}},tags:["autodocs"]};function e(){return`
        <toujou-blockquote role="figure" class="blockquote" blockquote-direction="vertical" element-design="default" is-column>
            <img slot="image" class="blockquote__image" src="https://picsum.photos/200/200" alt="quote image" />
            <blockquote slot="quote" class="blockquote__blockquote">
                <p class="blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
            </blockquote>
            <figcaption slot="author" class="blockquote__author">Jack Handey</figcaption>
        </toujou-blockquote>
    `}function i(){return`
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    `}const u=o=>`
        <toujou-grid class="grid" number-of-columns="2" grid-type="default" column-layout="${o.columnsLayout}" fullwidth>
            <toujou-grid-column class="grid-column">
                ${o.columnsLayout==="third-left"?e():i()}
            </toujou-grid-column>
            <toujou-grid-column class="grid-column">
                ${o.columnsLayout==="third-left"?i():e()}
            </toujou-grid-column>
        </toujou-grid>
    `,s=o=>`
        <main>
            ${u(o)}

            <section class="chapter" background-color="primary">
                ${u(o)}
            </section>
        </main>
    `,t=s.bind({});t.args={columnsLayout:"third-right"};var r,a,c;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`(args: BlockquoteWithTextStoryProps) => {
  return \`
        <main>
            \${blockquoteWithTextBlock(args)}

            <section class="chapter" background-color="primary">
                \${blockquoteWithTextBlock(args)}
            </section>
        </main>
    \`;
}`,...(c=(a=t.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const b=["BlockquoteWithText"];export{t as BlockquoteWithText,b as __namedExportsOrder,k as default};
