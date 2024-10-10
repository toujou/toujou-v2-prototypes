import{T as s}from"./badgeCustomConfig-oxGPBDYz.js";import{M as i}from"./form.docs-DVjkPWBU.js";import"./jsx-runtime-DPda6Ybg.js";import"./index-DhrokLn_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-4_AlzpT7.js";const a={"YYYY.MM.DD":"yyyy.mm.dd","YYYY/MM/DD":"yyyy/mm/dd","DD.MM.YYYY":"dd.mm.yyyy","DD/MM/YYYY":"dd/mm/yyyy"},y={title:"COMPONENTS/Forms",parameters:{badges:[s.DONE],docs:{page:i}},argTypes:{dateFormat:{name:"Date format",description:"Set the date format",options:Object.values(a),control:{type:"radio"},defaultValue:a["YYYY.MM.DD"],required:!0},minDate:{name:"Earliest date",description:"Earliest selectable date",control:{type:"date"}},maxDate:{name:"Latest date",description:"Latest selectable date",control:{type:"date"}}},tags:["autodocs"]},p=e=>(console.log("minDate",e.minDate),console.log("maxDate",e.maxDate),`
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
                    date-format="${e.dateFormat}"
                    minDate="${e.minDate}"
                    maxDate="${e.maxDate}"
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
    `),t=p.bind({});t.args={dateFormat:a["YYYY.MM.DD"],minDate:new Date(Date.now()).toISOString(),maxDate:new Date(Date.now()+864e5*365).toISOString()};var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`(args: DatepickerProps) => {
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
                    date-format="\${args.dateFormat}"
                    minDate="\${args.minDate}"
                    maxDate="\${args.maxDate}"
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const f=["DatePicker"];export{t as DatePicker,f as __namedExportsOrder,y as default};
