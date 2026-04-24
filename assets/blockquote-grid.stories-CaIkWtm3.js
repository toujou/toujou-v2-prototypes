const l={title:"COMPONENTS/Blockquote",argTypes:{direction:{table:{category:"Blockquote settings",defaultValue:{summary:"vertical"}},name:"Direction",description:"Set the blockquote's direction",options:["vertical","horizontal"],control:{type:"radio"},required:!0},gridCount:{table:{category:"Blockquote grid settings",defaultValue:{summary:"vertical"}},name:"Grid count",description:"Set the number of columns per row ond desktop",options:["1","2","3"],control:{type:"radio"},required:!0}}},t=o=>`
        <toujou-blockquote-grid class="blockquote-grid" blockquote-grid-count="${o.gridCount}">
            <toujou-blockquote role="figure" class="blockquote" blockquote-direction="${o.direction}" element-design="default">
                <img slot="image" class="blockquote__image" src="https://picsum.photos/200/200" alt="quote image" />
                <blockquote slot="quote" class="blockquote__blockquote">
                    <p class="blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
                </blockquote>
                <figcaption slot="author" class="blockquote__author">Jack Handey</figcaption>
            </toujou-blockquote>

            <toujou-blockquote role="figure" class="blockquote" blockquote-direction="${o.direction}" element-design="default">
                <img slot="image" class="blockquote__image" src="https://picsum.photos/200/200" alt="quote image" />
                <blockquote slot="quote" class="blockquote__blockquote">
                    <p class="blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
                </blockquote>
                <figcaption slot="author" class="blockquote__author">Jack Handey</figcaption>
            </toujou-blockquote>

            <toujou-blockquote role="figure" class="blockquote" blockquote-direction="${o.direction}" element-design="default">
                <img slot="image" class="blockquote__image" src="https://picsum.photos/200/200" alt="quote image" />
                <blockquote slot="quote" class="blockquote__blockquote">
                    <p class="blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
                </blockquote>
                <figcaption slot="author" class="blockquote__author">Jack Handey</figcaption>
            </toujou-blockquote>

            <toujou-blockquote role="figure" class="blockquote" blockquote-direction="${o.direction}" element-design="default">
                <img slot="image" class="blockquote__image" src="https://picsum.photos/200/200" alt="quote image" />
                <blockquote slot="quote" class="blockquote__blockquote">
                    <p class="blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
                </blockquote>
                <figcaption slot="author" class="blockquote__author">Jack Handey</figcaption>
            </toujou-blockquote>
        </toujou-blockquote-grid>
    `,a=o=>`
        <main>
            ${t(o)}

            <section class="chapter" background-color="primary">
                ${t(o)}
            </section>
        </main>
    `,e=a.bind({});e.args={gridCount:"1",direction:"vertical"};var c,u,i;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`(args: BlockquoteGridStoryProps) => {
  return \`
        <main>
            \${blockquoteGridBlock(args)}

            <section class="chapter" background-color="primary">
                \${blockquoteGridBlock(args)}
            </section>
        </main>
    \`;
}`,...(i=(u=e.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const s=["ToujouBlockquoteGrid"];export{e as ToujouBlockquoteGrid,s as __namedExportsOrder,l as default};
