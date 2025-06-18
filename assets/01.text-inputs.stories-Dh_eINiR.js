import{T as o}from"./badgeCustomConfig-DUXiHpL4.js";import{M as u}from"./form.docs-Dn0kwJ_D.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-DpH9cx3q.js";import"./index-DO8khQO4.js";import"./_commonjsHelpers-Cpj98o6Y.js";const b={title:"COMPONENTS/Forms",parameters:{badges:[o.DONE],docs:{page:u}},argTypes:{state:{table:{category:"Inputs settings",defaultValue:{summary:"default"}},name:"Input state",description:"Set the visible input state",options:["default","disabled","success","error"],control:{type:"radio"},required:!0}}},p=e=>{const r=e.state==="disabled"?"disabled":"";return`
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

            <toujou-input-group class="input-group input-group--text input-group--required ${e.state==="error"?"input-group--has-error":""} ${e.state==="success"?"input-group--has-success":""} ${e.state==="disabled"?"input-group--disabled":""}">
                <label for="testform-1000091-text-1" class="input-label">Nice label</label>
                <span class="input-description">This is a description</span>
                <input placeholder="This is a placeholder"
                       required="required"
                       data-pristine-required-message-de="The given subject was empty."
                       class="input input--text"
                       id="testform-1000091-text-1"
                       type="text" name="tx_form_formframework[testform-1000091][text-1]"
                       value=""
                       ${r}>
                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>

            <toujou-input-group class="input-group input-group--email input-group--email input-group--required ${e.state==="error"?"input-group--has-error":""} ${e.state==="success"?"input-group--has-success":""} ${e.state==="disabled"?"input-group--disabled":""}">
                <label for="testform-1000091-email-1" class="input-label">Email address</label>
                <span class="input-description">This is a description</span>
                <input placeholder="This is a placeholder"
                       required="required"
                       data-pristine-required-message="The given subject was empty."
                       class="form-control input input--text"
                       id="testform-1000091-email-1"
                       type="email"
                       name="tx_form_formframework[testform-1000091][email-1]"
                       value=""
                       ${r}>
                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>

            <toujou-input-group class="input-group input-group--telephone input-group--required ${e.state==="error"?"input-group--has-error":""} ${e.state==="success"?"input-group--has-success":""} ${e.state==="disabled"?"input-group--disabled":""}">
                <label for="testform-1000091-telephone-1" class="input-label">Telephone number</label>
                <span class="input-description">This is a description</span>
                <input placeholder="This is a placeholder"
                       required="required"
                       data-pristine-required-message="The given subject was empty."
                       class=" form-control input input--text"
                       id="testform-1000091-telephone-1"
                       type="tel"
                       name="tx_form_formframework[testform-1000091][telephone-1]"
                       value=""
                       ${r}>
                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>

            <toujou-input-group class="input-group input-group--url input-group--required ${e.state==="error"?"input-group--has-error":""} ${e.state==="success"?"input-group--has-success":""} ${e.state==="disabled"?"input-group--disabled":""}">
                <label for="testform-1000091-url-1" class="input-label">URL</label>
                <span class="input-description">This is a description</span>
                <input placeholder="This is a placeholder"
                       required="required"
                       data-pristine-required-message="The given subject was empty."
                       class=" form-control input input--text"
                       id="testform-1000091-url-1"
                       type="url"
                       name="tx_form_formframework[testform-1000091][url-1]"
                       value=""
                       ${r}>
                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>

            <toujou-input-group class="input-group input-group--number input-group--required ${e.state==="error"?"input-group--has-error":""} ${e.state==="success"?"input-group--has-success":""} ${e.state==="disabled"?"input-group--disabled":""}">
                <label for="testform-1000091-number-1" class="input-label">Number</label>
                <span class="input-description">This is a description</span>
                <input placeholder="This is a placeholder"
                       step="1"
                       required="required"
                       data-pristine-required-message="The given subject was empty."
                       class=" form-control input input--text"
                       id="testform-1000091-number-1"
                       type="number"
                       name="tx_form_formframework[testform-1000091][number-1]"
                       value=""
                       ${r}>
                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>
        </form>
    `},s=p.bind({});s.args={state:"default"};var t,i,a;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`(args: ToujouTextInputsStoryProps) => {
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

            <toujou-input-group class="input-group input-group--text input-group--required \${args.state === 'error' ? 'input-group--has-error' : ''} \${args.state === 'success' ? 'input-group--has-success' : ''} \${args.state === 'disabled' ? 'input-group--disabled' : ''}">
                <label for="testform-1000091-text-1" class="input-label">Nice label</label>
                <span class="input-description">This is a description</span>
                <input placeholder="This is a placeholder"
                       required="required"
                       data-pristine-required-message-de="The given subject was empty."
                       class="input input--text"
                       id="testform-1000091-text-1"
                       type="text" name="tx_form_formframework[testform-1000091][text-1]"
                       value=""
                       \${disabledAttribute}>
                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>

            <toujou-input-group class="input-group input-group--email input-group--email input-group--required \${args.state === 'error' ? 'input-group--has-error' : ''} \${args.state === 'success' ? 'input-group--has-success' : ''} \${args.state === 'disabled' ? 'input-group--disabled' : ''}">
                <label for="testform-1000091-email-1" class="input-label">Email address</label>
                <span class="input-description">This is a description</span>
                <input placeholder="This is a placeholder"
                       required="required"
                       data-pristine-required-message="The given subject was empty."
                       class="form-control input input--text"
                       id="testform-1000091-email-1"
                       type="email"
                       name="tx_form_formframework[testform-1000091][email-1]"
                       value=""
                       \${disabledAttribute}>
                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>

            <toujou-input-group class="input-group input-group--telephone input-group--required \${args.state === 'error' ? 'input-group--has-error' : ''} \${args.state === 'success' ? 'input-group--has-success' : ''} \${args.state === 'disabled' ? 'input-group--disabled' : ''}">
                <label for="testform-1000091-telephone-1" class="input-label">Telephone number</label>
                <span class="input-description">This is a description</span>
                <input placeholder="This is a placeholder"
                       required="required"
                       data-pristine-required-message="The given subject was empty."
                       class=" form-control input input--text"
                       id="testform-1000091-telephone-1"
                       type="tel"
                       name="tx_form_formframework[testform-1000091][telephone-1]"
                       value=""
                       \${disabledAttribute}>
                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>

            <toujou-input-group class="input-group input-group--url input-group--required \${args.state === 'error' ? 'input-group--has-error' : ''} \${args.state === 'success' ? 'input-group--has-success' : ''} \${args.state === 'disabled' ? 'input-group--disabled' : ''}">
                <label for="testform-1000091-url-1" class="input-label">URL</label>
                <span class="input-description">This is a description</span>
                <input placeholder="This is a placeholder"
                       required="required"
                       data-pristine-required-message="The given subject was empty."
                       class=" form-control input input--text"
                       id="testform-1000091-url-1"
                       type="url"
                       name="tx_form_formframework[testform-1000091][url-1]"
                       value=""
                       \${disabledAttribute}>
                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>

            <toujou-input-group class="input-group input-group--number input-group--required \${args.state === 'error' ? 'input-group--has-error' : ''} \${args.state === 'success' ? 'input-group--has-success' : ''} \${args.state === 'disabled' ? 'input-group--disabled' : ''}">
                <label for="testform-1000091-number-1" class="input-label">Number</label>
                <span class="input-description">This is a description</span>
                <input placeholder="This is a placeholder"
                       step="1"
                       required="required"
                       data-pristine-required-message="The given subject was empty."
                       class=" form-control input input--text"
                       id="testform-1000091-number-1"
                       type="number"
                       name="tx_form_formframework[testform-1000091][number-1]"
                       value=""
                       \${disabledAttribute}>
                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>
        </form>
    \`;
}`,...(a=(i=s.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const f=["TextInputs"];export{s as TextInputs,f as __namedExportsOrder,b as default};
