import{T as s}from"./badgeCustomConfig-e7a687d5.js";import{M as i}from"./blockquote.docs-d85c1dad.js";import"./jsx-runtime-689cd42e.js";import"./index-ab13a269.js";import"./_commonjsHelpers-725317a4.js";import"./index-8a890fec.js";const q={title:"COMPONENTS/Blockquote",parameters:{badges:[s.DONE],docs:{page:i}},argTypes:{direction:{table:{category:"Blockquote settings",defaultValue:{summary:"vertical"}},name:"Direction",description:"Set the blockquote's direction",options:["vertical","horizontal"],control:{type:"radio"},defaultValue:["vertical"],required:!0},elementDesign:{table:{category:"Blockquote settings",defaultValue:{summary:"default"}},name:"Element design",description:"Set the blockquote's element design",options:["default","primary","secondary","inverted"],control:{type:"radio"},defaultValue:["default"],required:!0}},tags:["autodocs"]},t=e=>`
        <toujou-blockquote role="figure" class="blockquote" blockquote-direction="${e.direction}" element-design="${e.elementDesign}">
            <img slot="image" class="blockquote__image" src="https://picsum.photos/200/200" alt="quote image" />
            <blockquote slot="quote" class="blockquote__blockquote">
                <div class="blockquote__content">
                    <p>Before you criticize someone, <a href="#">you should walk a mile</a> in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
                </div>
            </blockquote>
            <figcaption slot="author" class="blockquote__author">Jack Handey</figcaption>
        </toujou-blockquote>
    `,n=e=>`
        ${t(e)}

        <section class="chapter" background-color="primary">
            ${t(e)}
        </section>
    `,o=n.bind({});o.args={direction:"vertical",elementDesign:"default"};var r,a,c;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`(args: BlockquoteStoryProps) => {
  return \`
        \${blockquoteComponent(args)}

        <section class="chapter" background-color="primary">
            \${blockquoteComponent(args)}
        </section>
    \`;
}`,...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const g=["Blockquote"];export{o as Blockquote,g as __namedExportsOrder,q as default};
