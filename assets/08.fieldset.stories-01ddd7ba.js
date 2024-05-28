import{T as n}from"./badgeCustomConfig-e7a687d5.js";import{M as o}from"./form.docs-bd6a64bc.js";import"./jsx-runtime-2d96f316.js";import"./index-b6937ee2.js";import"./_commonjsHelpers-725317a4.js";import"./index-9d38a655.js";const f={title:"COMPONENTS/Forms",parameters:{badges:[n.DONE],docs:{page:o}},argTypes:{state:{table:{category:"Inputs settings",defaultValue:{summary:"default"}},name:"Input state",description:"Set the visible input state",options:["default","disabled","success","error"],control:{type:"radio"},defaultValue:["default"],required:!0}},tags:["autodocs"]},u=e=>{const s=e.state==="disabled"?"disabled":"";return`
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

            <fieldset id="testform-1000091-fieldset-1" class="fieldset ${e.state==="disabled"?"fieldset--disabled":""}">
                <legend class="fieldset__legend">Fieldset super name</legend>

                <toujou-input-group class="input-group input-group--required ${e.state==="error"?"input-group--has-error":""} ${e.state==="success"?"input-group--has-success":""} ${e.state==="disabled"?"input-group--disabled":""}">
                    <label for="testform-1000091-text-1" class="input-label">Nice label</label>
                    <span class="input-description">This is a description</span>
                    <input placeholder="This is a placeholder"
                           required="required"
                           data-pristine-required-message-de="The given subject was empty."
                           class="input input--text"
                           id="testform-1000091-text-1"
                           type="text" name="tx_form_formframework[testform-1000091][text-1]"
                           value=""
                           ${s}>
                    <span class="pristine-error form__error">This is an error message!</span>
                </toujou-input-group>

                <toujou-input-group class="input-group input-group--required ${e.state==="error"?"input-group--has-error":""} ${e.state==="success"?"input-group--has-success":""} ${e.state==="disabled"?"input-group--disabled":""}">
                    <label for="testform-1000091-text-2" class="input-label">Nice label</label>
                    <span class="input-description">This is a description</span>
                    <input placeholder="This is a placeholder"
                           required="required"
                           data-pristine-required-message-de="The given subject was empty."
                           class="input input--text"
                           id="testform-1000091-text-2"
                           type="text" name="tx_form_formframework[testform-1000091][text-2]"
                           value=""
                           ${s}>
                    <span class="pristine-error form__error">This is an error message!</span>
                </toujou-input-group>

                <toujou-input-group class="input-group input-group--required ${e.state==="error"?"input-group--has-error":""} ${e.state==="success"?"input-group--has-success":""} ${e.state==="disabled"?"input-group--disabled":""}">
                    <label for="testform-1000091-text-3" class="input-label">Nice label</label>
                    <span class="input-description">This is a description</span>
                    <input placeholder="This is a placeholder"
                           required="required"
                           data-pristine-required-message-de="The given subject was empty."
                           class="input input--text"
                           id="testform-1000091-text-3"
                           type="text" name="tx_form_formframework[testform-1000091][text-3]"
                           value=""
                           ${s}>
                    <span class="pristine-error form__error">This is an error message!</span>
                </toujou-input-group>

                <toujou-input-group class="input-group input-group--required ${e.state==="error"?"input-group--has-error":""} ${e.state==="success"?"input-group--has-success":""} ${e.state==="disabled"?"input-group--disabled":""}">
                    <label for="testform-1000091-text-4" class="input-label">Nice label</label>
                    <span class="input-description">This is a description</span>
                    <input placeholder="This is a placeholder"
                           required="required"
                           data-pristine-required-message-de="The given subject was empty."
                           class="input input--text"
                           id="testform-1000091-text-4"
                           type="text" name="tx_form_formframework[testform-1000091][text-4]"
                           value=""
                           ${s}>
                    <span class="pristine-error form__error">This is an error message!</span>
                </toujou-input-group>

            </fieldset>
        </form>
    `},t=u.bind({});t.args={state:"default"};var r,a,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`(args: ToujouFieldsetStoryProps) => {
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

            <fieldset id="testform-1000091-fieldset-1" class="fieldset \${args.state === 'disabled' ? 'fieldset--disabled' : ''}">
                <legend class="fieldset__legend">Fieldset super name</legend>

                <toujou-input-group class="input-group input-group--required \${args.state === 'error' ? 'input-group--has-error' : ''} \${args.state === 'success' ? 'input-group--has-success' : ''} \${args.state === 'disabled' ? 'input-group--disabled' : ''}">
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

                <toujou-input-group class="input-group input-group--required \${args.state === 'error' ? 'input-group--has-error' : ''} \${args.state === 'success' ? 'input-group--has-success' : ''} \${args.state === 'disabled' ? 'input-group--disabled' : ''}">
                    <label for="testform-1000091-text-2" class="input-label">Nice label</label>
                    <span class="input-description">This is a description</span>
                    <input placeholder="This is a placeholder"
                           required="required"
                           data-pristine-required-message-de="The given subject was empty."
                           class="input input--text"
                           id="testform-1000091-text-2"
                           type="text" name="tx_form_formframework[testform-1000091][text-2]"
                           value=""
                           \${disabledAttribute}>
                    <span class="pristine-error form__error">This is an error message!</span>
                </toujou-input-group>

                <toujou-input-group class="input-group input-group--required \${args.state === 'error' ? 'input-group--has-error' : ''} \${args.state === 'success' ? 'input-group--has-success' : ''} \${args.state === 'disabled' ? 'input-group--disabled' : ''}">
                    <label for="testform-1000091-text-3" class="input-label">Nice label</label>
                    <span class="input-description">This is a description</span>
                    <input placeholder="This is a placeholder"
                           required="required"
                           data-pristine-required-message-de="The given subject was empty."
                           class="input input--text"
                           id="testform-1000091-text-3"
                           type="text" name="tx_form_formframework[testform-1000091][text-3]"
                           value=""
                           \${disabledAttribute}>
                    <span class="pristine-error form__error">This is an error message!</span>
                </toujou-input-group>

                <toujou-input-group class="input-group input-group--required \${args.state === 'error' ? 'input-group--has-error' : ''} \${args.state === 'success' ? 'input-group--has-success' : ''} \${args.state === 'disabled' ? 'input-group--disabled' : ''}">
                    <label for="testform-1000091-text-4" class="input-label">Nice label</label>
                    <span class="input-description">This is a description</span>
                    <input placeholder="This is a placeholder"
                           required="required"
                           data-pristine-required-message-de="The given subject was empty."
                           class="input input--text"
                           id="testform-1000091-text-4"
                           type="text" name="tx_form_formframework[testform-1000091][text-4]"
                           value=""
                           \${disabledAttribute}>
                    <span class="pristine-error form__error">This is an error message!</span>
                </toujou-input-group>

            </fieldset>
        </form>
    \`;
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const b=["Fieldset"];export{t as Fieldset,b as __namedExportsOrder,f as default};
