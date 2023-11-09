import{T as d}from"./badgeCustomConfig-e7a687d5.js";import{j as a}from"./jsx-runtime-ccada58e.js";import{u as c}from"./index-4fb8b842.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";function s(n){const e=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",a:"a",h3:"h3"},c(),n.components);return a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"calendar-pages",children:"Calendar-pages"}),`
`,a.jsx(e.p,{children:'Show 1 or 2 date / time in a "calendar page" optic.'}),`
`,a.jsx(e.h2,{id:"markup-example",children:"Markup example"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<div class="calendar-pages" aria-label="calendar page with date / time information">
    <time class="calendar-page" datetime="2025-11-14">
        <div class="calendar-page__date">
            <p class="calendar-page__month">Nov</p>
            <p class="calendar-page__day">14</p>
            <p class="calendar-page__year">2025</p>
        </div>
        <div class="calendar-page__times">
            <p class="calendar-page__time calendar-page__time--start">12:30</p>
            <p class="calendar-page__time-separator" aria-label="until">-</p>
            <p class="calendar-page__time calendar-page__time--end">22:00</p>
        </div>
    </time>

    <span class="calendar-pages__until" aria-hidden="true">
        <toujou-icon class="icon" icon-size="l" icon-name="chevron-right" icon-color="background"></toujou-icon>
    </span>

    <time class="calendar-page" datetime="2025-14-16">
        <div class="calendar-page__date">
            <p class="calendar-page__month">Nov</p>
            <p class="calendar-page__day">16</p>
            <p class="calendar-page__year">2025</p>
        </div>
    </time>
</div>
`})}),`
`,a.jsx(e.h2,{id:"date-formats",children:"Date formats"}),`
`,a.jsxs(e.p,{children:["The ",a.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time",target:"_blank",rel:"nofollow noopener noreferrer",children:"<time> element"})," doesn't accept multiple dates, so we use two ",a.jsx(e.code,{children:"<time>"})," elements, one for the start and one for the end date."]}),`
`,a.jsxs(e.p,{children:["We can find ",a.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time#valid_datetime_values",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"})," examples of valid time formates, including single year, year and month, data, date and time or event duration."]}),`
`,a.jsx(e.h2,{id:"attributes",children:"Attributes"}),`
`,a.jsx(e.h3,{id:"on-light-background",children:a.jsx(e.code,{children:"on-light-background"})}),`
`,a.jsx(e.p,{children:'Makes the element visible when place on light background by adding a border to each of the "pages" and style the separator in font-color.'}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<div class="calendar-pages" aria-label="calendar page with date / time information" on-light-background>
    ...
</div>
`})}),`
`,a.jsx(e.h3,{id:"as-group",children:a.jsx(e.code,{children:"as-group"})}),`
`,a.jsx(e.p,{children:"Render the whole element as group to be used for instance when placed on top of images (to improve visibility and accessibility)"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<div class="calendar-pages" aria-label="calendar page with date / time information" as-group>
    ...
</div>
`})}),`
`,a.jsx(e.h2,{id:"possible-problems--worries",children:"Possible problems / worries"}),`
`,a.jsx(e.p,{children:"The time element isn't read by all screen readers, so th"})]})}function o(n={}){const{wrapper:e}=Object.assign({},c(),n.components);return e?a.jsx(e,Object.assign({},n,{children:a.jsx(s,n)})):s(n)}const b={title:"COMPONENTS/Calendar Pages",parameters:{badges:[d.DONE],docs:{page:o},layout:"centered"},argTypes:{asGroup:{table:{category:"Calendar pages Settings",defaultValue:{summary:"normal"}},name:"Show as group",description:"Show the whole element as a group",control:{type:"boolean"},required:!0},showTimes:{table:{category:"Calendar pages Settings",defaultValue:{summary:"normal"}},name:"Show times",description:"Show the time elements on the calendar pages",control:{type:"boolean"},required:!0},singleDate:{table:{category:"Calendar pages Settings",defaultValue:{summary:"normal"}},name:"Show single date",description:"Show a single date",control:{type:"boolean"},required:!0},lightBackground:{table:{category:"Calendar pages Settings",defaultValue:{summary:"normal"}},name:"On light background",description:"Show the element on a light background",control:{type:"boolean"},required:!0}},tags:["autodocs"]},p=n=>`
        <style>
            body {
                background-color: ${n.lightBackground?"var(--color-bg":"var(--color-primary-dark)"};
            }
        </style>

        <div
            class="calendar-pages"
            ${n.lightBackground?"on-light-background":""}
            ${n.asGroup?"as-group":""}
            aria-label="calendar page with date / time information"
        >
            <time class="calendar-page" datetime="2025-11-14">
                <div class="calendar-page__date">
                    <p class="calendar-page__month">Nov</p>
                    <p class="calendar-page__day">14</p>
                    <p class="calendar-page__year">2025</p>
                </div>
                ${n.showTimes?`
                    <div class="calendar-page__times">
                        <p class="calendar-page__time calendar-page__time--start">12:30</p>
                        <p class="calendar-page__time-separator" aria-label="until">-</p>
                        <p class="calendar-page__time calendar-page__time--end">22:00</p>
                    </div>
                `:""}
            </time>
            ${n.singleDate?"":`
                <span class="calendar-pages__until" aria-hidden="true">
                    <toujou-icon class="icon" icon-size="l" icon-name="chevron-right" icon-color="background"></toujou-icon>
                </span>
                <time class="calendar-page" datetime="2025-11-16">
                    <div class="calendar-page__date">
                        <p class="calendar-page__month">Nov</p>
                        <p class="calendar-page__day">16</p>
                        <p class="calendar-page__year">2025</p>
                    </div>
                    ${n.showTimes?`
                        <div class="calendar-page__times">
                            <p class="calendar-page__time calendar-page__time--start">12:30</p>
                            <p class="calendar-page__time-separator" aria-label="until">-</p>
                            <p class="calendar-page__time calendar-page__time--end">22:00</p>
                        </div>
                    `:""}
                </time>
            `}
        </div>
    `,r=p.bind({});r.args={asGroup:!1,showTimes:!0,singleDate:!1,lightBackground:!1};var l,t,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`(args: CalendarPagesStoryProps) => {
  return \`
        <style>
            body {
                background-color: \${args.lightBackground ? 'var(--color-bg' : 'var(--color-primary-dark)'};
            }
        </style>

        <div
            class="calendar-pages"
            \${args.lightBackground ? 'on-light-background' : ''}
            \${args.asGroup ? 'as-group' : ''}
            aria-label="calendar page with date / time information"
        >
            <time class="calendar-page" datetime="2025-11-14">
                <div class="calendar-page__date">
                    <p class="calendar-page__month">Nov</p>
                    <p class="calendar-page__day">14</p>
                    <p class="calendar-page__year">2025</p>
                </div>
                \${args.showTimes ? \`
                    <div class="calendar-page__times">
                        <p class="calendar-page__time calendar-page__time--start">12:30</p>
                        <p class="calendar-page__time-separator" aria-label="until">-</p>
                        <p class="calendar-page__time calendar-page__time--end">22:00</p>
                    </div>
                \` : ''}
            </time>
            \${args.singleDate ? '' : \`
                <span class="calendar-pages__until" aria-hidden="true">
                    <toujou-icon class="icon" icon-size="l" icon-name="chevron-right" icon-color="background"></toujou-icon>
                </span>
                <time class="calendar-page" datetime="2025-11-16">
                    <div class="calendar-page__date">
                        <p class="calendar-page__month">Nov</p>
                        <p class="calendar-page__day">16</p>
                        <p class="calendar-page__year">2025</p>
                    </div>
                    \${args.showTimes ? \`
                        <div class="calendar-page__times">
                            <p class="calendar-page__time calendar-page__time--start">12:30</p>
                            <p class="calendar-page__time-separator" aria-label="until">-</p>
                            <p class="calendar-page__time calendar-page__time--end">22:00</p>
                        </div>
                    \` : ''}
                </time>
            \`}
        </div>
    \`;
}`,...(i=(t=r.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const v=["CalendarPages"];export{r as CalendarPages,v as __namedExportsOrder,b as default};
//# sourceMappingURL=calendar-pages.stories-e2c5803e.js.map
