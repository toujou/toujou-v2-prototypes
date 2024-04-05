import{T as d}from"./badgeCustomConfig-e7a687d5.js";import{j as a}from"./jsx-runtime-87b2c1dd.js";import{u as r}from"./index-af127bdc.js";import"./index-afb52020.js";import"./_commonjsHelpers-725317a4.js";function c(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...n.components};return a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"event-table",children:"Event table"}),`
`,a.jsx(e.p,{children:"The event table element renders a simple list of events showing a list item with just the most relevant information for each event."}),`
`,a.jsx(e.p,{children:"Event are shown just once and are not grouped in any way."}),`
`,a.jsx(e.h2,{id:"markup-example",children:"Markup example"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<ol class="item-collection">
    <li class="item-collection__item">
        <a href="#" class="event-table-card">
            <div class="calendar-pages event-table-card__calendar-pages" aria-label="calendar page with date / time information">
                <time class="calendar-page" datetime="2025-11-14">
                    <div class="calendar-page__date">
                        <p class="calendar-page__month">Nov</p>
                        <p class="calendar-page__day">14</p>
                    </div>
                </time>
            </div>
            <div class="event-table-card__content">
                <h3 class="event-table-card__title">The artist formerly known as Prince</h3>
            </div>

            <toujou-chip class="chip event-table-card__chip" chip-size="extra-small" chip-bg-color="error">Abgesagt</toujou-chip>
        </a>
    </li>
</ol>
`})})]})}function o(n={}){const{wrapper:e}={...r(),...n.components};return e?a.jsx(e,{...n,children:a.jsx(c,{...n})}):c(n)}const b={title:"COMPONENTS/EventTable",parameters:{badges:[d.DONE],docs:{page:o}},tags:["autodocs"]},p=()=>`
        <ol class="item-collection">
            <li class="item-collection__item">
                <a href="#" class="event-table-card">
                    <div
                        class="calendar-pages event-table-card__calendar-pages"
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
                    <div class="event-table-card__content">
                        <h3 class="event-table-card__title">The artist formerly known as Prince</h3>
                    </div>

                    <toujou-chip class="chip event-table-card__chip" chip-size="extra-small" chip-bg-color="error">Abgesagt</toujou-chip>
                </a>
            </li>

            <li class="item-collection__item">
                <a href="#" class="event-table-card">
                    <div
                        class="calendar-pages event-table-card__calendar-pages"
                        aria-label="calendar page with date / time information"
                    >
                        <time class="calendar-page" datetime="2025-11-14" single-day>
                            <div class="calendar-page__date">
                                <p class="calendar-page__month">Nov</p>
                                <p class="calendar-page__day">14</p>
                            </div>
                            <div class="calendar-page__times">
                                <p class="calendar-page__time-separator calendar-page__time-separator--word" aria-label="from">from</p>
                                <p class="calendar-page__time calendar-page__time--start">12:30</p>
                            </div>
                        </time>
                    </div>
                    <div class="event-table-card__content">
                        <h3 class="event-table-card__title">The artist formerly known as Prince with a nice long description with a nice long description with a nice long description</h3>
                    </div>
                </a>
            </li>

            <li class="item-collection__item">
                <a href="#" class="event-table-card">
                    <div class="calendar-pages event-table-card__calendar-pages" aria-label="calendar page with date / time information">
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
                    <div class="event-table-card__content">
                        <h3 class="event-table-card__title">Nice title</h3>
                    </div>

                    <toujou-chip class="chip event-table-card__chip" chip-size="extra-small" chip-bg-color="error">Abgesagt</toujou-chip>
                </a>
            </li>

            <li class="item-collection__item">
                <a href="#" class="event-table-card">
                    <div
                        class="calendar-pages event-table-card__calendar-pages"
                        aria-label="calendar page with date / time information"
                    >
                        <time class="calendar-page" datetime="2025-11-14">
                            <div class="calendar-page__date">
                                <p class="calendar-page__month">Nov</p>
                                <p class="calendar-page__day">14</p>
                                <p class="calendar-page__year">2025</p>
                            </div>
                        </time>
                    </div>
                    <div class="event-table-card__content">
                        <h3 class="event-table-card__title">The artist formerly known as Prince</h3>
                    </div>
                </a>
            </li>
        </ol>
    `,t=p.bind({});var l,s,i;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return \`
        <ol class="item-collection">
            <li class="item-collection__item">
                <a href="#" class="event-table-card">
                    <div
                        class="calendar-pages event-table-card__calendar-pages"
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
                    <div class="event-table-card__content">
                        <h3 class="event-table-card__title">The artist formerly known as Prince</h3>
                    </div>

                    <toujou-chip class="chip event-table-card__chip" chip-size="extra-small" chip-bg-color="error">Abgesagt</toujou-chip>
                </a>
            </li>

            <li class="item-collection__item">
                <a href="#" class="event-table-card">
                    <div
                        class="calendar-pages event-table-card__calendar-pages"
                        aria-label="calendar page with date / time information"
                    >
                        <time class="calendar-page" datetime="2025-11-14" single-day>
                            <div class="calendar-page__date">
                                <p class="calendar-page__month">Nov</p>
                                <p class="calendar-page__day">14</p>
                            </div>
                            <div class="calendar-page__times">
                                <p class="calendar-page__time-separator calendar-page__time-separator--word" aria-label="from">from</p>
                                <p class="calendar-page__time calendar-page__time--start">12:30</p>
                            </div>
                        </time>
                    </div>
                    <div class="event-table-card__content">
                        <h3 class="event-table-card__title">The artist formerly known as Prince with a nice long description with a nice long description with a nice long description</h3>
                    </div>
                </a>
            </li>

            <li class="item-collection__item">
                <a href="#" class="event-table-card">
                    <div class="calendar-pages event-table-card__calendar-pages" aria-label="calendar page with date / time information">
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
                    <div class="event-table-card__content">
                        <h3 class="event-table-card__title">Nice title</h3>
                    </div>

                    <toujou-chip class="chip event-table-card__chip" chip-size="extra-small" chip-bg-color="error">Abgesagt</toujou-chip>
                </a>
            </li>

            <li class="item-collection__item">
                <a href="#" class="event-table-card">
                    <div
                        class="calendar-pages event-table-card__calendar-pages"
                        aria-label="calendar page with date / time information"
                    >
                        <time class="calendar-page" datetime="2025-11-14">
                            <div class="calendar-page__date">
                                <p class="calendar-page__month">Nov</p>
                                <p class="calendar-page__day">14</p>
                                <p class="calendar-page__year">2025</p>
                            </div>
                        </time>
                    </div>
                    <div class="event-table-card__content">
                        <h3 class="event-table-card__title">The artist formerly known as Prince</h3>
                    </div>
                </a>
            </li>
        </ol>
    \`;
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const u=["EventTable"];export{t as EventTable,u as __namedExportsOrder,b as default};
