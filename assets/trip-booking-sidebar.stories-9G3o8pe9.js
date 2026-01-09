import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as c}from"./index-wUAnol_h.js";import"./iframe-CDgTqnN9.js";import"./preload-helper-C1FmrZbK.js";function e(o){const a={h1:"h1",p:"p",...c(),...o.components};return s.jsxs(s.Fragment,{children:[s.jsx(a.h1,{id:"trip-page-booking-sidebar",children:"Trip page booking sidebar"}),`
`,s.jsx(a.p,{children:"Side bar rendered on teh trip booking page with a contact-teaser and a booking-summary sections"})]})}function m(o={}){const{wrapper:a}={...c(),...o.components};return a?s.jsx(a,{...o,children:s.jsx(e,{...o})}):e(o)}const j={title:"COMPONENTS/Tourism/Booking Sidebar",parameters:{docs:{page:m}},tags:["autodocs"]},l=()=>`
        <h3>Fake booking form</h3>
    `,u=()=>`
        <sidebar class="booking-sidebar"> 
            ${d()}
            ${g()}
        </sidebar>
    `,d=()=>`
        <toujou-contact-teaser class="contact-teaser" role="article">
            <figure class="contact-teaser__figure">
                <img src="https://picsum.photos/120/120" alt="beau" class="contact-teaser__image">
            </figure>
            <div class="contact-teaser__content">
                <h3 class="contact-teaser__name">John Doe</h3>
                <p class="contact-teaser__position">Nice position</p>
                <p class="contact-teaser__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p class="contact-teaser__contact contact-teaser__contact--phone">
                    <toujou-icon class="icon" icon-name="telephone" icon-size="ms"></toujou-icon>
                    <a class="contact-teaser__link" href="tel:+1 (291) 264-9318">+1 (291) 264-9318</a>
                </p>
                <p class="contact-teaser__contact contact-teaser__contact--email">
                    <toujou-icon class="icon" icon-name="email" icon-size="ms"></toujou-icon>
                    <a class="contact-teaser__link" href="mailto:test@test.com">company@test.com</a>
                </p>
            </div>
        </toujou-contact-teaser>
    `,g=()=>`
        <toujou-booking-summary class="booking-summary">
            <toujou-details id="details-1" class="details" element-design="default" is-open>
                <h3 slot="summary" class="details__title">Zusammenfassung</h3>
                <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                
                <div class="booking-summary__content" slot="content">
                    <ul class="booking-summary__list">
                        <li class="booking-summary__item">
                            <span class="booking-summary__item-label">Ihre Reise:</span>
                            <span class="booking-summary__item-value">Individual trip A</span>
                        </li>
                        <li class="booking-summary__item">
                            <span class="booking-summary__item-label">Reisetermin:</span>
                            <span class="booking-summary__item-value">01.01 - .15.01.2026</span>
                        </li>
                        <li class="booking-summary__item">
                            <span class="booking-summary__item-label">Zimmer</span>
                            <span class="booking-summary__item-value">Room Type A</span>
                        </li>
                        <li class="booking-summary__item">
                            <span class="booking-summary__item-label">Personen</span>
                            <span class="booking-summary__item-value">2</span>
                        </li>
                    </ul>
                    
                    <ul class="booking-summary__list">
                        <li class="booking-summary__item">
                            <span class="booking-summary__item-label">1. Person</span>
                            <span class="booking-summary__item-value">60,00 €</span>
                        </li>
                        <li class="booking-summary__item">
                            <span class="booking-summary__item-label">2. Person</span>
                            <span class="booking-summary__item-value">60,00 €</span>
                        </li>
                    </ul>
                    
                    <p class="booking-summary__total">
                        <span class="booking-summary__total-label">Summe</span>
                        <data value="120.00" aria-label="120.00 €" class="booking-summary__total-value">120,00 €</data>
                    </p>
                </div>
            </toujou-details>
        </toujou-booking-summary>  
    `,_=()=>`
        <main>
            <toujou-grid class="grid booking-form-grid" number-of-columns="2" grid-type="default" column-layout="third-right">
                <toujou-grid-column class="grid-column">
                    ${l()}
                </toujou-grid-column>
                
                <toujou-grid-column class="grid-column">
                    ${u()}
                </toujou-grid-column
            ></toujou-grid>
        </main>
    `,n=_.bind({});var t,i,r;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  return \`
        <main>
            <toujou-grid class="grid booking-form-grid" number-of-columns="2" grid-type="default" column-layout="third-right">
                <toujou-grid-column class="grid-column">
                    \${renderFakeForm()}
                </toujou-grid-column>
                
                <toujou-grid-column class="grid-column">
                    \${renderBookingSidebar()}
                </toujou-grid-column
            ></toujou-grid>
        </main>
    \`;
}`,...(r=(i=n.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const h=["BookingSidebar"];export{n as BookingSidebar,h as __namedExportsOrder,j as default};
