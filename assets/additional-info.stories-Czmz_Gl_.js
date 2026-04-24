const t={title:"COMPONENTS/Additional Info",argTypes:{noMargins:{table:{category:"Additional Info Settings"},name:"No margins",description:"Render the element without any margins",control:{type:"boolean"},required:!0}}},s=e=>`
        <p class="additional-info" ${e.noMargins?"no-margins":""}>
            <toujou-icon class="icon" icon-name="campaign" icon-size="m" icon-color="font"></toujou-icon>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, assumenda commodi corporis dicta, dolorum eos exercitationem hic!
        </p>   
    `,o=s.bind({});o.args={noMargins:!1};var i,n,a;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`(args: AdditionalInfoProps) => {
  return \`
        <p class="additional-info" \${args.noMargins ? 'no-margins' : ''}>
            <toujou-icon class="icon" icon-name="campaign" icon-size="m" icon-color="font"></toujou-icon>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, assumenda commodi corporis dicta, dolorum eos exercitationem hic!
        </p>   
    \`;
}`,...(a=(n=o.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const r=["AdditionalInfo"];export{o as AdditionalInfo,r as __namedExportsOrder,t as default};
