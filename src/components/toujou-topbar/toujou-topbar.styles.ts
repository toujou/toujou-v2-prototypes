import { css } from "lit";

export const toujouTopbarStyles = css`
  :host {
    display: grid;
    grid-template-rows: auto 1fr;
    gap: var(--spacing-s) var(--spacing-normal);
    width: 100%;
    background-color: var(--color-bg);
    padding: var(--spacing-normal);
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

  :host(.toujou-topbar--has-border-bottom) {
    border-bottom: var(--topbar-border-width) solid var(--color-primary);
  }

  :host(.toujou-topbar--has-bottom-shadow) {
    box-shadow: var(--topbar-box-shadow);
  }

  .logo {
    grid-area: logo
  }
  
  .main-nav {
    grid-area: mainnav;
  }
  
  .service-nav {
    grid-area: servicenav;
  }
`;