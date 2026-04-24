const a={title:"COMPONENTS/Divider",argTypes:{dividerType:{table:{category:"Divider Settings",defaultValue:{summary:"primary"}},name:"Divider type",description:"Choose between the different divider types",options:["background","primary","secondary","grey"],control:{type:"radio"},required:!0}}},s=t=>`
        <hr class="divider" divider-type="${t.dividerType}">
    `,e=s.bind({});e.args={dividerType:"primary"};var r,i,d;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`(args: DividerStoryProps) => {
  return \`
        <hr class="divider" divider-type="\${args.dividerType}">
    \`;
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const o=["Divider"];export{e as Divider,o as __namedExportsOrder,a as default};
