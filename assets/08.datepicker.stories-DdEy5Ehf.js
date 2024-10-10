import{T as d}from"./badgeCustomConfig-oxGPBDYz.js";import{M as l}from"./form.docs-DVjkPWBU.js";import"./jsx-runtime-DPda6Ybg.js";import"./index-DhrokLn_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-4_AlzpT7.js";const r={"YYYY.MM.DD":"Y.m.d","YYYY/MM/DD":"Y/m/d","DD.MM.YYYY":"d.m.Y","DD/MM/YYYY":"d/m/Y"},k={title:"COMPONENTS/Forms",parameters:{badges:[d.DONE],docs:{page:l}},argTypes:{dateFormat:{name:"Date format",description:"Set the date format",options:Object.values(r),control:{type:"radio"},defaultValue:r["YYYY.MM.DD"],required:!0},minDate:{name:"Earliest date",description:"Earliest selectable date",control:{type:"date"}},maxDate:{name:"Latest date",description:"Latest selectable date",control:{type:"date"}},showTime:{name:"Show time",description:"Show time on the datepicker",control:{type:"boolean"},defaultValue:["false"],required:!0}},tags:["autodocs"]};function s(e){if(isNaN(e))return"";const t=new Date(e);if(isNaN(t.getTime()))return"";const o=t.getFullYear(),p=(t.getMonth()+1).toString().padStart(2,"0"),c=t.getDate().toString().padStart(2,"0");return`${o}-${p}-${c}`}const u=e=>{console.log("minDate",e.minDate);const t=s(e.minDate);console.log("maxDate",e.maxDate);const o=s(e.maxDate);return`
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
                    mode="range"
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
    `},a=u.bind({});a.args={dateFormat:r["YYYY.MM.DD"],minDate:Date.now(),maxDate:Date.now()+864e5*365,showTime:!1};var i,n,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`(args: DatepickerProps) => {
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
                    mode="range"
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
}`,...(m=(n=a.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const M=["DatePicker"];export{a as DatePicker,M as __namedExportsOrder,k as default};
