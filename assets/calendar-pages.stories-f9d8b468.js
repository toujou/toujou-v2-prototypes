import{T as p}from"./badgeCustomConfig-e7a687d5.js";import{j as r}from"./jsx-runtime-ccada58e.js";import{u as o}from"./index-4fb8b842.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";function n(a){const s=Object.assign({h1:"h1"},o(),a.components);return r.jsx(s.h1,{id:"calendar-pages",children:"Calendar-pages"})}function d(a={}){const{wrapper:s}=Object.assign({},o(),a.components);return s?r.jsx(s,Object.assign({},a,{children:r.jsx(n,a)})):n(a)}const v={title:"COMPONENTS/Calendar Pages",parameters:{badges:[p.DONE],docs:{page:d},layout:"centered"},argTypes:{asGroup:{table:{category:"Calendar pages Settings",defaultValue:{summary:"normal"}},name:"Show as group",description:"Show the whole element as a group",control:{type:"boolean"},required:!0},showTimes:{table:{category:"Calendar pages Settings",defaultValue:{summary:"normal"}},name:"Show times",description:"Show the time elements on the calendar pages",control:{type:"boolean"},required:!0},singleDate:{table:{category:"Calendar pages Settings",defaultValue:{summary:"normal"}},name:"Show single date",description:"Show a single date",control:{type:"boolean"},required:!0},lightBackground:{table:{category:"Calendar pages Settings",defaultValue:{summary:"normal"}},name:"On light background",description:"Show the element on a light background",control:{type:"boolean"},required:!0}},tags:["autodocs"]},i=a=>`
        <style>
            body {
                background-color: ${a.lightBackground?"var(--color-bg":"var(--color-primary-dark)"};
            }
        </style>

        <time
            class="calendar-pages"
            ${a.lightBackground?"on-light-background":""}
            ${a.asGroup?"as-group":""}
        >
            <div class="calendar-page">
                <div class="calendar-page__date">
                    <p class="calendar-page__month">Nov</p>
                    <p class="calendar-page__day">14</p>
                    <p class="calendar-page__year">2025</p>
                </div>
                ${a.showTimes?`
                    <div class="calendar-page__times">
                        <p class="calendar-page__time calendar-page__time--start">12:30</p>
                        <p class="calendar-page__time-separator">-</p>
                        <p class="calendar-page__time calendar-page__time--end">22:00</p>
                    </div>
                `:""}
            </div>
            ${a.singleDate?"":`
                <span class="calendar-pages__until">
                    <toujou-icon class="icon" icon-size="l" icon-name="chevron-right" icon-color="background"></toujou-icon>
                </span>
                <div class="calendar-page">
                    <div class="calendar-page__date">
                        <p class="calendar-page__month">Nov</p>
                        <p class="calendar-page__day">16</p>
                        <p class="calendar-page__year">2025</p>
                    </div>
                    ${a.showTimes?`
                        <div class="calendar-page__times">
                            <p class="calendar-page__time calendar-page__time--start">12:30</p>
                            <p class="calendar-page__time-separator">-</p>
                            <p class="calendar-page__time calendar-page__time--end">22:00</p>
                        </div>
                    `:""}
                </div>
            `}
        </time>
    `,e=i.bind({});e.args={asGroup:!1,showTimes:!0,singleDate:!1,lightBackground:!1};var l,t,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`(args: CalendarPagesStoryProps) => {
  return \`
        <style>
            body {
                background-color: \${args.lightBackground ? 'var(--color-bg' : 'var(--color-primary-dark)'};
            }
        </style>

        <time
            class="calendar-pages"
            \${args.lightBackground ? 'on-light-background' : ''}
            \${args.asGroup ? 'as-group' : ''}
        >
            <div class="calendar-page">
                <div class="calendar-page__date">
                    <p class="calendar-page__month">Nov</p>
                    <p class="calendar-page__day">14</p>
                    <p class="calendar-page__year">2025</p>
                </div>
                \${args.showTimes ? \`
                    <div class="calendar-page__times">
                        <p class="calendar-page__time calendar-page__time--start">12:30</p>
                        <p class="calendar-page__time-separator">-</p>
                        <p class="calendar-page__time calendar-page__time--end">22:00</p>
                    </div>
                \` : ''}
            </div>
            \${args.singleDate ? '' : \`
                <span class="calendar-pages__until">
                    <toujou-icon class="icon" icon-size="l" icon-name="chevron-right" icon-color="background"></toujou-icon>
                </span>
                <div class="calendar-page">
                    <div class="calendar-page__date">
                        <p class="calendar-page__month">Nov</p>
                        <p class="calendar-page__day">16</p>
                        <p class="calendar-page__year">2025</p>
                    </div>
                    \${args.showTimes ? \`
                        <div class="calendar-page__times">
                            <p class="calendar-page__time calendar-page__time--start">12:30</p>
                            <p class="calendar-page__time-separator">-</p>
                            <p class="calendar-page__time calendar-page__time--end">22:00</p>
                        </div>
                    \` : ''}
                </div>
            \`}
        </time>
    \`;
}`,...(c=(t=e.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};const y=["CalendarPages"];export{e as CalendarPages,y as __namedExportsOrder,v as default};
//# sourceMappingURL=calendar-pages.stories-f9d8b468.js.map
