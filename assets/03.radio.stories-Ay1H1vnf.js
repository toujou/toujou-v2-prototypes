import{M as i}from"./form.docs-BLowHA0S.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-Db2lqMbj.js";import"./iframe-DjBg0tvQ.js";import"./preload-helper-C1FmrZbK.js";const b={title:"COMPONENTS/Forms",parameters:{docs:{page:i}},argTypes:{state:{table:{category:"Inputs settings",defaultValue:{summary:"default"}},name:"Input state",description:"Set the visible input state",options:["default","disabled","success","error"],control:{type:"radio"},required:!0}}},d=r=>{const e=r.state==="disabled"?"disabled":"";return`
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

            <toujou-input-group class="input-group input-group--radio radio-group ${r.state==="error"?"input-group--has-error":""} ${r.state==="success"?"input-group--has-success":""} ${r.state==="disabled"?"input-group--disabled":""}">
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
                               ${e}>
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
                            ${e}>
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
                            ${e}>
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
                            ${e}>
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
                            ${e}>
                        eeeee
                    </label>
                </div>

                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>

        </form>
    `},a=d.bind({});a.args={state:"default"};var o,t,s;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`(args: ToujouRadioStoryProps) => {
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

            <toujou-input-group class="input-group input-group--radio radio-group \${args.state === 'error' ? 'input-group--has-error' : ''} \${args.state === 'success' ? 'input-group--has-success' : ''} \${args.state === 'disabled' ? 'input-group--disabled' : ''}">
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

        </form>
    \`;
}`,...(s=(t=a.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const m=["RadioInputs"];export{a as RadioInputs,m as __namedExportsOrder,b as default};
