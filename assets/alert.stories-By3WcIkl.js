const s={title:"COMPONENTS/Alert",argTypes:{alertVariant:{name:"Alert variant",description:"Set the alert variant",options:["primary","secondary","warning","error","success","info"],control:{type:"radio"},table:{category:"Alert Settings",defaultValue:{summary:"primary"}}}}},r={args:{alertVariant:"primary"},render:n=>`
    <toujou-alert
      class="alert"
      role="alert"
      alert-variant="${n.alertVariant}"
    >
      This is an alert
    </toujou-alert>
  `};var a,e,t;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    alertVariant: 'primary'
  },
  render: args => \`
    <toujou-alert
      class="alert"
      role="alert"
      alert-variant="\${args.alertVariant}"
    >
      This is an alert
    </toujou-alert>
  \`
}`,...(t=(e=r.parameters)==null?void 0:e.docs)==null?void 0:t.source}}};const l=["Alert"];export{r as Alert,l as __namedExportsOrder,s as default};
