import { css } from 'lit';

export const ToujouDetailsStyles = css`
  :host {
    --toujou-details-border: 2px solid var(--color-font-light);
    
    --toujou-details-summary-padding: var(--spacing-normal);
    --toujou-details-summary-gap: 0;
    --toujou-details-summary-display: grid;
    --toujou-details-summary-grid-templte-columns: 1fr auto;
    --toujou-details-summary-grid-templte-areas: 
            "title chevron" 
            "subtitle chevron";

    --toujou-details-content-padding: 0 var(--spacing-normal) var(--spacing-m);
    
    display: block;
    border-bottom: var(--toujou-details-border);
  }

  :host(:first-child) {
    border-top: var(--toujou-details-border);
  }
  
  .details__summary {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-areas: var(--toujou-details-summary-grid-templte-areas);
    grid-gap: var(--toujou-details-summary-gap);
    align-items: center;
    padding: var(--toujou-details-summary-padding);
  }
  
  .details__summary::-webkit-details-marker {
    display: none;
  }
  
  .details__content {
    padding: var(--toujou-details-content-padding);
  }
  
  @media (hover: hover) {
    .details__summary:hover {
      cursor: pointer;
    }
  }
`;
