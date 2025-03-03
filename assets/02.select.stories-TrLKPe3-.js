import{T as i}from"./badgeCustomConfig-DUXiHpL4.js";import{M as c}from"./form.docs-DkrseQBQ.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-BcJeOPUZ.js";import"./index-B6tQ6Rz7.js";import"./_commonjsHelpers-Cpj98o6Y.js";const g={title:"COMPONENTS/Forms",parameters:{badges:[i.DONE],docs:{page:c}},argTypes:{state:{table:{category:"Inputs settings",defaultValue:{summary:"default"}},name:"Input state",description:"Set the visible input state",options:["default","disabled","success","error"],control:{type:"radio"},defaultValue:["default"],required:!0}},tags:["autodocs"]},l=t=>{const r=t.state==="disabled"?"disabled":"";return`
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

            <toujou-input-group class="input-group input-group--single-select ${t.state==="error"?"input-group--has-error":""} ${t.state==="success"?"input-group--has-success":""} ${t.state==="disabled"?"input-group--disabled":""}">
                <label class="input-label" for="testform-1000091-singleselect-1">Single select</label>
                <span class="input-description">This is a description</span>
                <div class="select__wrapper">
                    <select data-pristine-required-message-de="The given subject was empty."
                            class="form-control input select" id="testform-1000091-singleselect-1"
                            name="tx_form_formframework[testform-1000091][singleselect-1]"
                            ${r}>
                        <option class="seclect__option" value="">First option</option>
                        <option class="seclect__option" value="aaaaa">aaaaa</option>
                        <option class="seclect__option" value="bbbbb">bbbbb</option>
                        <option class="seclect__option" value="ccccc">ccccc</option>
                        <option class="seclect__option" value="ddddd">ddddd</option>
                    </select>
                </div>
                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>
        </form>
    `},e=l.bind({});e.args={state:"default"};var s,o,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`(args: ToujouSelectStoryProps) => {
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
        </form>
    \`;
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const _=["SelectInput"];export{e as SelectInput,_ as __namedExportsOrder,g as default};
