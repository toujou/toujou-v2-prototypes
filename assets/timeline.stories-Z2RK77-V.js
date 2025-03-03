import{T as r}from"./badgeCustomConfig-DUXiHpL4.js";import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as m}from"./index-BcJeOPUZ.js";import"./index-B6tQ6Rz7.js";import"./_commonjsHelpers-Cpj98o6Y.js";function l(t){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...m(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"timeline",children:"Timeline"}),`
`,e.jsx(i.p,{children:'Display a timeline element on the page by using the "Widgets/timeline" content element on toujou.'}),`
`,e.jsx(i.p,{children:"It has two main layouts: vertical and horizontal, which can be set on the content element itself in the BE."}),`
`,e.jsx(i.p,{children:'It may also display a "legend", which works kind of like a inpage navigation for the timeline. Also set on the BE'}),`
`,e.jsx(i.h2,{id:"markup-example",children:"Markup example:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<toujou-timeline
    class="timeline"
    timeline-direction="vertical"
    element-design="default"
    timeline-show-legend
    aria-label="Toujou milestones timeline"
>

    <toujou-timeline-legend class="timeline-legend">
        <ul class="timeline-legend__list">
            <li class="timeline-legend__item">
                <a href="#timeline-3321-year-2023" class="timeline-legend__link" is-active>2023</a>
            </li>

            <li class="timeline-legend__item">
                <a href="#timeline-3321-year-2024" class="timeline-legend__link">2024</a>
            </li>
        </ul>
    </toujou-timeline-legend>

    <div class="timeline__container" role="list">

        <toujou-timeline-item class="timeline-item" role="listitem">
            <h2 class="timeline-item__year" id="timeline-3321-year-2023">2023</h2>
            <timeline-card class="timeline-card">
                <figure class="timeline-card__figure">
                    <img class="timeline-card__image" src="https://images.pexels.com/photos/18276816/pexels-photo-18276816/free-photo-of-green-leaves.jpeg">
                </figure>
                <div class="timeline-card__bottom">
                    <h3 class="timeline-card__title">Title one</h3>
                    <h4 class="timeline-card__subtitle">12 november</h4>
                    <p class="timeline-card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <a href="#" class="timeline-card__button">
                        <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
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
    </div>
</toujou-timeline>
`})}),`
`,e.jsx(i.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsx(i.h3,{id:"timeline-direction",children:"timeline-direction"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"timeline-direction"}),` can be set either to "vertical" or "horizontal". It changes the way the element is rendered on the page.
The "vertical" direction renders the timeline items under each other, the "horizontal" direction renders them next to each other (with horizontal scroll)`]})]})}function c(t={}){const{wrapper:i}={...m(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(l,{...t})}):l(t)}const f={title:"COMPONENTS/Timeline",parameters:{badges:[r.TESTING],docs:{page:c}},argTypes:{direction:{table:{category:"Timeline Settings",defaultValue:{summary:"vertical"}},name:"Timeline direction",description:"Choose between a vertical or horizontal timeline",options:["vertical","horizontal"],control:{type:"radio"},defaultValue:["default"],required:!0},elementDesign:{table:{category:"Timeline Settings",defaultValue:{summary:"default"}},name:"Timeline element design",description:"Set the element design for the timeline element",options:["default","primary","secondary","inverted"],control:{type:"radio"},defaultValue:["default"],required:!0},showLegend:{table:{category:"Timeline settings",defaultValue:{summary:"false"}},name:"Show legend",description:"Show the legend element",control:{type:"boolean"},defaultValue:"false",required:!0}},tags:["autodocs"]},u=t=>`
        <main>
            <toujou-timeline
                class="timeline"
                timeline-direction="${t.direction}"
                element-design="${t.elementDesign}"
                ${t.showLegend?"timeline-show-legend":""}
                aria-label="Toujou milestones timeline"
            >

                <toujou-timeline-legend class="timeline-legend">
                    <ul class="timeline-legend__list">
                        <li class="timeline-legend__item">
                            <a href="#timeline-3321-year-2023" class="timeline-legend__link" is-active>2023</a>
                        </li>

                        <li class="timeline-legend__item">
                            <a href="#timeline-3321-year-2024" class="timeline-legend__link">2024</a>
                        </li>

                        <li class="timeline-legend__item">
                            <a href="#timeline-3321-year-2025" class="timeline-legend__link">2025</a>
                        </li>

                        <li class="timeline-legend__item">
                            <a href="#timeline-3321-year-2026" class="timeline-legend__link"="">2026</a>
                        </li>

                        <li class="timeline-legend__item">
                            <a href="#timeline-3321-year-2027" class="timeline-legend__link"="">2027</a>
                        </li>

                        <li class="timeline-legend__item">
                            <a href="#timeline-3321-year-2028" class="timeline-legend__link">2028</a>
                        </li>
                    </ul>
                </toujou-timeline-legend>

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
                                    <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
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
                                    <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
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
                                    <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
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
            </toujou-timeline>
        </main>
    `,n=u.bind({});n.args={direction:"vertical",elementDesign:"default",showLegend:!1};var a,s,o;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`(args: TimelineStoryProps) => {
  return \`
        <main>
            <toujou-timeline
                class="timeline"
                timeline-direction="\${args.direction}"
                element-design="\${args.elementDesign}"
                \${args.showLegend ? 'timeline-show-legend' : ''}
                aria-label="Toujou milestones timeline"
            >

                <toujou-timeline-legend class="timeline-legend">
                    <ul class="timeline-legend__list">
                        <li class="timeline-legend__item">
                            <a href="#timeline-3321-year-2023" class="timeline-legend__link" is-active>2023</a>
                        </li>

                        <li class="timeline-legend__item">
                            <a href="#timeline-3321-year-2024" class="timeline-legend__link">2024</a>
                        </li>

                        <li class="timeline-legend__item">
                            <a href="#timeline-3321-year-2025" class="timeline-legend__link">2025</a>
                        </li>

                        <li class="timeline-legend__item">
                            <a href="#timeline-3321-year-2026" class="timeline-legend__link"="">2026</a>
                        </li>

                        <li class="timeline-legend__item">
                            <a href="#timeline-3321-year-2027" class="timeline-legend__link"="">2027</a>
                        </li>

                        <li class="timeline-legend__item">
                            <a href="#timeline-3321-year-2028" class="timeline-legend__link">2028</a>
                        </li>
                    </ul>
                </toujou-timeline-legend>

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
                                    <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
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
                                    <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
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
                                    <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
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
            </toujou-timeline>
        </main>
    \`;
}`,...(o=(s=n.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const v=["Timeline"];export{n as Timeline,v as __namedExportsOrder,f as default};
