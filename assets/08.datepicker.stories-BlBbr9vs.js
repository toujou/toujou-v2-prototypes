import{T as d}from"./badgeCustomConfig-oxGPBDYz.js";import{M as u}from"./form.docs-DVjkPWBU.js";import"./jsx-runtime-DPda6Ybg.js";import"./index-DhrokLn_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-4_AlzpT7.js";const r={"YYYY.MM.DD":"Y.m.d","YYYY/MM/DD":"Y/m/d","DD.MM.YYYY":"d.m.Y","DD/MM/YYYY":"d/m/Y"},s={single:"single",range:"range"},k={title:"COMPONENTS/Forms",parameters:{badges:[d.DONE],docs:{page:u}},argTypes:{dateFormat:{name:"Date format",description:"Set the date format",options:Object.values(r),control:{type:"radio"},defaultValue:r["YYYY.MM.DD"],required:!0},minDate:{name:"Earliest date",description:"Earliest selectable date",control:{type:"date"}},maxDate:{name:"Latest date",description:"Latest selectable date",control:{type:"date"}},showTime:{name:"Show time",description:"Show time on the datepicker",control:{type:"boolean"},defaultValue:["false"],required:!0},type:{name:"Type",description:"Set the input type",options:Object.values(s),control:{type:"radio"},defaultValue:s.single,required:!0}},tags:["autodocs"]};function i(e){if(isNaN(e))return"";const t=new Date(e);if(isNaN(t.getTime()))return"";const o=t.getFullYear(),l=(t.getMonth()+1).toString().padStart(2,"0"),c=t.getDate().toString().padStart(2,"0");return`${o}-${l}-${c}`}const D=e=>{console.log("minDate",e.minDate);const t=i(e.minDate);console.log("maxDate",e.maxDate);const o=i(e.maxDate);return`
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
                    minDate="${t}"
                    maxDate="${o}"
                    mode="${e.type}"
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
    `},a=D.bind({});a.args={dateFormat:r["YYYY.MM.DD"],minDate:Date.now(),maxDate:Date.now()+864e5*365,showTime:!1,type:s.single};var n,m,p;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`(args: DatepickerProps) => {
  console.log('minDate', args.minDate);
  const formattedMinDate = formatTimestamp(args.minDate);
  console.log('maxDate', args.maxDate);
  const formattedMaxDate = formatTimestamp(args.maxDate);
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
                    minDate="\${formattedMinDate}"
                    maxDate="\${formattedMaxDate}"
                    mode="\${args.type}"
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
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const T=["DatePicker"];export{a as DatePicker,T as __namedExportsOrder,k as default};
