import{css as l,LitElement as v,html as p}from"lit";import{customElement as g}from"lit/decorators.js";const m=l`
  :host {
    position: relative;
    display: grid;
    grid-template-rows: auto 1fr;
    gap: var(--spacing-s) var(--spacing-normal);
    width: 100%;
    background-color: var(--color-bg);
    padding: var(--spacing-s) var(--spacing-normal) 0 var(--spacing-normal);
  }

  :host([logo-position="left"]) {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-areas:
        "logo servicenav"
        "logo mainnav";
  }

  :host([logo-position="right"]) {
    grid-template-columns: 1fr auto;
    grid-template-areas:
        "servicenav logo"
        "mainnav logo";
  }

  :host([logo-position="center"]) {
    grid-template-columns: 1fr 0;
    grid-template-areas:
            "logo servicenav"
            "mainnav mainnav";
    gap: 0 var(--spacing-normal);
  }

  :host(.toujou-topbar--has-border-bottom) {
    border-bottom: var(--topbar-border-width) solid var(--color-primary);
  }

  :host(.toujou-topbar--has-bottom-shadow) {
    box-shadow: var(--topbar-box-shadow);
  }

  .logo {
    grid-area: logo;
    display: flex;
    align-items: center;
    padding: var(--spacing-s);
  }
  
  .main-navbar {
    grid-area: mainnav;
  }
  
  .service-navbar {
    grid-area: servicenav;
  }

  :host([service-navbar-visible="false"])  .service-navbar {
    display: none;
  }
`;var c=Object.defineProperty,d=Object.getOwnPropertyDescriptor,b=(n,o,s,r)=>{for(var a=r>1?void 0:r?d(o,s):o,e=n.length-1,t;e>=0;e--)(t=n[e])&&(a=(r?t(o,s,a):t(a))||a);return r&&a&&c(o,s,a),a};let i=class extends v{render(){return p`
            <div class="logo">
                <slot name="topbar-logo"></slot>
            </div>
            <div class="main-navbar">
                <slot name="topbar-main-navbar"></slot>
            </div>
            <div class="service-navbar">
                <slot name="topbar-service-navbar"></slot>
            </div>
        `}constructor(){super()}};i.styles=[m];i=b([g("toujou-topbar")],i);
