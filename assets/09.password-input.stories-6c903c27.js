import{T as r}from"./badgeCustomConfig-e7a687d5.js";import{M as i}from"./form.docs-bd6a64bc.js";import"./jsx-runtime-2d96f316.js";import"./index-b6937ee2.js";import"./_commonjsHelpers-725317a4.js";import"./index-9d38a655.js";const m={title:"COMPONENTS/Forms",parameters:{badges:[r.DONE],docs:{page:i}},argTypes:{state:{table:{category:"Inputs settings",defaultValue:{summary:"default"}},name:"Input state",description:"Set the visible input state",options:["default","disabled","success","error"],control:{type:"radio"},defaultValue:["default"],required:!0}},tags:["autodocs"]},u=o=>{const s=o.state==="disabled"?"disabled":"";return`
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
                       ${s}
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






            <toujou-input-group class="input-group input-group-advanced-password input-group--advanced-password ${o.state==="error"?"input-group--has-error":""} ${o.state==="success"?"input-group--has-success":""} ${o.state==="disabled"?"input-group--disabled":""}">
                <div class="input-group-advanced-password__group">
                    <label class="input-label" for="testform-2881-advancedpassword-1">Original password</label>
                    <span class="input-description">This is the advanced password</span>

                    <toujou-input-password-toggle class="input-password-toggle">
                        <input
                            placeholder="Enter matching passwords"
                            data-element-type="AdvancedPassword"
                            slot="input"
                            class="input-medium form-control input input--text input--advanced-password input--password-origin"
                            id="testform-2881-advancedpassword-1"
                            type="password"
                            name="tx_form_formframework[testform-2881][advancedpassword-1][password]"
                            value=""
                            ${s}
                        >
                        <button class="input-password-toggle__button input-password-toggle__button--show" slot="show-password-button" aria-label="Show password">
                            <toujou-icon class="icon" icon-name="eye" icon-size="normal" icon-color="font"></toujou-icon>
                        </button>
                        <button class="input-password-toggle__button input-password-toggle__button--hide" slot="hide-password-button" aria-label="hide password">
                            <toujou-icon class="icon" icon-name="eye-off" icon-size="normal" icon-color="font"></toujou-icon>
                        </button>
                    </toujou-input-password-toggle>
                </div>

                <div class="input-group-advanced-password__group">
                    <label class="input-label" for="testform-2881-advancedpassword-1">Confirmation Password</label>
                    <span class="input-description">This is the advanced password</span>

                    <toujou-input-password-toggle class="input-password-toggle">
                        <input
                            placeholder="Enter matching passwords"
                            data-element-type="AdvancedPassword"
                            slot="input"
                            class="input-medium form-control input input--text input--advanced-password input--password-confirmation"
                            id="testform-2881-advancedpassword-1-confirmation"
                            type="password"
                            name="tx_form_formframework[testform-2881][advancedpassword-1][confirmation]"
                            value=""
                            ${s}
                        >
                        <button class="input-password-toggle__button input-password-toggle__button--show" slot="show-password-button" aria-label="Show password">
                            <toujou-icon class="icon" icon-name="eye" icon-size="normal" icon-color="font"></toujou-icon>
                        </button>
                        <button class="input-password-toggle__button input-password-toggle__button--hide" slot="hide-password-button" aria-label="hide password">
                            <toujou-icon class="icon" icon-name="eye-off" icon-size="normal" icon-color="font"></toujou-icon>
                        </button>
                    </toujou-input-password-toggle>

                </div>

                <span class="pristine-error form__error" style="display: none;"></span>
            </toujou-input-group>

        </form>
    `},t=u.bind({});t.args={state:"default"};var n,a,e;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`(args: ToujouTextInputsStoryProps) => {
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






            <toujou-input-group class="input-group input-group-advanced-password input-group--advanced-password \${args.state === 'error' ? 'input-group--has-error' : ''} \${args.state === 'success' ? 'input-group--has-success' : ''} \${args.state === 'disabled' ? 'input-group--disabled' : ''}">
                <div class="input-group-advanced-password__group">
                    <label class="input-label" for="testform-2881-advancedpassword-1">Original password</label>
                    <span class="input-description">This is the advanced password</span>

                    <toujou-input-password-toggle class="input-password-toggle">
                        <input
                            placeholder="Enter matching passwords"
                            data-element-type="AdvancedPassword"
                            slot="input"
                            class="input-medium form-control input input--text input--advanced-password input--password-origin"
                            id="testform-2881-advancedpassword-1"
                            type="password"
                            name="tx_form_formframework[testform-2881][advancedpassword-1][password]"
                            value=""
                            \${disabledAttribute}
                        >
                        <button class="input-password-toggle__button input-password-toggle__button--show" slot="show-password-button" aria-label="Show password">
                            <toujou-icon class="icon" icon-name="eye" icon-size="normal" icon-color="font"></toujou-icon>
                        </button>
                        <button class="input-password-toggle__button input-password-toggle__button--hide" slot="hide-password-button" aria-label="hide password">
                            <toujou-icon class="icon" icon-name="eye-off" icon-size="normal" icon-color="font"></toujou-icon>
                        </button>
                    </toujou-input-password-toggle>
                </div>

                <div class="input-group-advanced-password__group">
                    <label class="input-label" for="testform-2881-advancedpassword-1">Confirmation Password</label>
                    <span class="input-description">This is the advanced password</span>

                    <toujou-input-password-toggle class="input-password-toggle">
                        <input
                            placeholder="Enter matching passwords"
                            data-element-type="AdvancedPassword"
                            slot="input"
                            class="input-medium form-control input input--text input--advanced-password input--password-confirmation"
                            id="testform-2881-advancedpassword-1-confirmation"
                            type="password"
                            name="tx_form_formframework[testform-2881][advancedpassword-1][confirmation]"
                            value=""
                            \${disabledAttribute}
                        >
                        <button class="input-password-toggle__button input-password-toggle__button--show" slot="show-password-button" aria-label="Show password">
                            <toujou-icon class="icon" icon-name="eye" icon-size="normal" icon-color="font"></toujou-icon>
                        </button>
                        <button class="input-password-toggle__button input-password-toggle__button--hide" slot="hide-password-button" aria-label="hide password">
                            <toujou-icon class="icon" icon-name="eye-off" icon-size="normal" icon-color="font"></toujou-icon>
                        </button>
                    </toujou-input-password-toggle>

                </div>

                <span class="pristine-error form__error" style="display: none;"></span>
            </toujou-input-group>

        </form>
    \`;
}`,...(e=(a=t.parameters)==null?void 0:a.docs)==null?void 0:e.source}}};const b=["PasswordInput"];export{t as PasswordInput,b as __namedExportsOrder,m as default};
