import{T as s}from"./badgeCustomConfig-e7a687d5.js";import{M as l}from"./button.docs-924bdf65.js";import"./jsx-runtime-689cd42e.js";import"./index-ab13a269.js";import"./_commonjsHelpers-725317a4.js";import"./index-8a890fec.js";const n="Hello world",g={title:"COMPONENTS/Button",parameters:{badges:[s.DONE],docs:{page:l}},argTypes:{buttonVariant:{table:{category:"Button Settings",defaultValue:{summary:"primary"}},name:"Button variant",description:"Set the button's variant",options:["primary","secondary","font"],control:{type:"radio"},defaultValue:["primary"],required:!0},buttonType:{table:{category:"Button Settings",defaultValue:{summary:"default"}},name:"Button type",description:"Set the button's type",options:["default","border","ghost"],control:{type:"radio"},defaultValue:["default"],required:!0},isDisabled:{table:{category:"Button Settings",defaultValue:{summary:"false"}},name:"Disabled",description:"Toggle the button disabled attribute",control:{type:"boolean"},required:!0},hasIcon:{table:{category:"Button Settings",defaultValue:{summary:"false"}},name:"Icon",description:"Toggle visibility of the button's icon",control:{type:"boolean"},required:!0},iconPosition:{table:{category:"Button Settings",defaultValue:{summary:"left"}},name:"Icon position",description:"Set the button's icon position",options:["left","right"],control:{type:"radio"},defaultValue:["left"],required:!0},size:{table:{category:"Button Settings",defaultValue:{summary:"normal"}},name:"Size",description:"Set the button text size",options:["tiny","small","normal","large"],control:{type:"radio"},defaultValue:["normal"],required:!0},isExpanded:{table:{category:"Button Settings",defaultValue:{summary:"false"}},name:"Expanded",description:"Toggle the button's width",control:{type:"boolean"},required:!0}},tags:["autodocs"]},b=t=>{let e=document.createElement("button",{is:"toujou-button"}),r="button";return e.setAttribute("class",r),e.setAttribute("button-variant",t.buttonVariant),e.setAttribute("button-type",t.buttonType),e.setAttribute("button-size",t.size),(t.isExpanded==="true"||t.isExpanded===!0)&&e.setAttribute("is-expanded",""),e.disabled=t.isDisabled==="true"||t.isDisabled===!0,t.hasIcon==="true"||t.hasIcon===!0?(e.innerHTML=`<toujou-icon class="icon button__icon" icon-name="arrow-right"></toujou-icon> ${n}`,e.setAttribute("button-icon-position",t.iconPosition)):e.textContent=n,e},o=b.bind({});o.args={buttonVariant:"primary",buttonType:"default",isDisabled:!1,hasIcon:!1,iconPosition:"left",size:"normal",isExpanded:!1};var a,i,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`(args: ButtonStoryProps) => {
  // @ts-ignore
  let buttonEl = document.createElement('button', {
    is: 'toujou-button'
  });

  // CSS CLASSES
  let buttonClasses = \`button\`;
  buttonEl.setAttribute('class', buttonClasses);
  buttonEl.setAttribute('button-variant', args.buttonVariant);
  buttonEl.setAttribute('button-type', args.buttonType);
  buttonEl.setAttribute('button-size', args.size);
  if (args.isExpanded === 'true' || args.isExpanded === true) {
    buttonEl.setAttribute('is-expanded', '');
  }
  buttonEl.disabled = args.isDisabled === 'true' || args.isDisabled === true;
  if (args.hasIcon === 'true' || args.hasIcon === true) {
    buttonEl.innerHTML = \`<toujou-icon class="icon button__icon" icon-name="arrow-right"></toujou-icon> \${DEFAULT_BUTTON_TEXT}\`;
    buttonEl.setAttribute(\`button-icon-position\`, args.iconPosition);
  } else {
    buttonEl.textContent = DEFAULT_BUTTON_TEXT;
  }
  return buttonEl;
}`,...(u=(i=o.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const E=["Button"];export{o as Button,E as __namedExportsOrder,g as default};
