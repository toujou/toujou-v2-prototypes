import{T as r}from"./badgeCustomConfig-e7a687d5.js";import{j as a}from"./jsx-runtime-ccada58e.js";import{u as t}from"./index-4fb8b842.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";function l(n){const e=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",a:"a",h3:"h3"},t(),n.components);return a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"calendar-pages",children:"Calendar-pages"}),`
`,a.jsx(e.p,{children:'Show 1 or 2 date / time in a "calendar page" optic.'}),`
`,a.jsx(e.p,{children:"It is used on several element, like the event-schedule, event-table, toujou-card--event, and also on the event pages."}),`
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
`,a.jsx(e.h3,{id:"as-group",children:a.jsx(e.code,{children:"as-group"})}),`
`,a.jsx(e.p,{children:"Render the whole element as group to be used for instance when placed on top of images (to improve visibility and accessibility)."}),`
`,a.jsxs(e.p,{children:["The ",a.jsx(e.code,{children:"as-group"})," variant is used on all element where the ",a.jsx(e.code,{children:"calendar-pages"})," is placed on top of an image, like the toujou-card."]}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<div class="calendar-pages" aria-label="calendar page with date / time information" as-group>
    ...
</div>
`})})]})}function p(n={}){const{wrapper:e}=Object.assign({},t(),n.components);return e?a.jsx(e,Object.assign({},n,{children:a.jsx(l,n)})):l(n)}const u={title:"COMPONENTS/Calendar Pages",parameters:{badges:[r.DONE],docs:{page:p}},argTypes:{},tags:["autodocs"]},o=n=>`
        <style>
            .calendar-pages-tests__pages-group {
                display: flex;
                flex-flow: row wrap;
                gap: var(--spacing-xxl);
            }
        </style>

        <div class="calendar-pages-tests">
            <h3>Different variant of the calendar-pages</h3>
            <h6 style="color: var(--color-font);">Single day inline</h6>

            <div class="calendar-pages-tests__pages-group">
                <div
                    class="calendar-pages"
                    aria-label="calendar page with date / time information"
                >
                    <time
                        class="calendar-page"
                        datetime="2025-11-14"
                        single-day
                        inline
                    >
                        <div class="calendar-page__date">
                            <p class="calendar-page__month">Nov</p>
                            <p class="calendar-page__day">14</p>
                        </div>
                    </time>
                </div>
            </div>

            <h6 style="color: var(--color-font);">Single day without time</h6>

            <div class="calendar-pages-tests__pages-group">
                <div
                    class="calendar-pages"
                    aria-label="calendar page with date / time information"
                >
                    <time
                        class="calendar-page"
                        datetime="2025-11-14"
                        single-day
                    >
                        <div class="calendar-page__date">
                            <p class="calendar-page__month">Nov</p>
                            <p class="calendar-page__day">14</p>
                            <p class="calendar-page__year">2025</p>
                        </div>
                    </time>
                </div>

                <div
                    class="calendar-pages"
                    aria-label="calendar page with date / time information"
                >
                    <time
                        class="calendar-page"
                        datetime="2025-11-14"
                        single-day
                    >
                        <div class="calendar-page__date">
                            <p class="calendar-page__month">Nov</p>
                            <p class="calendar-page__day">14</p>
                        </div>
                    </time>
                </div>

            </div>

            <h6 style="color: var(--color-font);">Single day with time</h6>

            <div class="calendar-pages-tests__pages-group">
                <div
                    class="calendar-pages"
                    aria-label="calendar page with date / time information"
                >
                    <time
                        class="calendar-page"
                        datetime="2025-11-14"
                        single-day
                    >
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
                </div>

                <div
                    class="calendar-pages"
                    aria-label="calendar page with date / time information"
                >
                    <time
                        class="calendar-page"
                        datetime="2025-11-14"
                        single-day
                    >
                        <div class="calendar-page__date">
                            <p class="calendar-page__month">Nov</p>
                            <p class="calendar-page__day">14</p>
                        </div>
                        <div class="calendar-page__times">
                            <p class="calendar-page__time calendar-page__time--start">12:30</p>
                            <p class="calendar-page__time-separator" aria-label="until">-</p>
                            <p class="calendar-page__time calendar-page__time--end">22:00</p>
                        </div>
                    </time>
                </div>

                <div
                    class="calendar-pages"
                    aria-label="calendar page with date / time information"
                >
                    <time
                        class="calendar-page"
                        datetime="2025-11-14"
                        single-day
                    >
                        <div class="calendar-page__date">
                            <p class="calendar-page__month">Nov</p>
                            <p class="calendar-page__day">14</p>
                        </div>
                        <div class="calendar-page__times">
                            <p class="calendar-page__time-separator calendar-page__time-separator--word" aria-label="until">until</p>
                            <p class="calendar-page__time calendar-page__time--end">22:00</p>
                        </div>
                    </time>
                </div>

                <div
                    class="calendar-pages"
                    aria-label="calendar page with date / time information"
                >
                    <time
                        class="calendar-page"
                        datetime="2025-11-14"
                        single-day
                    >
                        <div class="calendar-page__date">
                            <p class="calendar-page__month">Nov</p>
                            <p class="calendar-page__day">14</p>
                            <p class="calendar-page__year">2025</p>
                        </div>
                        <div class="calendar-page__times">
                            <p class="calendar-page__time-separator calendar-page__time-separator--word" aria-label="until">from</p>
                            <p class="calendar-page__time calendar-page__time--end">22:00</p>
                        </div>
                    </time>
                </div>
            </div>

            <h6 style="color: var(--color-font);">Multiday without time</h6>

            <div class="calendar-pages-tests__pages-group">
                <div class="calendar-pages" aria-label="calendar page with date / time information">
                    <time class="calendar-page" datetime="2025-11-14">
                        <div class="calendar-page__date">
                            <p class="calendar-page__month">Nov</p>
                            <p class="calendar-page__day">14</p>
                            <p class="calendar-page__year">2025</p>
                        </div>
                    </time>
                    <span class="calendar-pages__until" aria-hidden="true">
                        <toujou-icon class="icon" icon-size="l" icon-name="chevron-right" icon-color="background"></toujou-icon>
                    </span>
                    <time class="calendar-page" datetime="2025-11-16">
                        <div class="calendar-page__date">
                            <p class="calendar-page__month">Nov</p>
                            <p class="calendar-page__day">16</p>
                            <p class="calendar-page__year">2025</p>
                        </div>
                    </time>
                </div>
                <div class="calendar-pages" aria-label="calendar page with date / time information">
                    <time class="calendar-page" datetime="2025-11-14">
                        <div class="calendar-page__date">
                            <p class="calendar-page__month">Nov</p>
                            <p class="calendar-page__day">14</p>
                        </div>
                    </time>
                    <span class="calendar-pages__until" aria-hidden="true">
                        <toujou-icon class="icon" icon-size="l" icon-name="chevron-right" icon-color="background"></toujou-icon>
                    </span>
                    <time class="calendar-page" datetime="2025-11-16">
                        <div class="calendar-page__date">
                            <p class="calendar-page__month">Nov</p>
                            <p class="calendar-page__day">16</p>
                        </div>
                    </time>
                </div>
            </div>

            <h6 style="color: var(--color-font);">Multiday with time</h6>

            <div class="calendar-pages-tests__pages-group">
                <div
                    class="calendar-pages"
                    aria-label="calendar page with date / time information"
                >
                    <time class="calendar-page" datetime="2025-11-14">
                        <div class="calendar-page__date">
                            <p class="calendar-page__month">Nov</p>
                            <p class="calendar-page__day">14</p>
                            <p class="calendar-page__year">2025</p>
                        </div>
                        <div class="calendar-page__times">
                            <p class="calendar-page__time calendar-page__time--start">12:30</p>
                        </div>
                    </time>
                    <span class="calendar-pages__until" aria-hidden="true">
                        <toujou-icon class="icon" icon-size="l" icon-name="chevron-right" icon-color="background"></toujou-icon>
                    </span>
                    <time class="calendar-page" datetime="2025-11-16">
                        <div class="calendar-page__date">
                            <p class="calendar-page__month">Nov</p>
                            <p class="calendar-page__day">16</p>
                            <p class="calendar-page__year">2025</p>
                        </div>
                        <div class="calendar-page__times">
                            <p class="calendar-page__time calendar-page__time--start">12:30</p>
                        </div>
                    </time>
                </div>

                <div
                    class="calendar-pages"
                    aria-label="calendar page with date / time information"
                >
                    <time class="calendar-page" datetime="2025-11-14">
                        <div class="calendar-page__date">
                            <p class="calendar-page__month">Nov</p>
                            <p class="calendar-page__day">14</p>
                        </div>
                        <div class="calendar-page__times">
                            <p class="calendar-page__time calendar-page__time--start">12:30</p>
                        </div>
                    </time>
                    <span class="calendar-pages__until" aria-hidden="true">
                        <toujou-icon class="icon" icon-size="l" icon-name="chevron-right" icon-color="background"></toujou-icon>
                    </span>
                    <time class="calendar-page" datetime="2025-11-16">
                        <div class="calendar-page__date">
                            <p class="calendar-page__month">Nov</p>
                            <p class="calendar-page__day">16</p>
                        </div>
                        <div class="calendar-page__times">
                            <p class="calendar-page__time calendar-page__time--start">12:30</p>
                        </div>
                    </time>
                </div>

                <div
                    class="calendar-pages"
                    aria-label="calendar page with date / time information"
                >
                    <time class="calendar-page" datetime="2025-11-14">
                        <div class="calendar-page__date">
                            <p class="calendar-page__month">Nov</p>
                            <p class="calendar-page__day">14</p>
                        </div>
                        <div class="calendar-page__times">
                            <p class="calendar-page__time calendar-page__time--start">12:30</p>
                        </div>
                    </time>
                    <span class="calendar-pages__until" aria-hidden="true">
                        <toujou-icon class="icon" icon-size="l" icon-name="chevron-right" icon-color="background"></toujou-icon>
                    </span>
                    <time class="calendar-page" datetime="2025-11-16">
                        <div class="calendar-page__date">
                            <p class="calendar-page__month">Nov</p>
                            <p class="calendar-page__day">16</p>
                        </div>
                    </time>
                </div>

            </div>
        </div>

    `,s=o.bind({});s.args={};var d,c,i;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`(args: CalendarPagesStoryProps) => {
  return \`
        <style>
            .calendar-pages-tests__pages-group {
                display: flex;
                flex-flow: row wrap;
                gap: var(--spacing-xxl);
            }
        </style>

        <div class="calendar-pages-tests">
            <h3>Different variant of the calendar-pages</h3>
            <h6 style="color: var(--color-font);">Single day inline</h6>

            <div class="calendar-pages-tests__pages-group">
                <div
                    class="calendar-pages"
                    aria-label="calendar page with date / time information"
                >
                    <time
                        class="calendar-page"
                        datetime="2025-11-14"
                        single-day
                        inline
                    >
                        <div class="calendar-page__date">
                            <p class="calendar-page__month">Nov</p>
                            <p class="calendar-page__day">14</p>
                        </div>
                    </time>
                </div>
            </div>

            <h6 style="color: var(--color-font);">Single day without time</h6>

            <div class="calendar-pages-tests__pages-group">
                <div
                    class="calendar-pages"
                    aria-label="calendar page with date / time information"
                >
                    <time
                        class="calendar-page"
                        datetime="2025-11-14"
                        single-day
                    >
                        <div class="calendar-page__date">
                            <p class="calendar-page__month">Nov</p>
                            <p class="calendar-page__day">14</p>
                            <p class="calendar-page__year">2025</p>
                        </div>
                    </time>
                </div>

                <div
                    class="calendar-pages"
                    aria-label="calendar page with date / time information"
                >
                    <time
                        class="calendar-page"
                        datetime="2025-11-14"
                        single-day
                    >
                        <div class="calendar-page__date">
                            <p class="calendar-page__month">Nov</p>
                            <p class="calendar-page__day">14</p>
                        </div>
                    </time>
                </div>

            </div>

            <h6 style="color: var(--color-font);">Single day with time</h6>

            <div class="calendar-pages-tests__pages-group">
                <div
                    class="calendar-pages"
                    aria-label="calendar page with date / time information"
                >
                    <time
                        class="calendar-page"
                        datetime="2025-11-14"
                        single-day
                    >
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
                </div>

                <div
                    class="calendar-pages"
                    aria-label="calendar page with date / time information"
                >
                    <time
                        class="calendar-page"
                        datetime="2025-11-14"
                        single-day
                    >
                        <div class="calendar-page__date">
                            <p class="calendar-page__month">Nov</p>
                            <p class="calendar-page__day">14</p>
                        </div>
                        <div class="calendar-page__times">
                            <p class="calendar-page__time calendar-page__time--start">12:30</p>
                            <p class="calendar-page__time-separator" aria-label="until">-</p>
                            <p class="calendar-page__time calendar-page__time--end">22:00</p>
                        </div>
                    </time>
                </div>

                <div
                    class="calendar-pages"
                    aria-label="calendar page with date / time information"
                >
                    <time
                        class="calendar-page"
                        datetime="2025-11-14"
                        single-day
                    >
                        <div class="calendar-page__date">
                            <p class="calendar-page__month">Nov</p>
                            <p class="calendar-page__day">14</p>
                        </div>
                        <div class="calendar-page__times">
                            <p class="calendar-page__time-separator calendar-page__time-separator--word" aria-label="until">until</p>
                            <p class="calendar-page__time calendar-page__time--end">22:00</p>
                        </div>
                    </time>
                </div>

                <div
                    class="calendar-pages"
                    aria-label="calendar page with date / time information"
                >
                    <time
                        class="calendar-page"
                        datetime="2025-11-14"
                        single-day
                    >
                        <div class="calendar-page__date">
                            <p class="calendar-page__month">Nov</p>
                            <p class="calendar-page__day">14</p>
                            <p class="calendar-page__year">2025</p>
                        </div>
                        <div class="calendar-page__times">
                            <p class="calendar-page__time-separator calendar-page__time-separator--word" aria-label="until">from</p>
                            <p class="calendar-page__time calendar-page__time--end">22:00</p>
                        </div>
                    </time>
                </div>
            </div>

            <h6 style="color: var(--color-font);">Multiday without time</h6>

            <div class="calendar-pages-tests__pages-group">
                <div class="calendar-pages" aria-label="calendar page with date / time information">
                    <time class="calendar-page" datetime="2025-11-14">
                        <div class="calendar-page__date">
                            <p class="calendar-page__month">Nov</p>
                            <p class="calendar-page__day">14</p>
                            <p class="calendar-page__year">2025</p>
                        </div>
                    </time>
                    <span class="calendar-pages__until" aria-hidden="true">
                        <toujou-icon class="icon" icon-size="l" icon-name="chevron-right" icon-color="background"></toujou-icon>
                    </span>
                    <time class="calendar-page" datetime="2025-11-16">
                        <div class="calendar-page__date">
                            <p class="calendar-page__month">Nov</p>
                            <p class="calendar-page__day">16</p>
                            <p class="calendar-page__year">2025</p>
                        </div>
                    </time>
                </div>
                <div class="calendar-pages" aria-label="calendar page with date / time information">
                    <time class="calendar-page" datetime="2025-11-14">
                        <div class="calendar-page__date">
                            <p class="calendar-page__month">Nov</p>
                            <p class="calendar-page__day">14</p>
                        </div>
                    </time>
                    <span class="calendar-pages__until" aria-hidden="true">
                        <toujou-icon class="icon" icon-size="l" icon-name="chevron-right" icon-color="background"></toujou-icon>
                    </span>
                    <time class="calendar-page" datetime="2025-11-16">
                        <div class="calendar-page__date">
                            <p class="calendar-page__month">Nov</p>
                            <p class="calendar-page__day">16</p>
                        </div>
                    </time>
                </div>
            </div>

            <h6 style="color: var(--color-font);">Multiday with time</h6>

            <div class="calendar-pages-tests__pages-group">
                <div
                    class="calendar-pages"
                    aria-label="calendar page with date / time information"
                >
                    <time class="calendar-page" datetime="2025-11-14">
                        <div class="calendar-page__date">
                            <p class="calendar-page__month">Nov</p>
                            <p class="calendar-page__day">14</p>
                            <p class="calendar-page__year">2025</p>
                        </div>
                        <div class="calendar-page__times">
                            <p class="calendar-page__time calendar-page__time--start">12:30</p>
                        </div>
                    </time>
                    <span class="calendar-pages__until" aria-hidden="true">
                        <toujou-icon class="icon" icon-size="l" icon-name="chevron-right" icon-color="background"></toujou-icon>
                    </span>
                    <time class="calendar-page" datetime="2025-11-16">
                        <div class="calendar-page__date">
                            <p class="calendar-page__month">Nov</p>
                            <p class="calendar-page__day">16</p>
                            <p class="calendar-page__year">2025</p>
                        </div>
                        <div class="calendar-page__times">
                            <p class="calendar-page__time calendar-page__time--start">12:30</p>
                        </div>
                    </time>
                </div>

                <div
                    class="calendar-pages"
                    aria-label="calendar page with date / time information"
                >
                    <time class="calendar-page" datetime="2025-11-14">
                        <div class="calendar-page__date">
                            <p class="calendar-page__month">Nov</p>
                            <p class="calendar-page__day">14</p>
                        </div>
                        <div class="calendar-page__times">
                            <p class="calendar-page__time calendar-page__time--start">12:30</p>
                        </div>
                    </time>
                    <span class="calendar-pages__until" aria-hidden="true">
                        <toujou-icon class="icon" icon-size="l" icon-name="chevron-right" icon-color="background"></toujou-icon>
                    </span>
                    <time class="calendar-page" datetime="2025-11-16">
                        <div class="calendar-page__date">
                            <p class="calendar-page__month">Nov</p>
                            <p class="calendar-page__day">16</p>
                        </div>
                        <div class="calendar-page__times">
                            <p class="calendar-page__time calendar-page__time--start">12:30</p>
                        </div>
                    </time>
                </div>

                <div
                    class="calendar-pages"
                    aria-label="calendar page with date / time information"
                >
                    <time class="calendar-page" datetime="2025-11-14">
                        <div class="calendar-page__date">
                            <p class="calendar-page__month">Nov</p>
                            <p class="calendar-page__day">14</p>
                        </div>
                        <div class="calendar-page__times">
                            <p class="calendar-page__time calendar-page__time--start">12:30</p>
                        </div>
                    </time>
                    <span class="calendar-pages__until" aria-hidden="true">
                        <toujou-icon class="icon" icon-size="l" icon-name="chevron-right" icon-color="background"></toujou-icon>
                    </span>
                    <time class="calendar-page" datetime="2025-11-16">
                        <div class="calendar-page__date">
                            <p class="calendar-page__month">Nov</p>
                            <p class="calendar-page__day">16</p>
                        </div>
                    </time>
                </div>

            </div>
        </div>

    \`;
}`,...(i=(c=s.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const y=["CalendarPages"];export{s as CalendarPages,y as __namedExportsOrder,u as default};
//# sourceMappingURL=calendar-pages.stories-51af4db6.js.map
