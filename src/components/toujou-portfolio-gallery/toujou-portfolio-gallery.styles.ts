import { css } from 'lit';

export const ToujouPortfolioGalleryStyles = css`
  * {
    box-sizing: border-box;
  }

  :host {
    position: relative;
  }

  .pagination {
    margin: 0;
    display: var(--toujou-portfolio-gallery-pagination-display, block);
    position: var(--toujou-portfolio-gallery-pagination-position, relative);
    top: var(--toujou-portfolio-gallery-pagination-top, unset);
    right: var(--toujou-portfolio-gallery-pagination-right, unset);
    bottom: var(--toujou-portfolio-gallery-pagination-bottom, unset);
    left: var(--toujou-portfolio-gallery-pagination-left, unset);
    padding: var(--toujou-portfolio-gallery-pagination-padding, .5rem);
    font-size: var(--toujou-portfolio-gallery-pagination-font-size, .75rem);
    color: var(--toujou-portfolio-gallery-pagination-color, #000);
    background-color: var(--toujou-portfolio-gallery-pagination-background-color, #fff);
    border-radius: var(--toujou-portfolio-gallery-pagination-border-radius, .125rem);
  }
`;