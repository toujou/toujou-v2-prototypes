import { css } from "lit";

export const ToujouRatingStarsStyles = css`
  :host {
    --rating-stars-entity-position: relative;
    --rating-stars-entity-left: -.1em;
    
    --rating-stars-overlay-position: absolute;
    --rating-stars-overlay-top: 0;
    --rating-stars-overlay-right: 0;
    --rating-stars-overlay-height: 100%;
    --rating-stars-overlay-background-color: transparent;
    --rating-stars-overlay-backdrop-filter: grayscale(1);
    
    position: var(--rating-stars-entity-position);
  }
  
  .entity {
    position: relative;
    left: var(--rating-stars-entity-left);
  }
  
  .overlay {
    position: var(--rating-stars-overlay-position);
    top: var(--rating-stars-overlay-top);
    right: var(--rating-stars-overlay-right);
    height: var(--rating-stars-overlay-height);
    width: var(--rating-stars-percentage);
    background-color: var(--rating-stars-overlay-background-color);
    backdrop-filter: var(--rating-stars-overlay-backdrop-filter);
    display: block;
  }
`
