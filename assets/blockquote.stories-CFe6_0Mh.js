import{T as i}from"./badgeCustomConfig-DUXiHpL4.js";import{M as a}from"./blockquote.docs-cfio2LY0.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-DpH9cx3q.js";import"./index-DO8khQO4.js";import"./_commonjsHelpers-Cpj98o6Y.js";const g={title:"COMPONENTS/Blockquote",parameters:{badges:[i.DONE],docs:{page:a}},argTypes:{direction:{table:{category:"Blockquote settings",defaultValue:{summary:"vertical"}},name:"Direction",description:"Set the blockquote's direction",options:["vertical","horizontal"],control:{type:"radio"},required:!0},elementDesign:{table:{category:"Blockquote settings",defaultValue:{summary:"default"}},name:"Element design",description:"Set the blockquote's element design",options:["default","primary","secondary","inverted"],control:{type:"radio"},required:!0}}},t=o=>`
        <toujou-blockquote role="figure" class="blockquote" blockquote-direction="${o.direction}" element-design="${o.elementDesign}">
            <img slot="image" class="blockquote__image" src="https://picsum.photos/200/200" alt="quote image" />
            <blockquote slot="quote" class="blockquote__blockquote">
                <div class="blockquote__content">
                    <p>Before you criticize someone, <a href="#">you should walk a mile</a> in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
                </div>
            </blockquote>
            <figcaption slot="author" class="blockquote__author">Jack Handey</figcaption>
        </toujou-blockquote>
    `,n=o=>`
        <main>
            <toujou-blockquote-grid class="blockquote-grid" blockquote-grid-count="1">
                ${t(o)}
            </toujou-blockquote-grid>

            <section class="chapter" background-color="primary">
                <toujou-blockquote-grid class="blockquote-grid" blockquote-grid-count="1">
                    ${t(o)}
                </toujou-blockquote-grid>
            </section>
        </main>
    `,e=n.bind({});e.args={direction:"vertical",elementDesign:"default"};var r,c,u;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`(args: BlockquoteStoryProps) => {
  return \`
        <main>
            <toujou-blockquote-grid class="blockquote-grid" blockquote-grid-count="1">
                \${blockquoteComponent(args)}
            </toujou-blockquote-grid>

            <section class="chapter" background-color="primary">
                <toujou-blockquote-grid class="blockquote-grid" blockquote-grid-count="1">
                    \${blockquoteComponent(args)}
                </toujou-blockquote-grid>
            </section>
        </main>
    \`;
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const b=["Blockquote"];export{e as Blockquote,b as __namedExportsOrder,g as default};
