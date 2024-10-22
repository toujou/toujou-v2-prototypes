import{j as e}from"./jsx-runtime-DPda6Ybg.js";import{useMDXComponents as t}from"./index-4_AlzpT7.js";const r=""+new URL("main-nav-mobile-09__OMUc.jpg",import.meta.url).href,c=""+new URL("main-nav-desktop-CmyqBTZx.jpg",import.meta.url).href;function a(i){const n={code:"code",h2:"h2",p:"p",pre:"pre",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"main-nav",children:"Main nav"}),`
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
`,e.jsx("img",{src:r}),`
`,e.jsx(n.p,{children:"The desktop navigation open and closes on hover events"}),`
`,e.jsx("img",{src:c}),`
`,e.jsx(n.h2,{id:"active-menu-items",children:"Active menu items"}),`
`,e.jsxs(n.p,{children:["The active menu items get an extra ",e.jsx(n.code,{children:"active"}),` attribute, which we use to style them accordingly
Ex: `,e.jsx(n.code,{children:'<li class="main-nav__list-item" nav-item-level="1" has-subnav="" active>'})]})]})}function h(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}const d=""+new URL("service-nav-mobile-D3QlnV6C.jpg",import.meta.url).href,u=""+new URL("service-nav-desktop-Qjwajety.jpg",import.meta.url).href;function s(i){const n={code:"code",h2:"h2",p:"p",pre:"pre",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"service-nav",children:"Service nav"}),`
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
`,e.jsx("img",{src:d}),`
`,e.jsx(n.p,{children:"The desktop navigation open and closes on hover events"}),`
`,e.jsx("img",{src:u})]})}function p(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}function o(i){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"burger-button",children:"Burger button"}),`
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
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"toujou-topbar-breakpoint-change"})," also carries the information if the new window is mobile on ",e.jsx(n.code,{children:"event.detail.state"}),". ",e.jsx(n.code,{children:"true"})," mean it is mobile"]})]})}function m(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}const b=""+new URL("topbar-mobile-Di9Mhn-b.jpg",import.meta.url).href,v=""+new URL("topbar-desktop-U98wAP54.jpg",import.meta.url).href;function l(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"topbar",children:"Topbar"}),`
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
`,e.jsx("img",{src:b}),`
`,e.jsx(n.p,{children:"On desktop it shows the logo / site title, the main navigation and the topbar actions:"}),`
`,e.jsx("img",{src:v}),`
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
`,e.jsx(p,{}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx("a",{id:"burger-button"}),`
`,e.jsx(m,{})]})}function x(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(l,{...i})}):l(i)}export{x as M};
