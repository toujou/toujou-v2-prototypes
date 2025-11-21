import{M as r}from"./form.docs-CLAkMFfa.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-OMI9gaHG.js";import"./iframe-Bigycsh8.js";import"./preload-helper-C1FmrZbK.js";const u={title:"COMPONENTS/Forms",parameters:{docs:{page:r}},argTypes:{}},n=()=>`
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
    `,e=n.bind({});var t,s,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
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
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const l=["Date"];export{e as Date,l as __namedExportsOrder,u as default};
