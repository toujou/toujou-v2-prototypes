import{T as r}from"./badgeCustomConfig-DUXiHpL4.js";import{M as n}from"./form.docs-DkrseQBQ.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-BcJeOPUZ.js";import"./index-B6tQ6Rz7.js";import"./_commonjsHelpers-Cpj98o6Y.js";const c={title:"COMPONENTS/Forms",parameters:{badges:[r.DONE],docs:{page:n}},argTypes:{}},o=()=>`
        <link rel="stylesheet" type="text/css" href="../../../../node_modules/flatpickr/dist/themes/light.css">

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

            <toujou-input-group class="input-group input-group--date">
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

        </form>
    `,e=o.bind({});var t,s,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  return \`
        <link rel="stylesheet" type="text/css" href="../../../../node_modules/flatpickr/dist/themes/light.css">

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

            <toujou-input-group class="input-group input-group--date">
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

        </form>
    \`;
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const f=["Date"];export{e as Date,f as __namedExportsOrder,c as default};
