import{T as d}from"./badgeCustomConfig-e7a687d5.js";import{j as n}from"./jsx-runtime-87b2c1dd.js";import{u as i}from"./index-af127bdc.js";import"./index-afb52020.js";import"./_commonjsHelpers-725317a4.js";const p=""+new URL("main-nav-mobile-5a3b5603.jpg",import.meta.url).href,v=""+new URL("main-nav-desktop-b7f50ad6.jpg",import.meta.url).href;function s(e){const a={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(a.h2,{id:"main-nav",children:"Main nav"}),`
`,n.jsxs(a.p,{children:["The main navigation render a ",n.jsx(a.code,{children:"<nav>"})," element which allows the users to navigate between the different pages on the website."]}),`
`,n.jsx(a.p,{children:"It is automatically generated according to the pages that are created on the BE."}),`
`,n.jsx(a.p,{children:"On mobile it is visible by opening the navigation (click on the burger button), on desktop it is always visible."}),`
`,n.jsx(a.p,{children:"The main navigation can show up to 3 nested navigation levels."}),`
`,n.jsx(a.h2,{id:"markup-example",children:"Markup example:"}),`
`,n.jsx(a.pre,{children:n.jsx(a.code,{className:"language-html",children:`<nav id="mainNavigation" class="main-nav" aria-label="Main navigation" open-level="1">
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
`,n.jsx(a.p,{children:"The mobile main navigation requires click to navigate between the different menu levels"}),`
`,n.jsx("img",{src:p}),`
`,n.jsx(a.p,{children:"The desktop navigation open and closes on hover events"}),`
`,n.jsx("img",{src:v}),`
`,n.jsx(a.h2,{id:"active-menu-items",children:"Active menu items"}),`
`,n.jsxs(a.p,{children:["The active menu items get an extra ",n.jsx(a.code,{children:"active"}),` attribute, which we use to style them accordingly
Ex: `,n.jsx(a.code,{children:'<li class="main-nav__list-item" nav-item-level="1" has-subnav="" active>'})]})]})}function _(e={}){const{wrapper:a}={...i(),...e.components};return a?n.jsx(a,{...e,children:n.jsx(s,{...e})}):s(e)}const h=""+new URL("service-nav-mobile-d2c9f653.jpg",import.meta.url).href,b=""+new URL("service-nav-desktop-4ccc9992.jpg",import.meta.url).href;function l(e){const a={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(a.h2,{id:"service-nav",children:"Service nav"}),`
`,n.jsxs(a.p,{children:["The service navigation renders a ",n.jsx(a.code,{children:"nav"})," element, which allows users to quickly navigate to the most important service pages on the website."]}),`
`,n.jsxs(a.p,{children:["It is automatically generated according to the pages added to the ",n.jsx(a.code,{children:"Service-Navigation"})," folder on the BE."]}),`
`,n.jsx(a.p,{children:"On mobile it is visible inside the menu, which can be opened / closed with a burger button click. It is also rendered on the default footer"}),`
`,n.jsx(a.h2,{id:"main-nav",children:"Main nav"}),`
`,n.jsxs(a.p,{children:["The main navigation render a ",n.jsx(a.code,{children:"<nav>"})," element which allows the users to navigate between the different pages on the website."]}),`
`,n.jsx(a.p,{children:"It is automatically generated according to the pages that are created on the BE."}),`
`,n.jsx(a.p,{children:"On mobile it is visible by opening the navigation (click on the burger button), on desktop it is always visible."}),`
`,n.jsx(a.p,{children:"The main navigation can show up to 3 nested navigation levels."}),`
`,n.jsx(a.h2,{id:"markup-example",children:"Markup example:"}),`
`,n.jsx(a.pre,{children:n.jsx(a.code,{className:"language-html",children:`<nav id="mainNavigation" class="main-nav" aria-label="Main navigation" open-level="1">
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
`,n.jsx(a.p,{children:"The mobile main navigation requires click to navigate between the different menu levels"}),`
`,n.jsx("img",{src:h}),`
`,n.jsx(a.p,{children:"The desktop navigation open and closes on hover events"}),`
`,n.jsx("img",{src:b})]})}function g(e={}){const{wrapper:a}={...i(),...e.components};return a?n.jsx(a,{...e,children:n.jsx(l,{...e})}):l(e)}function o(e){const a={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(a.h2,{id:"burger-button",children:"Burger button"}),`
`,n.jsx(a.p,{children:"The burger button is an element that allows us to open / close the main navigation menu on click"}),`
`,n.jsx(a.h2,{id:"markup-example",children:"Markup example:"}),`
`,n.jsx(a.pre,{children:n.jsx(a.code,{className:"language-html",children:`<toujou-burger-button
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
`,n.jsx(a.h2,{id:"attributes",children:"Attributes"}),`
`,n.jsxs(a.h3,{id:"role-required",children:["role ",n.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,n.jsxs(a.p,{children:['The "role" attribute must be set to ',n.jsx(a.code,{children:"button"}),". This greatly improves the element's accessibility."]}),`
`,n.jsxs(a.h3,{id:"aria-pressed-required",children:["aria-pressed ",n.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,n.jsxs(a.p,{children:['The "aria-pressed" must be set to ',n.jsx(a.code,{children:"false"})," to improve the element's accessibility. Will be updated by the webcomponent."]}),`
`,n.jsxs(a.h3,{id:"aria-haspopup-required",children:["aria-haspopup ",n.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,n.jsxs(a.p,{children:['The "aria-haspopup" must be set to ',n.jsx(a.code,{children:"true"})," to improve the element's accessibility. Will be updated by the webcomponent."]}),`
`,n.jsxs(a.h3,{id:"aria-controls-required",children:["aria-controls ",n.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,n.jsxs(a.p,{children:[`The "aria-controls" must be set to the same value as the main navigation's id, for instance `,n.jsx(a.code,{children:"mainNavigation"}),"."]}),`
`,n.jsxs(a.h3,{id:"aria-expanded-required",children:["aria-expanded ",n.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,n.jsxs(a.p,{children:['The "aria-expanded" must be set to ',n.jsx(a.code,{children:"false"})," to improve the element's accessibility. Will be updated by the webcomponent."]}),`
`,n.jsxs(a.h3,{id:"aria-label-required",children:["aria-label ",n.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,n.jsxs(a.p,{children:['The "aria-label" must be set to a value to explains the user what the button is or does, like for instance ',n.jsx(a.code,{children:"Menu button"})," or ",n.jsx(a.code,{children:"Button to toggle the main navigation's visibility"}),"."]}),`
`,n.jsx(a.p,{children:"It should work with all different languages available on the website."}),`
`,n.jsxs(a.h3,{id:"toggle-element-selector-required",children:["toggle-element-selector ",n.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,n.jsxs(a.p,{children:["The ",n.jsx(a.code,{children:"toggle-element-selector"})," will be used by the webcomponent. This is the target element where the open navigation attribute will be added / removed."]}),`
`,n.jsxs(a.p,{children:["This element must be a valid css selector for an element on the page. As default we should use the ",n.jsx(a.code,{children:"#topbar"})," selector."]}),`
`,n.jsx(a.h2,{id:"events",children:"Events"}),`
`,n.jsxs(a.p,{children:["The ",n.jsx(a.code,{children:"<burger-button>"})," element dispatches and reacts to some custom events."]}),`
`,n.jsx(a.h3,{id:"click-event",children:"click event"}),`
`,n.jsxs(a.p,{children:["The ",n.jsx(a.code,{children:"<burger-button>"})," dispatches a custom ",n.jsx(a.code,{children:"toujou-burger-button-click"})," event each time it is clicked."]}),`
`,n.jsxs(a.p,{children:["The ",n.jsx(a.code,{children:"toujou-burger-button-click"})," event also has the current state available under ",n.jsx(a.code,{children:"event.detail.state"}),"."]}),`
`,n.jsx(a.h3,{id:"topbar-breaking-point",children:"topbar breaking point"}),`
`,n.jsxs(a.p,{children:["The ",n.jsx(a.code,{children:"<burger-button>"})," listens to the custom ",n.jsx(a.code,{children:"toujou-topbar-breakpoint-change"})," event (dispatched by the topbar element) and reacts by setting its ",n.jsx(a.code,{children:"state = false"})," whenever the window grows to desktop size."]}),`
`,n.jsxs(a.p,{children:["The ",n.jsx(a.code,{children:"toujou-topbar-breakpoint-change"})," also carries the information if the new window is mobile on ",n.jsx(a.code,{children:"event.detail.state"}),". ",n.jsx(a.code,{children:"true"})," mean it is mobile"]})]})}function x(e={}){const{wrapper:a}={...i(),...e.components};return a?n.jsx(a,{...e,children:n.jsx(o,{...e})}):o(e)}const f=""+new URL("topbar-mobile-b1d7a597.jpg",import.meta.url).href,j=""+new URL("topbar-desktop-02904537.jpg",import.meta.url).href;function c(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(a.h1,{id:"topbar",children:"Topbar"}),`
`,n.jsx(a.p,{children:"The topbar is a complex element, which render a topbar possibly with a main navigation, service navigation, logo and burger button."}),`
`,n.jsx(a.p,{children:"The topbar element is composed by different elements, which also have they own docs:"}),`
`,n.jsxs(a.ul,{children:[`
`,n.jsx(a.li,{children:n.jsx(a.a,{href:"#main-navigation",children:"main navigation"})}),`
`,n.jsx(a.li,{children:n.jsx(a.a,{href:"#service-navigation",children:"service navigation"})}),`
`,n.jsx(a.li,{children:n.jsx(a.a,{href:"#burger-button",children:"burger button"})}),`
`]}),`
`,n.jsx(a.h2,{id:"markup-example",children:"Markup example"}),`
`,n.jsx(a.pre,{children:n.jsx(a.code,{className:"language-html",children:`<toujou-topbar id="topbar" class="topbar" navigation-theme="light" logo-size="medium">
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
`,n.jsx("br",{}),`
`,n.jsx("br",{}),`
`,n.jsx(a.h2,{id:"topbar-layout",children:"Topbar layout"}),`
`,n.jsx(a.p,{children:"On mobile devices the topbar shows the logo / site title, the burger button and the topbar actions:"}),`
`,n.jsx("img",{src:f}),`
`,n.jsx(a.p,{children:"On desktop it shows the logo / site title, the main navigation and the topbar actions:"}),`
`,n.jsx("img",{src:j}),`
`,n.jsx("br",{}),`
`,n.jsx("br",{}),`
`,n.jsx(a.h2,{id:"options",children:"Options"}),`
`,n.jsx(a.p,{children:"The topbar isn't a content element. It is automatically generate according to the page's content and settings."}),`
`,n.jsx(a.p,{children:"There are some settings that change the way the topbar looks and behaves:"}),`
`,n.jsx(a.h3,{id:"navigation-theme",children:"Navigation theme"}),`
`,n.jsxs(a.p,{children:['The navigation theme can be set on the "toujou theme" module, on the "Theme" tab. We can set the "Enable light navigation colors" option either to ',n.jsx(a.code,{children:"dark navigation"})," or ",n.jsx(a.code,{children:"light navigation"})]}),`
`,n.jsxs(a.p,{children:["This will in turn set the correct attribute (",n.jsx(a.code,{children:"navigation-theme"}),") value on the topbar element, and therefore giving the topbar the correct styles."]}),`
`,n.jsxs(a.p,{children:["Example: ",n.jsx(a.code,{children:'<toujou-topbar id="topbar" class="topbar" navigation-theme="dark" logo-size="medium">...<toujou-topbar>'})]}),`
`,n.jsx(a.h3,{id:"page-title-type",children:"Page title type"}),`
`,n.jsxs(a.p,{children:['On the "toujou theme" module, on the "Theme" tab we can choose between ',n.jsx(a.code,{children:"Site title"})," and ",n.jsx(a.code,{children:"Top bar logo"}),' on the "Mobile top bar content option.']}),`
`,n.jsx(a.p,{children:"This will render either the logo or the site title on the topbar (not only on mobile, like the option name says)"}),`
`,n.jsx(a.p,{children:"Example:"}),`
`,n.jsx(a.pre,{children:n.jsx(a.code,{className:"language-html",children:`<toujou-topbar id="topbar" class="topbar" navigation-theme="light" logo-size="medium">
    <a href="#" class="topbar__logo-link">
        <span class="topbar__title">Nice title</span>
    </a>
    ...
</toujou-topbar>
`})}),`
`,n.jsx(a.h3,{id:"logo-size",children:"Logo size"}),`
`,n.jsxs(a.p,{children:['The logo size can be defined on the "toujou theme" module "Logo" tab. For the "Logo size" we can choose between ',n.jsx(a.code,{children:"small"}),", ",n.jsx(a.code,{children:"medium"})," and ",n.jsx(a.code,{children:"large"}),"."]}),`
`,n.jsx(a.p,{children:"This will affect the height of the whole topbar, not only the logo size."}),`
`,n.jsxs(a.p,{children:["Example: ",n.jsx(a.code,{children:'<toujou-topbar id="topbar" class="topbar" navigation-theme="light" logo-size="small">...</toujou-topbar>'})]}),`
`,n.jsx("br",{}),`
`,n.jsx("br",{}),`
`,n.jsx(a.h2,{id:"attributes",children:"Attributes"}),`
`,n.jsxs(a.h3,{id:"navigation-theme-required",children:["navigation-theme ",n.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,n.jsxs(a.p,{children:["Change between light and dark theme. Valid values are ",n.jsx(a.code,{children:"light"})," and ",n.jsx(a.code,{children:"dark"})]}),`
`,n.jsxs(a.p,{children:["Example: ",n.jsx(a.code,{children:'<toujou-topbar id="topbar" class="topbar" navigation-theme="dark" logo-size="medium"></toujou-topbar>'})]}),`
`,n.jsxs(a.h3,{id:"logo-size-required",children:["logo-size ",n.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,n.jsxs(a.p,{children:["Change between the different logo sizes, which affects the topbar's height. Valie values are ",n.jsx(a.code,{children:"small"}),", ",n.jsx(a.code,{children:"medium"})," and ",n.jsx(a.code,{children:"large"})]}),`
`,n.jsxs(a.p,{children:["Example: ",n.jsx(a.code,{children:'<toujou-topbar id="topbar" class="topbar" navigation-theme="dark" logo-size="large"></toujou-topbar>'})]}),`
`,n.jsx(a.h2,{id:"events",children:"Events"}),`
`,n.jsxs(a.p,{children:["The ",n.jsx(a.code,{children:"<toujou-topbar>"})," element dispatches and reacts to some custom events."]}),`
`,n.jsx(a.h3,{id:"toujou-topbar-breakpoint-change",children:"toujou-topbar-breakpoint-change"}),`
`,n.jsxs(a.p,{children:["Whenever the window size changes and the breakpoint between mobile and desktop is crossed, the topbar dispatches a custom ",n.jsx(a.code,{children:"toujou-topbar-breakpoint-change"})," event."]}),`
`,n.jsx(a.h3,{id:"toujou-burger-button-state-change",children:"toujou-burger-button-state-change"}),`
`,n.jsxs(a.p,{children:["The topbar element reacts to the ",n.jsx(a.code,{children:"toujou-burger-button-state-change"})," by setting / removing the open navigation attribute on itself according to the received state"]}),`
`,n.jsx(a.hr,{}),`
`,n.jsx("a",{id:"main-navigation"}),`
`,n.jsx(_,{}),`
`,n.jsx("br",{}),`
`,n.jsx("br",{}),`
`,n.jsx("a",{id:"service-navigation"}),`
`,n.jsx(g,{}),`
`,n.jsx("br",{}),`
`,n.jsx("br",{}),`
`,n.jsx("a",{id:"burger-button"}),`
`,n.jsx(x,{})]})}function k(e={}){const{wrapper:a}={...i(),...e.components};return a?n.jsx(a,{...e,children:n.jsx(c,{...e})}):c(e)}const D={title:"COMPONENTS/Topbar",parameters:{badges:[d.DONE],docs:{page:k},layout:"fullscreen"},argTypes:{navigationTheme:{table:{category:"Topbar settings",defaultValue:{summary:"light"}},name:"Navigation theme",description:"Set the navigation theme",options:["light","dark"],control:{type:"radio"},defaultValue:["light"],required:!0},titleType:{table:{category:"Topbar settings",defaultValue:{summary:"logo"}},name:"Page title type",description:"Toggle between logo or text for the topbar page title",options:["logo","text"],control:{type:"radio"},defaultValue:["logo"],required:!0},logoSize:{table:{category:"Topbar settings",defaultValue:{summary:"medium"}},name:"Logo size",description:"Set the logo size",options:["small","medium","large"],control:{type:"radio"},defaultValue:["medium"],required:!0},noTransitions:{table:{category:"Topbar settings",defaultValue:{summary:"false"}},name:"No transitions",description:"Remove the transition from the topbar elements",control:{type:"boolean"},defaultValue:[!1],required:!0}},tags:["autodocs"]},q=e=>(document.documentElement.style.setProperty("--topbar-height",`var(--topbar-height-${e.logoSize})`),`
        <toujou-topbar
            id="topbar"
            class="topbar"
            navigation-theme="${e.navigationTheme}"
            logo-size="${e.logoSize}"
            ${e.noTransitions?"no-transitions":""}
        >
            <a href="#" class="topbar__logo-link">
                ${e.titleType==="logo"?`
                    <img src="https://via.placeholder.com/300x150.png?text=Logo" alt="logo" class="topbar__logo">
                `:`
                    <span class="topbar__title">Nice title</span>
                `}
            </a>

            <ul class="topbar__actions">
                <li class="topbar__actions-item">
                    <a href="#" class="topbar__actions-link">
                        <span class="topbar__actions-text">Like</span>
                        <toujou-icon icon-name="heart" icon-color="font" icon-size="xl" class="icon"></toujou-icon>
                    </a>
                </li>
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

            <nav id="mainNavigation" class="main-nav" is="toujou-main-nav" aria-label="Main navigation">
                <ul class="main-nav__list" nav-list-level="1">
                    <li class="main-nav__list-item" nav-item-level="1">
                        <a href="#" class="main-nav__link" aria-current="page">
                            <span class="main-nav__text">Startseite</span>
                        </a>
                    </li>
                    <li class="main-nav__list-item" nav-item-level="1" has-subnav>
                        <a href="#" class="main-nav__link">
                            <span class="main-nav__text">Bürgerservice</span>
                        </a>
                        <span class="main-nav__chevron" tabindex="0">
                            <toujou-icon class="icon" icon-size="l" icon-name="chevron-down" icon-color="background"></toujou-icon>
                        </span>
                        <ul class="main-nav__list" nav-list-level="2">
                            <li class="main-nav__list-item" nav-item-level="2" has-subnav>
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Arbeit und Beruf</span>
                                </a>
                                <span class="main-nav__chevron">
                                    <toujou-icon class="icon" icon-size="l" icon-name="chevron-down" icon-color="background"></toujou-icon>
                                </span>
                                <ul class="main-nav__list" nav-list-level="3">
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
                                    <span class="main-nav__text">Ausweise und Dokumente</span>
                                </a>
                                <span class="main-nav__chevron">
                                    <toujou-icon class="icon" icon-size="l" icon-name="chevron-down" icon-color="background"></toujou-icon>
                                </span>
                                <ul class="main-nav__list" nav-list-level="3">
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
                                    <span class="main-nav__text">Bauen</span>
                                </a>
                                <span class="main-nav__chevron">
                                    <toujou-icon class="icon" icon-size="l" icon-name="chevron-down" icon-color="background"></toujou-icon>
                                </span>
                                <ul class="main-nav__list" nav-list-level="3">
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
                            </li><li class="main-nav__list-item" nav-item-level="2">
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
                            </li><li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Gesundheit und Vorsorge</span>
                                </a>
                            </li>
                            <li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Heirat</span>
                                </a>
                            </li><li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Jugend</span>
                                </a>
                            </li><li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Kinderbetreeung</span>
                                </a>
                            </li><li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Kirchen und Religion</span>
                                </a>
                            </li><li class="main-nav__list-item" nav-item-level="2">
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
                    <li class="main-nav__list-item" nav-item-level="1"  has-subnav>
                        <a href="#" class="main-nav__link">
                            <span class="main-nav__text">Häufige Fragen</span>
                        </a>
                        <span class="main-nav__chevron" tabindex="0">
                            <toujou-icon class="icon" icon-size="l" icon-name="chevron-down" icon-color="background"></toujou-icon>
                        </span>
                        <ul class="main-nav__list" nav-list-level="2">
                            <li class="main-nav__list-item" nav-item-level="2" has-subnav>
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Arbeit und Beruf</span>
                                </a>
                                <span class="main-nav__chevron">
                                    <toujou-icon class="icon" icon-size="l" icon-name="chevron-down" icon-color="background"></toujou-icon>
                                </span>
                                <ul class="main-nav__list" nav-list-level="3">
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

        </toujou-topbar>

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
    `),t=q.bind({});t.args={navigationTheme:"light",titleType:"logo",logoSize:"medium",noTransitions:!1};var r,u,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`(args: TopbarStoryProps) => {
  // @ts-ignore
  document.documentElement.style.setProperty('--topbar-height', \`var(--topbar-height-\${args.logoSize})\`);
  return \`
        <toujou-topbar
            id="topbar"
            class="topbar"
            navigation-theme="\${args.navigationTheme}"
            logo-size="\${args.logoSize}"
            \${args.noTransitions ? 'no-transitions' : ''}
        >
            <a href="#" class="topbar__logo-link">
                \${args.titleType === 'logo' ? \`
                    <img src="https://via.placeholder.com/300x150.png?text=Logo" alt="logo" class="topbar__logo">
                \` : \`
                    <span class="topbar__title">Nice title</span>
                \`}
            </a>

            <ul class="topbar__actions">
                <li class="topbar__actions-item">
                    <a href="#" class="topbar__actions-link">
                        <span class="topbar__actions-text">Like</span>
                        <toujou-icon icon-name="heart" icon-color="font" icon-size="xl" class="icon"></toujou-icon>
                    </a>
                </li>
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

            <nav id="mainNavigation" class="main-nav" is="toujou-main-nav" aria-label="Main navigation">
                <ul class="main-nav__list" nav-list-level="1">
                    <li class="main-nav__list-item" nav-item-level="1">
                        <a href="#" class="main-nav__link" aria-current="page">
                            <span class="main-nav__text">Startseite</span>
                        </a>
                    </li>
                    <li class="main-nav__list-item" nav-item-level="1" has-subnav>
                        <a href="#" class="main-nav__link">
                            <span class="main-nav__text">Bürgerservice</span>
                        </a>
                        <span class="main-nav__chevron" tabindex="0">
                            <toujou-icon class="icon" icon-size="l" icon-name="chevron-down" icon-color="background"></toujou-icon>
                        </span>
                        <ul class="main-nav__list" nav-list-level="2">
                            <li class="main-nav__list-item" nav-item-level="2" has-subnav>
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Arbeit und Beruf</span>
                                </a>
                                <span class="main-nav__chevron">
                                    <toujou-icon class="icon" icon-size="l" icon-name="chevron-down" icon-color="background"></toujou-icon>
                                </span>
                                <ul class="main-nav__list" nav-list-level="3">
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
                                    <span class="main-nav__text">Ausweise und Dokumente</span>
                                </a>
                                <span class="main-nav__chevron">
                                    <toujou-icon class="icon" icon-size="l" icon-name="chevron-down" icon-color="background"></toujou-icon>
                                </span>
                                <ul class="main-nav__list" nav-list-level="3">
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
                                    <span class="main-nav__text">Bauen</span>
                                </a>
                                <span class="main-nav__chevron">
                                    <toujou-icon class="icon" icon-size="l" icon-name="chevron-down" icon-color="background"></toujou-icon>
                                </span>
                                <ul class="main-nav__list" nav-list-level="3">
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
                            </li><li class="main-nav__list-item" nav-item-level="2">
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
                            </li><li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Gesundheit und Vorsorge</span>
                                </a>
                            </li>
                            <li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Heirat</span>
                                </a>
                            </li><li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Jugend</span>
                                </a>
                            </li><li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Kinderbetreeung</span>
                                </a>
                            </li><li class="main-nav__list-item" nav-item-level="2">
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Kirchen und Religion</span>
                                </a>
                            </li><li class="main-nav__list-item" nav-item-level="2">
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
                    <li class="main-nav__list-item" nav-item-level="1"  has-subnav>
                        <a href="#" class="main-nav__link">
                            <span class="main-nav__text">Häufige Fragen</span>
                        </a>
                        <span class="main-nav__chevron" tabindex="0">
                            <toujou-icon class="icon" icon-size="l" icon-name="chevron-down" icon-color="background"></toujou-icon>
                        </span>
                        <ul class="main-nav__list" nav-list-level="2">
                            <li class="main-nav__list-item" nav-item-level="2" has-subnav>
                                <a href="#" class="main-nav__link">
                                    <span class="main-nav__text">Arbeit und Beruf</span>
                                </a>
                                <span class="main-nav__chevron">
                                    <toujou-icon class="icon" icon-size="l" icon-name="chevron-down" icon-color="background"></toujou-icon>
                                </span>
                                <ul class="main-nav__list" nav-list-level="3">
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

        </toujou-topbar>

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
    \`;
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const E=["Topbar"];export{t as Topbar,E as __namedExportsOrder,D as default};
