import{T as s}from"./badgeCustomConfig-e7a687d5.js";import{M as r}from"./blockquote.docs-8d7f13ad.js";import"./jsx-runtime-ac05983f.js";import"./index-e0ddb630.js";import"./_commonjsHelpers-87174ba5.js";import"./index-a9a8c754.js";const q={title:"COMPONENTS/Blockquote",parameters:{badges:[s.DONE],docs:{page:r}},argTypes:{direction:{table:{category:"Blockquote settings",defaultValue:{summary:"vertical"}},name:"Direction",description:"Set the blockquote's direction",options:["vertical","horizontal"],control:{type:"radio"},defaultValue:["vertical"],required:!0},elementDesign:{table:{category:"Blockquote settings",defaultValue:{summary:"default"}},name:"Element design",description:"Set the blockquote's element design",options:["default","primary","secondary","inverted"],control:{type:"radio"},defaultValue:["default"],required:!0}},tags:["autodocs"]},l=o=>`
        <toujou-blockquote role="figure" class="blockquote" blockquote-direction="${o.direction}" element-design="${o.elementDesign}">
            <img slot="image" class="blockquote__image" src="https://picsum.photos/200/200" alt="quote image" />
            <blockquote slot="quote" class="blockquote__blockquote">
                <p class="blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
            </blockquote>
            <figcaption slot="author" class="blockquote__author">Jack Handey</figcaption>
        </toujou-blockquote>
    `,e=l.bind({});e.args={direction:"vertical",elementDesign:"default"};var t,a,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`(args: BlockquoteStoryProps) => {
  return \`
        <toujou-blockquote role="figure" class="blockquote" blockquote-direction="\${args.direction}" element-design="\${args.elementDesign}">
            <img slot="image" class="blockquote__image" src="https://picsum.photos/200/200" alt="quote image" />
            <blockquote slot="quote" class="blockquote__blockquote">
                <p class="blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
            </blockquote>
            <figcaption slot="author" class="blockquote__author">Jack Handey</figcaption>
        </toujou-blockquote>
    \`;
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const k=["Blockquote"];export{e as Blockquote,k as __namedExportsOrder,q as default};
//# sourceMappingURL=blockquote.stories-c4f62f80.js.map
