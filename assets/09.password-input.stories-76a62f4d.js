import{T as i}from"./badgeCustomConfig-e7a687d5.js";import{M as u}from"./form.docs-97b78f8d.js";import"./jsx-runtime-ac05983f.js";import"./index-e0ddb630.js";import"./_commonjsHelpers-87174ba5.js";import"./index-a9a8c754.js";const m={title:"COMPONENTS/Forms",parameters:{badges:[i.DONE],docs:{page:u}},argTypes:{state:{table:{category:"Inputs settings",defaultValue:{summary:"default"}},name:"Input state",description:"Set the visible input state",options:["default","disabled","success","error"],control:{type:"radio"},defaultValue:["default"],required:!0}},tags:["autodocs"]},n=o=>{const a=o.state==="disabled"?"disabled":"";return`
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

            <toujou-input-group class="input-group input-group--text input-group--required ${o.state==="error"?"input-group--has-error":""} ${o.state==="success"?"input-group--has-success":""} ${o.state==="disabled"?"input-group--disabled":""}">
                <label for="testform-1000091-text-1" class="input-label">Nice label</label>
                <span class="input-description">This is a description</span>
                <toujou-input-password-toggle class="input-password-toggle">
                    <input placeholder="This is a placeholder"
                       required="required"
                       data-pristine-required-message-de="The given subject was empty."
                       class="input input--text"
                       id="testform-1000091-text-1"
                       type="password"
                       name="tx_form_formframework[testform-1000091][text-1]"
                       value=""
                       slot="input"
                       ${a}
                   >
                   <button id="show_button" class="input-password-toggle__button input-password-toggle__button--show" slot="show-password-button" aria-label="Show password">
                       <toujou-icon class="icon" icon-name="eye" icon-size="normal" icon-color="font"></toujou-icon>
                   </button>
                   <button id="hide_button" class="input-password-toggle__button input-password-toggle__button--hide" slot="hide-password-button" aria-label="hide password">
                       <toujou-icon class="icon" icon-name="eye-off" icon-size="normal" icon-color="font"></toujou-icon>
                   </button>
                </toujou-input-password-toggle>
                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>
        </form>
    `},t=n.bind({});t.args={state:"default"};var s,e,r;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`(args: ToujouTextInputsStoryProps) => {
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
                <toujou-input-password-toggle class="input-password-toggle">
                    <input placeholder="This is a placeholder"
                       required="required"
                       data-pristine-required-message-de="The given subject was empty."
                       class="input input--text"
                       id="testform-1000091-text-1"
                       type="password"
                       name="tx_form_formframework[testform-1000091][text-1]"
                       value=""
                       slot="input"
                       \${disabledAttribute}
                   >
                   <button id="show_button" class="input-password-toggle__button input-password-toggle__button--show" slot="show-password-button" aria-label="Show password">
                       <toujou-icon class="icon" icon-name="eye" icon-size="normal" icon-color="font"></toujou-icon>
                   </button>
                   <button id="hide_button" class="input-password-toggle__button input-password-toggle__button--hide" slot="hide-password-button" aria-label="hide password">
                       <toujou-icon class="icon" icon-name="eye-off" icon-size="normal" icon-color="font"></toujou-icon>
                   </button>
                </toujou-input-password-toggle>
                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>
        </form>
    \`;
}`,...(r=(e=t.parameters)==null?void 0:e.docs)==null?void 0:r.source}}};const f=["PasswordInput"];export{t as PasswordInput,f as __namedExportsOrder,m as default};
//# sourceMappingURL=09.password-input.stories-76a62f4d.js.map
