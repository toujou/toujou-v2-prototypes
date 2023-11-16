import{T as h}from"./badgeCustomConfig-e7a687d5.js";import{j as e}from"./jsx-runtime-ccada58e.js";import{u as i}from"./index-4fb8b842.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";function n(s){const a=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},i(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"event-schedule",children:"Event schedule"}),`
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
`})})]})}function _(s={}){const{wrapper:a}=Object.assign({},i(),s.components);return a?e.jsx(a,Object.assign({},s,{children:e.jsx(n,s)})):n(s)}const g={title:"COMPONENTS/EventSchedule",parameters:{badges:[h.DONE],docs:{page:_}},tags:["autodocs"]},r=()=>`
        <event-schedule class="event-schedule">

            <event-schedule-year class="event-schedule-year">
                <h3 class="event-schedule-year__headline">2023</h3>

                <event-schedule-day class="event-schedule-day" role="list">
                    <div class="calendar-pages event-schedule-day__calendar-page" aria-label="calendar page with date / time information">
                        <time class="calendar-page" datetime="2025-11-14" single-day>
                            <div class="calendar-page__date">
                                <p class="calendar-page__month">Nov</p>
                                <p class="calendar-page__day">14</p>
                            </div>
                        </time>
                    </div>

                    <ul class="event-schedule-day__list">
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">von 10:30</p>
                                <h4 class="event-schedule-item__title">Hackathon for freedom <span class="event-schedule-item__title-step">(1/3)</span></h4>
                            </a>
                        </li>
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">von 08:30</p>
                                <h4 class="event-schedule-item__title">Guitar lessons for beginners <span class="event-schedule-item__title-step">(1/2)</span></h4>
                            </a>
                        </li>
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">bis 18:30</p>
                                <h4 class="event-schedule-item__title">Ted Talk: Reef fish and pollution causing the decline of nature</h4>
                                <toujou-chip class="chip event-schedule-item__chip" chip-size="extra-small" chip-bg-color="error">Abgesagt</toujou-chip>
                            </a>
                        </li>
                    </ul>
                </event-schedule-day>

                <event-schedule-day class="event-schedule-day" role="list">
                    <div class="calendar-pages event-schedule-day__calendar-page" aria-label="calendar page with date / time information">
                        <time class="calendar-page" datetime="2025-11-14" single-day>
                            <div class="calendar-page__date">
                                <p class="calendar-page__month">Nov</p>
                                <p class="calendar-page__day">15</p>
                            </div>
                        </time>
                    </div>

                    <ul class="event-schedule-day__list">
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">All day</p>
                                <h4 class="event-schedule-item__title">Hackathon for freedom <span class="event-schedule-item__title-step">(2/3)</span></h4>
                            </a>
                        </li>
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">bis 20:30</p>
                                <h4 class="event-schedule-item__title">Guitar lessons for beginners <span class="event-schedule-item__title-step">(2/2)</span></h4>
                            </a>
                        </li>
                    </ul>
                </event-schedule-day>

                <event-schedule-day class="event-schedule-day" role="list">
                    <div class="calendar-pages event-schedule-day__calendar-page" aria-label="calendar page with date / time information">
                        <time class="calendar-page" datetime="2025-11-14" single-day>
                            <div class="calendar-page__date">
                                <p class="calendar-page__month">Nov</p>
                                <p class="calendar-page__day">16</p>
                            </div>
                        </time>
                    </div>

                    <ul class="event-schedule-day__list">
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">bis 16:30</p>
                                <h4 class="event-schedule-item__title">Hackathon for freedom <span class="event-schedule-item__title-step">(3/3)</span></h4>
                            </a>
                        </li>
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">08:30 - 14:30</p>
                                <h4 class="event-schedule-item__title">Discussion group for the new house</h4>
                            </a>
                        </li>
                    </ul>
                </event-schedule-day>

            </event-schedule-year>

            <event-schedule-year class="event-schedule-year">
                <h3 class="event-schedule-year__headline">2024</h3>

                <event-schedule-day class="event-schedule-day" role="list">
                    <div class="calendar-pages event-schedule-day__calendar-page" aria-label="calendar page with date / time information">
                        <time class="calendar-page" datetime="2025-11-14" single-day>
                            <div class="calendar-page__date">
                                <p class="calendar-page__month">Jan</p>
                                <p class="calendar-page__day">04</p>
                            </div>
                        </time>
                    </div>

                    <ul class="event-schedule-day__list">
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">von 10:300</p>
                                <h4 class="event-schedule-item__title">Hackathon for freedom <span class="event-schedule-item__title-step">(1/3)</span></h4>
                            </a>
                        </li>
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">von 08:30</p>
                                <h4 class="event-schedule-item__title">Guitar lessons for beginners <span class="event-schedule-item__title-step">(1/4)</span></h4>
                            </a>
                        </li>
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">bis 18:30</p>
                                <h4 class="event-schedule-item__title">Ted Talk: Reef fish and pollution causing the decline of nature</h4>
                                <toujou-chip class="chip event-schedule-item__chip" chip-size="extra-small" chip-bg-color="error">Abgesagt</toujou-chip>
                            </a>
                        </li>
                    </ul>
                </event-schedule-day>

                <event-schedule-day class="event-schedule-day" role="list">
                    <div class="calendar-pages event-schedule-day__calendar-page" aria-label="calendar page with date / time information">
                        <time class="calendar-page" datetime="2025-11-14" single-day>
                            <div class="calendar-page__date">
                                <p class="calendar-page__month">Jan</p>
                                <p class="calendar-page__day">05</p>
                            </div>
                        </time>
                    </div>

                    <ul class="event-schedule-day__list">
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">All day</p>
                                <h4 class="event-schedule-item__title">Hackathon for freedom <span class="event-schedule-item__title-step">(2/3)</span></h4>
                            </a>
                        </li>
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">All day</p>
                                <h4 class="event-schedule-item__title">Guitar lessons for beginners <span class="event-schedule-item__title-step">(2/4)</span></h4>
                            </a>
                        </li>
                    </ul>
                </event-schedule-day>

                <event-schedule-day class="event-schedule-day" role="list">
                    <div class="calendar-pages event-schedule-day__calendar-page" aria-label="calendar page with date / time information">
                        <time class="calendar-page" datetime="2025-11-14" single-day>
                            <div class="calendar-page__date">
                                <p class="calendar-page__month">Jan</p>
                                <p class="calendar-page__day">06</p>
                            </div>
                        </time>
                    </div>

                    <ul class="event-schedule-day__list">
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">bis 18:30</p>
                                <h4 class="event-schedule-item__title">Hackathon for freedom <span class="event-schedule-item__title-step">(3/3)</span></h4>
                            </a>
                        </li>
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">All day</p>
                                <h4 class="event-schedule-item__title">Guitar lessons for beginners <span class="event-schedule-item__title-step">(3/4)</span></h4>
                            </a>
                        </li>
                    </ul>
                </event-schedule-day>

                <event-schedule-day class="event-schedule-day" role="list">
                    <div class="calendar-pages event-schedule-day__calendar-page" aria-label="calendar page with date / time information">
                        <time class="calendar-page" datetime="2025-11-14" single-day>
                            <div class="calendar-page__date">
                                <p class="calendar-page__month">Jan</p>
                                <p class="calendar-page__day">07</p>
                            </div>
                        </time>
                    </div>

                    <ul class="event-schedule-day__list">
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">bis 20:00</p>
                                <h4 class="event-schedule-item__title">Guitar lessons for beginners <span class="event-schedule-item__title-step">(4/4)</span></h4>
                            </a>
                        </li>
                    </ul>
                </event-schedule-day>

            </event-schedule-year>

        </event-schedule>
    `,l=r.bind({});var t,c,d;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  return \`
        <event-schedule class="event-schedule">

            <event-schedule-year class="event-schedule-year">
                <h3 class="event-schedule-year__headline">2023</h3>

                <event-schedule-day class="event-schedule-day" role="list">
                    <div class="calendar-pages event-schedule-day__calendar-page" aria-label="calendar page with date / time information">
                        <time class="calendar-page" datetime="2025-11-14" single-day>
                            <div class="calendar-page__date">
                                <p class="calendar-page__month">Nov</p>
                                <p class="calendar-page__day">14</p>
                            </div>
                        </time>
                    </div>

                    <ul class="event-schedule-day__list">
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">von 10:30</p>
                                <h4 class="event-schedule-item__title">Hackathon for freedom <span class="event-schedule-item__title-step">(1/3)</span></h4>
                            </a>
                        </li>
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">von 08:30</p>
                                <h4 class="event-schedule-item__title">Guitar lessons for beginners <span class="event-schedule-item__title-step">(1/2)</span></h4>
                            </a>
                        </li>
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">bis 18:30</p>
                                <h4 class="event-schedule-item__title">Ted Talk: Reef fish and pollution causing the decline of nature</h4>
                                <toujou-chip class="chip event-schedule-item__chip" chip-size="extra-small" chip-bg-color="error">Abgesagt</toujou-chip>
                            </a>
                        </li>
                    </ul>
                </event-schedule-day>

                <event-schedule-day class="event-schedule-day" role="list">
                    <div class="calendar-pages event-schedule-day__calendar-page" aria-label="calendar page with date / time information">
                        <time class="calendar-page" datetime="2025-11-14" single-day>
                            <div class="calendar-page__date">
                                <p class="calendar-page__month">Nov</p>
                                <p class="calendar-page__day">15</p>
                            </div>
                        </time>
                    </div>

                    <ul class="event-schedule-day__list">
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">All day</p>
                                <h4 class="event-schedule-item__title">Hackathon for freedom <span class="event-schedule-item__title-step">(2/3)</span></h4>
                            </a>
                        </li>
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">bis 20:30</p>
                                <h4 class="event-schedule-item__title">Guitar lessons for beginners <span class="event-schedule-item__title-step">(2/2)</span></h4>
                            </a>
                        </li>
                    </ul>
                </event-schedule-day>

                <event-schedule-day class="event-schedule-day" role="list">
                    <div class="calendar-pages event-schedule-day__calendar-page" aria-label="calendar page with date / time information">
                        <time class="calendar-page" datetime="2025-11-14" single-day>
                            <div class="calendar-page__date">
                                <p class="calendar-page__month">Nov</p>
                                <p class="calendar-page__day">16</p>
                            </div>
                        </time>
                    </div>

                    <ul class="event-schedule-day__list">
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">bis 16:30</p>
                                <h4 class="event-schedule-item__title">Hackathon for freedom <span class="event-schedule-item__title-step">(3/3)</span></h4>
                            </a>
                        </li>
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">08:30 - 14:30</p>
                                <h4 class="event-schedule-item__title">Discussion group for the new house</h4>
                            </a>
                        </li>
                    </ul>
                </event-schedule-day>

            </event-schedule-year>

            <event-schedule-year class="event-schedule-year">
                <h3 class="event-schedule-year__headline">2024</h3>

                <event-schedule-day class="event-schedule-day" role="list">
                    <div class="calendar-pages event-schedule-day__calendar-page" aria-label="calendar page with date / time information">
                        <time class="calendar-page" datetime="2025-11-14" single-day>
                            <div class="calendar-page__date">
                                <p class="calendar-page__month">Jan</p>
                                <p class="calendar-page__day">04</p>
                            </div>
                        </time>
                    </div>

                    <ul class="event-schedule-day__list">
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">von 10:300</p>
                                <h4 class="event-schedule-item__title">Hackathon for freedom <span class="event-schedule-item__title-step">(1/3)</span></h4>
                            </a>
                        </li>
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">von 08:30</p>
                                <h4 class="event-schedule-item__title">Guitar lessons for beginners <span class="event-schedule-item__title-step">(1/4)</span></h4>
                            </a>
                        </li>
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">bis 18:30</p>
                                <h4 class="event-schedule-item__title">Ted Talk: Reef fish and pollution causing the decline of nature</h4>
                                <toujou-chip class="chip event-schedule-item__chip" chip-size="extra-small" chip-bg-color="error">Abgesagt</toujou-chip>
                            </a>
                        </li>
                    </ul>
                </event-schedule-day>

                <event-schedule-day class="event-schedule-day" role="list">
                    <div class="calendar-pages event-schedule-day__calendar-page" aria-label="calendar page with date / time information">
                        <time class="calendar-page" datetime="2025-11-14" single-day>
                            <div class="calendar-page__date">
                                <p class="calendar-page__month">Jan</p>
                                <p class="calendar-page__day">05</p>
                            </div>
                        </time>
                    </div>

                    <ul class="event-schedule-day__list">
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">All day</p>
                                <h4 class="event-schedule-item__title">Hackathon for freedom <span class="event-schedule-item__title-step">(2/3)</span></h4>
                            </a>
                        </li>
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">All day</p>
                                <h4 class="event-schedule-item__title">Guitar lessons for beginners <span class="event-schedule-item__title-step">(2/4)</span></h4>
                            </a>
                        </li>
                    </ul>
                </event-schedule-day>

                <event-schedule-day class="event-schedule-day" role="list">
                    <div class="calendar-pages event-schedule-day__calendar-page" aria-label="calendar page with date / time information">
                        <time class="calendar-page" datetime="2025-11-14" single-day>
                            <div class="calendar-page__date">
                                <p class="calendar-page__month">Jan</p>
                                <p class="calendar-page__day">06</p>
                            </div>
                        </time>
                    </div>

                    <ul class="event-schedule-day__list">
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">bis 18:30</p>
                                <h4 class="event-schedule-item__title">Hackathon for freedom <span class="event-schedule-item__title-step">(3/3)</span></h4>
                            </a>
                        </li>
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">All day</p>
                                <h4 class="event-schedule-item__title">Guitar lessons for beginners <span class="event-schedule-item__title-step">(3/4)</span></h4>
                            </a>
                        </li>
                    </ul>
                </event-schedule-day>

                <event-schedule-day class="event-schedule-day" role="list">
                    <div class="calendar-pages event-schedule-day__calendar-page" aria-label="calendar page with date / time information">
                        <time class="calendar-page" datetime="2025-11-14" single-day>
                            <div class="calendar-page__date">
                                <p class="calendar-page__month">Jan</p>
                                <p class="calendar-page__day">07</p>
                            </div>
                        </time>
                    </div>

                    <ul class="event-schedule-day__list">
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">bis 20:00</p>
                                <h4 class="event-schedule-item__title">Guitar lessons for beginners <span class="event-schedule-item__title-step">(4/4)</span></h4>
                            </a>
                        </li>
                    </ul>
                </event-schedule-day>

            </event-schedule-year>

        </event-schedule>
    \`;
}`,...(d=(c=l.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const y=["EventSchedule"];export{l as EventSchedule,y as __namedExportsOrder,g as default};
//# sourceMappingURL=event-schedule.stories-fe489a6c.js.map
