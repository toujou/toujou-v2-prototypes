import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as r}from"./index-C5208tH8.js";import"./iframe-r6akNsGl.js";import"./preload-helper-C1FmrZbK.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(e.h1,{id:"toujou-blockquote-grid",children:"<toujou-blockquote-grid>"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"<toujou-blockquote-grid>"})," is a custom element that renders a grid with ",o.jsx(e.code,{children:"<toujou-blockquote>"})," elements to the page."]}),`
`,o.jsx(e.h2,{id:"markup-example",children:"Markup example"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-html",children:`<toujou-blockquote-grid class="toujou-blockquote-grid" blockquote-grid-count="\${args.gridCount}">
    <toujou-blockquote role="figcaption" class="toujou-blockquote" blockquote-direction="\${args.direction}">
        <img slot="image" src="https://picsum.photos/200/200" alt="quote image" />
        <blockquote slot="quote">
            <p class="blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
        </blockquote>
        <figcaption slot="author">Jack Handey</figcaption>
    </toujou-blockquote>

    <toujou-blockquote role="figcaption" class="toujou-blockquote" blockquote-direction="\${args.direction}">
        <img slot="image" src="https://picsum.photos/200/200" alt="quote image" />
        <blockquote slot="quote">
            <p class="blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
        </blockquote>
        <figcaption slot="author">Jack Handey</figcaption>
    </toujou-blockquote>

    <toujou-blockquote role="figcaption" class="toujou-blockquote" blockquote-direction="\${args.direction}">
        <img slot="image" src="https://picsum.photos/200/200" alt="quote image" />
        <blockquote slot="quote">
            <p class="blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
        </blockquote>
        <figcaption slot="author">Jack Handey</figcaption>
    </toujou-blockquote>

    <toujou-blockquote role="figcaption" class="toujou-blockquote" blockquote-direction="\${args.direction}">
        <img slot="image" src="https://picsum.photos/200/200" alt="quote image" />
        <blockquote slot="quote">
            <p class="blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
        </blockquote>
        <figcaption slot="author">Jack Handey</figcaption>
    </toujou-blockquote>

</toujou-blockquote-grid>
`})}),`
`,o.jsx(e.h2,{id:"attributes",children:"Attributes"}),`
`,o.jsxs(e.p,{children:["This element has a single attribute (",o.jsx(e.code,{children:"blockquote-grid-count"}),") which we can customize to set the number of columns on the grid (on mobile there is always only one column)."]}),`
`,o.jsxs(e.h3,{id:"blockquote-grid-count-required",children:["blockquote-grid-count ",o.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"<toujou-blockquote>"})," must have the ",o.jsx(e.code,{children:"role"})," attribute. It must be set to ",o.jsx(e.code,{children:'role="figure"'}),"."]}),`
`,o.jsxs(e.p,{children:[`| value | Example |
|---|:---|
| 1 | `,o.jsx(e.code,{children:'<toujou-blockquote-grid blockquote-grid-count="1">'}),` |
| 2 | `,o.jsx(e.code,{children:'<toujou-blockquote-grid blockquote-grid-count="2">'}),` |
| 3 | `,o.jsx(e.code,{children:'<toujou-blockquote-grid blockquote-grid-count="3">'})," |"]})]})}function n(t={}){const{wrapper:e}={...r(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(i,{...t})}):i(t)}const b={title:"COMPONENTS/Blockquote",parameters:{docs:{page:n}},argTypes:{direction:{table:{category:"Blockquote settings",defaultValue:{summary:"vertical"}},name:"Direction",description:"Set the blockquote's direction",options:["vertical","horizontal"],control:{type:"radio"},required:!0},gridCount:{table:{category:"Blockquote grid settings",defaultValue:{summary:"vertical"}},name:"Grid count",description:"Set the number of columns per row ond desktop",options:["1","2","3"],control:{type:"radio"},required:!0}},tags:["autodocs"]},u=t=>`
        <toujou-blockquote-grid class="blockquote-grid" blockquote-grid-count="${t.gridCount}">
            <toujou-blockquote role="figure" class="blockquote" blockquote-direction="${t.direction}" element-design="default">
                <img slot="image" class="blockquote__image" src="https://picsum.photos/200/200" alt="quote image" />
                <blockquote slot="quote" class="blockquote__blockquote">
                    <p class="blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
                </blockquote>
                <figcaption slot="author" class="blockquote__author">Jack Handey</figcaption>
            </toujou-blockquote>

            <toujou-blockquote role="figure" class="blockquote" blockquote-direction="${t.direction}" element-design="default">
                <img slot="image" class="blockquote__image" src="https://picsum.photos/200/200" alt="quote image" />
                <blockquote slot="quote" class="blockquote__blockquote">
                    <p class="blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
                </blockquote>
                <figcaption slot="author" class="blockquote__author">Jack Handey</figcaption>
            </toujou-blockquote>

            <toujou-blockquote role="figure" class="blockquote" blockquote-direction="${t.direction}" element-design="default">
                <img slot="image" class="blockquote__image" src="https://picsum.photos/200/200" alt="quote image" />
                <blockquote slot="quote" class="blockquote__blockquote">
                    <p class="blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
                </blockquote>
                <figcaption slot="author" class="blockquote__author">Jack Handey</figcaption>
            </toujou-blockquote>

            <toujou-blockquote role="figure" class="blockquote" blockquote-direction="${t.direction}" element-design="default">
                <img slot="image" class="blockquote__image" src="https://picsum.photos/200/200" alt="quote image" />
                <blockquote slot="quote" class="blockquote__blockquote">
                    <p class="blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
                </blockquote>
                <figcaption slot="author" class="blockquote__author">Jack Handey</figcaption>
            </toujou-blockquote>
        </toujou-blockquote-grid>
    `,h=t=>`
        <main>
            ${u(t)}

            <section class="chapter" background-color="primary">
                ${u(t)}
            </section>
        </main>
    `,c=h.bind({});c.args={gridCount:"1",direction:"vertical"};var l,a,s;c.parameters={...c.parameters,docs:{...(l=c.parameters)==null?void 0:l.docs,source:{originalSource:`(args: BlockquoteGridStoryProps) => {
  return \`
        <main>
            \${blockquoteGridBlock(args)}

            <section class="chapter" background-color="primary">
                \${blockquoteGridBlock(args)}
            </section>
        </main>
    \`;
}`,...(s=(a=c.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const p=["ToujouBlockquoteGrid"];export{c as ToujouBlockquoteGrid,p as __namedExportsOrder,b as default};
