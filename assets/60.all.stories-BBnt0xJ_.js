import{M as o}from"./form.docs-CUZ_n5Gy.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-CcmLKVFS.js";import"./iframe-B-FpRVsO.js";import"./preload-helper-C1FmrZbK.js";const m={title:"COMPONENTS/Forms",parameters:{docs:{page:o}},argTypes:{state:{table:{category:"Inputs settings",defaultValue:{summary:"default"}},name:"Input state",description:"Set the visible input state",options:["default","disabled","success","error"],control:{type:"radio"},required:!0}}},p=e=>{const t=e.state==="disabled"?"disabled":"";return`
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
                       ${t}>
                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>

            <toujou-input-group class="input-group input-group--email input-group--required ${e.state==="error"?"input-group--has-error":""} ${e.state==="success"?"input-group--has-success":""} ${e.state==="disabled"?"input-group--disabled":""}">
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
                       ${t}>
                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>

            <toujou-input-group class="input-group input-group--telephone input-group--required ${e.state==="error"?"input-group--has-error":""} ${e.state==="success"?"input-group--has-success":""} ${e.state==="disabled"?"input-group--disabled":""}">
                <label for="testform-1000091-email-1" class="input-label">Telephone number</label>
                <span class="input-description">This is a description</span>
                <input placeholder="This is a placeholder"
                       required="required"
                       data-pristine-required-message="The given subject was empty."
                       class=" form-control input input--text"
                       id="testform-1000091-telephone-1"
                       type="tel"
                       name="tx_form_formframework[testform-1000091][telephone-1]"
                       value=""
                       ${t}>
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
                       ${t}>
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
                       ${t}>
                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>

            <toujou-input-group class="input-group input-group--single-select ${e.state==="error"?"input-group--has-error":""} ${e.state==="success"?"input-group--has-success":""} ${e.state==="disabled"?"input-group--disabled":""}">
                <label class="input-label" for="testform-1000091-singleselect-1">Single select</label>
                <span class="input-description">This is a description</span>
                <div class="select__wrapper">
                    <select data-pristine-required-message-de="The given subject was empty."
                            class="form-control input select" id="testform-1000091-singleselect-1"
                            name="tx_form_formframework[testform-1000091][singleselect-1]"
                            ${t}>
                        <option class="seclect__option" value="">First option</option>
                        <option class="seclect__option" value="aaaaa">aaaaa</option>
                        <option class="seclect__option" value="bbbbb">bbbbb</option>
                        <option class="seclect__option" value="ccccc">ccccc</option>
                        <option class="seclect__option" value="ddddd">ddddd</option>
                    </select>
                </div>
                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>

            <toujou-input-group class="input-group input-group--radio radio-group ${e.state==="error"?"input-group--has-error":""} ${e.state==="success"?"input-group--has-success":""}"
                 ${e.state==="disabled"?"is-disabled":""}>
                <label class="radio-group__label" for="testform-1000091-radiobutton-1">Radio button</label>
                <span class="input-description input-description--after-group">This is a description</span>
                <div class="radio-group__option">
                    <label class="radio-group__option-label">
                        <input data-pristine-required-message-de="The given subject was empty."
                               class="radio"
                               type="radio"
                               name="tx_form_formframework[testform-1000091][radiobutton-1]"
                               value="aaaaa"
                               checked
                               ${t}>
                        aaaaa
                    </label>
                </div>

                <div class="radio-group__option">
                    <label class="radio-group__option-label">
                        <input data-pristine-required-message-de="The given subject was empty."
                            class="radio"
                            type="radio"
                            name="tx_form_formframework[testform-1000091][radiobutton-1]"
                            value="bbbb"
                            ${t}>
                        bbbb
                    </label>
                </div>

                <div class="radio-group__option">
                    <label class="radio-group__option-label">
                        <input data-pristine-required-message-de="The given subject was empty."
                            class="radio"
                            type="radio"
                            name="tx_form_formframework[testform-1000091][radiobutton-1]"
                            value="ccccc"
                            ${t}>
                        ccccc
                    </label>
                </div>

                <div class="radio-group__option">
                    <label class="radio-group__option-label">
                        <input data-pristine-required-message-de="The given subject was empty."
                            class="radio"
                            type="radio"
                            name="tx_form_formframework[testform-1000091][radiobutton-1]"
                            value="ddddd"
                            ${t}>
                        ddddd
                    </label>
                </div>

                <div class="radio-group__option">
                    <label class="radio-group__option-label">
                        <input data-pristine-required-message-de="The given subject was empty."
                            class="radio"
                            type="radio"
                            name="tx_form_formframework[testform-1000091][radiobutton-1]"
                            value="eeeee"
                            ${t}>
                        eeeee
                    </label>
                </div>

                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>

            <toujou-input-group class="input-group input-group--check checkbox-group ${e.state==="error"?"input-group--has-error":""} ${e.state==="success"?"input-group--has-success":""}" ${e.state==="disabled"?"is-disabled":""}>
                <div class="checkbox-group">
                    <input data-pristine-required-message-de="The given subject was empty."
                           class="checkbox"
                           id="testform-1000091-multicheckbox-1_1"
                           type="checkbox"
                           name="tx_form_formframework[testform-1000091][multicheckbox-1][]"
                           value="aaaaa"
                           ${t}>
                    <label class="checkbox-group__label" for="testform-1000091-multicheckbox-1_1">Checkbox beautiful label</label>
                    <span class="input-description input-description--checkbox-group">This is a description</span>
                    <span class="pristine-error form__error">The given subject was empty.</span>
                </div>
            </toujou-input-group>

            <toujou-input-group class="input-group input-group--multi-check multi-checkbox-group ${e.state==="error"?"input-group--has-error":""} ${e.state==="success"?"input-group--has-success":""}" ${e.state==="disabled"?"is-disabled":""}>
                <label class="multi-checkbox-group__label" for="testform-1000091-multicheckbox-1">This is the group label</label>

                <div class="checkbox-group">
                    <input data-pristine-required-message-de="The given subject was empty."
                           class="checkbox"
                           id="testform-1000091-multicheckbox-1_1"
                           type="checkbox"
                           name="tx_form_formframework[testform-1000091][multicheckbox-1][]"
                           value="aaaaa"
                           ${t}>
                    <label class="checkbox-group__label" for="testform-1000091-multicheckbox-1_1">Option one</label>
                </div>

                <div class="checkbox-group">
                    <input data-pristine-required-message-de="The given subject was empty."
                           class="checkbox"
                           id="testform-1000091-multicheckbox-1_2"
                           type="checkbox"
                           name="tx_form_formframework[testform-1000091][multicheckbox-1][]"
                           value="bbbbb"
                           ${t}>
                    <label class="checkbox-group__label" for="testform-1000091-multicheckbox-1_2">Option two</label>
                </div>

                <div class="checkbox-group">
                    <input data-pristine-required-message-de="The given subject was empty."
                           class="checkbox"
                           id="testform-1000091-multicheckbox-1_3"
                           type="checkbox"
                           name="tx_form_formframework[testform-1000091][multicheckbox-1][]"
                           value="ccccc"
                           ${t}>
                    <label class="checkbox-group__label" for="testform-1000091-multicheckbox-1_3">Option three</label>
                </div>

                <div class="checkbox-group">
                    <input data-pristine-required-message-de="The given subject was empty."
                           class="checkbox"
                           id="testform-1000091-multicheckbox-1_4"
                           type="checkbox"
                           name="tx_form_formframework[testform-1000091][multicheckbox-1][]"
                           value="ddddd"
                           ${t}>
                    <label class="checkbox-group__label" for="testform-1000091-multicheckbox-1_4">Option four</label>
                </div>

                <div class="checkbox-group">
                    <input data-pristine-required-message-de="The given subject was empty."
                           class="checkbox"
                           id="testform-1000091-multicheckbox-1_5"
                           type="checkbox"
                           name="tx_form_formframework[testform-1000091][multicheckbox-1][]"
                           value="eeeee"
                           ${t}>
                    <label class="checkbox-group__label" for="testform-1000091-multicheckbox-1_5">Option five</label>
                </div>

                 <span class="input-description input-description--after-group">This is a description</span>
                <span class="pristine-error form__error form-error--after-group">The given subject was empty.</span>
            </toujou-input-group>

            <toujou-input-group class="input-group input-group--toggle ${e.state==="error"?"input-group--has-error":""} ${e.state==="success"?"input-group--has-success":""}" ${e.state==="disabled"?"is-disabled":""}>
                <div class="toggle-group">
                    <input data-pristine-required-message-de="The given subject was empty."
                           class="toggle"
                           id="testform-1000091-multicheckbox-1_1"
                           type="checkbox"
                           name="tx_form_formframework[testform-1000091][multicheckbox-1][]"
                           value="aaaaa"
                           role="switch"
                           ${t}>
                    <label class="toggle-group__label" for="testform-1000091-multicheckbox-1_1">Checkbox beautiful label</label>
                    <span class="input-description input-description--toggle-group">This is a description</span>
                    <span class="pristine-error form__error form-error--toggle-group">The given subject was empty.</span>
                </div>
            </toujou-input-group>

            <toujou-input-group class="input-group input-group--textarea ${e.state==="error"?"input-group--has-error":""} ${e.state==="success"?"input-group--has-success":""}" ${e.state==="disabled"?"is-disabled":""}>
                <label class="input-label" for="testform-1000091-textarea-1">Textarea</label>
                <span class="input-description">This is a description</span>
                <textarea placeholder="This is a placeholder"
                          required="required"
                          data-pristine-required-message-de="The given subject was empty."
                          class="form-control input input--textarea"
                          id="testform-1000091-textarea-1"
                          name="tx_form_formframework[testform-1000091][textarea-1]"
                          ${t}>
                </textarea>
                <span class="pristine-error form__error">The given subject was empty.</span>
            </toujou-input-group>

            <toujou-input-group class="input-group input-group--date ${e.state==="error"?"input-group--has-error":""} ${e.state==="success"?"input-group--has-success":""}" ${e.state==="disabled"?"is-disabled":""}>
                <label class="input-label" for="testform-1000091-date-1">Date</label>
                <span class="input-description">This is a description</span>
                <input pattern="/([0-9]{4})-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])/"
                    step="1"
                    data-pristine-required-message-de="The given subject was empty."
                    data-pristine-pattern-message-de="You must enter a valid date."
                    data-pristine-date-min-message-de="You must select a date after 1."
                    data-pristine-date-max-message-de="You must select a date before 1."
                    class="input input--date"
                    id="testform-1000091-date-1"
                    type="date"
                    name="tx_form_formframework[testform-1000091][date-1]"
                    value="">
                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>

            <toujou-input-group class="input-group input-group--date-jquery ${e.state==="error"?"input-group--has-error":""} ${e.state==="success"?"input-group--has-success":""}" ${e.state==="disabled"?"is-disabled":""} data-format="Y-m-d">
                <label class="input-label" for="testform-1000091-datepicker-2">Date picker (jQuery)</label>
                <span class="input-description">This is a description</span>
                <input data-pristine-required-message-de="The given subject was empty."
                       data-pristine-pattern-message-de="You must enter a valid date."
                       data-pristine-date-min-message-de="You must select a date after 1."
                       data-pristine-date-max-message-de="You must select a date before 1."
                       class="form-control date-dummy input input--date flatpickr-input date-dummy--empty"
                       id="testform-1000091-datepicker-2"
                       type="text"
                       name="tx_form_formframework[testform-1000091][datepicker-2][date]"
                       placeholder="Y-m-d"
                       readonly="readonly">
                   <input type="hidden" name="tx_form_formframework[testform-1000091][datepicker-2][dateFormat]" value="Y-m-d">
                   <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>

            <fieldset id="testform-1000091-fieldset-1" class="fieldset" ${e.state==="disabled"?"is-disabled":""}>
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
                           ${t}>
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
                           ${t}>
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
                           ${t}>
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
                           ${t}>
                    <span class="pristine-error form__error">This is an error message!</span>
                </toujou-input-group>
            </fieldset>

            <toujou-input-group class="input-group input-group--file-upload ${e.state==="error"?"input-group--has-error":""} ${e.state==="success"?"input-group--has-success":""}" ${e.state==="disabled"?"is-disabled":""}>
                <label class="input-label" for="testform-1000091-fileupload-1">File upload</label>
                <span class="input-description">This is a description</span>
                <input data-pristine-required-message-de="The given subject was empty."
                       class="input input--file-upload"
                       id="testform-1000091-fileupload-1"
                       accept="application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.oasis.opendocument.text,application/pdf"
                       type="file"
                       name="tx_form_formframework[testform-1000091][fileupload-1]"
                       ${t}>
                   <span class="pristine-error form__error">The given subject was empty.</span>
            </toujou-input-group>

            <toujou-input-group class="input-group inout-group--image-upload ${e.state==="error"?"input-group--has-error":""} ${e.state==="success"?"input-group--has-success":""}" ${e.state==="disabled"?"is-disabled":""}>
                <label class="input-label" for="testform-1000091-imageupload-1">Image upload</label>
                <span class="input-description">This is a description</span>
                <input data-pristine-required-message-de="The given subject was empty."
                       class="input input--imageupload image-upload"
                       id="testform-1000091-imageupload-1"
                       accept="image/jpeg,image/png,image/bmp"
                       type="file"
                       name="tx_form_formframework[testform-1000091][imageupload-1]"
                       ${t}>
               <span class="pristine-error form__error">The given subject was empty.</span>
            </toujou-input-group>

            <toujou-input-group class="input-group input-group--multi-select ${e.state==="error"?"input-group--has-error":""} ${e.state==="success"?"input-group--has-success":""}" ${e.state==="disabled"?"is-disabled":""}>
                <label class="input-label" for="testform-1000091-multiselect-1">Multi select</label>
                <span class="input-description">This is a description</span>
                <input type="hidden" name="tx_form_formframework[testform-1000091][multiselect-1]" value="">
                <select data-pristine-required-message-de="The given subject was empty."
                        class="xlarge form-control multi-select"
                        id="testform-1000091-multiselect-1"
                        multiple="multiple"
                        name="tx_form_formframework[testform-1000091][multiselect-1][]"
                        ${t}>
                    <option value="">first option</option>
                    <option value="aaaaa">aaaaa</option>
                    <option value="bbbbb">bbbbb</option>
                    <option value="ccccc">ccccc</option>
                    <option value="ddddd">ddddd</option>
                </select>
               <span class="pristine-error form__error">The given subject was empty.</span>
            </toujou-input-group>
        </form>
    `},s=p.bind({});s.args={state:"default"};var r,a,i;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`(args: ToujouAllInputsStoryProps) => {
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

            <toujou-input-group class="input-group input-group--email input-group--required \${args.state === 'error' ? 'input-group--has-error' : ''} \${args.state === 'success' ? 'input-group--has-success' : ''} \${args.state === 'disabled' ? 'input-group--disabled' : ''}">
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
                <label for="testform-1000091-email-1" class="input-label">Telephone number</label>
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

            <toujou-input-group class="input-group input-group--single-select \${args.state === 'error' ? 'input-group--has-error' : ''} \${args.state === 'success' ? 'input-group--has-success' : ''} \${args.state === 'disabled' ? 'input-group--disabled' : ''}">
                <label class="input-label" for="testform-1000091-singleselect-1">Single select</label>
                <span class="input-description">This is a description</span>
                <div class="select__wrapper">
                    <select data-pristine-required-message-de="The given subject was empty."
                            class="form-control input select" id="testform-1000091-singleselect-1"
                            name="tx_form_formframework[testform-1000091][singleselect-1]"
                            \${disabledAttribute}>
                        <option class="seclect__option" value="">First option</option>
                        <option class="seclect__option" value="aaaaa">aaaaa</option>
                        <option class="seclect__option" value="bbbbb">bbbbb</option>
                        <option class="seclect__option" value="ccccc">ccccc</option>
                        <option class="seclect__option" value="ddddd">ddddd</option>
                    </select>
                </div>
                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>

            <toujou-input-group class="input-group input-group--radio radio-group \${args.state === 'error' ? 'input-group--has-error' : ''} \${args.state === 'success' ? 'input-group--has-success' : ''}"
                 \${args.state === 'disabled' ? 'is-disabled' : ''}>
                <label class="radio-group__label" for="testform-1000091-radiobutton-1">Radio button</label>
                <span class="input-description input-description--after-group">This is a description</span>
                <div class="radio-group__option">
                    <label class="radio-group__option-label">
                        <input data-pristine-required-message-de="The given subject was empty."
                               class="radio"
                               type="radio"
                               name="tx_form_formframework[testform-1000091][radiobutton-1]"
                               value="aaaaa"
                               checked
                               \${disabledAttribute}>
                        aaaaa
                    </label>
                </div>

                <div class="radio-group__option">
                    <label class="radio-group__option-label">
                        <input data-pristine-required-message-de="The given subject was empty."
                            class="radio"
                            type="radio"
                            name="tx_form_formframework[testform-1000091][radiobutton-1]"
                            value="bbbb"
                            \${disabledAttribute}>
                        bbbb
                    </label>
                </div>

                <div class="radio-group__option">
                    <label class="radio-group__option-label">
                        <input data-pristine-required-message-de="The given subject was empty."
                            class="radio"
                            type="radio"
                            name="tx_form_formframework[testform-1000091][radiobutton-1]"
                            value="ccccc"
                            \${disabledAttribute}>
                        ccccc
                    </label>
                </div>

                <div class="radio-group__option">
                    <label class="radio-group__option-label">
                        <input data-pristine-required-message-de="The given subject was empty."
                            class="radio"
                            type="radio"
                            name="tx_form_formframework[testform-1000091][radiobutton-1]"
                            value="ddddd"
                            \${disabledAttribute}>
                        ddddd
                    </label>
                </div>

                <div class="radio-group__option">
                    <label class="radio-group__option-label">
                        <input data-pristine-required-message-de="The given subject was empty."
                            class="radio"
                            type="radio"
                            name="tx_form_formframework[testform-1000091][radiobutton-1]"
                            value="eeeee"
                            \${disabledAttribute}>
                        eeeee
                    </label>
                </div>

                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>

            <toujou-input-group class="input-group input-group--check checkbox-group \${args.state === 'error' ? 'input-group--has-error' : ''} \${args.state === 'success' ? 'input-group--has-success' : ''}" \${args.state === 'disabled' ? 'is-disabled' : ''}>
                <div class="checkbox-group">
                    <input data-pristine-required-message-de="The given subject was empty."
                           class="checkbox"
                           id="testform-1000091-multicheckbox-1_1"
                           type="checkbox"
                           name="tx_form_formframework[testform-1000091][multicheckbox-1][]"
                           value="aaaaa"
                           \${disabledAttribute}>
                    <label class="checkbox-group__label" for="testform-1000091-multicheckbox-1_1">Checkbox beautiful label</label>
                    <span class="input-description input-description--checkbox-group">This is a description</span>
                    <span class="pristine-error form__error">The given subject was empty.</span>
                </div>
            </toujou-input-group>

            <toujou-input-group class="input-group input-group--multi-check multi-checkbox-group \${args.state === 'error' ? 'input-group--has-error' : ''} \${args.state === 'success' ? 'input-group--has-success' : ''}" \${args.state === 'disabled' ? 'is-disabled' : ''}>
                <label class="multi-checkbox-group__label" for="testform-1000091-multicheckbox-1">This is the group label</label>

                <div class="checkbox-group">
                    <input data-pristine-required-message-de="The given subject was empty."
                           class="checkbox"
                           id="testform-1000091-multicheckbox-1_1"
                           type="checkbox"
                           name="tx_form_formframework[testform-1000091][multicheckbox-1][]"
                           value="aaaaa"
                           \${disabledAttribute}>
                    <label class="checkbox-group__label" for="testform-1000091-multicheckbox-1_1">Option one</label>
                </div>

                <div class="checkbox-group">
                    <input data-pristine-required-message-de="The given subject was empty."
                           class="checkbox"
                           id="testform-1000091-multicheckbox-1_2"
                           type="checkbox"
                           name="tx_form_formframework[testform-1000091][multicheckbox-1][]"
                           value="bbbbb"
                           \${disabledAttribute}>
                    <label class="checkbox-group__label" for="testform-1000091-multicheckbox-1_2">Option two</label>
                </div>

                <div class="checkbox-group">
                    <input data-pristine-required-message-de="The given subject was empty."
                           class="checkbox"
                           id="testform-1000091-multicheckbox-1_3"
                           type="checkbox"
                           name="tx_form_formframework[testform-1000091][multicheckbox-1][]"
                           value="ccccc"
                           \${disabledAttribute}>
                    <label class="checkbox-group__label" for="testform-1000091-multicheckbox-1_3">Option three</label>
                </div>

                <div class="checkbox-group">
                    <input data-pristine-required-message-de="The given subject was empty."
                           class="checkbox"
                           id="testform-1000091-multicheckbox-1_4"
                           type="checkbox"
                           name="tx_form_formframework[testform-1000091][multicheckbox-1][]"
                           value="ddddd"
                           \${disabledAttribute}>
                    <label class="checkbox-group__label" for="testform-1000091-multicheckbox-1_4">Option four</label>
                </div>

                <div class="checkbox-group">
                    <input data-pristine-required-message-de="The given subject was empty."
                           class="checkbox"
                           id="testform-1000091-multicheckbox-1_5"
                           type="checkbox"
                           name="tx_form_formframework[testform-1000091][multicheckbox-1][]"
                           value="eeeee"
                           \${disabledAttribute}>
                    <label class="checkbox-group__label" for="testform-1000091-multicheckbox-1_5">Option five</label>
                </div>

                 <span class="input-description input-description--after-group">This is a description</span>
                <span class="pristine-error form__error form-error--after-group">The given subject was empty.</span>
            </toujou-input-group>

            <toujou-input-group class="input-group input-group--toggle \${args.state === 'error' ? 'input-group--has-error' : ''} \${args.state === 'success' ? 'input-group--has-success' : ''}" \${args.state === 'disabled' ? 'is-disabled' : ''}>
                <div class="toggle-group">
                    <input data-pristine-required-message-de="The given subject was empty."
                           class="toggle"
                           id="testform-1000091-multicheckbox-1_1"
                           type="checkbox"
                           name="tx_form_formframework[testform-1000091][multicheckbox-1][]"
                           value="aaaaa"
                           role="switch"
                           \${disabledAttribute}>
                    <label class="toggle-group__label" for="testform-1000091-multicheckbox-1_1">Checkbox beautiful label</label>
                    <span class="input-description input-description--toggle-group">This is a description</span>
                    <span class="pristine-error form__error form-error--toggle-group">The given subject was empty.</span>
                </div>
            </toujou-input-group>

            <toujou-input-group class="input-group input-group--textarea \${args.state === 'error' ? 'input-group--has-error' : ''} \${args.state === 'success' ? 'input-group--has-success' : ''}" \${args.state === 'disabled' ? 'is-disabled' : ''}>
                <label class="input-label" for="testform-1000091-textarea-1">Textarea</label>
                <span class="input-description">This is a description</span>
                <textarea placeholder="This is a placeholder"
                          required="required"
                          data-pristine-required-message-de="The given subject was empty."
                          class="form-control input input--textarea"
                          id="testform-1000091-textarea-1"
                          name="tx_form_formframework[testform-1000091][textarea-1]"
                          \${disabledAttribute}>
                </textarea>
                <span class="pristine-error form__error">The given subject was empty.</span>
            </toujou-input-group>

            <toujou-input-group class="input-group input-group--date \${args.state === 'error' ? 'input-group--has-error' : ''} \${args.state === 'success' ? 'input-group--has-success' : ''}" \${args.state === 'disabled' ? 'is-disabled' : ''}>
                <label class="input-label" for="testform-1000091-date-1">Date</label>
                <span class="input-description">This is a description</span>
                <input pattern="/([0-9]{4})-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])/"
                    step="1"
                    data-pristine-required-message-de="The given subject was empty."
                    data-pristine-pattern-message-de="You must enter a valid date."
                    data-pristine-date-min-message-de="You must select a date after \${1}."
                    data-pristine-date-max-message-de="You must select a date before \${1}."
                    class="input input--date"
                    id="testform-1000091-date-1"
                    type="date"
                    name="tx_form_formframework[testform-1000091][date-1]"
                    value="">
                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>

            <toujou-input-group class="input-group input-group--date-jquery \${args.state === 'error' ? 'input-group--has-error' : ''} \${args.state === 'success' ? 'input-group--has-success' : ''}" \${args.state === 'disabled' ? 'is-disabled' : ''} data-format="Y-m-d">
                <label class="input-label" for="testform-1000091-datepicker-2">Date picker (jQuery)</label>
                <span class="input-description">This is a description</span>
                <input data-pristine-required-message-de="The given subject was empty."
                       data-pristine-pattern-message-de="You must enter a valid date."
                       data-pristine-date-min-message-de="You must select a date after \${1}."
                       data-pristine-date-max-message-de="You must select a date before \${1}."
                       class="form-control date-dummy input input--date flatpickr-input date-dummy--empty"
                       id="testform-1000091-datepicker-2"
                       type="text"
                       name="tx_form_formframework[testform-1000091][datepicker-2][date]"
                       placeholder="Y-m-d"
                       readonly="readonly">
                   <input type="hidden" name="tx_form_formframework[testform-1000091][datepicker-2][dateFormat]" value="Y-m-d">
                   <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>

            <fieldset id="testform-1000091-fieldset-1" class="fieldset" \${args.state === 'disabled' ? 'is-disabled' : ''}>
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

            <toujou-input-group class="input-group input-group--file-upload \${args.state === 'error' ? 'input-group--has-error' : ''} \${args.state === 'success' ? 'input-group--has-success' : ''}" \${args.state === 'disabled' ? 'is-disabled' : ''}>
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

            <toujou-input-group class="input-group inout-group--image-upload \${args.state === 'error' ? 'input-group--has-error' : ''} \${args.state === 'success' ? 'input-group--has-success' : ''}" \${args.state === 'disabled' ? 'is-disabled' : ''}>
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

            <toujou-input-group class="input-group input-group--multi-select \${args.state === 'error' ? 'input-group--has-error' : ''} \${args.state === 'success' ? 'input-group--has-success' : ''}" \${args.state === 'disabled' ? 'is-disabled' : ''}>
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
        </form>
    \`;
}`,...(i=(a=s.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const b=["AllInputs"];export{s as AllInputs,b as __namedExportsOrder,m as default};
