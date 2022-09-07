import { css } from 'lit';

export const ToujouSpinnerStyles = css`
  * {
    box-sizing: border-box;
  }

  :host {
    --toujou-spinner-size: 5rem;
    --toujou-spinner-thickness: 4;
    --toujou-spinner-start-color: var(--color-primary-light);
    --toujou-spinner-end-color: var(--color-primary-dark);
    --toujou-spinner-animation-duration: 2s;
    --toujou-spinner-dash-animation-duration: 1.4s;
    --toujou-spinner-display: inline-flex;
    --toujou-spinner-align-items: center;
    --toujou-spinner-justify-content: center;
    --toujou-spinner-position: relative;
    --toujou-spinner-top: unset;
    --toujou-spinner-left: unset;
    --toujou-spinner-transform: unset;
    --toujou-spinner-z-index: auto;
    
    width: var(--toujou-spinner-size);
    height: var(--toujou-spinner-size);
    display: var(--toujou-spinner-display);
    align-items: var(--toujou-spinner-align-items);
    justify-content: var(--toujou-spinner-justify-content);
    position: var(--toujou-spinner-position);
    top: var(--toujou-spinner-top);
    left: var(--toujou-spinner-left);
    transform: var(--toujou-spinner-transform);
    z-index: var(--toujou-spinner-z-index);
  }

  :host([centered-on-page]) {
    --toujou-spinner-position: fixed;
    --toujou-spinner-top: 50%;
    --toujou-spinner-left: 50%;
    --toujou-spinner-transform: translate(-50%, -50%);
    --toujou-spinner-z-index: var(--z-index-spinner, 75);
  }

  .spinner__spinner::before {
    content: '';
    display: block;
    padding-top: 100%;
  }

  .spinner__svg {
    animation: rotationAnimation var(--toujou-spinner-animation-duration) linear infinite;
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  .spinner__circle {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: dashAnimation var(--toujou-spinner-dash-animation-duration) ease-in-out infinite,
    colorAnimation var(--toujou-spinner-dash-animation-duration) ease-in-out infinite;
    stroke-linecap: round;
    stroke-width: var(--toujou-spinner-thickness);
    fill: none;
  }

  @keyframes rotationAnimation {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dashAnimation {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124px;
    }
  }

  @keyframes colorAnimation {
    0%, 20% {
      stroke: var(--toujou-spinner-start-color);
    }
    80%, 100% {
      stroke: var(--toujou-spinner-end-color);
    }
  }

`;