import{T as r}from"./badgeCustomConfig-e7a687d5.js";import{j as e}from"./jsx-runtime-ccada58e.js";import{u as l}from"./index-4fb8b842.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";function i(n){const a=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},l(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"event-schedule",children:"Event schedule"}),`
`,e.jsx(a.p,{children:"The event schedule element renders event-schedule-card element inside a card-collection."}),`
`,e.jsx(a.p,{children:"These cards show only the most important event information."}),`
`,e.jsx(a.h2,{id:"markup-example",children:"Markup example"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<div class="event-schedule-card">
    <div class="event-schedule-card__top">
        <div class="calendar-pages" aria-label="calendar page with date / time information">
            <time class="calendar-page" datetime="2025-11-14">
                <div class="calendar-page__date">
                    <p class="calendar-page__month">Nov</p>
                    <p class="calendar-page__day">14</p>
                    <p class="calendar-page__year">2025</p>
                </div>
            </time>
        </div>
        <toujou-chip class="chip" chip-size="small" chip-bg-color="error">Event abgesagt</toujou-chip>
    </div>
    <div class="event-schedule-card__content">
        <h3 class="event-schedule-card__title">The artist formerly known as Prince</h3>
        <p class="event-schedule-card__info">
            <toujou-icon class="icon" icon-name="info" icon-color="primary" icon-size="ms"></toujou-icon>
            <span class="event-schedule-card__info-text">Meistersingerhalle - Nürnberg</span>
        </p>
    </div>
    <a href="#" class="event-schedule-card__button">
        <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
        Mehr Informationen
    </a>
</div>
`})})]})}function d(n={}){const{wrapper:a}=Object.assign({},l(),n.components);return a?e.jsx(a,Object.assign({},n,{children:e.jsx(i,n)})):i(n)}const g={title:"COMPONENTS/EventSchedule",parameters:{badges:[r.DONE],docs:{page:d}},tags:["autodocs"]},p=()=>`
        <ul class="card-collection">
            <li class="card-collection__item">
                <toujou-collection-item
                    class="collection-item"
                    item-type="event-schedule"
                    element-design="default"
                    item-orientation="vertical"
                    role="article"
                >
                    <div class="event-schedule-card">
                        <div class="event-schedule-card__top">
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
                            <toujou-chip class="chip" chip-size="small" chip-bg-color="error">Event abgesagt</toujou-chip>
                        </div>
                        <div class="event-schedule-card__content">
                            <h3 class="event-schedule-card__title">The artist formerly known as Prince</h3>
                            <p class="event-schedule-card__info">
                                <toujou-icon class="icon" icon-name="info" icon-color="primary" icon-size="ms"></toujou-icon>
                                <span class="event-schedule-card__info-text">Meistersingerhalle - Nürnberg</span>
                            </p>
                        </div>
                        <a href="#" class="event-schedule-card__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            Mehr Informationen
                        </a>
                    </div>

                </toujou-collection-item>
            </li>

            <li class="card-collection__item">
                <toujou-collection-item
                    class="collection-item"
                    item-type="event-schedule-card"
                    element-design="default"
                    item-orientation="vertical"
                    role="article"
                >
                    <div class="event-schedule-card">
                        <div class="event-schedule-card__top">
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
                                        <p class="calendar-page__time-separator" aria-label="until">-</p>
                                        <p class="calendar-page__time calendar-page__time--end">22:00</p>
                                    </div>
                                </time>
                            </div>
                            <toujou-chip class="chip" chip-size="small" chip-bg-color="error">Event abgesagt</toujou-chip>
                        </div>
                        <div class="event-schedule-card__content">
                            <h3 class="event-schedule-card__title">The artist formerly known as Prince</h3>
                            <p class="event-schedule-card__info">
                                <toujou-icon class="icon" icon-name="info" icon-color="primary" icon-size="ms"></toujou-icon>
                                <span class="event-schedule-card__info-text">Meistersingerhalle - Nürnberg</span>
                            </p>
                        </div>
                        <a href="#" class="event-schedule-card__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            Mehr Informationen
                        </a>
                    </div>

                </toujou-collection-item>
            </li>

            <li class="card-collection__item">
                <toujou-collection-item
                    class="collection-item"
                    item-type="event-schedule-card"
                    element-design="default"
                    item-orientation="vertical"
                    role="article"
                >
                    <div class="event-schedule-card">
                        <div class="event-schedule-card__top">
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
                            <toujou-chip class="chip" chip-size="small" chip-bg-color="error">Event abgesagt</toujou-chip>
                        </div>
                        <div class="event-schedule-card__content">
                            <h3 class="event-schedule-card__title">The artist formerly known as Prince</h3>
                            <p class="event-schedule-card__info">
                                <toujou-icon class="icon" icon-name="info" icon-color="primary" icon-size="ms"></toujou-icon>
                                <span class="event-schedule-card__info-text">Meistersingerhalle - Nürnberg</span>
                            </p>
                        </div>
                        <a href="#" class="event-schedule-card__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            Mehr Informationen
                        </a>
                    </div>

                </toujou-collection-item>
            </li>

            <li class="card-collection__item">
                <toujou-collection-item
                    class="collection-item"
                    item-type="event-schedule-card"
                    element-design="default"
                    item-orientation="vertical"
                    role="article"
                >
                    <div class="event-schedule-card">
                        <div class="event-schedule-card__top">
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
                                </time>
                            </div>
                            <toujou-chip class="chip" chip-size="small" chip-bg-color="error">Event abgesagt</toujou-chip>
                        </div>
                        <div class="event-schedule-card__content">
                            <h3 class="event-schedule-card__title">The artist formerly known as Prince</h3>
                            <p class="event-schedule-card__info">
                                <toujou-icon class="icon" icon-name="info" icon-color="primary" icon-size="ms"></toujou-icon>
                                <span class="event-schedule-card__info-text">Meistersingerhalle - Nürnberg</span>
                            </p>
                        </div>
                        <a href="#" class="event-schedule-card__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            Mehr Informationen
                        </a>
                    </div>

                </toujou-collection-item>
            </li>
        </ul>
    `,c=p.bind({});var s,t,o;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return \`
        <ul class="card-collection">
            <li class="card-collection__item">
                <toujou-collection-item
                    class="collection-item"
                    item-type="event-schedule"
                    element-design="default"
                    item-orientation="vertical"
                    role="article"
                >
                    <div class="event-schedule-card">
                        <div class="event-schedule-card__top">
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
                            <toujou-chip class="chip" chip-size="small" chip-bg-color="error">Event abgesagt</toujou-chip>
                        </div>
                        <div class="event-schedule-card__content">
                            <h3 class="event-schedule-card__title">The artist formerly known as Prince</h3>
                            <p class="event-schedule-card__info">
                                <toujou-icon class="icon" icon-name="info" icon-color="primary" icon-size="ms"></toujou-icon>
                                <span class="event-schedule-card__info-text">Meistersingerhalle - Nürnberg</span>
                            </p>
                        </div>
                        <a href="#" class="event-schedule-card__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            Mehr Informationen
                        </a>
                    </div>

                </toujou-collection-item>
            </li>

            <li class="card-collection__item">
                <toujou-collection-item
                    class="collection-item"
                    item-type="event-schedule-card"
                    element-design="default"
                    item-orientation="vertical"
                    role="article"
                >
                    <div class="event-schedule-card">
                        <div class="event-schedule-card__top">
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
                                        <p class="calendar-page__time-separator" aria-label="until">-</p>
                                        <p class="calendar-page__time calendar-page__time--end">22:00</p>
                                    </div>
                                </time>
                            </div>
                            <toujou-chip class="chip" chip-size="small" chip-bg-color="error">Event abgesagt</toujou-chip>
                        </div>
                        <div class="event-schedule-card__content">
                            <h3 class="event-schedule-card__title">The artist formerly known as Prince</h3>
                            <p class="event-schedule-card__info">
                                <toujou-icon class="icon" icon-name="info" icon-color="primary" icon-size="ms"></toujou-icon>
                                <span class="event-schedule-card__info-text">Meistersingerhalle - Nürnberg</span>
                            </p>
                        </div>
                        <a href="#" class="event-schedule-card__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            Mehr Informationen
                        </a>
                    </div>

                </toujou-collection-item>
            </li>

            <li class="card-collection__item">
                <toujou-collection-item
                    class="collection-item"
                    item-type="event-schedule-card"
                    element-design="default"
                    item-orientation="vertical"
                    role="article"
                >
                    <div class="event-schedule-card">
                        <div class="event-schedule-card__top">
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
                            <toujou-chip class="chip" chip-size="small" chip-bg-color="error">Event abgesagt</toujou-chip>
                        </div>
                        <div class="event-schedule-card__content">
                            <h3 class="event-schedule-card__title">The artist formerly known as Prince</h3>
                            <p class="event-schedule-card__info">
                                <toujou-icon class="icon" icon-name="info" icon-color="primary" icon-size="ms"></toujou-icon>
                                <span class="event-schedule-card__info-text">Meistersingerhalle - Nürnberg</span>
                            </p>
                        </div>
                        <a href="#" class="event-schedule-card__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            Mehr Informationen
                        </a>
                    </div>

                </toujou-collection-item>
            </li>

            <li class="card-collection__item">
                <toujou-collection-item
                    class="collection-item"
                    item-type="event-schedule-card"
                    element-design="default"
                    item-orientation="vertical"
                    role="article"
                >
                    <div class="event-schedule-card">
                        <div class="event-schedule-card__top">
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
                                </time>
                            </div>
                            <toujou-chip class="chip" chip-size="small" chip-bg-color="error">Event abgesagt</toujou-chip>
                        </div>
                        <div class="event-schedule-card__content">
                            <h3 class="event-schedule-card__title">The artist formerly known as Prince</h3>
                            <p class="event-schedule-card__info">
                                <toujou-icon class="icon" icon-name="info" icon-color="primary" icon-size="ms"></toujou-icon>
                                <span class="event-schedule-card__info-text">Meistersingerhalle - Nürnberg</span>
                            </p>
                        </div>
                        <a href="#" class="event-schedule-card__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            Mehr Informationen
                        </a>
                    </div>

                </toujou-collection-item>
            </li>
        </ul>
    \`;
}`,...(o=(t=c.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const j=["EventSchedule"];export{c as EventSchedule,j as __namedExportsOrder,g as default};
//# sourceMappingURL=event-schedule.stories-385e7af3.js.map
