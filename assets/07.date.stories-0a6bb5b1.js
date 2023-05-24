import{T as s}from"./badgeCustomConfig-e7a687d5.js";import{M as n}from"./form.docs-97b78f8d.js";import"./jsx-runtime-ac05983f.js";import"./index-e0ddb630.js";import"./_commonjsHelpers-87174ba5.js";import"./index-a9a8c754.js";const c={title:"COMPONENTS/Forms",parameters:{badges:[s.DONE],docs:{page:n}},argTypes:{}},o=()=>`
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
                    data-pristine-date-min-message-de="You must select a date after ${1}."
                    data-pristine-date-max-message-de="You must select a date before ${1}."
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
                <input data-pristine-required-message-de="The given subject was empty."
                       data-pristine-pattern-message-de="You must enter a valid date."
                       data-pristine-date-min-message-de="You must select a date after ${1}."
                       data-pristine-date-max-message-de="You must select a date before ${1}."
                       class="form-control date-dummy input input--date flatpickr-input date-dummy--empty"
                       id="testform-1000091-datepicker-2"
                       type="text"
                       name="tx_form_formframework[testform-1000091][datepicker-2][date]"
                       placeholder="Y-m-d"
                       readonly="readonly">
                   <input type="hidden" name="tx_form_formframework[testform-1000091][datepicker-2][dateFormat]" value="Y-m-d">
                   <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>
        </form>
    `,e=o.bind({});var t,a,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
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
        </form>
    \`;
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const f=["DateInputs"];export{e as DateInputs,f as __namedExportsOrder,c as default};
//# sourceMappingURL=07.date.stories-0a6bb5b1.js.map
