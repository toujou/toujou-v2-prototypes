import { css } from "lit";

// Internal styles for the <toujou-breadcrumb> element
export const toujouBreadcrumbStyles = css`
  :host {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .breadcrumb__fake-list {
    display: none;
    list-style: none;
    position: relative;
    border-radius: var(--breadcrumb-fake-list-border-radius);
  }
  
  .breadcrumb__fake-list::before {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: var(--spacing-s);
    border-left: var(--breadcrumb-fake-list-triangle-size) solid transparent;
    border-right: var(--breadcrumb-fake-list-triangle-size) solid transparent;
    border-bottom: var(--breadcrumb-fake-list-triangle-size) solid var(--breadcrumb-mobile-menu-bg-color);
    transform: translateY(-100%);
  }
  
  .breadcrumb__fake-list .breadcrumb__link {
    color: var(--breadcrumb-link-color);
    font-size: var(--breadcrumb-font-size);
    font-family: var(--breadcrumb-font-family);
    text-decoration: var(--breadcrumb-link-text-decoration);
  }
  
  :host([ismobile][mobilemenuisopen]) .breadcrumb__fake-list {
    display: flex;
    flex-direction: column-reverse;
    gap: var(--breadcrumb-mobile-menu-list-gap);
    padding: var(--breadcrumb-mobile-menu-padding);
    position: absolute;
    top: var(--breadcrumb-mobile-menu-top);
    left: 0;
    background-color: var(--breadcrumb-mobile-menu-bg-color);
    box-shadow: var(--breadcrumb-mobile-menu-shadow);
  }

  .breadcrumb__fake-list .breadcrumb__link:focus {
    color: var(--breadcrumb-link-color-active, var(--color-primary));
  }
  
  @media (hover: hover) {
    .breadcrumb__fake-list .breadcrumb__link:hover {
      color: var(--breadcrumb-link-color-active, var(--color-primary));
    }
  }
`;