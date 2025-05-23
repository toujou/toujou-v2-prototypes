import{T as d}from"./badgeCustomConfig-DUXiHpL4.js";import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as i}from"./index-DpH9cx3q.js";import"./index-DO8khQO4.js";import"./_commonjsHelpers-Cpj98o6Y.js";const p=""+new URL("main-nav-mobile-09__OMUc.jpg",import.meta.url).href,v=""+new URL("main-nav-desktop-CmyqBTZx.jpg",import.meta.url).href;function s(a){const n={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"main-nav",children:"Main nav"}),`
`,e.jsxs(n.p,{children:["The main navigation render a ",e.jsx(n.code,{children:"<nav>"})," element which allows the users to navigate between the different pages on the website."]}),`
`,e.jsx(n.p,{children:"It is automatically generated according to the pages that are created on the BE."}),`
`,e.jsx(n.p,{children:"On mobile it is visible by opening the navigation (click on the burger button), on desktop it is always visible."}),`
`,e.jsx(n.p,{children:"The main navigation can show up to 3 nested navigation levels."}),`
`,e.jsx(n.h2,{id:"markup-example",children:"Markup example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<nav id="mainNavigation" class="main-nav" aria-label="Main navigation" open-level="1">
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
`,e.jsx(n.p,{children:"The mobile main navigation requires click to navigate between the different menu levels"}),`
`,e.jsx("img",{src:p}),`
`,e.jsx(n.p,{children:"The desktop navigation open and closes on hover events"}),`
`,e.jsx("img",{src:v}),`
`,e.jsx(n.h2,{id:"active-menu-items",children:"Active menu items"}),`
`,e.jsxs(n.p,{children:["The active menu items get an extra ",e.jsx(n.code,{children:"active"}),` attribute, which we use to style them accordingly
Ex: `,e.jsx(n.code,{children:'<li class="main-nav__list-item" nav-item-level="1" has-subnav="" active>'})]})]})}function h(a={}){const{wrapper:n}={...i(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(s,{...a})}):s(a)}const _=""+new URL("service-nav-mobile-D3QlnV6C.jpg",import.meta.url).href,b=""+new URL("service-nav-desktop-Qjwajety.jpg",import.meta.url).href;function l(a){const n={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"service-nav",children:"Service nav"}),`
`,e.jsxs(n.p,{children:["The service navigation renders a ",e.jsx(n.code,{children:"nav"})," element, which allows users to quickly navigate to the most important service pages on the website."]}),`
`,e.jsxs(n.p,{children:["It is automatically generated according to the pages added to the ",e.jsx(n.code,{children:"Service-Navigation"})," folder on the BE."]}),`
`,e.jsx(n.p,{children:"On mobile it is visible inside the menu, which can be opened / closed with a burger button click. It is also rendered on the default footer"}),`
`,e.jsx(n.h2,{id:"main-nav",children:"Main nav"}),`
`,e.jsxs(n.p,{children:["The main navigation render a ",e.jsx(n.code,{children:"<nav>"})," element which allows the users to navigate between the different pages on the website."]}),`
`,e.jsx(n.p,{children:"It is automatically generated according to the pages that are created on the BE."}),`
`,e.jsx(n.p,{children:"On mobile it is visible by opening the navigation (click on the burger button), on desktop it is always visible."}),`
`,e.jsx(n.p,{children:"The main navigation can show up to 3 nested navigation levels."}),`
`,e.jsx(n.h2,{id:"markup-example",children:"Markup example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<nav id="mainNavigation" class="main-nav" aria-label="Main navigation" open-level="1">
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
`,e.jsx(n.p,{children:"The mobile main navigation requires click to navigate between the different menu levels"}),`
`,e.jsx("img",{src:_}),`
`,e.jsx(n.p,{children:"The desktop navigation open and closes on hover events"}),`
`,e.jsx("img",{src:b})]})}function g(a={}){const{wrapper:n}={...i(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(l,{...a})}):l(a)}function o(a){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"burger-button",children:"Burger button"}),`
`,e.jsx(n.p,{children:"The burger button is an element that allows us to open / close the main navigation menu on click"}),`
`,e.jsx(n.h2,{id:"markup-example",children:"Markup example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<toujou-burger-button
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
`,e.jsx(n.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsxs(n.h3,{id:"role-required",children:["role ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(n.p,{children:['The "role" attribute must be set to ',e.jsx(n.code,{children:"button"}),". This greatly improves the element's accessibility."]}),`
`,e.jsxs(n.h3,{id:"aria-pressed-required",children:["aria-pressed ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(n.p,{children:['The "aria-pressed" must be set to ',e.jsx(n.code,{children:"false"})," to improve the element's accessibility. Will be updated by the webcomponent."]}),`
`,e.jsxs(n.h3,{id:"aria-haspopup-required",children:["aria-haspopup ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(n.p,{children:['The "aria-haspopup" must be set to ',e.jsx(n.code,{children:"true"})," to improve the element's accessibility. Will be updated by the webcomponent."]}),`
`,e.jsxs(n.h3,{id:"aria-controls-required",children:["aria-controls ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(n.p,{children:[`The "aria-controls" must be set to the same value as the main navigation's id, for instance `,e.jsx(n.code,{children:"mainNavigation"}),"."]}),`
`,e.jsxs(n.h3,{id:"aria-expanded-required",children:["aria-expanded ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(n.p,{children:['The "aria-expanded" must be set to ',e.jsx(n.code,{children:"false"})," to improve the element's accessibility. Will be updated by the webcomponent."]}),`
`,e.jsxs(n.h3,{id:"aria-label-required",children:["aria-label ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(n.p,{children:['The "aria-label" must be set to a value to explains the user what the button is or does, like for instance ',e.jsx(n.code,{children:"Menu button"})," or ",e.jsx(n.code,{children:"Button to toggle the main navigation's visibility"}),"."]}),`
`,e.jsx(n.p,{children:"It should work with all different languages available on the website."}),`
`,e.jsxs(n.h3,{id:"toggle-element-selector-required",children:["toggle-element-selector ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"toggle-element-selector"})," will be used by the webcomponent. This is the target element where the open navigation attribute will be added / removed."]}),`
`,e.jsxs(n.p,{children:["This element must be a valid css selector for an element on the page. As default we should use the ",e.jsx(n.code,{children:"#topbar"})," selector."]}),`
`,e.jsx(n.h2,{id:"events",children:"Events"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"<burger-button>"})," element dispatches and reacts to some custom events."]}),`
`,e.jsx(n.h3,{id:"click-event",children:"click event"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"<burger-button>"})," dispatches a custom ",e.jsx(n.code,{children:"toujou-burger-button-click"})," event each time it is clicked."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"toujou-burger-button-click"})," event also has the current state available under ",e.jsx(n.code,{children:"event.detail.state"}),"."]}),`
`,e.jsx(n.h3,{id:"topbar-breaking-point",children:"topbar breaking point"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"<burger-button>"})," listens to the custom ",e.jsx(n.code,{children:"toujou-topbar-breakpoint-change"})," event (dispatched by the topbar element) and reacts by setting its ",e.jsx(n.code,{children:"state = false"})," whenever the window grows to desktop size."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"toujou-topbar-breakpoint-change"})," also carries the information if the new window is mobile on ",e.jsx(n.code,{children:"event.detail.state"}),". ",e.jsx(n.code,{children:"true"})," mean it is mobile"]})]})}function x(a={}){const{wrapper:n}={...i(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(o,{...a})}):o(a)}const j=""+new URL("topbar-mobile-Di9Mhn-b.jpg",import.meta.url).href,f=""+new URL("topbar-desktop-U98wAP54.jpg",import.meta.url).href;function r(a){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"topbar",children:"Topbar"}),`
`,e.jsx(n.p,{children:"The topbar is a complex element, which render a topbar possibly with a main navigation, service navigation, logo and burger button."}),`
`,e.jsx(n.p,{children:"The topbar element is composed by different elements, which also have they own docs:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#main-navigation",children:"main navigation"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#service-navigation",children:"service navigation"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#burger-button",children:"burger button"})}),`
`]}),`
`,e.jsx(n.h2,{id:"markup-example",children:"Markup example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<toujou-topbar id="topbar" class="topbar" navigation-theme="light" logo-size="medium">
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
`,e.jsx(n.h2,{id:"topbar-layout",children:"Topbar layout"}),`
`,e.jsx(n.p,{children:"On mobile devices the topbar shows the logo / site title, the burger button and the topbar actions:"}),`
`,e.jsx("img",{src:j}),`
`,e.jsx(n.p,{children:"On desktop it shows the logo / site title, the main navigation and the topbar actions:"}),`
`,e.jsx("img",{src:f}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"options",children:"Options"}),`
`,e.jsx(n.p,{children:"The topbar isn't a content element. It is automatically generate according to the page's content and settings."}),`
`,e.jsx(n.p,{children:"There are some settings that change the way the topbar looks and behaves:"}),`
`,e.jsx(n.h3,{id:"navigation-theme",children:"Navigation theme"}),`
`,e.jsxs(n.p,{children:['The navigation theme can be set on the "toujou theme" module, on the "Theme" tab. We can set the "Enable light navigation colors" option either to ',e.jsx(n.code,{children:"dark navigation"})," or ",e.jsx(n.code,{children:"light navigation"})]}),`
`,e.jsxs(n.p,{children:["This will in turn set the correct attribute (",e.jsx(n.code,{children:"navigation-theme"}),") value on the topbar element, and therefore giving the topbar the correct styles."]}),`
`,e.jsxs(n.p,{children:["Example: ",e.jsx(n.code,{children:'<toujou-topbar id="topbar" class="topbar" navigation-theme="dark" logo-size="medium">...<toujou-topbar>'})]}),`
`,e.jsx(n.h3,{id:"page-title-type",children:"Page title type"}),`
`,e.jsxs(n.p,{children:['On the "toujou theme" module, on the "Theme" tab we can choose between ',e.jsx(n.code,{children:"Site title"})," and ",e.jsx(n.code,{children:"Top bar logo"}),' on the "Mobile top bar content option.']}),`
`,e.jsx(n.p,{children:"This will render either the logo or the site title on the topbar (not only on mobile, like the option name says)"}),`
`,e.jsx(n.p,{children:"Example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<toujou-topbar id="topbar" class="topbar" navigation-theme="light" logo-size="medium">
    <a href="#" class="topbar__logo-link">
        <span class="topbar__title">Nice title</span>
    </a>
    ...
</toujou-topbar>
`})}),`
`,e.jsx(n.h3,{id:"logo-size",children:"Logo size"}),`
`,e.jsxs(n.p,{children:['The logo size can be defined on the "toujou theme" module "Logo" tab. For the "Logo size" we can choose between ',e.jsx(n.code,{children:"small"}),", ",e.jsx(n.code,{children:"medium"})," and ",e.jsx(n.code,{children:"large"}),"."]}),`
`,e.jsx(n.p,{children:"This will affect the height of the whole topbar, not only the logo size."}),`
`,e.jsxs(n.p,{children:["Example: ",e.jsx(n.code,{children:'<toujou-topbar id="topbar" class="topbar" navigation-theme="light" logo-size="small">...</toujou-topbar>'})]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsxs(n.h3,{id:"navigation-theme-required",children:["navigation-theme ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(n.p,{children:["Change between light and dark theme. Valid values are ",e.jsx(n.code,{children:"light"})," and ",e.jsx(n.code,{children:"dark"})]}),`
`,e.jsxs(n.p,{children:["Example: ",e.jsx(n.code,{children:'<toujou-topbar id="topbar" class="topbar" navigation-theme="dark" logo-size="medium"></toujou-topbar>'})]}),`
`,e.jsxs(n.h3,{id:"logo-size-required",children:["logo-size ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(n.p,{children:["Change between the different logo sizes, which affects the topbar's height. Valie values are ",e.jsx(n.code,{children:"small"}),", ",e.jsx(n.code,{children:"medium"})," and ",e.jsx(n.code,{children:"large"})]}),`
`,e.jsxs(n.p,{children:["Example: ",e.jsx(n.code,{children:'<toujou-topbar id="topbar" class="topbar" navigation-theme="dark" logo-size="large"></toujou-topbar>'})]}),`
`,e.jsx(n.h2,{id:"events",children:"Events"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"<toujou-topbar>"})," element dispatches and reacts to some custom events."]}),`
`,e.jsx(n.h3,{id:"toujou-topbar-breakpoint-change",children:"toujou-topbar-breakpoint-change"}),`
`,e.jsxs(n.p,{children:["Whenever the window size changes and the breakpoint between mobile and desktop is crossed, the topbar dispatches a custom ",e.jsx(n.code,{children:"toujou-topbar-breakpoint-change"})," event."]}),`
`,e.jsx(n.h3,{id:"toujou-burger-button-state-change",children:"toujou-burger-button-state-change"}),`
`,e.jsxs(n.p,{children:["The topbar element reacts to the ",e.jsx(n.code,{children:"toujou-burger-button-state-change"})," by setting / removing the open navigation attribute on itself according to the received state"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx("a",{id:"main-navigation"}),`
`,e.jsx(h,{}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx("a",{id:"service-navigation"}),`
`,e.jsx(g,{}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx("a",{id:"burger-button"}),`
`,e.jsx(x,{})]})}function k(a={}){const{wrapper:n}={...i(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(r,{...a})}):r(a)}const A={title:"COMPONENTS/Topbar",parameters:{badges:[d.DONE],docs:{page:k},layout:"fullscreen"},argTypes:{navigationColor:{table:{category:"Topbar settings",defaultValue:{summary:"default"}},name:"Navigation color",description:"Set the navigation color",options:["default","primary","secondary","font"],control:{type:"radio"},required:!0},titleType:{table:{category:"Topbar settings",defaultValue:{summary:"logo"}},name:"Mobile page title type",description:"Toggle between logo or text for the topbar page title on mobile devices",options:["logo","title"],control:{type:"radio"},required:!0},logoSize:{table:{category:"Topbar settings",defaultValue:{summary:"medium"}},name:"Logo size",description:"Set the logo size",options:["small","medium","large"],control:{type:"radio"},required:!0},noTransitions:{table:{category:"Topbar settings",defaultValue:{summary:"false"}},name:"No transitions",description:"Remove the transition from the topbar elements",control:{type:"boolean"},required:!0},languagePickerType:{table:{category:"Topbar settings"},name:"Language picker type",description:"Choose which type of language picker to show",options:["none","inline","dropdown"],control:{type:"radio"},required:!0}}},w=a=>`
        <nav aria-label="Topbar Logo" style="display: contents;">
            <a aria-label="Zur Startseite" show-title-on-mobile="${a.titleType==="title"}" class="topbar__logo-link" href="/">
                <span class="topbar__title">toujou Installation</span>
                <img class="topbar__logo topbar__logo--svg" src="https://picsum.photos/300/150" alt="Logo">
            </a>
        </nav>
    `,q=()=>`
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
    `,T=a=>a==="inline"?`
            <nav class="language-picker" aria-label="Language picker">
                ${y()}
            </nav>
        `:a==="dropdown"?`
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
        `:"",z=()=>`
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
    `,L=()=>`
        <nav id="mainNavigation" class="main-nav" aria-label="Main navigation">
            <ul class="main-nav__list" nav-list-level="1">
                <li class="main-nav__list-item" nav-item-level="1">
                    <a href="#" class="main-nav__link" aria-current="page">
                        <span class="main-nav__text">Startseite</span>
                    </a>
                </li>
                <li class="main-nav__list-item" nav-item-level="1" has-subnav>
                    <a href="#" class="main-nav__link">
                        <span class="main-nav__text" id="label_nav2">Bürgerservice</span>
                    </a>
                    <button class="main-nav__chevron" aria-label="Toggle menu Bürgerservice" aria-controls="nav2" aria-expanded="false" aria-pressed="false">
                        <toujou-icon class="icon" icon-size="l" icon-name="chevron-down" icon-color="background"></toujou-icon>
                    </button>
                    <ul class="main-nav__list" nav-list-level="2" id="nav2" aria-labelledby="label_nav2">
                        <li class="main-nav__list-item" nav-item-level="2" has-subnav>
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text" id="label_nav2_1">Arbeit und Beruf</span>
                            </a>
                            <button class="main-nav__chevron" aria-label="Toggle menu Arbeit und Beruf" aria-controls="nav2_1" aria-expanded="false" aria-pressed="false">
                                <toujou-icon class="icon" icon-size="l" icon-name="chevron-down" icon-color="background"></toujou-icon>
                            </button>
                            <ul class="main-nav__list" nav-list-level="3" id="nav2_1" aria-labelledby="label_nav2_1">
                                <li class="main-nav__list-item" nav-item-level="3">
                                    <a href="#" class="main-nav__link">
                                        <span class="main-nav__text">Item one</span>
                                    </a>
                                </li>
                                <li class="main-nav__list-item" nav-item-level="3">
                                    <a href="#" class="main-nav__link">
                                        <span class="main-nav__text">Item two</span>
                                    </a>
                                </li>
                                <li class="main-nav__list-item" nav-item-level="3">
                                    <a href="#" class="main-nav__link">
                                        <span class="main-nav__text">Item three with a test very loooooong litle</span>
                                    </a>
                                </li>
                                <li class="main-nav__list-item" nav-item-level="3">
                                    <a href="#" class="main-nav__link">
                                        <span class="main-nav__text">Item four</span>
                                    </a>
                                </li>
                                <li class="main-nav__list-item" nav-item-level="3">
                                    <a href="#" class="main-nav__link">
                                        <span class="main-nav__text">Item five</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="main-nav__list-item" nav-item-level="2" has-subnav>
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text" id="label_nav2_2">Ausweise und Dokumente</span>
                            </a>
                            <button class="main-nav__chevron" aria-label="Toggle menu Ausweise und Dokumente" aria-controls="nav2_2" aria-expanded="false" aria-pressed="false">
                                <toujou-icon class="icon" icon-size="l" icon-name="chevron-down" icon-color="background"></toujou-icon>
                            </button>
                            <ul class="main-nav__list" nav-list-level="3" id="nav2_2" aria-labelledby="label_nav2_2">
                                <li class="main-nav__list-item" nav-item-level="3">
                                    <a href="#" class="main-nav__link">
                                        <span class="main-nav__text">Item one</span>
                                    </a>
                                </li>
                                <li class="main-nav__list-item" nav-item-level="3">
                                    <a href="#" class="main-nav__link">
                                        <span class="main-nav__text">Item two</span>
                                    </a>
                                </li>
                                <li class="main-nav__list-item" nav-item-level="3">
                                    <a href="#" class="main-nav__link">
                                        <span class="main-nav__text">Item three</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="main-nav__list-item" nav-item-level="2" has-subnav>
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text" id="label_nav2_3">Bauen</span>
                            </a>
                            <button class="main-nav__chevron" aria-label="Toggle menu Bauen" aria-controls="nav2_3" aria-expanded="false" aria-pressed="false">
                                <toujou-icon class="icon" icon-size="l" icon-name="chevron-down" icon-color="background"></toujou-icon>
                            </button>
                            <ul class="main-nav__list" nav-list-level="3" id="nav2_3" aria-labelledby="label_nav2_3">
                                <li class="main-nav__list-item" nav-item-level="3">
                                    <a href="#" class="main-nav__link">
                                        <span class="main-nav__text">Item one</span>
                                    </a>
                                </li>
                                <li class="main-nav__list-item" nav-item-level="3">
                                    <a href="#" class="main-nav__link">
                                        <span class="main-nav__text">Item two</span>
                                    </a>
                                </li>
                                <li class="main-nav__list-item" nav-item-level="3">
                                    <a href="#" class="main-nav__link">
                                        <span class="main-nav__text">Item three</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="main-nav__list-item" nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">This is a 2nd level item with a very very long text</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Erbschaft und Testament</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Familie und Partnerschaften</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Freiwilligedienste</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Geburt</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Gesellschaft und Politik</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Gesundheit und Vorsorge</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Heirat</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Jugend</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Kinderbetreeung</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Kirchen und Religion</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Kultur und Freizeit</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Leben mit Behinderung</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Mobilität</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Natur und Umwelt</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Notlagen- und Opferhilfen</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Online-Informationen</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Reisen</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Ruhestand</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Schule</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Sicherheit</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Sterbefall</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Steuern und Abgaben</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Studium</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Tierhaltung und Jagd</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Umzug</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Waren und Dienstleistungen</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Wohnen</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="main-nav__list-item" nav-item-level="1">
                    <a href="#" class="main-nav__link">
                        <span class="main-nav__text">Online-Terminvergabe</span>
                    </a>
                </li>
                <li class="main-nav__list-item" nav-item-level="1" has-subnav>
                    <a href="#" class="main-nav__link">
                        <span class="main-nav__text" id="label_nav4">Häufige Fragen</span>
                    </a>
                    <button class="main-nav__chevron" aria-label="Toggle menu Häufige Fragen" aria-controls="nav4" aria-expanded="false" aria-pressed="false">
                        <toujou-icon class="icon" icon-size="l" icon-name="chevron-down" icon-color="background"></toujou-icon>
                    </button>
                    <ul class="main-nav__list" nav-list-level="2" id="nav4" aria-labelledby="label_nav4">
                        <li class="main-nav__list-item" nav-item-level="2" has-subnav>
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text" id="label_nav4_1">Arbeit und Beruf</span>
                            </a>
                            <button class="main-nav__chevron" aria-label="Toggle menu Arbeit und Beruf" aria-controls="nav4_1" aria-expanded="false" aria-pressed="false">
                                <toujou-icon class="icon" icon-size="l" icon-name="chevron-down" icon-color="background"></toujou-icon>
                            </button>
                            <ul class="main-nav__list" nav-list-level="3" id="nav4_1" aria-labelledby="label_nav4_1">
                                <li class="main-nav__list-item" nav-item-level="3">
                                    <a href="#" class="main-nav__link">
                                        <span class="main-nav__text">Item one</span>
                                    </a>
                                </li>
                                <li class="main-nav__list-item" nav-item-level="3">
                                    <a href="#" class="main-nav__link">
                                        <span class="main-nav__text">Item two</span>
                                    </a>
                                </li>
                                <li class="main-nav__list-item" nav-item-level="3">
                                    <a href="#" class="main-nav__link">
                                        <span class="main-nav__text">Item three</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="main-nav__list-item" nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Ausweise und Dokumente</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Bauen</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Berufsausbildung</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Erbschaft und Testament</span>
                            </a>
                        </li>
                        <li class="main-nav__list-item" nav-item-level="2">
                            <a href="#" class="main-nav__link">
                                <span class="main-nav__text">Familie und Partnerschaften</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    `,D=()=>`
        <nav class="service-nav">
            <a href="#" class="service-nav__link">Impressum</a>
            <a href="#" class="service-nav__link">Datenschutz</a>
            <a href="#" class="service-nav__link">Kontakt</a>
            <a href="#" class="service-nav__link">About us</a>
            <a href="#" class="service-nav__link">Gender at work</a>
        </nav>
    `,E=()=>`
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
    `,S=a=>(document.documentElement.setAttribute("navigation-color",a.navigationColor),`
        <toujou-topbar
            id="topbar"
            class="topbar"
            logo-size="${a.logoSize}"
            ${a.noTransitions?"no-transitions":""}
        >

            ${w(a)}
            ${q()}
            
            ${a.languagePickerType!="none"?`
                ${T(a.languagePickerType)}
            `:""}
            
            ${z()}
            
            ${L()}

            ${D()}
        </toujou-topbar>

        ${E()}
    `),t=S.bind({});t.args={navigationColor:"default",titleType:"logo",logoSize:"medium",noTransitions:!1,languagePickerType:"inline"};var c,u,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`(args: TopbarStoryProps) => {
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
            
            \${renderMainNavSection()}

            \${renderServiceNavSection()}
        </toujou-topbar>

        \${renderDummyContent()}
    \`;
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const U=["Topbar"];export{t as Topbar,U as __namedExportsOrder,A as default};
