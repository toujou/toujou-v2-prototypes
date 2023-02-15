import { css } from 'lit';

export const ToujouClampedContentStyles = css`
  :host {
    --toujou-clamped-content-number-of-lines: 3;
    --toujou-clamped-content-word-break: 'none';
    --toujou-clamped-content-button-visible-display: flex;
    --toujou-clamped-content-button-hidden-display: none;
    --toujou-clamped-content-button-slot-display: flex;
    --toujou-clamped-content-button-slot-justify-content: flex-end;
  }

  :host([is-open]) {
    --toujou-clamped-content-number-of-lines: 9999;
  }

  :host([clamp-disabled]) {
    --toujou-clamped-content-number-of-lines: 9999;
    --toujou-clamped-content-button-visible-display: none;
  }

  .clamped-content {
    display: -webkit-box;
    -webkit-line-clamp: var(--toujou-clamped-content-number-of-lines);
    -webkit-box-orient: vertical;
    word-break: var(--toujou-clamped-content-word-break);
    overflow: hidden;
    hyphens: auto;
  }

  :host slot[name="show-button"] {
    display: var(--toujou-clamped-content-button-visible-display);
  }

  :host([is-open]) slot[name="show-button"] {
    display: var(--toujou-clamped-content-button-hidden-display);
  }

  :host slot[name="hide-button"] {
    display: var(--toujou-clamped-content-button-hidden-display);
  }

  :host([is-open]) slot[name="hide-button"] {
    display: var(--toujou-clamped-content-button-visible-display);
  }

  .button-slot {
    margin-top: var(--spacing-normal);
    display: var(--toujou-clamped-content-button-slot-display);
    justify-content: var(--toujou-clamped-content-button-slot-justify-content);
  }
`;
