import{M as o}from"./event.docs-DEMxWrLq.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-D9wuXIGf.js";import"./iframe-DfUGg3_U.js";import"./preload-helper-C1FmrZbK.js";const u={title:"PAGES/Event",parameters:{docs:{page:o},layout:"fullscreen"},argTypes:{hideImage:{table:{category:"Event page settings",defaultValue:{summary:"false"}},name:"Hide image",description:"Hide the event image",control:{type:"boolean"},required:!0}}},i=n=>`

        <header class="header" image-height="half">
            <img class="header__image" src="https://picsum.photos/2000" alt="quote image" />

            <div
                class="header-content"
                accent-color="default"
                vertical-position="mid"
                horizontal-position="center"
                content-size="half"
                text-alignment="default"
            >
                <h1 class="header-content__title font--default">Event page</h1>
                <p class="header-content__text">This is an event page with content</p>
            </div>
        </header>





        <main>
           <div class="fragment">
                <section class="chapter chapter--default fragment__section">
                    <toujou-fragment-teaser role="article" class="fragment-teaser" ${n.hideImage?"single-column":""}>
                        <div class="fragment-teaser__content">
                            <div class="fragment-teaser__block" number-of-columns="2" expand-first>
                                <div class="fragment-teaser__column">
                                    <div class="fragment-teaser__column-content">
                                        <div
                                            class="calendar-pages collection-item__date"
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
                                    </div>
                                </div>
                                <div class="fragment-teaser__column" align-items="bottom">
                                    <div class="fragment-teaser__column-content">
                                        <toujou-chip class="chip" chip-bg-color="error" chip-size="small" chip-border-radius="small">Event abgesagt</toujou-chip>
                                    </div>
                                </div>
                            </div>
    
                            <div class="fragment-teaser__block" number-of-columns="1">
                                <div class="fragment-teaser__column">
                                    <toujou-icon class="icon" icon-name="clock-circle-filled" icon-color="font" icon-size="m"></toujou-icon>
                                    <div class="fragment-teaser__column-content" number-of-columns="3">
                                        <p class="fragment-teaser__info"><strong>Beginn:</strong>
                                            <time class="opening-hours__row" datetime="T09:00P11H">
                                                <span class="opening-hours__time">20:00</span>
                                            </time>
                                        </p>
                                        <p class="fragment-teaser__info"><strong>Ende:</strong>
                                            <time class="opening-hours__row" datetime="T09:00P11H">
                                                <span class="opening-hours__time">23:00</span>
                                            </time>
                                        </p>
                                        <p class="fragment-teaser__info"><strong>Einlass:</strong>
                                            <time class="opening-hours__row" datetime="T09:00P11H">
                                                <span class="opening-hours__time">18:30</span>
                                            </time>
                                        </p>
                                    </div>
                                </div>
                            </div>
    
                            <div class="fragment-teaser__block" number-of-columns="1">
                                <div class="fragment-teaser__column">
                                    <toujou-icon class="icon" icon-name="tag-filled" icon-color="font" icon-size="m"></toujou-icon>
                                    <div class="fragment-teaser__column-content">
                                        <data class="fragment-teaser__price fragment-teaser__info" value="53.00">53,00 € <span type-color="font-light">(inkl. Vorverkaufsgebühr)</span></data>
                                    </div>
                                </div>
                            </div>
                            <div class="fragment-teaser__block" number-of-columns="1">
                                <div class="fragment-teaser__column">
                                    <toujou-icon class="icon" icon-name="star" icon-color="font" icon-size="m"></toujou-icon>
                                    <div class="fragment-teaser__column-content">
                                        <p class="fragment-teaser__info">Businessevent</p>
                                    </div>
                                </div>
                            </div>
    
                            <div class="fragment-teaser__block" number-of-columns="1">
                                <div class="fragment-teaser__column">
                                    <toujou-icon class="icon" icon-name="location" icon-color="font" icon-size="m"></toujou-icon>
                                    <div class="fragment-teaser__column-content">
                                        <address class="address">
                                            <span class="fragment-teaser__address-line">Firmenname GmbH</span>
                                            <span class="fragment-teaser__address-line">Michael-Schumacher-Straße 132</span>
                                            <span class="fragment-teaser__address-line">Nordhein-Westfalen</span>
                                            <span class="fragment-teaser__address-line">Deutschland</span>
                                        </address>
                                    </div>
                                </div>
                            </div>
    
                            <div class="fragment-teaser__block" number-of-columns="2">
                                <div class="fragment-teaser__column">
                                    <toujou-icon class="icon" icon-name="company" icon-color="font" icon-size="m"></toujou-icon>
                                    <div class="fragment-teaser__column-content">
                                        <address class="address">
                                            <span class="fragment-teaser__address-line">Veranstalter GmbH</span>
                                            <span class="fragment-teaser__address-line">Gustav-Weißkopf-Straße 5</span>
                                            <span class="fragment-teaser__address-line">90768 Fürth</span>
                                        </address>
                                    </div>
                                </div>
                                <div class="fragment-teaser__column">
                                    <toujou-icon class="icon" icon-name="star" icon-color="font" icon-size="m"></toujou-icon>
                                    <div class="fragment-teaser__column-content">
                                        <address class="address">
                                            <a href="#" class="fragment-teaser__link">123456789</a>
                                            <a href="#" class="fragment-teaser__link">info@veranstalter.de</a>
                                            <a href="#" class="fragment-teaser__link">www.veranstalter.de</a>
                                        </address>
                                    </div>
                                </div>
                            </div>
                            <div class="fragment-teaser__block" number-of-columns="1">
                                <div class="fragment-teaser__column">
                                    <toujou-icon class="icon" icon-name="account" icon-color="font" icon-size="m"></toujou-icon>
                                    <div class="fragment-teaser__column-content">
                                        <p class="fragment-teaser__info">toujou Einsteiger und Interessierte</p>
                                    </div>
                                </div>
                            </div>
    
                            <div class="fragment-teaser__block" number-of-columns="1">
                                <div class="fragment-teaser__column">
                                    <toujou-icon class="icon" icon-name="info" icon-color="font" icon-size="m"></toujou-icon>
                                    <div class="fragment-teaser__column-content">
                                        <p class="fragment-teaser__info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <p class="fragment-teaser__info"><a href="#" class="fragment-teaser__link">Wichtiger Hinweis zum Einlass</a></p>
                                    </div>
                                </div>
                            </div>
    
                        </div>
    
                        ${n.hideImage?"":`
                            <figure class="fragment-teaser__figure">
                                <img src="https://picsum.photos/1200/1200" alt="beau" class="fragment-teaser__image">
                                <time class="fragment-teaser__image-date" datetime="T09:00P11H">
                                    <span class="fragment-teaser__image-day">09</span>
                                    <span class="fragment-teaser__image-month">Jul</span>
                                </time>
                            </figure>
                        `}
                    </toujou-fragment-teaser>
                </section>
    
                 <toujou-text-block class="text-block" text-blocks-column-count="1">
                    <toujou-text-block-column class="text-block-column">
                        <div class="text-block__content">
                            <h1>This is a test page</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </toujou-text-block-column>
                </toujou-text-block>
    
                <toujou-content-card-grid class="content-card-grid">
                    <toujou-content-card class="content-card" href="#" card-variant="default" card-direction="horizontal">
                        <figure class="content-card__figure">
                            <img src="https://picsum.photos/640/640" alt="beautiful image" class="content-card__image">
                        </figure>
                        <div class="content-card__content">
                            <h3 class="content-card__title">Eine etwas längere Headline über zwei Zeilen</h3>
                            <p class="content-card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur excepturi officiis.</p>
                            <a href="#" class="content-card__button" button-variant="primary" button-type="ghost" button-size="normal">
                                <toujou-icon class="icon" icon-name="arrow-right" icon-color="primary"></toujou-icon>
                                zur Beschreibung
                            </a>
                        </div>
                    </toujou-content-card>
    
                    <toujou-content-card class="content-card" href="#" card-variant="default" card-direction="horizontal">
                        <figure class="content-card__figure">
                            <img src="https://picsum.photos/640/640" alt="beautiful image" class="content-card__image">
                        </figure>
                        <div class="content-card__content">
                            <h3 class="content-card__title">Eine etwas längere Headline über zwei Zeilen</h3>
                            <p class="content-card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur excepturi officiis.</p>
                            <a href="#" class="content-card__button" button-variant="primary" button-type="ghost" button-size="normal">
                                <toujou-icon class="icon" icon-name="arrow-right" icon-color="primary"></toujou-icon>
                                zur Beschreibung
                            </a>
                        </div>
                    </toujou-content-card>
                </toujou-content-card-grid>
    
            </div>
        </main>
    `,e=i.bind({});e.args={hideImage:!1};var a,t,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`(args: EvenWithContentProps) => {
  return \`

        <header class="header" image-height="half">
            <img class="header__image" src="https://picsum.photos/2000" alt="quote image" />

            <div
                class="header-content"
                accent-color="default"
                vertical-position="mid"
                horizontal-position="center"
                content-size="half"
                text-alignment="default"
            >
                <h1 class="header-content__title font--default">Event page</h1>
                <p class="header-content__text">This is an event page with content</p>
            </div>
        </header>





        <main>
           <div class="fragment">
                <section class="chapter chapter--default fragment__section">
                    <toujou-fragment-teaser role="article" class="fragment-teaser" \${args.hideImage ? 'single-column' : ''}>
                        <div class="fragment-teaser__content">
                            <div class="fragment-teaser__block" number-of-columns="2" expand-first>
                                <div class="fragment-teaser__column">
                                    <div class="fragment-teaser__column-content">
                                        <div
                                            class="calendar-pages collection-item__date"
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
                                    </div>
                                </div>
                                <div class="fragment-teaser__column" align-items="bottom">
                                    <div class="fragment-teaser__column-content">
                                        <toujou-chip class="chip" chip-bg-color="error" chip-size="small" chip-border-radius="small">Event abgesagt</toujou-chip>
                                    </div>
                                </div>
                            </div>
    
                            <div class="fragment-teaser__block" number-of-columns="1">
                                <div class="fragment-teaser__column">
                                    <toujou-icon class="icon" icon-name="clock-circle-filled" icon-color="font" icon-size="m"></toujou-icon>
                                    <div class="fragment-teaser__column-content" number-of-columns="3">
                                        <p class="fragment-teaser__info"><strong>Beginn:</strong>
                                            <time class="opening-hours__row" datetime="T09:00P11H">
                                                <span class="opening-hours__time">20:00</span>
                                            </time>
                                        </p>
                                        <p class="fragment-teaser__info"><strong>Ende:</strong>
                                            <time class="opening-hours__row" datetime="T09:00P11H">
                                                <span class="opening-hours__time">23:00</span>
                                            </time>
                                        </p>
                                        <p class="fragment-teaser__info"><strong>Einlass:</strong>
                                            <time class="opening-hours__row" datetime="T09:00P11H">
                                                <span class="opening-hours__time">18:30</span>
                                            </time>
                                        </p>
                                    </div>
                                </div>
                            </div>
    
                            <div class="fragment-teaser__block" number-of-columns="1">
                                <div class="fragment-teaser__column">
                                    <toujou-icon class="icon" icon-name="tag-filled" icon-color="font" icon-size="m"></toujou-icon>
                                    <div class="fragment-teaser__column-content">
                                        <data class="fragment-teaser__price fragment-teaser__info" value="53.00">53,00 € <span type-color="font-light">(inkl. Vorverkaufsgebühr)</span></data>
                                    </div>
                                </div>
                            </div>
                            <div class="fragment-teaser__block" number-of-columns="1">
                                <div class="fragment-teaser__column">
                                    <toujou-icon class="icon" icon-name="star" icon-color="font" icon-size="m"></toujou-icon>
                                    <div class="fragment-teaser__column-content">
                                        <p class="fragment-teaser__info">Businessevent</p>
                                    </div>
                                </div>
                            </div>
    
                            <div class="fragment-teaser__block" number-of-columns="1">
                                <div class="fragment-teaser__column">
                                    <toujou-icon class="icon" icon-name="location" icon-color="font" icon-size="m"></toujou-icon>
                                    <div class="fragment-teaser__column-content">
                                        <address class="address">
                                            <span class="fragment-teaser__address-line">Firmenname GmbH</span>
                                            <span class="fragment-teaser__address-line">Michael-Schumacher-Straße 132</span>
                                            <span class="fragment-teaser__address-line">Nordhein-Westfalen</span>
                                            <span class="fragment-teaser__address-line">Deutschland</span>
                                        </address>
                                    </div>
                                </div>
                            </div>
    
                            <div class="fragment-teaser__block" number-of-columns="2">
                                <div class="fragment-teaser__column">
                                    <toujou-icon class="icon" icon-name="company" icon-color="font" icon-size="m"></toujou-icon>
                                    <div class="fragment-teaser__column-content">
                                        <address class="address">
                                            <span class="fragment-teaser__address-line">Veranstalter GmbH</span>
                                            <span class="fragment-teaser__address-line">Gustav-Weißkopf-Straße 5</span>
                                            <span class="fragment-teaser__address-line">90768 Fürth</span>
                                        </address>
                                    </div>
                                </div>
                                <div class="fragment-teaser__column">
                                    <toujou-icon class="icon" icon-name="star" icon-color="font" icon-size="m"></toujou-icon>
                                    <div class="fragment-teaser__column-content">
                                        <address class="address">
                                            <a href="#" class="fragment-teaser__link">123456789</a>
                                            <a href="#" class="fragment-teaser__link">info@veranstalter.de</a>
                                            <a href="#" class="fragment-teaser__link">www.veranstalter.de</a>
                                        </address>
                                    </div>
                                </div>
                            </div>
                            <div class="fragment-teaser__block" number-of-columns="1">
                                <div class="fragment-teaser__column">
                                    <toujou-icon class="icon" icon-name="account" icon-color="font" icon-size="m"></toujou-icon>
                                    <div class="fragment-teaser__column-content">
                                        <p class="fragment-teaser__info">toujou Einsteiger und Interessierte</p>
                                    </div>
                                </div>
                            </div>
    
                            <div class="fragment-teaser__block" number-of-columns="1">
                                <div class="fragment-teaser__column">
                                    <toujou-icon class="icon" icon-name="info" icon-color="font" icon-size="m"></toujou-icon>
                                    <div class="fragment-teaser__column-content">
                                        <p class="fragment-teaser__info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <p class="fragment-teaser__info"><a href="#" class="fragment-teaser__link">Wichtiger Hinweis zum Einlass</a></p>
                                    </div>
                                </div>
                            </div>
    
                        </div>
    
                        \${args.hideImage ? '' : \`
                            <figure class="fragment-teaser__figure">
                                <img src="https://picsum.photos/1200/1200" alt="beau" class="fragment-teaser__image">
                                <time class="fragment-teaser__image-date" datetime="T09:00P11H">
                                    <span class="fragment-teaser__image-day">09</span>
                                    <span class="fragment-teaser__image-month">Jul</span>
                                </time>
                            </figure>
                        \`}
                    </toujou-fragment-teaser>
                </section>
    
                 <toujou-text-block class="text-block" text-blocks-column-count="1">
                    <toujou-text-block-column class="text-block-column">
                        <div class="text-block__content">
                            <h1>This is a test page</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </toujou-text-block-column>
                </toujou-text-block>
    
                <toujou-content-card-grid class="content-card-grid">
                    <toujou-content-card class="content-card" href="#" card-variant="default" card-direction="horizontal">
                        <figure class="content-card__figure">
                            <img src="https://picsum.photos/640/640" alt="beautiful image" class="content-card__image">
                        </figure>
                        <div class="content-card__content">
                            <h3 class="content-card__title">Eine etwas längere Headline über zwei Zeilen</h3>
                            <p class="content-card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur excepturi officiis.</p>
                            <a href="#" class="content-card__button" button-variant="primary" button-type="ghost" button-size="normal">
                                <toujou-icon class="icon" icon-name="arrow-right" icon-color="primary"></toujou-icon>
                                zur Beschreibung
                            </a>
                        </div>
                    </toujou-content-card>
    
                    <toujou-content-card class="content-card" href="#" card-variant="default" card-direction="horizontal">
                        <figure class="content-card__figure">
                            <img src="https://picsum.photos/640/640" alt="beautiful image" class="content-card__image">
                        </figure>
                        <div class="content-card__content">
                            <h3 class="content-card__title">Eine etwas längere Headline über zwei Zeilen</h3>
                            <p class="content-card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur excepturi officiis.</p>
                            <a href="#" class="content-card__button" button-variant="primary" button-type="ghost" button-size="normal">
                                <toujou-icon class="icon" icon-name="arrow-right" icon-color="primary"></toujou-icon>
                                zur Beschreibung
                            </a>
                        </div>
                    </toujou-content-card>
                </toujou-content-card-grid>
    
            </div>
        </main>
    \`;
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const _=["EvenWithContent"];export{e as EvenWithContent,_ as __namedExportsOrder,u as default};
