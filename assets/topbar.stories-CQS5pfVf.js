import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as i}from"./index-Btdgoa7O.js";import"./iframe-DMVd5vS2.js";import"./preload-helper-C1FmrZbK.js";const d=""+new URL("main-nav-mobile-09__OMUc.jpg",import.meta.url).href,p=""+new URL("main-nav-desktop-CmyqBTZx.jpg",import.meta.url).href;function s(n){const a={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a.h2,{id:"main-nav",children:"Main nav"}),`
`,e.jsxs(a.p,{children:["The main navigation render a ",e.jsx(a.code,{children:"<nav>"})," element which allows the users to navigate between the different pages on the website."]}),`
`,e.jsx(a.p,{children:"It is automatically generated according to the pages that are created on the BE."}),`
`,e.jsx(a.p,{children:"On mobile it is visible by opening the navigation (click on the burger button), on desktop it is always visible."}),`
`,e.jsx(a.p,{children:"The main navigation can show up to 3 nested navigation levels."}),`
`,e.jsx(a.h2,{id:"markup-example",children:"Markup example:"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<nav id="mainNavigation" class="main-nav" aria-label="Main navigation" open-level="1">
    <button is="toujou-button" class="button main-nav__back-button" button-type="default" button-size="normal" button-variant="primary" button-icon-position="left">
        <toujou-icon class="icon" icon-color="background" icon-size="m" icon-name="arrow-left"></toujou-icon>
        Zurück
    </button>

    <ul class="main-nav__list" nav-list-level="1">
        <li class="main-nav__list-item" nav-item-level="1">
            <a href="#" class="main-nav__link">
                <span class="main-nav__text">Startseite</span>
            </a>
        </li>
        <li class="main-nav__list-item" nav-item-level="1" has-subnav="" active>
            <a href="#" class="main-nav__link">
                <span class="main-nav__text">Bürgerservice</span>
            </a>
            <span class="main-nav__chevron">
                <toujou-icon class="icon" icon-size="l" icon-name="chevron-right" icon-color="background"></toujou-icon>
            </span>
            <ul class="main-nav__list" nav-list-level="2">
                <li class="main-nav__list-item" nav-item-level="2">
                    <a href="#" class="main-nav__link">
                        <span class="main-nav__text">Arbeit und Beruf</span>
                    </a>
                </li>
                <li class="main-nav__list-item" nav-item-level="2" active>
                    <a href="#" class="main-nav__link">
                        <span class="main-nav__text">Ausweise und Dokumente</span>
                    </a>
                </li>
                </li>
            </ul>
        </li>
        <li class="main-nav__list-item" nav-item-level="1">
            <a href="#" class="main-nav__link">
                <span class="main-nav__text">Online-Terminvergabe</span>
            </a>
        </li>
    </ul>
</nav>
`})}),`
`,e.jsx(a.p,{children:"The mobile main navigation requires click to navigate between the different menu levels"}),`
`,e.jsx("img",{src:d}),`
`,e.jsx(a.p,{children:"The desktop navigation open and closes on hover events"}),`
`,e.jsx("img",{src:p}),`
`,e.jsx(a.h2,{id:"active-menu-items",children:"Active menu items"}),`
`,e.jsxs(a.p,{children:["The active menu items get an extra ",e.jsx(a.code,{children:"active"}),` attribute, which we use to style them accordingly
Ex: `,e.jsx(a.code,{children:'<li class="main-nav__list-item" nav-item-level="1" has-subnav="" active>'})]})]})}function v(n={}){const{wrapper:a}={...i(),...n.components};return a?e.jsx(a,{...n,children:e.jsx(s,{...n})}):s(n)}const h=""+new URL("service-nav-mobile-D3QlnV6C.jpg",import.meta.url).href,_=""+new URL("service-nav-desktop-Qjwajety.jpg",import.meta.url).href;function l(n){const a={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a.h2,{id:"service-nav",children:"Service nav"}),`
`,e.jsxs(a.p,{children:["The service navigation renders a ",e.jsx(a.code,{children:"nav"})," element, which allows users to quickly navigate to the most important service pages on the website."]}),`
`,e.jsxs(a.p,{children:["It is automatically generated according to the pages added to the ",e.jsx(a.code,{children:"Service-Navigation"})," folder on the BE."]}),`
`,e.jsx(a.p,{children:"On mobile it is visible inside the menu, which can be opened / closed with a burger button click. It is also rendered on the default footer"}),`
`,e.jsx(a.h2,{id:"main-nav",children:"Main nav"}),`
`,e.jsxs(a.p,{children:["The main navigation render a ",e.jsx(a.code,{children:"<nav>"})," element which allows the users to navigate between the different pages on the website."]}),`
`,e.jsx(a.p,{children:"It is automatically generated according to the pages that are created on the BE."}),`
`,e.jsx(a.p,{children:"On mobile it is visible by opening the navigation (click on the burger button), on desktop it is always visible."}),`
`,e.jsx(a.p,{children:"The main navigation can show up to 3 nested navigation levels."}),`
`,e.jsx(a.h2,{id:"markup-example",children:"Markup example:"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<nav id="mainNavigation" class="main-nav" aria-label="Main navigation" open-level="1">
    <button is="toujou-button" class="button main-nav__back-button" button-type="default" button-size="normal" button-variant="primary" button-icon-position="left">
        <toujou-icon class="icon" icon-color="background" icon-size="m" icon-name="arrow-left"></toujou-icon>
        Zurück
    </button>

    <ul class="main-nav__list" nav-list-level="1">
        <li class="main-nav__list-item" nav-item-level="1">
            <a href="#" class="main-nav__link">
                <span class="main-nav__text">Startseite</span>
            </a>
        </li>
        <li class="main-nav__list-item" nav-item-level="1" has-subnav="">
            <a href="#" class="main-nav__link">
                <span class="main-nav__text">Bürgerservice</span>
            </a>
            <span class="main-nav__chevron">
                <toujou-icon class="icon" icon-size="l" icon-name="chevron-right" icon-color="background"></toujou-icon>
            </span>
            <ul class="main-nav__list" nav-list-level="2">
                <li class="main-nav__list-item" nav-item-level="2">
                    <a href="#" class="main-nav__link">
                        <span class="main-nav__text">Arbeit und Beruf</span>
                    </a>
                </li>
                <li class="main-nav__list-item" nav-item-level="2">
                    <a href="#" class="main-nav__link">
                        <span class="main-nav__text">Ausweise und Dokumente</span>
                    </a>
                </li>
                </li>
            </ul>
        </li>
        <li class="main-nav__list-item" nav-item-level="1">
            <a href="#" class="main-nav__link">
                <span class="main-nav__text">Online-Terminvergabe</span>
            </a>
        </li>
    </ul>
</nav>
`})}),`
`,e.jsx(a.p,{children:"The mobile main navigation requires click to navigate between the different menu levels"}),`
`,e.jsx("img",{src:h}),`
`,e.jsx(a.p,{children:"The desktop navigation open and closes on hover events"}),`
`,e.jsx("img",{src:_})]})}function b(n={}){const{wrapper:a}={...i(),...n.components};return a?e.jsx(a,{...n,children:e.jsx(l,{...n})}):l(n)}function o(n){const a={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a.h2,{id:"burger-button",children:"Burger button"}),`
`,e.jsx(a.p,{children:"The burger button is an element that allows us to open / close the main navigation menu on click"}),`
`,e.jsx(a.h2,{id:"markup-example",children:"Markup example:"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<toujou-burger-button
    class="burger-button"
    role="button"
    aria-pressed="false"
    aria-haspopup="true"
    aria-controls="mainNavigation"
    aria-expanded="false"
    aria-label="Menu button"
    toggle-element-selector="#topbar"
>
    <span class="burger-button__line" line-position="top" aria-hidden="true" slot="content"></span>
    <span class="burger-button__line" line-position="middle" aria-hidden="true" slot="content"></span>
    <span class="burger-button__line" line-position="bottom" aria-hidden="true" slot="content"></span>
</toujou-burger-button>
`})}),`
`,e.jsx(a.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsxs(a.h3,{id:"role-required",children:["role ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(a.p,{children:['The "role" attribute must be set to ',e.jsx(a.code,{children:"button"}),". This greatly improves the element's accessibility."]}),`
`,e.jsxs(a.h3,{id:"aria-pressed-required",children:["aria-pressed ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(a.p,{children:['The "aria-pressed" must be set to ',e.jsx(a.code,{children:"false"})," to improve the element's accessibility. Will be updated by the webcomponent."]}),`
`,e.jsxs(a.h3,{id:"aria-haspopup-required",children:["aria-haspopup ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(a.p,{children:['The "aria-haspopup" must be set to ',e.jsx(a.code,{children:"true"})," to improve the element's accessibility. Will be updated by the webcomponent."]}),`
`,e.jsxs(a.h3,{id:"aria-controls-required",children:["aria-controls ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(a.p,{children:[`The "aria-controls" must be set to the same value as the main navigation's id, for instance `,e.jsx(a.code,{children:"mainNavigation"}),"."]}),`
`,e.jsxs(a.h3,{id:"aria-expanded-required",children:["aria-expanded ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(a.p,{children:['The "aria-expanded" must be set to ',e.jsx(a.code,{children:"false"})," to improve the element's accessibility. Will be updated by the webcomponent."]}),`
`,e.jsxs(a.h3,{id:"aria-label-required",children:["aria-label ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(a.p,{children:['The "aria-label" must be set to a value to explains the user what the button is or does, like for instance ',e.jsx(a.code,{children:"Menu button"})," or ",e.jsx(a.code,{children:"Button to toggle the main navigation's visibility"}),"."]}),`
`,e.jsx(a.p,{children:"It should work with all different languages available on the website."}),`
`,e.jsxs(a.h3,{id:"toggle-element-selector-required",children:["toggle-element-selector ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"toggle-element-selector"})," will be used by the webcomponent. This is the target element where the open navigation attribute will be added / removed."]}),`
`,e.jsxs(a.p,{children:["This element must be a valid css selector for an element on the page. As default we should use the ",e.jsx(a.code,{children:"#topbar"})," selector."]}),`
`,e.jsx(a.h2,{id:"events",children:"Events"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"<burger-button>"})," element dispatches and reacts to some custom events."]}),`
`,e.jsx(a.h3,{id:"click-event",children:"click event"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"<burger-button>"})," dispatches a custom ",e.jsx(a.code,{children:"toujou-burger-button-click"})," event each time it is clicked."]}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"toujou-burger-button-click"})," event also has the current state available under ",e.jsx(a.code,{children:"event.detail.state"}),"."]}),`
`,e.jsx(a.h3,{id:"topbar-breaking-point",children:"topbar breaking point"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"<burger-button>"})," listens to the custom ",e.jsx(a.code,{children:"toujou-topbar-breakpoint-change"})," event (dispatched by the topbar element) and reacts by setting its ",e.jsx(a.code,{children:"state = false"})," whenever the window grows to desktop size."]}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"toujou-topbar-breakpoint-change"})," also carries the information if the new window is mobile on ",e.jsx(a.code,{children:"event.detail.state"}),". ",e.jsx(a.code,{children:"true"})," mean it is mobile"]})]})}function g(n={}){const{wrapper:a}={...i(),...n.components};return a?e.jsx(a,{...n,children:e.jsx(o,{...n})}):o(n)}const x=""+new URL("topbar-mobile-Di9Mhn-b.jpg",import.meta.url).href,j=""+new URL("topbar-desktop-U98wAP54.jpg",import.meta.url).href;function r(n){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"topbar",children:"Topbar"}),`
`,e.jsx(a.p,{children:"The topbar is a complex element, which render a topbar possibly with a main navigation, service navigation, logo and burger button."}),`
`,e.jsx(a.p,{children:"The topbar element is composed by different elements, which also have they own docs:"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#main-navigation",children:"main navigation"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#service-navigation",children:"service navigation"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#burger-button",children:"burger button"})}),`
`]}),`
`,e.jsx(a.h2,{id:"markup-example",children:"Markup example"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<toujou-topbar id="topbar" class="topbar" navigation-theme="light" logo-size="medium">
    <a href="#" class="topbar__logo-link">
        <img src="https://via.placeholder.com/300x150.png?text=Logo" alt="logo" class="topbar__logo">
    </a>

    <ul class="topbar__actions">
        <li class="topbar__actions-item">
            <a href="#" class="topbar__actions-link">
                <span class="topbar__actions-text">Suche</span>
                <toujou-icon icon-name="search" icon-color="font" icon-size="xl" class="icon"></toujou-icon>
            </a>
        </li>
    </ul>

    <toujou-burger-button
            class="burger-button"
            role="button"
            aria-pressed="false"
            aria-haspopup="true"
            aria-controls="mainNavigation"
            aria-expanded="false"
            aria-label="Menu button"
            toggle-element-selector="#topbar"
            tabindex="0"
        >
        <span class="burger-button__line" line-position="top" aria-hidden="true" slot="content"></span>
        <span class="burger-button__line" line-position="middle" aria-hidden="true" slot="content"></span>
        <span class="burger-button__line" line-position="bottom" aria-hidden="true" slot="content"></span>
    </toujou-burger-button>

    <nav class="service-nav">
        <a href="#" class="service-nav__link">Impressum</a>
        <a href="#" class="service-nav__link">Datenschutz</a>
    </nav>

    <nav id="mainNavigation" class="main-nav" aria-label="Main navigation" open-level="1">
        <button is="toujou-button" class="button main-nav__back-button" button-type="default" button-size="normal" button-variant="primary" button-icon-position="left">
            <toujou-icon class="icon" icon-color="background" icon-size="m" icon-name="arrow-left"></toujou-icon>
            Zurück
        </button>

        <ul class="main-nav__list" nav-list-level="1">
            <li class="main-nav__list-item" nav-item-level="1">
                <a href="#" class="main-nav__link">
                    <span class="main-nav__text">Startseite</span>
                </a>
            </li>
            <li class="main-nav__list-item" nav-item-level="1" has-subnav="">
                <a href="#" class="main-nav__link">
                    <span class="main-nav__text">Bürgerservice</span>
                </a>
                <span class="main-nav__chevron">
                    <toujou-icon class="icon" icon-size="l" icon-name="chevron-right" icon-color="background"></toujou-icon>
                </span>
                <ul class="main-nav__list" nav-list-level="2">
                    <li class="main-nav__list-item" nav-item-level="2">
                        <a href="#" class="main-nav__link">
                            <span class="main-nav__text">Arbeit und Beruf</span>
                        </a>
                    </li>
                    <li class="main-nav__list-item" nav-item-level="2">
                        <a href="#" class="main-nav__link">
                            <span class="main-nav__text">Ausweise und Dokumente</span>
                        </a>
                    </li>
                    </li>
                </ul>
            </li>
            <li class="main-nav__list-item" nav-item-level="1">
                <a href="#" class="main-nav__link">
                    <span class="main-nav__text">Online-Terminvergabe</span>
                </a>
            </li>
        </ul>
    </nav>
</toujou-topbar>
`})}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h2,{id:"topbar-layout",children:"Topbar layout"}),`
`,e.jsx(a.p,{children:"On mobile devices the topbar shows the logo / site title, the burger button and the topbar actions:"}),`
`,e.jsx("img",{src:x}),`
`,e.jsx(a.p,{children:"On desktop it shows the logo / site title, the main navigation and the topbar actions:"}),`
`,e.jsx("img",{src:j}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h2,{id:"options",children:"Options"}),`
`,e.jsx(a.p,{children:"The topbar isn't a content element. It is automatically generate according to the page's content and settings."}),`
`,e.jsx(a.p,{children:"There are some settings that change the way the topbar looks and behaves:"}),`
`,e.jsx(a.h3,{id:"navigation-theme",children:"Navigation theme"}),`
`,e.jsxs(a.p,{children:['The navigation theme can be set on the "toujou theme" module, on the "Theme" tab. We can set the "Enable light navigation colors" option either to ',e.jsx(a.code,{children:"dark navigation"})," or ",e.jsx(a.code,{children:"light navigation"})]}),`
`,e.jsxs(a.p,{children:["This will in turn set the correct attribute (",e.jsx(a.code,{children:"navigation-theme"}),") value on the topbar element, and therefore giving the topbar the correct styles."]}),`
`,e.jsxs(a.p,{children:["Example: ",e.jsx(a.code,{children:'<toujou-topbar id="topbar" class="topbar" navigation-theme="dark" logo-size="medium">...<toujou-topbar>'})]}),`
`,e.jsx(a.h3,{id:"page-title-type",children:"Page title type"}),`
`,e.jsxs(a.p,{children:['On the "toujou theme" module, on the "Theme" tab we can choose between ',e.jsx(a.code,{children:"Site title"})," and ",e.jsx(a.code,{children:"Top bar logo"}),' on the "Mobile top bar content option.']}),`
`,e.jsx(a.p,{children:"This will render either the logo or the site title on the topbar (not only on mobile, like the option name says)"}),`
`,e.jsx(a.p,{children:"Example:"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<toujou-topbar id="topbar" class="topbar" navigation-theme="light" logo-size="medium">
    <a href="#" class="topbar__logo-link">
        <span class="topbar__title">Nice title</span>
    </a>
    ...
</toujou-topbar>
`})}),`
`,e.jsx(a.h3,{id:"logo-size",children:"Logo size"}),`
`,e.jsxs(a.p,{children:['The logo size can be defined on the "toujou theme" module "Logo" tab. For the "Logo size" we can choose between ',e.jsx(a.code,{children:"small"}),", ",e.jsx(a.code,{children:"medium"})," and ",e.jsx(a.code,{children:"large"}),"."]}),`
`,e.jsx(a.p,{children:"This will affect the height of the whole topbar, not only the logo size."}),`
`,e.jsxs(a.p,{children:["Example: ",e.jsx(a.code,{children:'<toujou-topbar id="topbar" class="topbar" navigation-theme="light" logo-size="small">...</toujou-topbar>'})]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsxs(a.h3,{id:"navigation-theme-required",children:["navigation-theme ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(a.p,{children:["Change between light and dark theme. Valid values are ",e.jsx(a.code,{children:"light"})," and ",e.jsx(a.code,{children:"dark"})]}),`
`,e.jsxs(a.p,{children:["Example: ",e.jsx(a.code,{children:'<toujou-topbar id="topbar" class="topbar" navigation-theme="dark" logo-size="medium"></toujou-topbar>'})]}),`
`,e.jsxs(a.h3,{id:"logo-size-required",children:["logo-size ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(a.p,{children:["Change between the different logo sizes, which affects the topbar's height. Valie values are ",e.jsx(a.code,{children:"small"}),", ",e.jsx(a.code,{children:"medium"})," and ",e.jsx(a.code,{children:"large"})]}),`
`,e.jsxs(a.p,{children:["Example: ",e.jsx(a.code,{children:'<toujou-topbar id="topbar" class="topbar" navigation-theme="dark" logo-size="large"></toujou-topbar>'})]}),`
`,e.jsx(a.h2,{id:"events",children:"Events"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"<toujou-topbar>"})," element dispatches and reacts to some custom events."]}),`
`,e.jsx(a.h3,{id:"toujou-topbar-breakpoint-change",children:"toujou-topbar-breakpoint-change"}),`
`,e.jsxs(a.p,{children:["Whenever the window size changes and the breakpoint between mobile and desktop is crossed, the topbar dispatches a custom ",e.jsx(a.code,{children:"toujou-topbar-breakpoint-change"})," event."]}),`
`,e.jsx(a.h3,{id:"toujou-burger-button-state-change",children:"toujou-burger-button-state-change"}),`
`,e.jsxs(a.p,{children:["The topbar element reacts to the ",e.jsx(a.code,{children:"toujou-burger-button-state-change"})," by setting / removing the open navigation attribute on itself according to the received state"]}),`
`,e.jsx(a.hr,{}),`
`,e.jsx("a",{id:"main-navigation"}),`
`,e.jsx(v,{}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx("a",{id:"service-navigation"}),`
`,e.jsx(b,{}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx("a",{id:"burger-button"}),`
`,e.jsx(g,{})]})}function f(n={}){const{wrapper:a}={...i(),...n.components};return a?e.jsx(a,{...n,children:e.jsx(r,{...n})}):r(n)}const $={title:"COMPONENTS/Topbar",parameters:{docs:{page:f},layout:"fullscreen"},argTypes:{navigationColor:{table:{category:"Topbar settings",defaultValue:{summary:"default"}},name:"Navigation color",description:"Set the navigation color",options:["default","primary","secondary","font"],control:{type:"radio"},required:!0},titleType:{table:{category:"Topbar settings",defaultValue:{summary:"logo"}},name:"Mobile page title type",description:"Toggle between logo or text for the topbar page title on mobile devices",options:["logo","title"],control:{type:"radio"},required:!0},logoSize:{table:{category:"Topbar settings",defaultValue:{summary:"medium"}},name:"Logo size",description:"Set the logo size",options:["small","medium","large"],control:{type:"radio"},required:!0},noTransitions:{table:{category:"Topbar settings",defaultValue:{summary:"false"}},name:"No transitions",description:"Remove the transition from the topbar elements",control:{type:"boolean"},required:!0},languagePickerType:{table:{category:"Topbar settings"},name:"Language picker type",description:"Choose which type of language picker to show",options:["none","inline","dropdown"],control:{type:"radio"},required:!0},openOnHover:{table:{category:"Topbar settings",defaultValue:{summary:"false"}},name:"Open sub-nav on hover",description:"Choose whether or not a mouseenter/mouseleave event will trigger toggling the sub-nav",control:{type:"boolean"},required:!0}}},k=n=>`
        <nav aria-label="Topbar Logo" style="display: contents;">
            <a aria-label="Zur Startseite" show-title-on-mobile="${n.titleType==="title"}" class="topbar__logo-link" href="/">
                <span class="topbar__title">toujou Installation</span>
                <img class="topbar__logo topbar__logo--svg" src="https://picsum.photos/300/150" alt="Logo">
            </a>
        </nav>
    `,w=()=>`
        <ul class="topbar__actions">
            <li class="topbar__actions-item">
                <a href="#" class="topbar__actions-link" aria-label="Contact">
                    <span class="topbar__actions-text">Contact</span>
                    <toujou-icon icon-name="telephone" icon-color="font" icon-size="xl" class="icon"></toujou-icon>
                </a>
            </li>
            <li class="topbar__actions-item">
                <a href="#" class="topbar__actions-link" aria-label="Like">
                    <span class="topbar__actions-text">Like</span>
                    <toujou-icon icon-name="heart" icon-color="font" icon-size="xl" class="icon"></toujou-icon>
                </a>
            </li>
            <li class="topbar__actions-item">
                <a href="#" class="topbar__actions-link" aria-label="Search">
                    <span class="topbar__actions-text">Search</span>
                    <toujou-icon icon-name="search" icon-color="font" icon-size="xl" class="icon"></toujou-icon>
                </a>
            </li>
        </ul>
    `,y=()=>`
        <ul class="language-picker__list">
            <li class="language-picker__item">
                <a
                    href="#"
                    class="language-picker__link"
                    lang="en"
                    hreflang="en"
                    aria-current="true"
                    aria-label="English"
                >
                    <span class="language-picker__iso-code">EN</span>
                </a>
            </li>
            <li class="language-picker__item">
                <a
                    href="#"
                    class="language-picker__link"
                    lang="de"
                    hreflang="de"
                    aria-label="Deutsch"
                >
                    <span class="language-picker__iso-code">DE</span>
                </a>
            </li>
            <li class="language-picker__item">
                <a
                    href="#"
                    class="language-picker__link"
                    lang="pt"
                    hreflang="pt"
                    aria-label="Português"
                >
                    <span class="language-picker__iso-code">PT</span>
                </a>
            </li>    
        </ul>
    `,q=n=>n==="inline"?`
            <nav class="language-picker" aria-label="Language picker">
                ${y()}
            </nav>
        `:n==="dropdown"?`
            <toujou-language-picker-dropdown role="nav" class="language-picker-dropdown" aria-label="Language picker">
                <select name="language-picker" id="language-picker" class="language-picker-dropdown__select">
                    <option value="#" selected>EN</option>
                    <option value="#">DE</option>
                    <option value="#">FI</option>
                    <option value="#">PT</option>
                    <option value="#">ES</option>
                    <option value="#">FR</option>
                    <option value="#">IT</option>
                </select>
                
                <label class="language-picker-dropdown__label" title="Toggle the language picker" for="language-picker">
                    <toujou-icon class="icon" icon-name="chevron-down" icon-color="background" icon-size="ms"></toujou-icon>
                </label>
            </toujou-language-picker-dropdown>
        `:"",T=()=>`
        <toujou-burger-button
            class="burger-button"
            role="button"
            aria-pressed="false"
            aria-haspopup="true"
            aria-controls="mainNavigation"
            aria-expanded="false"
            aria-label="Menu button"
            toggle-element-selector="#topbar"
            tabindex="0"
        >
            <span class="burger-button__line" line-position="top" aria-hidden="true" slot="content"></span>
            <span class="burger-button__line" line-position="middle" aria-hidden="true" slot="content"></span>
            <span class="burger-button__line" line-position="bottom" aria-hidden="true" slot="content"></span>
        </toujou-burger-button>
    `,z=n=>`
        <nav id="mainNavigation" class="main-nav" aria-label="Main navigation" ${n?"data-is-open-on-hover":""}>
            <ul class="main-nav__list" data-nav-list-level="1">
                <li class="main-nav__list-item" data-nav-item-level="1">
                    <a href="#" class="main-nav__link" aria-current="page">
                        <span class="main-nav__text">Startseite</span>
                    </a>
                </li>
                <li class="main-nav__list-item" data-nav-item-level="1" data-has-subnav>
                    <a href="#" class="main-nav__link">
                        <span class="main-nav__text" id="label_nav2">Bürgerservice</span>
                    </a>
                    <button class="main-nav__chevron" aria-label="Toggle menu Bürgerservice" aria-controls="nav2" aria-expanded="false" aria-pressed="false">
                        <toujou-icon class="icon" icon-size="l" icon-name="chevron-down" icon-color="background"></toujou-icon>
                    </button>
                    <ul class="main-nav__list" data-nav-list-level="2" id="nav2" aria-labelledby="label_nav2">
                        <li class="main-nav__list-item" data-nav-item-level="2" data-has-subnav>
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text" id="label_nav2_1">Arbeit und Beruf</span>
                            </a>
                            <button class="main-nav__chevron" aria-label="Toggle menu Arbeit und Beruf" aria-controls="nav2_1" aria-expanded="false" aria-pressed="false">
                                <toujou-icon class="icon" icon-size="l" icon-name="chevron-down" icon-color="background"></toujou-icon>
                            </button>
                            <ul class="main-nav__list" data-nav-list-level="3" id="nav2_1" aria-labelledby="label_nav2_1">
                                <li class="main-nav__list-item" data-nav-item-level="3">
                                    <a href="#" class="main-nav__link">
                                        <span class="main-nav__text">Item one</span>
                                    </a>
                                </li>
                                <li class="main-nav__list-item" data-nav-item-level="3">
                                    <a href="#" class="main-nav__link">
                                        <span class="main-nav__text">Item two</span>
                                    </a>
                                </li>
                                <li class="main-nav__list-item" data-nav-item-level="3">
                                    <a href="#" class="main-nav__link">
                                        <span class="main-nav__text">Item three with a test very loooooong litle</span>
                                    </a>
                                </li>
                                <li class="main-nav__list-item" data-nav-item-level="3">
                                    <a href="#" class="main-nav__link">
                                        <span class="main-nav__text">Item four</span>
                                    </a>
                                </li>
                                <li class="main-nav__list-item" data-nav-item-level="3">
                                    <a href="#" class="main-nav__link">
                                        <span class="main-nav__text">Item five</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="main-nav__list-item" data-nav-item-level="2" data-has-subnav>
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text" id="label_nav2_2">Ausweise und Dokumente</span>
                            </a>
                            <button class="main-nav__chevron" aria-label="Toggle menu Ausweise und Dokumente" aria-controls="nav2_2" aria-expanded="false" aria-pressed="false">
                                <toujou-icon class="icon" icon-size="l" icon-name="chevron-down" icon-color="background"></toujou-icon>
                            </button>
                            <ul class="main-nav__list" data-nav-list-level="3" id="nav2_2" aria-labelledby="label_nav2_2">
                                <li class="main-nav__list-item" data-nav-item-level="3">
                                    <a href="#" class="main-nav__link">
                                        <span class="main-nav__text">Item one</span>
                                    </a>
                                </li>
                                <li class="main-nav__list-item" data-nav-item-level="3">
                                    <a href="#" class="main-nav__link">
                                        <span class="main-nav__text">Item two</span>
                                    </a>
                                </li>
                                <li class="main-nav__list-item" data-nav-item-level="3">
                                    <a href="#" class="main-nav__link">
                                        <span class="main-nav__text">Item three</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="main-nav__list-item" data-nav-item-level="2" data-has-subnav>
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text" id="label_nav2_3">Bauen</span>
                            </a>
                            <button class="main-nav__chevron" aria-label="Toggle menu Bauen" aria-controls="nav2_3" aria-expanded="false" aria-pressed="false">
                                <toujou-icon class="icon" icon-size="l" icon-name="chevron-down" icon-color="background"></toujou-icon>
                            </button>
                            <ul class="main-nav__list" data-nav-list-level="3" id="nav2_3" aria-labelledby="label_nav2_3">
                                <li class="main-nav__list-item" data-nav-item-level="3">
                                    <a href="#" class="main-nav__link">
                                        <span class="main-nav__text">Item one</span>
                                    </a>
                                </li>
                                <li class="main-nav__list-item" data-nav-item-level="3">
                                    <a href="#" class="main-nav__link">
                                        <span class="main-nav__text">Item two</span>
                                    </a>
                                </li>
                                <li class="main-nav__list-item" data-nav-item-level="3">
                                    <a href="#" class="main-nav__link">
                                        <span class="main-nav__text">Item three</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="main-nav__list-item" data-nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">This is a 2nd level item with a very very long text</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" data-nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Erbschaft und Testament</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" data-nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Familie und Partnerschaften</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" data-nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Freiwilligedienste</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" data-nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Geburt</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" data-nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Gesellschaft und Politik</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" data-nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Gesundheit und Vorsorge</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" data-nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Heirat</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" data-nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Jugend</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" data-nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Kinderbetreeung</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" data-nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Kirchen und Religion</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" data-nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Kultur und Freizeit</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" data-nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Leben mit Behinderung</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" data-nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Mobilität</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" data-nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Natur und Umwelt</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" data-nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Notlagen- und Opferhilfen</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" data-nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Online-Informationen</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" data-nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Reisen</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" data-nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Ruhestand</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" data-nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Schule</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" data-nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Sicherheit</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" data-nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Sterbefall</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" data-nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Steuern und Abgaben</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" data-nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Studium</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" data-nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Tierhaltung und Jagd</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" data-nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Umzug</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" data-nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Waren und Dienstleistungen</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" data-nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Wohnen</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="main-nav__list-item" data-nav-item-level="1">
                    <a href="#" class="main-nav__link">
                        <span class="main-nav__text">Online-Terminvergabe</span>
                    </a>
                </li>
                <li class="main-nav__list-item" data-nav-item-level="1" data-has-subnav>
                    <a href="#" class="main-nav__link">
                        <span class="main-nav__text" id="label_nav4">Häufige Fragen</span>
                    </a>
                    <button class="main-nav__chevron" aria-label="Toggle menu Häufige Fragen" aria-controls="nav4" aria-expanded="false" aria-pressed="false">
                        <toujou-icon class="icon" icon-size="l" icon-name="chevron-down" icon-color="background"></toujou-icon>
                    </button>
                    <ul class="main-nav__list" data-nav-list-level="2" id="nav4" aria-labelledby="label_nav4">
                        <li class="main-nav__list-item" data-nav-item-level="2" data-has-subnav>
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text" id="label_nav4_1">Arbeit und Beruf</span>
                            </a>
                            <button class="main-nav__chevron" aria-label="Toggle menu Arbeit und Beruf" aria-controls="nav4_1" aria-expanded="false" aria-pressed="false">
                                <toujou-icon class="icon" icon-size="l" icon-name="chevron-down" icon-color="background"></toujou-icon>
                            </button>
                            <ul class="main-nav__list" data-nav-list-level="3" id="nav4_1" aria-labelledby="label_nav4_1">
                                <li class="main-nav__list-item" data-nav-item-level="3">
                                    <a href="#" class="main-nav__link">
                                        <span class="main-nav__text">Item one</span>
                                    </a>
                                </li>
                                <li class="main-nav__list-item" data-nav-item-level="3">
                                    <a href="#" class="main-nav__link">
                                        <span class="main-nav__text">Item two</span>
                                    </a>
                                </li>
                                <li class="main-nav__list-item" data-nav-item-level="3">
                                    <a href="#" class="main-nav__link">
                                        <span class="main-nav__text">Item three</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="main-nav__list-item" data-nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Ausweise und Dokumente</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" data-nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Bauen</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" data-nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Berufsausbildung</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" data-nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Erbschaft und Testament</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" data-nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Familie und Partnerschaften</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    `,L=()=>`
        <nav class="service-nav">
            <a href="#" class="service-nav__link">Impressum</a>
            <a href="#" class="service-nav__link">Datenschutz</a>
            <a href="#" class="service-nav__link">Kontakt</a>
            <a href="#" class="service-nav__link">About us</a>
            <a href="#" class="service-nav__link">Gender at work</a>
        </nav>
    `,D=()=>`
        <main>
            <toujou-breadcrumb role="navigation" aria-label="Breadcrumb" class="breadcrumb">
                <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--open">
                    <toujou-icon class="icon breadcrumb__toggle-icon" icon-name="arrow-left"></toujou-icon>
                </button>

                <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--close">
                    <toujou-icon class="icon breadcrumb__toggle-icon" icon-name="close"></toujou-icon>
                </button>

                <ol class="breadcrumb__list" slot="list">
                    <li class="breadcrumb__item">
                        <a href="#" class="breadcrumb__link">Home</a>
                    </li>
                </ol>
            </toujou-breadcrumb>
            <toujou-text-block class="text-block" text-block-column-count="1">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h1>Left aligned H1 headline</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>

            <toujou-text-block class="text-block" text-block-column-count="1">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h1>Left aligned H1 headline</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <h2>Left aligned H1 headline</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <h2>Left aligned H1 headline</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <h2>Left aligned H1 headline</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <h2>Left aligned H1 headline</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>
        </main>
    `,E=n=>(document.documentElement.setAttribute("navigation-color",n.navigationColor),`
        <toujou-topbar
            id="topbar"
            class="topbar"
            logo-size="${n.logoSize}"
            ${n.noTransitions?"no-transitions":""}
        >

            ${k(n)}
            ${w()}
            
            ${n.languagePickerType!="none"?`
                ${q(n.languagePickerType)}
            `:""}
            
            ${T()}
            
            ${z(n.openOnHover)}

            ${L()}
        </toujou-topbar>

        ${D()}
    `),t=E.bind({});t.args={navigationColor:"default",titleType:"logo",logoSize:"medium",noTransitions:!1,languagePickerType:"inline",openOnHover:!1};var c,u,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`(args: TopbarStoryProps) => {
  document.documentElement.setAttribute('navigation-color', args.navigationColor);
  return \`
        <toujou-topbar
            id="topbar"
            class="topbar"
            logo-size="\${args.logoSize}"
            \${args.noTransitions ? 'no-transitions' : ''}
        >

            \${renderLogoSection(args)}
            \${renderActionsSection()}
            
            \${args.languagePickerType != 'none' ? \`
                \${renderLanguagePickerElement(args.languagePickerType)}
            \` : ''}
            
            \${renderBurgerSection()}
            
            \${renderMainNavSection(args.openOnHover)}

            \${renderServiceNavSection()}
        </toujou-topbar>

        \${renderDummyContent()}
    \`;
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const B=["Topbar"];export{t as Topbar,B as __namedExportsOrder,$ as default};
