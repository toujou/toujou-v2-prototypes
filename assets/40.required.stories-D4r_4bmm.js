import{T as o}from"./badgeCustomConfig-DUXiHpL4.js";import{M as a}from"./form.docs-DkrseQBQ.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-BcJeOPUZ.js";import"./index-B6tQ6Rz7.js";import"./_commonjsHelpers-Cpj98o6Y.js";const f={title:"COMPONENTS/Forms",parameters:{badges:[o.DONE],docs:{page:a}},argTypes:{isRequired:{table:{category:"Inputs settings",defaultValue:{summary:"default"}},name:"Required",description:"Toggle the inputs 'required' attribute",control:{type:"boolean"},required:!0}}},p=r=>`
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

            <toujou-input-group class="input-group ${r.isRequired?"input-group--required":""}">
                <label for="testform-1000091-text-1" class="input-label">Nice label</label>
                <span class="input-description">This is a description</span>
                <input placeholder="This is a placeholder"
                       required="required"
                       data-pristine-required-message-de="The given subject was empty."
                       class="input input--text"
                       id="testform-1000091-text-1"
                       type="text" name="tx_form_formframework[testform-1000091][text-1]"
                       value="">
                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group><toujou-input-group class="input-group input-group--email ${r.isRequired?"input-group--required":""}">
                <label for="testform-1000091-email-1" class="input-label">Email address</label>
                <span class="input-description">This is a description</span>
                <input placeholder="This is a placeholder"
                       required="required"
                       data-pristine-required-message="The given subject was empty."
                       class="form-control input input--text"
                       id="testform-1000091-email-1"
                       type="email"
                       name="tx_form_formframework[testform-1000091][email-1]"
                       value="">
                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>

            <toujou-input-group class="input-group input-group--telephone ${r.isRequired?"input-group--required":""}">
                <label for="testform-1000091-email-1" class="input-label">Telephone number</label>
                <span class="input-description">This is a description</span>
                <input placeholder="This is a placeholder"
                       required="required"
                       data-pristine-required-message="The given subject was empty."
                       class=" form-control input input--text"
                       id="testform-1000091-telephone-1"
                       type="tel"
                       name="tx_form_formframework[testform-1000091][telephone-1]"
                       value="">
                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>

        </form>
    `,e=p.bind({});e.args={isRequired:!1};var t,s,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`(args: ToujouRequireInputStoryProps) => {
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

            <toujou-input-group class="input-group \${args.isRequired ? 'input-group--required' : ''}">
                <label for="testform-1000091-text-1" class="input-label">Nice label</label>
                <span class="input-description">This is a description</span>
                <input placeholder="This is a placeholder"
                       required="required"
                       data-pristine-required-message-de="The given subject was empty."
                       class="input input--text"
                       id="testform-1000091-text-1"
                       type="text" name="tx_form_formframework[testform-1000091][text-1]"
                       value="">
                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group><toujou-input-group class="input-group input-group--email \${args.isRequired ? 'input-group--required' : ''}">
                <label for="testform-1000091-email-1" class="input-label">Email address</label>
                <span class="input-description">This is a description</span>
                <input placeholder="This is a placeholder"
                       required="required"
                       data-pristine-required-message="The given subject was empty."
                       class="form-control input input--text"
                       id="testform-1000091-email-1"
                       type="email"
                       name="tx_form_formframework[testform-1000091][email-1]"
                       value="">
                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>

            <toujou-input-group class="input-group input-group--telephone \${args.isRequired ? 'input-group--required' : ''}">
                <label for="testform-1000091-email-1" class="input-label">Telephone number</label>
                <span class="input-description">This is a description</span>
                <input placeholder="This is a placeholder"
                       required="required"
                       data-pristine-required-message="The given subject was empty."
                       class=" form-control input input--text"
                       id="testform-1000091-telephone-1"
                       type="tel"
                       name="tx_form_formframework[testform-1000091][telephone-1]"
                       value="">
                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>

        </form>
    \`;
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const g=["Required"];export{e as Required,g as __namedExportsOrder,f as default};
