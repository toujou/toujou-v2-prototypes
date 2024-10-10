import{T as r}from"./badgeCustomConfig-oxGPBDYz.js";import{M as n}from"./form.docs-DVjkPWBU.js";import"./jsx-runtime-DPda6Ybg.js";import"./index-DhrokLn_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-4_AlzpT7.js";const c={title:"COMPONENTS/Forms",parameters:{badges:[r.DONE],docs:{page:n}},argTypes:{},tags:["autodocs"]},o=()=>`
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

            <toujou-input-group class="input-group input-group--date-jquery" data-format="Y-m-d">
                <label class="input-label" for="testform-1000091-datepicker-2">Date picker (jQuery)</label>
                <span class="input-description">This is a description</span>

                 <toujou-datepicker
                    date-format="d.m.Y"
                    minDate="today"
                    class="datepicker"
                >
                    <input
                        name="dateFrom"
                        class="form-control input input--datepicker"
                        placeholder="Select a date"
                        type="text"
                    />
                </toujou-datepicker>

                   <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>

        </form>
    `,e=o.bind({});var t,a,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
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

            <toujou-input-group class="input-group input-group--date-jquery" data-format="Y-m-d">
                <label class="input-label" for="testform-1000091-datepicker-2">Date picker (jQuery)</label>
                <span class="input-description">This is a description</span>

                 <toujou-datepicker
                    date-format="d.m.Y"
                    minDate="today"
                    class="datepicker"
                >
                    <input
                        name="dateFrom"
                        class="form-control input input--datepicker"
                        placeholder="Select a date"
                        type="text"
                    />
                </toujou-datepicker>

                   <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>

        </form>
    \`;
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const f=["DateInputs"];export{e as DateInputs,f as __namedExportsOrder,c as default};
