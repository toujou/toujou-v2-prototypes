import { css, html, LitElement } from 'lit';

class ToujouFavItem extends LitElement {
  static get is() {
    return 'toujou-fav-item';
  }

  static get properties() {
    return {
      code: {
        type: String,
      },

      favList: {
        type: Array,
      },

      faved: {
        type: Boolean,
      },

      addLabel: {
        type: String,
        attribute: 'add-label',

      },
      removeLabel: {
        type: String,
        attribute: 'remove-label',
      },
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        height: 2rem;
        min-width: 2rem;
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .toujou-fav-item__pager {
        position: relative;
        height: 1.5rem;
        width: 1.5rem;
        margin: var(--toujou-fav-item-icon-margin, 0.25rem);
        cursor: pointer;
      }
      .toujou-fav-item__icon {
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
      }
      .toujou-fav-item__icon--not-faved {
        fill: var(--toujou-fav-item-icon-fill, var(--primary-color));
      }
      .toujou-fav-item__icon--faved {
        fill: var(--toujou-fav-item-icon-fill, var(--primary-color));
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
      }
      .toujou-fav-item__pager[faved] .toujou-fav-item__icon--faved {
        opacity: 1;
      }
      svg {
        width: 100%;
        height: 100%;
      }
    `;
  }

  constructor() {
    super();
    this.faved = false;
    this.addLabel = '';
    this.removeLabel = '';
    this.addEventListener('click', this.toggle);

    console.warn(
        '%c[toujou-fav-item] Mock component loaded!',
        'color: orange; font-weight: bold; background: black; padding: 4px 8px; font-size: 14px; margin-bottom: 8px;',
        '\n ⚠️ This is a mock version for Storybook only. If you see this in production, something went wrong!'
    );
  }

  connectedCallback() {
    super.connectedCallback();
    this.initialized = true;
    this.setAttribute('role', 'switch');
  }

  update(changes) {
    super.update(changes);
    if (changes.has('faved')) {
      this.setAttribute('aria-checked', this.faved ? 'true' : 'false');

      const label = this.faved ? this.removeLabel : this.addLabel;

      if (label) {
        this.setAttribute('aria-label', label);
      }
    }
  }

  render() {
    return html` <span class="toujou-fav-item__pager" ?faved="${this.faved}" part="pager">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 24 24"
          xml:space="preserve"
          height="24"
          width="24"
          part="svg"
        >
          <path
            class="toujou-fav-item__icon toujou-fav-item__icon--not-faved"
            d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
          ></path>
          <path
            class="toujou-fav-item__icon toujou-fav-item__icon--faved"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          ></path>
        </svg>
      </span>
      <slot name="headline"></slot>
      <span id="text" class="text">
        <slot></slot>
      </span>`;
  }
}

customElements.define(ToujouFavItem.is, ToujouFavItem);
