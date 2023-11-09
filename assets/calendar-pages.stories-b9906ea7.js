import{T as c}from"./badgeCustomConfig-e7a687d5.js";import{j as e}from"./jsx-runtime-ccada58e.js";import{u as d}from"./index-4fb8b842.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";function r(n){const a=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",a:"a",h3:"h3"},d(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"calendar-pages",children:"Calendar-pages"}),`
`,e.jsx(a.p,{children:'Show 1 or 2 date / time in a "calendar page" optic.'}),`
`,e.jsx(a.p,{children:"It is used on several element, like the event-schedule, event-table, toujou-card--event, and also on the event pages."}),`
`,e.jsx(a.h2,{id:"markup-example",children:"Markup example"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<div class="calendar-pages" aria-label="calendar page with date / time information">
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
`,e.jsx(a.h2,{id:"date-formats",children:"Date formats"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time",target:"_blank",rel:"nofollow noopener noreferrer",children:"<time> element"})," doesn't accept multiple dates, so we use two ",e.jsx(a.code,{children:"<time>"})," elements, one for the start and one for the end date."]}),`
`,e.jsxs(a.p,{children:["We can find ",e.jsx(a.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time#valid_datetime_values",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"})," examples of valid time formates, including single year, year and month, data, date and time or event duration."]}),`
`,e.jsx(a.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsx(a.h3,{id:"on-light-background",children:e.jsx(a.code,{children:"on-light-background"})}),`
`,e.jsx(a.p,{children:'Makes the element visible when place on light background by adding a border to each of the "pages" and style the separator in font-color.'}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<div class="calendar-pages" aria-label="calendar page with date / time information" on-light-background>
    ...
</div>
`})}),`
`,e.jsx(a.h3,{id:"as-group",children:e.jsx(a.code,{children:"as-group"})}),`
`,e.jsx(a.p,{children:"Render the whole element as group to be used for instance when placed on top of images (to improve visibility and accessibility)"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<div class="calendar-pages" aria-label="calendar page with date / time information" as-group>
    ...
</div>
`})}),`
`,e.jsx(a.h2,{id:"possible-problems--worries",children:"Possible problems / worries"}),`
`,e.jsx(a.p,{children:"The time element isn't read by all screen readers, so th"})]})}function o(n={}){const{wrapper:a}=Object.assign({},d(),n.components);return a?e.jsx(a,Object.assign({},n,{children:e.jsx(r,n)})):r(n)}const v={title:"COMPONENTS/Calendar Pages",parameters:{badges:[c.DONE],docs:{page:o},layout:"centered"},argTypes:{asGroup:{table:{category:"Calendar pages Settings",defaultValue:{summary:"normal"}},name:"Show as group",description:"Show the whole element as a group",control:{type:"boolean"},required:!0},showTimes:{table:{category:"Calendar pages Settings",defaultValue:{summary:"normal"}},name:"Show times",description:"Show the time elements on the calendar pages",control:{type:"boolean"},required:!0},singleDate:{table:{category:"Calendar pages Settings",defaultValue:{summary:"normal"}},name:"Show single date",description:"Show a single date",control:{type:"boolean"},required:!0}},tags:["autodocs"]},p=n=>`
        <div
            class="calendar-pages"
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
    `,s=p.bind({});s.args={asGroup:!1,showTimes:!0,singleDate:!1};var l,t,i;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`(args: CalendarPagesStoryProps) => {
  return \`
        <div
            class="calendar-pages"
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
}`,...(i=(t=s.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const b=["CalendarPages"];export{s as CalendarPages,b as __namedExportsOrder,v as default};
//# sourceMappingURL=calendar-pages.stories-b9906ea7.js.map
