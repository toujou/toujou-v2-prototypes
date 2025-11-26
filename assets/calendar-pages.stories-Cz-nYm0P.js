import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as t}from"./index-kYMsDC90.js";import"./iframe-DILOFI4D.js";import"./preload-helper-C1FmrZbK.js";function s(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...t(),...n.components};return a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"calendar-pages",children:"Calendar-pages"}),`
`,a.jsx(e.p,{children:'Show 1 or 2 date / time elements in a "calendar page" optic.'}),`
`,a.jsx(e.p,{children:"It is used on several elements, like the event-schedule, event-table, toujou-card--event, and also on the event pages."}),`
`,a.jsx(e.p,{children:'There is also a "inline" view that allows us to place the element inside other elements, without any borders or paddings'}),`
`,a.jsx(e.h2,{id:"markup-example-for-a-single-day-calendar-pages",children:"Markup example for a single day calendar-pages"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<div class="calendar-pages" aria-label="calendar page with date / time information">
    <time class="calendar-page" datetime="2025-11-14" single-day>
        <div class="calendar-page__date">
            <p class="calendar-page__month">Nov</p>
            <p class="calendar-page__day">14</p>
            <p class="calendar-page__year">2025</p>
        </div>
    </time>
</div>
`})}),`
`,a.jsx(e.h2,{id:"markup-example-for-a-multi-day-calendar-pages",children:"Markup example for a multi-day calendar-pages"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<div class="calendar-pages" aria-label="calendar page with date / time information">
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
`})}),`
`,a.jsx(e.h2,{id:"date-formats",children:"Date formats"}),`
`,a.jsxs(e.p,{children:["The ",a.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time",rel:"nofollow",children:"<time> element"})," doesn't accept multiple dates, so we use two ",a.jsx(e.code,{children:"<time>"})," elements, one for the start and one for the end date."]}),`
`,a.jsxs(e.p,{children:["We can find ",a.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time#valid_datetime_values",rel:"nofollow",children:"here"})," examples of valid time formates, including single year, year and month, data, date and time or event duration."]}),`
`,a.jsx(e.h2,{id:"attributes",children:"Attributes"}),`
`,a.jsx(e.h3,{id:"inline",children:a.jsx(e.code,{children:"inline"})}),`
`,a.jsxs(e.p,{children:["The ",a.jsx(e.code,{children:"inline"})," attribute removes the element's background color and paddings, so it can be used inside other elements as needed"]}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<div class="calendar-pages" aria-label="calendar page with date / time information" inline>
    ...
</div>
`})}),`
`,a.jsx(e.h3,{id:"single-day",children:a.jsx(e.code,{children:"single-day"})}),`
`,a.jsxs(e.p,{children:["The ",a.jsx(e.code,{children:"single-day"})," attribute is used to show the time next to the date, instead of under it like on the default layout."]}),`
`,a.jsxs(e.p,{children:["⚠️ added to the ",a.jsx(e.code,{children:".calendar-page"}),", not the ",a.jsx(e.code,{children:".calendar-pages"})," element"]}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<div class="calendar-pages" aria-label="calendar page with date / time information">
    <time class="calendar-page" datetime="2025-11-14" single-day>
        ...
    </time>
</div>
`})})]})}function r(n={}){const{wrapper:e}={...t(),...n.components};return e?a.jsx(e,{...n,children:a.jsx(s,{...n})}):s(n)}const v={title:"COMPONENTS/Calendar Pages",parameters:{docs:{page:r}},argTypes:{},tags:["autodocs"]},p=()=>`
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

    `,l=p.bind({});l.args={};var d,i,c;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
}`,...(c=(i=l.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const h=["CalendarPages"];export{l as CalendarPages,h as __namedExportsOrder,v as default};
