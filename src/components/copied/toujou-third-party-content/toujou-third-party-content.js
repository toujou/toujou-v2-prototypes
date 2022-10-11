import { LitElement, html } from 'lit';
import { ToujouThirdPartyContentStyles } from "./toujou-third-part-content.styles.js";

import { consentsStore } from '../toujou-consent-widget/consentsStore';
import { saveSingleConsent } from '../toujou-consent-widget/actions/consent-actions';

class ToujouThirdPartyContent extends LitElement {
  static get is() {
    return 'toujou-third-party-content';
  }

  static styles = [ ToujouThirdPartyContentStyles ];

  static get styles() {
    return styles;
  }

  render() {
    return html`
      <slot id="templatedContent" @slotchange="${this._handleSlotChange}"></slot>
      <div @click="${this._handlePlaceholderClick}">
        <slot name="placeholder" id="placeholderContainer" class="placeholder-slot"></slot>
      </div>
    `;
  }

  static get properties() {
    return {
      contentType: {
        type: String,
      },
      contentTypeAllowed: {
        type: Boolean,
      },
      contentID: {
        type: String,
      },
      isIntersecting: {
        type: Boolean,
      },
      show: {
        type: Boolean,
      },
    };
  }

  constructor(props) {
    super(props);

    this.onStateChange = this.onStateChange.bind(this);
    this._handleConsentButtonClick = this._handleConsentButtonClick.bind(this);

    this.store = consentsStore;
    this.store.subscribe(this.onStateChange);
    this._state = this.store.getState();

    this.contentTypeAllowed = false;
    this.isIntersecting = false;
    this.show = false;
  }

  /**
   * This function fires when the component is appended to the document.
   */
  connectedCallback() {
    super.connectedCallback();
    this._isContentTypeAllowed();
    this._checkIfShouldShow();
    this._addEventListeners();
    this._addIntersectionObserver();
  }

  /**
   * This function runs each time a property is updated.
   * We have to check of the element is intersecting with the viewport,
   * so we load when only if visible
   */
  updated(_changedProperties) {
    _changedProperties.forEach((oldValue, propertyName) => {
      if (propertyName === 'isIntersecting' && this.isIntersecting && !this.show) {
        this.show = true;
        this._checkIfShouldShow();
      }
    });
  }

  /**
   * This function runs each time the store changes
   */
  onStateChange() {
    this._state = this.store.getState();
    this._isContentTypeAllowed();
    this._checkIfShouldShow();
  }

  /**
   * Add event listeners to the element.
   * Check if the cookies have been updated
   */
  _addEventListeners() {
    window.addEventListener('toujou-consent-widget-dismissed', () => {
      this._isContentTypeAllowed();
      this._checkIfShouldShow();
    });
    window.addEventListener('toujou-consent-button-clicked', this._handleConsentButtonClick);
  }

  /**
   * If the 'always allow' button is clicked, we should set the consent for that content type
   * and show a snackbar confirming it.
   */
  _handleConsentButtonClick(event) {
    const dispatcherConsent = event.target;
    const childConsents = this.querySelectorAll('.consent');
    childConsents.forEach((childConsent) => {
      if (childConsent === dispatcherConsent) {
        this._saveSingleConsent(event.target.getAttribute('consenttype'), this._createNewConsentData(event.target));
        this._dispatchAddSnackbar(event.target.getAttribute('snackbarmessage'));
      }
    });
  }

  /**
   * Create the new consent data for a consentType
   * It returns an object ready to be dispatched to the store
   */
  // eslint-disable-next-line class-methods-use-this
  _createNewConsentData(consentElement) {
    const elementLifetimeValue = consentElement.getAttribute('consentLifetime');
    const consentLifetime = elementLifetimeValue * 24 * 60 * 60;

    return {
      consentGiven: true,
      consentCreationDate: Date.now(),
      consentExpirationDate: Date.now() + consentLifetime,
      consentLifetime,
    };
  }

  /**
   * Call store action to update values of one single consent type
   */
  _saveSingleConsent(consentType, consentData) {
    this.store.dispatch(saveSingleConsent(consentType, consentData));
  }

  /**
   * Dispatch event to add a snackbar
   */
  _dispatchAddSnackbar(snackbarMessage) {
    const addSnackbarEvent = new CustomEvent('toujou-add-snackbar', {
      bubbles: true,
      composed: true,
      detail: {
        message: snackbarMessage,
        type: 'auto',
        duration: 2500,
        variant: 'success',
      },
    });
    this.dispatchEvent(addSnackbarEvent);
  }

  /**
   * Handle click on a button in the placeholder slot
   */
  _handlePlaceholderClick(event) {
    if (event.target.hasAttribute('ttpc-showcontentonce')) {
      this._handleShowContentOnceClick();
    }
  }

  /**
   * There is a button to show the content once without setting any consent 'cookies'
   * A click on this button should just show the content
   */
  _handleShowContentOnceClick() {
    this._showContent();
  }

  /**
   * Add an Intersection Observer to check if the element is visible
   */
  _addIntersectionObserver() {
    // eslint-disable-next-line no-shadow
    const observer = new IntersectionObserver((entry, observer) => {
      this.isIntersecting = entry[0].isIntersecting;
      if (this.isIntersecting) {
        observer.unobserve(this);
      }
    });
    observer.observe(this);
  }

