import{T as l}from"./badgeCustomConfig-DUXiHpL4.js";import{M as u}from"./form.docs-DkrseQBQ.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-BcJeOPUZ.js";import"./index-B6tQ6Rz7.js";import"./_commonjsHelpers-Cpj98o6Y.js";const m={"YYYY.MM.DD":"Y.m.d","YYYY/MM/DD":"Y/m/d","DD.MM.YYYY":"d.m.Y","DD/MM/YYYY":"d/m/Y"},p={single:"single",range:"range"},M={title:"COMPONENTS/Forms",parameters:{badges:[l.DONE],docs:{page:u}},argTypes:{dateFormat:{name:"Date format",description:"Set the date format",options:Object.values(m),control:{type:"radio"},required:!0},minDate:{name:"Earliest date",description:"Earliest selectable date",control:{type:"date"}},maxDate:{name:"Latest date",description:"Latest selectable date",control:{type:"date"}},showTime:{name:"Show time",description:"Show time on the datepicker",control:{type:"boolean"},required:!0},type:{name:"Type",description:"Set the input type",options:Object.values(p),control:{type:"radio"},required:!0}}};function r(e){if(isNaN(e))return"";const t=new Date(e);if(isNaN(t.getTime()))return"";const o=t.getFullYear(),c=(t.getMonth()+1).toString().padStart(2,"0"),d=t.getDate().toString().padStart(2,"0");return`${o}-${c}-${d}`}const D=e=>{console.log("minDate",e.minDate);const t=r(e.minDate);console.log("maxDate",e.maxDate);const o=r(e.maxDate);return`
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
    `},a=D.bind({});a.args={dateFormat:m["YYYY.MM.DD"],minDate:Date.now(),maxDate:Date.now()+864e5*365,showTime:!1,type:p.single};var s,i,n;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`(args: DatepickerProps) => {
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
}`,...(n=(i=a.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const T=["DatePicker"];export{a as DatePicker,T as __namedExportsOrder,M as default};
