import{T as r}from"./badgeCustomConfig-e7a687d5.js";import{j as l}from"./jsx-runtime-ac05983f.js";import{u as m}from"./index-a9a8c754.js";import"./index-e0ddb630.js";import"./_commonjsHelpers-87174ba5.js";function n(e){const t=Object.assign({h1:"h1"},m(),e.components);return l.jsx(t.h1,{id:"timeline",children:"Timeline"})}function c(e={}){const{wrapper:t}=Object.assign({},m(),e.components);return t?l.jsx(t,Object.assign({},e,{children:l.jsx(n,e)})):n(e)}const f={title:"COMPONENTS/Timeline",parameters:{badges:[r.TESTING],docs:{page:c}},argTypes:{elementDesign:{table:{category:"Timeline Settings",defaultValue:{summary:"default"}},name:"Timeline element design",description:"Set the element design for the timeline element",options:["default","primary","secondary","inverted"],control:{type:"radio"},defaultValue:["default"],required:!0}},tags:["autodocs"]},u=e=>`
        <toujou-timeline class="timeline" timeline-direction="horizontal" element-design="${e.elementDesign}" timeline-show-legend="" aria-label="Toujou milestones timeline">
            <div class="timeline__container" role="list">

                <toujou-timeline-item class="timeline-item" role="listitem">
                    <h2 class="timeline-item__year" id="timeline-3321-year-2023">2023</h2>
                    <timeline-card class="timeline-card">
                        <figure class="timeline-card__figure" style="overflow: hidden;">
                            <img class="timeline-card__image" src="https://images.pexels.com/photos/18276816/pexels-photo-18276816/free-photo-of-green-leaves.jpeg">
                        </figure>
                        <div class="timeline-card__bottom">
                            <h3 class="timeline-card__title">Title one</h3>
                            <h4 class="timeline-card__subtitle">12 november</h4>
                            <p class="timeline-card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a href="#" class="timeline-card__button">
                                <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                Home
                            </a>
                        </div>
                    </timeline-card>
                </toujou-timeline-item>

                <toujou-timeline-item class="timeline-item" role="listitem">
                    <div class="timeline-card">
                        <div class="timeline-card__bottom">
                            <h3 class="timeline-card__title">Title without year</h3>
                            <h4 class="timeline-card__subtitle">14 Januar</h4>
                            <p class="timeline-card__text"> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                    </div>
                </toujou-timeline-item>

                <toujou-timeline-item class="timeline-item" role="listitem">
                    <h2 class="timeline-item__year" id="timeline-3321-year-2024">2024</h2>
                    <div class="timeline-card">
                        <figure class="timeline-card__figure" style="overflow: hidden;">
                            <img class="timeline-card__image" src="https://images.pexels.com/photos/18276816/pexels-photo-18276816/free-photo-of-green-leaves.jpeg">
                        </figure>
                        <div class="timeline-card__bottom">
                            <h3 class="timeline-card__title">Title two</h3>
                            <h4 class="timeline-card__subtitle">Subtitle two</h4>
                            <p class="timeline-card__text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <a href="#" class="timeline-card__button">
                                <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                Home
                            </a>
                        </div>
                    </div>
                </toujou-timeline-item>

                <toujou-timeline-item class="timeline-item" role="listitem">
                    <h2 class="timeline-item__year" id="timeline-3321-year-2025">2025</h2>
                    <div class="timeline-card">
                        <figure class="timeline-card__figure" style="overflow: hidden;">
                            <img class="timeline-card__image" src="https://images.pexels.com/photos/18276816/pexels-photo-18276816/free-photo-of-green-leaves.jpeg">
                        </figure>
                        <div class="timeline-card__bottom">
                            <h3 class="timeline-card__title">Title for 2025</h3>
                            <h4 class="timeline-card__subtitle">Some subtitle</h4>
                            <p class="timeline-card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <a href="#" class="timeline-card__button">
                                <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                Home
                            </a>
                        </div>
                    </div>
                </toujou-timeline-item>

                <toujou-timeline-item class="timeline-item" role="listitem">
                    <h2 class="timeline-item__year" id="timeline-3321-year-2026">2026</h2>
                    <div class="timeline-card">
                        <figure class="timeline-card__figure" style="overflow: hidden;">
                            <img class="timeline-card__image" src="https://images.pexels.com/photos/18276816/pexels-photo-18276816/free-photo-of-green-leaves.jpeg">
                        </figure>
                        <div class="timeline-card__bottom">
                            <h3 class="timeline-card__title">title for 2026</h3>
                            <h4 class="timeline-card__subtitle">nice subtitle</h4>
                            <p class="timeline-card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </toujou-timeline-item>

                <toujou-timeline-item class="timeline-item" role="listitem">
                    <h2 class="timeline-item__year" id="timeline-3321-year-2027">2027</h2>
                    <div class="timeline-card">
                        <figure class="timeline-card__figure" style="overflow: hidden;">
                            <img class="timeline-card__image" src="https://images.pexels.com/photos/18276816/pexels-photo-18276816/free-photo-of-green-leaves.jpeg">
                        </figure>
                        <div class="timeline-card__bottom">
                            <h3 class="timeline-card__title">Some title for 2027</h3>
                            <h4 class="timeline-card__subtitle">crazy subtitle</h4>
                            <p class="timeline-card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </toujou-timeline-item>

                <toujou-timeline-item class="timeline-item" role="listitem">
                    <h2 class="timeline-item__year" id="timeline-3321-year-2028">2028</h2>
                    <div class="timeline-card">
                        <figure class="timeline-card__figure" style="overflow: hidden;">
                            <img class="timeline-card__image" src="https://images.pexels.com/photos/18276816/pexels-photo-18276816/free-photo-of-green-leaves.jpeg">
                        </figure>
                        <div class="timeline-card__bottom">
                            <h3 class="timeline-card__title">title for 2028</h3>
                            <h4 class="timeline-card__subtitle">another subtitle</h4>
                            <p class="timeline-card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </toujou-timeline-item>

            </div>

            <toujou-timeline-legend class="timeline-legend">
                <ul class="timeline-legend__list">
                    <li class="timeline-legend__item">
                        <a href="#timeline-3321-year-2023" class="timeline-legend__link">2023</a>
                    </li>

                    <li class="timeline-legend__item">
                        <a href="#timeline-3321-year-2024" class="timeline-legend__link">2024</a>
                    </li>

                    <li class="timeline-legend__item">
                        <a href="#timeline-3321-year-2025" class="timeline-legend__link">2025</a>
                    </li>

                    <li class="timeline-legend__item">
                        <a href="#timeline-3321-year-2026" class="timeline-legend__link" is-active="">2026</a>
                    </li>

                    <li class="timeline-legend__item">
                        <a href="#timeline-3321-year-2027" class="timeline-legend__link" is-active="">2027</a>
                    </li>

                    <li class="timeline-legend__item">
                        <a href="#timeline-3321-year-2028" class="timeline-legend__link">2028</a>
                    </li>
                </ul>
            </toujou-timeline-legend>
        </toujou-timeline>
    `,i=u.bind({});i.args={elementDesign:"default"};var a,s,o;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`(args: TimelineStoryProps) => {
  return \`
        <toujou-timeline class="timeline" timeline-direction="horizontal" element-design="\${args.elementDesign}" timeline-show-legend="" aria-label="Toujou milestones timeline">
            <div class="timeline__container" role="list">

                <toujou-timeline-item class="timeline-item" role="listitem">
                    <h2 class="timeline-item__year" id="timeline-3321-year-2023">2023</h2>
                    <timeline-card class="timeline-card">
                        <figure class="timeline-card__figure" style="overflow: hidden;">
                            <img class="timeline-card__image" src="https://images.pexels.com/photos/18276816/pexels-photo-18276816/free-photo-of-green-leaves.jpeg">
                        </figure>
                        <div class="timeline-card__bottom">
                            <h3 class="timeline-card__title">Title one</h3>
                            <h4 class="timeline-card__subtitle">12 november</h4>
                            <p class="timeline-card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a href="#" class="timeline-card__button">
                                <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                Home
                            </a>
                        </div>
                    </timeline-card>
                </toujou-timeline-item>

                <toujou-timeline-item class="timeline-item" role="listitem">
                    <div class="timeline-card">
                        <div class="timeline-card__bottom">
                            <h3 class="timeline-card__title">Title without year</h3>
                            <h4 class="timeline-card__subtitle">14 Januar</h4>
                            <p class="timeline-card__text"> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                    </div>
                </toujou-timeline-item>

                <toujou-timeline-item class="timeline-item" role="listitem">
                    <h2 class="timeline-item__year" id="timeline-3321-year-2024">2024</h2>
                    <div class="timeline-card">
                        <figure class="timeline-card__figure" style="overflow: hidden;">
                            <img class="timeline-card__image" src="https://images.pexels.com/photos/18276816/pexels-photo-18276816/free-photo-of-green-leaves.jpeg">
                        </figure>
                        <div class="timeline-card__bottom">
                            <h3 class="timeline-card__title">Title two</h3>
                            <h4 class="timeline-card__subtitle">Subtitle two</h4>
                            <p class="timeline-card__text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <a href="#" class="timeline-card__button">
                                <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                Home
                            </a>
                        </div>
                    </div>
                </toujou-timeline-item>

                <toujou-timeline-item class="timeline-item" role="listitem">
                    <h2 class="timeline-item__year" id="timeline-3321-year-2025">2025</h2>
                    <div class="timeline-card">
                        <figure class="timeline-card__figure" style="overflow: hidden;">
                            <img class="timeline-card__image" src="https://images.pexels.com/photos/18276816/pexels-photo-18276816/free-photo-of-green-leaves.jpeg">
                        </figure>
                        <div class="timeline-card__bottom">
                            <h3 class="timeline-card__title">Title for 2025</h3>
                            <h4 class="timeline-card__subtitle">Some subtitle</h4>
                            <p class="timeline-card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <a href="#" class="timeline-card__button">
                                <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                Home
                            </a>
                        </div>
                    </div>
                </toujou-timeline-item>

                <toujou-timeline-item class="timeline-item" role="listitem">
                    <h2 class="timeline-item__year" id="timeline-3321-year-2026">2026</h2>
                    <div class="timeline-card">
                        <figure class="timeline-card__figure" style="overflow: hidden;">
                            <img class="timeline-card__image" src="https://images.pexels.com/photos/18276816/pexels-photo-18276816/free-photo-of-green-leaves.jpeg">
                        </figure>
                        <div class="timeline-card__bottom">
                            <h3 class="timeline-card__title">title for 2026</h3>
                            <h4 class="timeline-card__subtitle">nice subtitle</h4>
                            <p class="timeline-card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </toujou-timeline-item>

                <toujou-timeline-item class="timeline-item" role="listitem">
                    <h2 class="timeline-item__year" id="timeline-3321-year-2027">2027</h2>
                    <div class="timeline-card">
                        <figure class="timeline-card__figure" style="overflow: hidden;">
                            <img class="timeline-card__image" src="https://images.pexels.com/photos/18276816/pexels-photo-18276816/free-photo-of-green-leaves.jpeg">
                        </figure>
                        <div class="timeline-card__bottom">
                            <h3 class="timeline-card__title">Some title for 2027</h3>
                            <h4 class="timeline-card__subtitle">crazy subtitle</h4>
                            <p class="timeline-card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </toujou-timeline-item>

                <toujou-timeline-item class="timeline-item" role="listitem">
                    <h2 class="timeline-item__year" id="timeline-3321-year-2028">2028</h2>
                    <div class="timeline-card">
                        <figure class="timeline-card__figure" style="overflow: hidden;">
                            <img class="timeline-card__image" src="https://images.pexels.com/photos/18276816/pexels-photo-18276816/free-photo-of-green-leaves.jpeg">
                        </figure>
                        <div class="timeline-card__bottom">
                            <h3 class="timeline-card__title">title for 2028</h3>
                            <h4 class="timeline-card__subtitle">another subtitle</h4>
                            <p class="timeline-card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </toujou-timeline-item>

            </div>

            <toujou-timeline-legend class="timeline-legend">
                <ul class="timeline-legend__list">
                    <li class="timeline-legend__item">
                        <a href="#timeline-3321-year-2023" class="timeline-legend__link">2023</a>
                    </li>

                    <li class="timeline-legend__item">
                        <a href="#timeline-3321-year-2024" class="timeline-legend__link">2024</a>
                    </li>

                    <li class="timeline-legend__item">
                        <a href="#timeline-3321-year-2025" class="timeline-legend__link">2025</a>
                    </li>

                    <li class="timeline-legend__item">
                        <a href="#timeline-3321-year-2026" class="timeline-legend__link" is-active="">2026</a>
                    </li>

                    <li class="timeline-legend__item">
                        <a href="#timeline-3321-year-2027" class="timeline-legend__link" is-active="">2027</a>
                    </li>

                    <li class="timeline-legend__item">
                        <a href="#timeline-3321-year-2028" class="timeline-legend__link">2028</a>
                    </li>
                </ul>
            </toujou-timeline-legend>
        </toujou-timeline>
    \`;
}`,...(o=(s=i.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const v=["Timeline"];export{i as Timeline,v as __namedExportsOrder,f as default};
//# sourceMappingURL=timeline.stories-b450b217.js.map
