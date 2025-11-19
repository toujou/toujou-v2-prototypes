import{M as a}from"./button.docs-DxnJ1Zw1.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-DUOVsmoo.js";import"./iframe-BcYeAK1P.js";import"./preload-helper-C1FmrZbK.js";const n="Hello world",y={title:"COMPONENTS/Button",parameters:{docs:{page:a}},argTypes:{buttonVariant:{table:{category:"Button Settings",defaultValue:{summary:"primary"}},name:"Button variant",description:"Set the button's variant",options:["primary","secondary","font"],control:{type:"radio"},required:!0},buttonType:{table:{category:"Button Settings",defaultValue:{summary:"default"}},name:"Button type",description:"Set the button's type",options:["default","border","ghost"],control:{type:"radio"},required:!0},isDisabled:{table:{category:"Button Settings",defaultValue:{summary:"false"}},name:"Disabled",description:"Toggle the button disabled attribute",control:{type:"boolean"},required:!0},hasIcon:{table:{category:"Button Settings",defaultValue:{summary:"false"}},name:"Icon",description:"Toggle visibility of the button's icon",control:{type:"boolean"},required:!0},iconPosition:{table:{category:"Button Settings",defaultValue:{summary:"left"}},name:"Icon position",description:"Set the button's icon position",options:["left","right"],control:{type:"radio"},required:!0},size:{table:{category:"Button Settings",defaultValue:{summary:"normal"}},name:"Size",description:"Set the button text size",options:["tiny","small","normal","large"],control:{type:"radio"},required:!0},isExpanded:{table:{category:"Button Settings",defaultValue:{summary:"false"}},name:"Expanded",description:"Toggle the button's width",control:{type:"boolean"},required:!0}}},u=t=>{let e=document.createElement("button",{is:"toujou-button"});return e.setAttribute("class","button"),e.setAttribute("button-variant",t.buttonVariant),e.setAttribute("button-type",t.buttonType),e.setAttribute("button-size",t.size),(t.isExpanded==="true"||t.isExpanded===!0)&&e.setAttribute("is-expanded",""),e.disabled=t.isDisabled==="true"||t.isDisabled===!0,t.hasIcon==="true"||t.hasIcon===!0?(e.innerHTML=`<toujou-icon class="icon" icon-name="arrow-right"></toujou-icon> ${n}`,e.setAttribute("button-icon-position",t.iconPosition)):e.textContent=n,e},o=u.bind({});o.args={buttonVariant:"primary",buttonType:"default",isDisabled:!1,hasIcon:!1,iconPosition:"left",size:"normal",isExpanded:!1};var i,s,r;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`(args: ButtonStoryProps) => {
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
    buttonEl.innerHTML = \`<toujou-icon class="icon" icon-name="arrow-right"></toujou-icon> \${DEFAULT_BUTTON_TEXT}\`;
    buttonEl.setAttribute(\`button-icon-position\`, args.iconPosition);
  } else {
    buttonEl.textContent = DEFAULT_BUTTON_TEXT;
  }
  return buttonEl;
}`,...(r=(s=o.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const g=["Button"];export{o as Button,g as __namedExportsOrder,y as default};
