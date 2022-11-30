import { css } from 'lit';

export const ToujouMediaInfoStyles = css`
  .open-button {
    display: flex;
  }
  
  :host([open]) .open-button {
    display: none;
  }

  .close-button {
    display: none;
  }

  :host([open]) .close-button {
    display: flex;
  }
`;