  /**
   * Append all elements (other that <script>) to the page
   */
  _appendNonScriptTag(templateTag) {
    this.querySelector('.toujou-third-party-content__templated-content').appendChild(templateTag);
  }

  /**
   * Append script element to the page
   * We need to make sure external scripts are completely loaded
   * before we can proceed to the next element
   */
  _appendScriptTag(templateTag) {
    const newScript = document.createElement('script');
    const readyScript = this._copyScriptAttributesAndContent(templateTag, newScript);

    this.querySelector('.toujou-third-party-content__templated-content').appendChild(readyScript);

    if (!readyScript.hasAttribute('src') || readyScript.hasAttribute('async') || readyScript.hasAttribute('defer')) {
      return new Promise((resolve) => {
        resolve();
      });
    }

    return new Promise((resolve) => {
      readyScript.addEventListener('load', resolve);
    });
  }

  /**
   * Append elements inside the templated content in an asyncronous way
   * so we can ensure the order in which the scripts are added and executed
   */
  async _appendTags(templateTags) {
    for (let i = 0; i < templateTags.length; i++) {
      // eslint-disable-next-line no-await-in-loop
      await new Promise((resolve) => {
        if (templateTags[i].tagName !== 'SCRIPT') {
          resolve(this._appendNonScriptTag(templateTags[i]));
        } else {
          resolve(this._appendScriptTag(templateTags[i]));
        }
      });
    }
  }

  /**
   * Check if the element should show the external content
   */
  _checkIfShouldShow() {
    if (this.contentTypeAllowed && this.show) {
      this._showContent();
    }
  }

  /**
   * Clear the #renderedContent slot.
   * This is used before we rerender the template,
   * so are are sure we always have the most recent template content
   */
  _clearRenderedContent() {
    this.querySelector('.toujou-third-party-content__templated-content').innerHTML = '';
  }

  /**
   * Copy attributes and content from old script (from the template) to the readyScript ("clone")
   */
  // eslint-disable-next-line class-methods-use-this
  _copyScriptAttributesAndContent(oldScript, readyScript) {
    for (let i = 0; i < oldScript.attributes.length; i++) {
      const attr = oldScript.attributes[i];
      readyScript.setAttribute(attr.name, attr.value);
    }
    // eslint-disable-next-line no-param-reassign
    readyScript.innerHTML = oldScript.innerHTML;
    return readyScript;
  }

  /**
   * Separate the uncommentedTemplateContent into an array of html elements (by Tag)
   */
  // eslint-disable-next-line class-methods-use-this
  _getTemplateTags(uncommentedTemplateContent) {
    const templateTags = [];
    const dummyDiv = document.createElement('div');
    dummyDiv.innerHTML = uncommentedTemplateContent;

    // eslint-disable-next-line no-restricted-syntax
    for (const key in dummyDiv.childNodes) {
      // eslint-disable-next-line max-len
      if (dummyDiv.childNodes[key].nodeType !== 3 && dummyDiv.childNodes[key].parentElement === dummyDiv) {
        templateTags.push(dummyDiv.childNodes[key]);
      }
    }

    return templateTags;
  }

  /**
   * This function run each time a change in the #templatedContent slot is detected
   */
  _handleSlotChange() {
    this._checkIfShouldShow();
  }

  /**
   * Check if the template content is commented out
   */
  // eslint-disable-next-line class-methods-use-this
  _isCommentedTemplate(templateHTML) {
    return templateHTML.startsWith('<!--') && templateHTML.endsWith('-->');
  }

  /**
   * Check if the content type is allowed
   * (if cookie exists and is true)
   */
  _isContentTypeAllowed() {
    if (this._state.consents[this.contentType]) {
      this.contentTypeAllowed = this._state.consents[this.contentType].consentGiven || false;
    } else {
      this.contentTypeAllowed = false;
    }
    if (window.location.hash === '#aaa') {
      this.contentTypeAllowed = true;
    }
  }

  /**
   * Show the external content
   */
  _showContent() {
    this._clearRenderedContent();

    const templates = this.shadowRoot
      .querySelector('#templatedContent')
      .assignedNodes({ flatten: true })
      .filter((el) => el.tagName === 'TEMPLATE');


    templates.forEach((template) => {
      if (this.contentType === 'html') {
        const uncommentedTemplateContent = this._uncommentTemplate(template);
        const templateTags = this._getTemplateTags(uncommentedTemplateContent);
        this._appendTags(templateTags);
      } else {
        const clone = document.importNode(template.content, true);
        this.querySelector('.toujou-third-party-content__templated-content').appendChild(clone);
      }
    });

    this.setAttribute('showingcontent', '');
  }

  /**
   * Remove the comment marks from the template content
   */
  _uncommentTemplate(template) {
    return this._isCommentedTemplate(template.innerHTML)
      ? template.innerHTML.substr(4, template.innerHTML.length - 7)
      : null;
  }
}

customElements.define(ToujouThirdPartyContent.is, ToujouThirdPartyContent);
