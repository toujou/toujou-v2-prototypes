const b={title:"COMPONENTS/Snackbar",argTypes:{snackbarVariant:{table:{category:"Snackbar settings",defaultValue:{summary:"info"}},name:"Snackbar variant",description:"Set the snackbar variant style",options:["info","success","warning","error"],control:{type:"radio"},required:!0},snackbarType:{table:{category:"Snackbar settings",defaultValue:{summary:"auto"}},name:"Snackbar type",description:"Set the snackbar type",options:["auto","action"],control:{type:"radio"},required:!0},snackbarDuration:{table:{category:"Snackbar settings"},name:"Snackbar duration",description:"Set the snackbar visibility duration",control:{type:"number"},required:!0}}};function o(a,e,r){return new CustomEvent("toujou-add-snackbar",{bubbles:!0,composed:!0,detail:{message:"welcome to the bonus page!",type:e,buttonText:"ok",duration:r,variant:a}})}const i=a=>(window.addEventListener("click",e=>{const r=e.target;r.getAttribute("id")==="snackbarTriggerButton"&&r.dispatchEvent(o(a.snackbarVariant,a.snackbarType,a.snackbarDuration))}),`
        <button id="snackbarTriggerButton" class="button">Show snackbar</button>
        <toujou-snackbar class="snackbar" visible aria-live="assertive" tabindex="-1"></toujou-snackbar>
    `),t=i.bind({});t.args={snackbarVariant:"info",snackbarType:"auto",snackbarDuration:4e3};var n,s,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`(args: SnackbarStoryProps) => {
  window.addEventListener('click', (event: Event) => {
    const clickTarget = event.target as HTMLElement;
    if (clickTarget.getAttribute('id') === "snackbarTriggerButton") {
      clickTarget.dispatchEvent(createEvent(args.snackbarVariant, args.snackbarType, args.snackbarDuration));
    }
  });
  return \`
        <button id="snackbarTriggerButton" class="button">Show snackbar</button>
        <toujou-snackbar class="snackbar" visible aria-live="assertive" tabindex="-1"></toujou-snackbar>
    \`;
}`,...(c=(s=t.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const u=["Snackbar"];export{t as Snackbar,u as __namedExportsOrder,b as default};
