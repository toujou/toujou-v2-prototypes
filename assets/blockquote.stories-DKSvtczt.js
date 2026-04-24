const l={title:"COMPONENTS/Blockquote",argTypes:{direction:{table:{category:"Blockquote settings",defaultValue:{summary:"vertical"}},name:"Direction",description:"Set the blockquote's direction",options:["vertical","horizontal"],control:{type:"radio"},required:!0},elementDesign:{table:{category:"Blockquote settings",defaultValue:{summary:"default"}},name:"Element design",description:"Set the blockquote's element design",options:["default","primary","secondary","inverted"],control:{type:"radio"},required:!0}}},t=o=>`
        <toujou-blockquote role="figure" class="blockquote" blockquote-direction="${o.direction}" element-design="${o.elementDesign}">
            <a href="#" class="blockquote__image-link" slot="image">
                <img slot="image" class="blockquote__image" src="https://picsum.photos/200/200" alt="quote image" />
            </a>
            <blockquote slot="quote" class="blockquote__blockquote">
                <div class="blockquote__content">
                    <p>Before you criticize someone, <a href="#">you should walk a mile</a> in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
                </div>
            </blockquote>
            <figcaption slot="author" class="blockquote__author">Jack Handey</figcaption>
        </toujou-blockquote>
    `,i=o=>`
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
    `,e=i.bind({});e.args={direction:"vertical",elementDesign:"default"};var c,r,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`(args: BlockquoteStoryProps) => {
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
}`,...(u=(r=e.parameters)==null?void 0:r.docs)==null?void 0:u.source}}};const a=["Blockquote"];export{e as Blockquote,a as __namedExportsOrder,l as default};
