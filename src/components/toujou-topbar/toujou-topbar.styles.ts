import { css } from "lit";

export const toujouTopbarStyles = css`
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
    grid-template-columns: 1fr auto 1fr;
    grid-template-areas: "mainnav logo servicenav";
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
`;