import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as d}from"./index-OMI9gaHG.js";import"./iframe-Bigycsh8.js";import"./preload-helper-C1FmrZbK.js";function s(o){const e={code:"code",h1:"h1",h2:"h2",h4:"h4",hr:"hr",p:"p",pre:"pre",...d(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"snackbar",children:"snackbar"}),`
`,n.jsxs(e.p,{children:["| This is a copy of the documentation that we can find on the ",n.jsx(e.code,{children:"toujou-snackbar"})," component"]}),`
`,n.jsxs(e.p,{children:["| ⚠️ I noticed there is an error. The event should be ",n.jsx(e.code,{children:"toujou-add-snackbar"}),", not ",n.jsx(e.code,{children:"add-snackbar"}),` like on the documentation! |
|: --------------------------------------------------------------------|`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"💻 COPY"}),`
`,n.jsx(e.h1,{id:"toujou-snackbar",children:"toujou-snackbar"}),`
`,n.jsx(e.p,{children:"The toujou snackbar element is a way to provide brief messages / acknowledgements to the user."}),`
`,n.jsx(e.p,{children:"It may or may not require an action from the user."}),`
`,n.jsxs(e.p,{children:["We can customize the ",n.jsx(e.code,{children:"toujou-snackbar"})," type ('auto' or 'action'), message, duration and button properties, and use it with one of the available variants ('success', 'warning', 'error', 'info')."]}),`
`,n.jsxs(e.h2,{id:"add-snackbar-event",children:[n.jsx(e.code,{children:"add-snackbar"})," event"]}),`
`,n.jsxs(e.p,{children:["The toujou-snackbar element is triggered via the ",n.jsx(e.code,{children:"add-snackbar"}),` custom event (which can be dispatch by any other elements).
The `,n.jsx(e.code,{children:"add-snackbar"})," event needs:"]}),`
`,n.jsxs(e.p,{children:[`| Property | Type | Description | Accepted Values | Default | Required by |
|----------|------|-------------|-----------------|---------|-------------|
| `,n.jsx(e.code,{children:"message"}),` | String | Text that will be displayed in the snackbar | - | - | Always |
| `,n.jsx(e.code,{children:"type"}),` | String | This defines if the snackbar needs action from the user of if is temporary | 'action', 'auto' | - | always |
| `,n.jsx(e.code,{children:"buttonText"}),` | String | Defines the text on the button | - | 'OK' | action' |
| `,n.jsx(e.code,{children:"duration"}),` | Number | Number of milliseconds to show the snackbar | - | 3000 | 'auto' |
| `,n.jsx(e.code,{children:"variant"})," | String | Name of variant to use | 'success', 'warning', 'error', 'info' | - | - |"]}),`
`,n.jsxs(e.h2,{id:"example-of-add-snackbar-custom-events",children:["Example of ",n.jsx(e.code,{children:"add-snackbar"})," custom events"]}),`
`,n.jsx(e.h4,{id:"auto-snackbar",children:"'Auto' Snackbar."}),`
`,n.jsx(e.p,{children:"'Auto' Snackbars are dismissed automatically after a certain amount of time. The suggested values are between 3 and 10 seconds."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const addSnackbarEvent = new CustomEvent('add-snackbar', {
   bubbles: true,
   composed: true,
   detail: {
      message: \`welcome to the bonus page!\`,
      type: 'auto',
      duration: 4000,
      variant: 'success'
   }
})
`})}),`
`,n.jsx(e.h4,{id:"action-snackbar",children:"'Action' Snackbar."}),`
`,n.jsx(e.p,{children:"'Action' Snackbars are not dismissed automatically. The user needs to take action to dismiss them."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const addSnackbarEvent = new CustomEvent('add-snackbar', {
   bubbles: true,
   composed: true,
   detail: {
      message: \`Settings saved!\`,
      type: 'action',
      buttonText: 'Dismiss'
   }
})
`})}),`
`,n.jsx(e.h2,{id:"toujou-snackbar-custom-css-properties",children:"toujou-snackbar custom css properties"}),`
`,n.jsx(e.p,{children:"We can style the toujou-snackbar element by using custom css properties"}),`
`,n.jsxs(e.p,{children:["Style the ",n.jsx(e.code,{children:"toujou-snackbar"})," element:"]}),`
`,n.jsxs(e.p,{children:[`| Property | Description | Default |
|----------|-------------|---------|
| --toujou-snackbar-bg-color | Set `,n.jsx(e.code,{children:"background-color"}),` of the element | #2c2c2c |
| --toujou-snackbar-border | Set `,n.jsx(e.code,{children:"border"}),` of the element | 1px solid --bg-color |
| --toujou-snackbar-display | Set `,n.jsx(e.code,{children:"display"}),` of the element | flex |
| --toujou-snackbar-width | Set `,n.jsx(e.code,{children:"width"}),` of the element | calc(100% - 2rem) |
| --toujou-snackbar-max-width | Set `,n.jsx(e.code,{children:"max-width"}),` of the element | 640px |
| --toujou-snackbar-position | Set `,n.jsx(e.code,{children:"position"}),` of the element | fixed |
| --toujou-snackbar-bottom | Set `,n.jsx(e.code,{children:"bottom"}),` of the element | 1rem |
| --toujou-snackbar-left | Set `,n.jsx(e.code,{children:"left"}),` of the element | 1rem |
| --toujou-snackbar-padding | Set `,n.jsx(e.code,{children:"padding"}),` of the element | 1rem |
| --toujou-snackbar-border-radius | Set `,n.jsx(e.code,{children:"border-radius"}),` of the element | .25rem |
| --toujou-snackbar-z-index | Set `,n.jsx(e.code,{children:"z-index"}),` of the element | 100 |
| --toujou-snackbar-transform | Set `,n.jsx(e.code,{children:"transform"}),` of the element | translateY(calc(100% - 1rem)) |
| --toujou-snackbar-opacity | Set `,n.jsx(e.code,{children:"opacity"}),` of the element | 0 |
| --toujou-snackbar-transition | Set `,n.jsx(e.code,{children:"transition"})," of the element | all .25s ease-out |"]}),`
`,n.jsxs(e.p,{children:["Style the ",n.jsx(e.code,{children:"toujou-snackbar[visible]"}),":"]}),`
`,n.jsxs(e.p,{children:[`| Property | Description | Default |
|----------|-------------|---------|
| --toujou-snackbar-visible-transform | Set `,n.jsx(e.code,{children:"transform"})," of the element with ",n.jsx(e.code,{children:"visible"}),` attribute | translateY(0) |
| --toujou-snackbar-visible-opacity | Set `,n.jsx(e.code,{children:"opacity"})," of the element with ",n.jsx(e.code,{children:"visible"})," attribute | 1 |"]}),`
`,n.jsxs(e.p,{children:["Style the ",n.jsx(e.code,{children:".snackbar__message"})," inside the ",n.jsx(e.code,{children:"toujou-snackbar"})," element"]}),`
`,n.jsxs(e.p,{children:[`| Property | Description | Default |
|----------|-------------|---------|
| --toujou-snackbar-message-grow | Set `,n.jsx(e.code,{children:"flex-grow"})," of the ",n.jsx(e.code,{children:".snackbar__message"}),` | 1 |
| --toujou-snackbar-message-color | Set `,n.jsx(e.code,{children:"color"})," of the ",n.jsx(e.code,{children:".snackbar__message"}),` | white |
| --toujou-snackbar-message-margin | Set `,n.jsx(e.code,{children:"margin"})," of the ",n.jsx(e.code,{children:".snackbar__message"}),` | 0 |
| --toujou-snackbar-message-padding | Set `,n.jsx(e.code,{children:"padding"})," of the ",n.jsx(e.code,{children:".snackbar__message"})," | 0 1rem 0 0 |"]}),`
`,n.jsxs(e.p,{children:["Style the ",n.jsx(e.code,{children:".snackbar__button"})," inside the ",n.jsx(e.code,{children:"toujou-snackbar"})," element"]}),`
`,n.jsxs(e.p,{children:[`| Property | Description | Default |
|----------|-------------|---------|
| --toujou-snackbar-button-border | Set `,n.jsx(e.code,{children:"border"})," of the ",n.jsx(e.code,{children:".snackbar__button"}),` | none |
| --toujou-snackbar-button-bg | Set `,n.jsx(e.code,{children:"background"})," of the ",n.jsx(e.code,{children:".snackbar__button"}),` | none |
| --toujou-snackbar-button-font-size | Set `,n.jsx(e.code,{children:"font-size"})," of the ",n.jsx(e.code,{children:".snackbar__button"}),` | .875rem |
| --toujou-snackbar-button-text-transform | Set `,n.jsx(e.code,{children:"text-transform"})," of the ",n.jsx(e.code,{children:".snackbar__button"}),` | uppercase |
| --toujou-snackbar-button-color| Set `,n.jsx(e.code,{children:"color"})," of the ",n.jsx(e.code,{children:".snackbar__button"}),` | --primary-color |
| --toujou-snackbar-button-margin | Set `,n.jsx(e.code,{children:"margin"})," of the ",n.jsx(e.code,{children:".snackbar__button"}),` | 0 |
| --toujou-snackbar-button-outline | Set `,n.jsx(e.code,{children:"outline"})," of the ",n.jsx(e.code,{children:".snackbar__button"})," | none |"]}),`
`,n.jsxs(e.p,{children:["Style the ",n.jsx(e.code,{children:".snackbar__button:hover"})," inside the ",n.jsx(e.code,{children:"toujou-snackbar"})," element"]}),`
`,n.jsxs(e.p,{children:[`| Property | Description | Default |
|----------|-------------|---------|
| --toujou-snackbar-button-hover-cursor | Set `,n.jsx(e.code,{children:"cursor"})," of the ",n.jsx(e.code,{children:".snackbar__button:hover"}),` | pointer |
| --toujou-snackbar-button-hover-opacity | Set `,n.jsx(e.code,{children:"opacity"})," of the ",n.jsx(e.code,{children:".snackbar__button:hover"})," | .75 |"]}),`
`,n.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"toujou-snackbar"})," element has 5 variants: 'default', 'success', 'warning', 'error' and 'info'."]}),`
`,n.jsxs(e.p,{children:["To choose the variant you want to use you just need to add the ",n.jsx(e.code,{children:"variant"})," property to the ",n.jsx(e.code,{children:"add-snackbar"})," custom event."]}),`
`,n.jsxs(e.p,{children:["If there is no ",n.jsx(e.code,{children:"variant"})," property, the default variant will be used with the element's default styles."]}),`
`,n.jsx(e.h2,{id:"variant-styles",children:"Variant styles"}),`
`,n.jsx(e.p,{children:"You can also customize some variant styles using custom CSS variables."}),`
`,n.jsx(e.h4,{id:"success-variant",children:"Success Variant"}),`
`,n.jsx(e.p,{children:"Should be used to show a success message to the user, for instance a 'successfully saved' message."}),`
`,n.jsxs(e.p,{children:[`| Property | Description | Default |
|----------|-------------|---------|
| --toujou-snackbar-success-border | Set `,n.jsx(e.code,{children:"border"})," of the ",n.jsx(e.code,{children:"toujou-snackbar[success]"}),` | 1px solid --success-color |
| --toujou-snackbar-success-message-color | Set `,n.jsx(e.code,{children:"color"})," of the ",n.jsx(e.code,{children:"toujou-snackbar[success] .snackbar__message"}),` | --success-color |
| --toujou-snackbar-success-button-color | Set `,n.jsx(e.code,{children:"color"})," of the ",n.jsx(e.code,{children:"toujou-snackbar[success] .snackbar__button"})," | white |"]}),`
`,n.jsx(e.h4,{id:"warning-variant",children:"Warning Variant"}),`
`,n.jsx(e.p,{children:"Should be used to show a warning message to the user, for instance a 'your consent expires tomorrow' message"}),`
`,n.jsxs(e.p,{children:[`| Property | Description | Default |
|----------|-------------|---------|
| --toujou-snackbar-warning-border | Set `,n.jsx(e.code,{children:"border"})," of the ",n.jsx(e.code,{children:"toujou-snackbar[warning]"}),` | 1px solid --warning-color |
| --toujou-snackbar-warning-message-color | Set `,n.jsx(e.code,{children:"color"})," of the ",n.jsx(e.code,{children:"toujou-snackbar[warning] .snackbar__message"}),` | --warning-color |
| --toujou-snackbar-warning-button-color | Set `,n.jsx(e.code,{children:"color"})," of the ",n.jsx(e.code,{children:"toujou-snackbar[warning] .snackbar__button"})," | white |"]}),`
`,n.jsx(e.h4,{id:"error-variant",children:"Error Variant"}),`
`,n.jsx(e.p,{children:"Should be used to show an error message to the user, for instance 'there was an error while saving your settings' message"}),`
`,n.jsxs(e.p,{children:[`| Property | Description | Default |
|----------|-------------|---------|
| --toujou-snackbar-error-border | Set `,n.jsx(e.code,{children:"border"})," of the ",n.jsx(e.code,{children:"toujou-snackbar[error]"}),` | 1px solid --error-color |
| --toujou-snackbar-error-message-color | Set `,n.jsx(e.code,{children:"color"})," of the ",n.jsx(e.code,{children:"toujou-snackbar[error] .snackbar__message"}),` | --error-color |
| --toujou-snackbar-error-button-color | Set `,n.jsx(e.code,{children:"color"})," of the ",n.jsx(e.code,{children:"toujou-snackbar[error] .snackbar__button"})," | white |"]}),`
`,n.jsx(e.h4,{id:"info-variant",children:"Info Variant"}),`
`,n.jsx(e.p,{children:"Should be used to show an information message to the user, for instance 'there is a new update available'"}),`
`,n.jsxs(e.p,{children:[`| Property | Description | Default |
|----------|-------------|---------|
| --toujou-snackbar-info-border | Set `,n.jsx(e.code,{children:"border"})," of the ",n.jsx(e.code,{children:"toujou-snackbar[info]"}),` | 1px solid #81d4fa |
| --toujou-snackbar-info-message-color | Set `,n.jsx(e.code,{children:"color"})," of the ",n.jsx(e.code,{children:"toujou-snackbar[info] .snackbar__message"}),` | #81d4fa |
| --toujou-snackbar-info-button-color | Set `,n.jsx(e.code,{children:"color"})," of the ",n.jsx(e.code,{children:"toujou-snackbar[info] .snackbar__button"})," | white |"]})]})}function u(o={}){const{wrapper:e}={...d(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(s,{...o})}):s(o)}const m={title:"COMPONENTS/Snackbar",parameters:{docs:{page:u}},argTypes:{snackbarVariant:{table:{category:"Snackbar settings",defaultValue:{summary:"info"}},name:"Snackbar variant",description:"Set the snackbar variant style",options:["info","success","warning","error"],control:{type:"radio"},required:!0},snackbarType:{table:{category:"Snackbar settings",defaultValue:{summary:"auto"}},name:"Snackbar type",description:"Set the snackbar type",options:["auto","action"],control:{type:"radio"},required:!0},snackbarDuration:{table:{category:"Snackbar settings"},name:"Snackbar duration",description:"Set the snackbar visibility duration",control:{type:"number"},required:!0}}};function l(o,e,r){return new CustomEvent("toujou-add-snackbar",{bubbles:!0,composed:!0,detail:{message:"welcome to the bonus page!",type:e,buttonText:"ok",duration:r,variant:o}})}const h=o=>(window.addEventListener("click",e=>{const r=e.target;r.getAttribute("id")==="snackbarTriggerButton"&&r.dispatchEvent(l(o.snackbarVariant,o.snackbarType,o.snackbarDuration))}),`
        <button id="snackbarTriggerButton" class="button">Show snackbar</button>
        <toujou-snackbar class="snackbar" visible aria-live="assertive" tabindex="-1"></toujou-snackbar>
    `),t=h.bind({});t.args={snackbarVariant:"info",snackbarType:"auto",snackbarDuration:4e3};var a,c,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`(args: SnackbarStoryProps) => {
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
}`,...(i=(c=t.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const p=["Snackbar"];export{t as Snackbar,p as __namedExportsOrder,m as default};
