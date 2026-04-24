const o="Jetzt 30% Rabatt",c={title:"COMPONENTS/Chip",argTypes:{bgColor:{table:{category:"Chip Settings",defaultValue:{summary:"primary-very-light"}},name:"Background color",description:"Set the chip's background-color",options:["transparent","primary","primary-light","primary-very-light","secondary","secondary-light","secondary-very-light","font","font-light","font-very-light","success","warning","error"],control:{type:"select"},required:!0},borderRadius:{table:{category:"Chip Settings",defaultValue:{summary:"small"}},name:"Border radius",description:"Set the chip's border-radius",options:["none","small","medium","round"],control:{type:"select"},required:!0},size:{table:{category:"Chip Settings",defaultValue:{summary:"small"}},name:"Size",description:"Set the chip's size",options:["extra-small","small","normal"],control:{type:"select"},required:!0},isClickable:{table:{category:"Chip Settings",defaultValue:{summary:"false"}},name:"Is clickable",description:"Set if the chip is clickable or not",control:{type:"boolean"},required:!0},hasIcon:{table:{category:"Chip Settings",defaultValue:{summary:"false"}},name:"With icon",description:"Toggle the chip's icon visibility",control:{type:"boolean"},required:!0},iconPosition:{table:{category:"Chip Settings",defaultValue:{summary:"false"}},name:"Icon position",description:"Set the icon on the right or left side of the chip",options:["left","right"],control:{type:"radio"},required:!0},isUppercase:{table:{category:"Chip Settings",defaultValue:{summary:"false"}},name:"Is uppercase",description:"Set the chip's text to all uppercase",control:{type:"boolean"},required:!0}}},a=e=>{const t=document.createElement("toujou-chip");return e.hasIcon==="true"||e.hasIcon===!0?(t.innerHTML=`<toujou-icon class="icon chip__icon" icon-name="home"></toujou-icon> ${o}`,t.setAttribute("chip-icon-position",e.iconPosition)):t.textContent=o,t.classList.add("chip"),t.setAttribute("chip-bg-color",e.bgColor),t.setAttribute("chip-border-radius",e.borderRadius),t.setAttribute("chip-size",e.size),(e.isClickable==="true"||e.isClickable===!0)&&t.setAttribute("is-clickable",""),(e.isUppercase==="true"||e.isUppercase===!0)&&t.setAttribute("is-uppercase",""),t},i=a.bind({});i.args={bgColor:"primary-very-light",borderRadius:"small",size:"small",isClickable:!1,hasIcon:!1,iconPosition:"left",isUppercase:!1};var r,s,n;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`(args: ChipStoryProps) => {
  // @ts-ignore
  const toujouChip = document.createElement('toujou-chip');

  // ICON
  if (args.hasIcon === 'true' || args.hasIcon === true) {
    toujouChip.innerHTML = \`<toujou-icon class="icon chip__icon" icon-name="home"></toujou-icon> \${DEFAULT_BUTTON_TEXT}\`;
    toujouChip.setAttribute(\`chip-icon-position\`, args.iconPosition);
  } else {
    toujouChip.textContent = DEFAULT_BUTTON_TEXT;
  }

  // CLASSES
  toujouChip.classList.add('chip');

  // BG COLOR
  toujouChip.setAttribute('chip-bg-color', args.bgColor);

  // BORDER RADIUS
  toujouChip.setAttribute('chip-border-radius', args.borderRadius);

  // SIZE
  toujouChip.setAttribute('chip-size', args.size);

  // IS CLICKABLE
  if (args.isClickable === 'true' || args.isClickable === true) {
    toujouChip.setAttribute(\`is-clickable\`, '');
  }

  // ALL CAPS
  if (args.isUppercase === 'true' || args.isUppercase === true) {
    toujouChip.setAttribute(\`is-uppercase\`, '');
  }
  return toujouChip;
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const u=["Chip"];export{i as Chip,u as __namedExportsOrder,c as default};
