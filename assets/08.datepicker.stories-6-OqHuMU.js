import{T as i}from"./badgeCustomConfig-oxGPBDYz.js";import{M as n}from"./form.docs-DVjkPWBU.js";import"./jsx-runtime-DPda6Ybg.js";import"./index-DhrokLn_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-4_AlzpT7.js";const a={"YYYY.MM.DD":"Y.m.d","YYYY/MM/DD":"Y/m/d","DD.MM.YYYY":"d.m.Y","DD/MM/YYYY":"d/m/Y"},f={title:"COMPONENTS/Forms",parameters:{badges:[i.DONE],docs:{page:n}},argTypes:{dateFormat:{name:"Date format",description:"Set the date format",options:Object.values(a),control:{type:"radio"},defaultValue:a["YYYY.MM.DD"],required:!0},minDate:{name:"Earliest date",description:"Earliest selectable date",control:{type:"date"}},maxDate:{name:"Latest date",description:"Latest selectable date",control:{type:"date"}},showTime:{name:"Show time",description:"Show time on the datepicker",control:{type:"boolean"},defaultValue:["false"],required:!0}},tags:["autodocs"]},p=e=>(console.log("minDate",e.minDate),console.log("maxDate",e.maxDate),`
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
            novalidate>

            <toujou-input-group class="input-group input-group--date-jquery" data-format="Y-m-d">
                <label class="input-label" for="testform-1000091-datepicker-2">Date picker (jQuery)</label>
                <span class="input-description">This is a description</span>

                 <toujou-datepicker
                    class="datepicker"
                    date-format="${e.dateFormat}"
                    minDate="${e.minDate}"
                    maxDate="${e.maxDate}"
                    ${e.showTime?"enableTime":""}
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
    `),t=p.bind({});t.args={dateFormat:a["YYYY.MM.DD"],minDate:new Date(Date.now()).toISOString(),maxDate:new Date(Date.now()+864e5*365).toISOString(),showTime:!1};var o,r,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`(args: DatepickerProps) => {
  console.log('minDate', args.minDate);
  console.log('maxDate', args.maxDate);
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
            novalidate>

            <toujou-input-group class="input-group input-group--date-jquery" data-format="Y-m-d">
                <label class="input-label" for="testform-1000091-datepicker-2">Date picker (jQuery)</label>
                <span class="input-description">This is a description</span>

                 <toujou-datepicker
                    class="datepicker"
                    date-format="\${args.dateFormat}"
                    minDate="\${args.minDate}"
                    maxDate="\${args.maxDate}"
                    \${args.showTime ? 'enableTime' : ''}
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
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const g=["DatePicker"];export{t as DatePicker,g as __namedExportsOrder,f as default};
