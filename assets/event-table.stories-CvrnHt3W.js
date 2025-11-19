import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as r}from"./index-CcmLKVFS.js";import"./iframe-B-FpRVsO.js";import"./preload-helper-C1FmrZbK.js";function l(t){const a={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"event-table",children:"Event table"}),`
`,e.jsx(a.p,{children:"The event table element renders a simple list of events showing a list item with just the most relevant information for each event."}),`
`,e.jsx(a.p,{children:"Event are shown just once and are not grouped in any way."}),`
`,e.jsx(a.h2,{id:"markup-example",children:"Markup example"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<ol class="item-collection">
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
`})})]})}function d(t={}){const{wrapper:a}={...r(),...t.components};return a?e.jsx(a,{...t,children:e.jsx(l,{...t})}):l(t)}const h={title:"COMPONENTS/EventTable",parameters:{docs:{page:d}}},c=()=>`
        <ol class="item-collection">
            <li class="item-collection__item">
                <toujou-collection-item class="collection-item" item-type="event-table" element-design="default" item-orientation="horizontal" role="article">
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
                </toujou-collection-item>
            </li>

            <li class="item-collection__item">
                <toujou-collection-item class="collection-item" item-type="event-table" element-design="default" item-orientation="horizontal" role="article">
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
                </toujou-collection-item>
            </li>

            <li class="item-collection__item">
                <toujou-collection-item class="collection-item" item-type="event-table" element-design="default" item-orientation="horizontal" role="article">
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
                </toujou-collection-item>
            </li>

            <li class="item-collection__item">
                <toujou-collection-item class="collection-item" item-type="event-table" element-design="default" item-orientation="horizontal" role="article">
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
                </toujou-collection-item>
            </li>
        </ol>
    `,p=()=>`
        <main>
            ${c()}

            <section class="chapter" background-color="primary" font-color="primary-light">
                ${c()}
            </section>
        </main>
    `,n=p.bind({});var i,s,o;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return \`
        <main>
            \${eventTableComponent()}

            <section class="chapter" background-color="primary" font-color="primary-light">
                \${eventTableComponent()}
            </section>
        </main>
    \`;
}`,...(o=(s=n.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const u=["EventTable"];export{n as EventTable,u as __namedExportsOrder,h as default};
