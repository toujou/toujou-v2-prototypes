import{T as r}from"./badgeCustomConfig-DUXiHpL4.js";import{M as u}from"./form.docs-DkrseQBQ.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-BcJeOPUZ.js";import"./index-B6tQ6Rz7.js";import"./_commonjsHelpers-Cpj98o6Y.js";const f={title:"COMPONENTS/Forms",parameters:{badges:[r.DONE],docs:{page:u}},argTypes:{state:{table:{category:"Inputs settings",defaultValue:{summary:"default"}},name:"Input state",description:"Set the visible input state",options:["default","disabled","success","error"],control:{type:"radio"},defaultValue:["default"],required:!0}}},p=t=>{const s=t.state==="disabled"?"disabled":"";return`
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

            <toujou-input-group class="input-group input-group--file-upload ${t.state==="error"?"input-group--has-error":""} ${t.state==="success"?"input-group--has-success":""} ${t.state==="disabled"?"input-group--disabled":""}">
                <label class="input-label" for="testform-1000091-fileupload-1">File upload</label>
                <span class="input-description">This is a description</span>
                <input data-pristine-required-message-de="The given subject was empty."
                       class="input input--file-upload"
                       id="testform-1000091-fileupload-1"
                       accept="application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.oasis.opendocument.text,application/pdf"
                       type="file"
                       name="tx_form_formframework[testform-1000091][fileupload-1]"
                       ${s}>
                   <span class="pristine-error form__error">The given subject was empty.</span>
            </toujou-input-group>

            <toujou-input-group class="input-group input-group--image-upload ${t.state==="error"?"input-group--has-error":""} ${t.state==="success"?"input-group--has-success":""} ${t.state==="disabled"?"input-group--disabled":""}">
                <label class="input-label" for="testform-1000091-imageupload-1">Image upload</label>
                <span class="input-description">This is a description</span>
                <input data-pristine-required-message-de="The given subject was empty."
                       class="input input--imageupload image-upload"
                       id="testform-1000091-imageupload-1"
                       accept="image/jpeg,image/png,image/bmp"
                       type="file"
                       name="tx_form_formframework[testform-1000091][imageupload-1]"
                       ${s}>
               <span class="pristine-error form__error">The given subject was empty.</span>
            </toujou-input-group>

            <toujou-input-group class="input-group input-group--multi-select ${t.state==="error"?"input-group--has-error":""} ${t.state==="success"?"input-group--has-success":""} ${t.state==="disabled"?"input-group--disabled":""}">
                <label class="input-label" for="testform-1000091-multiselect-1">Multi select</label>
                <span class="input-description">This is a description</span>
                <input type="hidden" name="tx_form_formframework[testform-1000091][multiselect-1]" value="">
                <select data-pristine-required-message-de="The given subject was empty."
                        class="xlarge form-control multi-select"
                        id="testform-1000091-multiselect-1"
                        multiple="multiple"
                        name="tx_form_formframework[testform-1000091][multiselect-1][]"
                        ${s}>
                    <option value="">first option</option>
                    <option value="aaaaa">aaaaa</option>
                    <option value="bbbbb">bbbbb</option>
                    <option value="ccccc">ccccc</option>
                    <option value="ddddd">ddddd</option>
                </select>
               <span class="pristine-error form__error">The given subject was empty.</span>
            </toujou-input-group>

            <toujou-input-group class="input-group inout-group--static-text">
                <div class="form-static-text">
                    <p class="form-static-text__text">This is static text! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-input-group>

        </form>
    `},e=p.bind({});e.args={state:"default"};var i,o,a;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`(args: ToujouOtherInputStoryProps) => {
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

            <toujou-input-group class="input-group input-group--file-upload \${args.state === 'error' ? 'input-group--has-error' : ''} \${args.state === 'success' ? 'input-group--has-success' : ''} \${args.state === 'disabled' ? 'input-group--disabled' : ''}">
                <label class="input-label" for="testform-1000091-fileupload-1">File upload</label>
                <span class="input-description">This is a description</span>
                <input data-pristine-required-message-de="The given subject was empty."
                       class="input input--file-upload"
                       id="testform-1000091-fileupload-1"
                       accept="application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.oasis.opendocument.text,application/pdf"
                       type="file"
                       name="tx_form_formframework[testform-1000091][fileupload-1]"
                       \${disabledAttribute}>
                   <span class="pristine-error form__error">The given subject was empty.</span>
            </toujou-input-group>

            <toujou-input-group class="input-group input-group--image-upload \${args.state === 'error' ? 'input-group--has-error' : ''} \${args.state === 'success' ? 'input-group--has-success' : ''} \${args.state === 'disabled' ? 'input-group--disabled' : ''}">
                <label class="input-label" for="testform-1000091-imageupload-1">Image upload</label>
                <span class="input-description">This is a description</span>
                <input data-pristine-required-message-de="The given subject was empty."
                       class="input input--imageupload image-upload"
                       id="testform-1000091-imageupload-1"
                       accept="image/jpeg,image/png,image/bmp"
                       type="file"
                       name="tx_form_formframework[testform-1000091][imageupload-1]"
                       \${disabledAttribute}>
               <span class="pristine-error form__error">The given subject was empty.</span>
            </toujou-input-group>

            <toujou-input-group class="input-group input-group--multi-select \${args.state === 'error' ? 'input-group--has-error' : ''} \${args.state === 'success' ? 'input-group--has-success' : ''} \${args.state === 'disabled' ? 'input-group--disabled' : ''}">
                <label class="input-label" for="testform-1000091-multiselect-1">Multi select</label>
                <span class="input-description">This is a description</span>
                <input type="hidden" name="tx_form_formframework[testform-1000091][multiselect-1]" value="">
                <select data-pristine-required-message-de="The given subject was empty."
                        class="xlarge form-control multi-select"
                        id="testform-1000091-multiselect-1"
                        multiple="multiple"
                        name="tx_form_formframework[testform-1000091][multiselect-1][]"
                        \${disabledAttribute}>
                    <option value="">first option</option>
                    <option value="aaaaa">aaaaa</option>
                    <option value="bbbbb">bbbbb</option>
                    <option value="ccccc">ccccc</option>
                    <option value="ddddd">ddddd</option>
                </select>
               <span class="pristine-error form__error">The given subject was empty.</span>
            </toujou-input-group>

            <toujou-input-group class="input-group inout-group--static-text">
                <div class="form-static-text">
                    <p class="form-static-text__text">This is static text! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-input-group>

        </form>
    \`;
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const b=["OtherInputs"];export{e as OtherInputs,b as __namedExportsOrder,f as default};
