import{T as i}from"./badgeCustomConfig-DUXiHpL4.js";import{M as p}from"./form.docs-DkrseQBQ.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-BcJeOPUZ.js";import"./index-B6tQ6Rz7.js";import"./_commonjsHelpers-Cpj98o6Y.js";const f={title:"COMPONENTS/Forms",parameters:{badges:[i.DONE],docs:{page:p}},argTypes:{state:{table:{category:"Inputs settings",defaultValue:{summary:"default"}},name:"Input state",description:"Set the visible input state",options:["default","disabled","success","error"],control:{type:"radio"},required:!0}}},u=t=>{const o=t.state==="disabled"?"disabled":"";return`
        <style>
            body {
                background-color: var(--color-bg);
            }
        </style>
        <form
            enctype="multipart/form-data"
            method="post"
            class="form"
            id="testform-1000091"
            action="#"
            novalidate="true">

            <toujou-input-group class="input-group input-group--textarea ${t.state==="error"?"input-group--has-error":""} ${t.state==="success"?"input-group--has-success":""} ${t.state==="disabled"?"input-group--disabled":""}">
                <label class="input-label" for="testform-1000091-textarea-1">Textarea</label>
                <span class="input-description">This is a description</span>
                <textarea placeholder="This is a placeholder"
                          required="required"
                          data-pristine-required-message-de="The given subject was empty."
                          class="form-control input input--textarea"
                          id="testform-1000091-textarea-1"
                          name="tx_form_formframework[testform-1000091][textarea-1]"
                          ${o}></textarea>
                <span class="pristine-error form__error">The given subject was empty.</span>
            </toujou-input-group>

        </form>
    `},e=u.bind({});e.args={state:"default"};var r,a,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`(args: ToujouTextareaStoryProps) => {
  const disabledAttribute = args.state === 'disabled' ? 'disabled' : '';
  return \`
        <style>
            body {
                background-color: var(--color-bg);
            }
        </style>
        <form
            enctype="multipart/form-data"
            method="post"
            class="form"
            id="testform-1000091"
            action="#"
            novalidate="true">

            <toujou-input-group class="input-group input-group--textarea \${args.state === 'error' ? 'input-group--has-error' : ''} \${args.state === 'success' ? 'input-group--has-success' : ''} \${args.state === 'disabled' ? 'input-group--disabled' : ''}">
                <label class="input-label" for="testform-1000091-textarea-1">Textarea</label>
                <span class="input-description">This is a description</span>
                <textarea placeholder="This is a placeholder"
                          required="required"
                          data-pristine-required-message-de="The given subject was empty."
                          class="form-control input input--textarea"
                          id="testform-1000091-textarea-1"
                          name="tx_form_formframework[testform-1000091][textarea-1]"
                          \${disabledAttribute}></textarea>
                <span class="pristine-error form__error">The given subject was empty.</span>
            </toujou-input-group>

        </form>
    \`;
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const g=["TextareaInputs"];export{e as TextareaInputs,g as __namedExportsOrder,f as default};
