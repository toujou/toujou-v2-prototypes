import { css } from 'lit';

export const ToujouThirdPartyContentStyles = css`
  :host {
    display: var(--toujou-third-party-content-display, flex);
    align-items: var(--toujou-third-party-content-align-items, stretch);
    justify-content: var(--toujou-third-party-content-justify-content, center);
    flex-direction: var(--toujou-third-party-content-flex-direction, column);
    position: var(--toujou-third-party-content-position, relative);
    top: var(--toujou-third-party-content-top, 0);
    left: var(--toujou-third-party-content-left, 0);
    height: var(--toujou-third-party-content-height, 100%);
    width: var(--toujou-third-party-content-width, 100%);
  }

  :host([contenttype='maps']) {
    position: var(--toujou-third-party-content-maps-position, absolute);
  }

  iframe {
    border: var(--toujou-third-party-content-iframe-border, none);
    position: var(--toujou-third-party-content-iframe-position, absolute);
    height: var(--toujou-third-party-content-iframe-height, 100%);
    width: var(--toujou-third-party-content-iframe-width, 100%);
  }

  :host([contenttype='html']) iframe {
    position: var(--toujou-third-party-content-html-iframe-position, relative);
  }
`;