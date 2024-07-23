import{T as a}from"./badgeCustomConfig-e7a687d5.js";import{M as i}from"./form.docs-8da5404b.js";import"./jsx-runtime-689cd42e.js";import"./index-ab13a269.js";import"./_commonjsHelpers-725317a4.js";import"./index-8a890fec.js";const d={title:"COMPONENTS/Forms",parameters:{badges:[a.DONE],docs:{page:i}},argTypes:{isDisabled:{table:{category:"Toggle settings",defaultValue:{summary:"false"}},name:"disabled",description:'Toggle the "disabled" attribute',control:{type:"boolean"},defaultValue:!1,required:!0}},tags:["autodocs"]},l=o=>`
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

            <toujou-input-group class="input-group input-group--toggle ${o.isDisabled?"input-group--disabled":""}">
                <div class="toggle-group">
                    <input data-pristine-required-message-de="The given subject was empty."
                           class="toggle"
                           id="testform-1000091-multicheckbox-1_1"
                           type="checkbox"
                           name="tx_form_formframework[testform-1000091][multicheckbox-1][]"
                           value="aaaaa"
                           role="switch"
                           ${o.isDisabled?"disabled":""}>
                    <label class="toggle-group__label" for="testform-1000091-multicheckbox-1_1">Toggle beautiful label</label>
                    <span class="input-description input-description--toggle-group">This is a description</span>
                    <span class="pristine-error form__error form-error--toggle-group">The given subject was empty.</span>
                </div>
            </toujou-input-group>

        </form>
    `,e=l.bind({});e.args={isDisabled:!1};var t,r,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`(args: ToujouToggleStoryProps) => {
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

            <toujou-input-group class="input-group input-group--toggle \${args.isDisabled ? 'input-group--disabled' : ''}">
                <div class="toggle-group">
                    <input data-pristine-required-message-de="The given subject was empty."
                           class="toggle"
                           id="testform-1000091-multicheckbox-1_1"
                           type="checkbox"
                           name="tx_form_formframework[testform-1000091][multicheckbox-1][]"
                           value="aaaaa"
                           role="switch"
                           \${args.isDisabled ? 'disabled' : ''}>
                    <label class="toggle-group__label" for="testform-1000091-multicheckbox-1_1">Toggle beautiful label</label>
                    <span class="input-description input-description--toggle-group">This is a description</span>
                    <span class="pristine-error form__error form-error--toggle-group">The given subject was empty.</span>
                </div>
            </toujou-input-group>

        </form>
    \`;
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const b=["ToggleInputs"];export{e as ToggleInputs,b as __namedExportsOrder,d as default};