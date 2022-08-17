import { html, LitElement } from 'lit-element'
import { render } from 'lit-html'
import { ToujouExitWarningStyles } from "./toujou-exit-warning.styles.js";

class ToujouExitWarning extends LitElement {

  static get is () { return 'exit-warning'; }

  static styles = [ ToujouExitWarningStyles ]

  static get properties() {
    return {
      title: {
        type: String
      },
      targetUrl: {
        type: String
      },
      redirectDelay: {
        type: Number
      },
      secondsRemaining: {
        type: Number
      },
      opened: {
        type: Boolean
      },
      _messageTemplate: {
        type: Object
      }
    }
  }

  constructor () {
    super();
    this.targetUrl = 'http://www.dfau.de';
    this.redirectDelay = 50;

    this.onIntervalTick = this.onIntervalTick.bind(this);
    this.onModalOpenedChanged = this.onModalOpenedChanged.bind(this);

    this._secondsRemainingInterval = null;
    this._messageTemplate = null;
    this._modal = null;

    this._modalOpenedObserver = new MutationObserver(this.onModalOpenedChanged);
  }

  render () {
    return html`
      <toujou-modal title="${this.title}" is-exit-warning>
        <div class="exit-warning__message">
          <slot></slot>
        </div>
      </toujou-modal>
    `
  }

  connectedCallback () {
    const template = this.querySelector('template');
    if (template) {
      this._messageTemplate = new Function('html', 'targetUrl', 'secondsRemaining', 'return html`' + template.innerHTML + '`');
    }
    console.log('xxx', this._messageTemplate);
    super.connectedCallback();
    this.addEventListener('opened-changed', (ev) => { console.log(ev) })
  }

  disconnectedCallback () {
    super.disconnectedCallback();
    this._modalOpenedObserver.disconnect();
  }

  updated (_changedProperties) {
    if (this._messageTemplate) {
      render(this._messageTemplate(html, this.targetUrl, this.secondsRemaining), this);
    }
  }

  firstUpdated (_changedProperties) {
    this._modal = this.shadowRoot.querySelector('toujou-modal');
    this._modal && this._modalOpenedObserver.observe(this._modal, {attributeFilter: ['opened']})
  }

  onModalOpenedChanged() {
    if (this._modal.opened) {
      this.secondsRemaining = this.redirectDelay;
      this._secondsRemainingInterval = window.setInterval(this.onIntervalTick, 1000);
    } else {
      this._secondsRemainingInterval && window.clearInterval(this._secondsRemainingInterval);
      this._secondsRemainingInterval = null;
    }
  }

  onIntervalTick() {
    this.secondsRemaining--;
    if (this.secondsRemaining <= 0) {
     window.location.href = this.targetUrl;
     this.close();
    }
  }

  open () {
    this._modal && this._modal.open();
  }

  close () {
    this._modal && this._modal.close();
  }
}

customElements.define(ToujouExitWarning.is, ToujouExitWarning);


// eslint-disable-next-line consistent-return
function getOpenerFromEvent(event) {
  const path = event.composedPath();
  for (let i = 0; i < path.indexOf(document.body); i++) {
    const target = path[i];
    if (target.hasAttribute && target.hasAttribute('target') && target !== document.body) {
      return target;
    }
  }
}

function openExitWarning(targetUrlString) {
  const exitWarning = document.querySelector('exit-warning');
  if (!exitWarning) {
    return false;
  }

  if (window.location.href.match(/toujou-ajax-modal=/) && window.self !== window.parent) {
    window.parent.postMessage({action: 'toujou-exit-warning', targetUrl:targetUrlString}, window.location.origin);
    return true;
  }

  const targetUrl = new URL(targetUrlString);

  if (targetUrl.hostname === window.location.hostname) {
    window.location.href = targetUrlString;
  } else {
    exitWarning.targetUrl = targetUrlString;
    exitWarning.open();
  }

  return true;
}

function openModalOnToujouExitWarningTargetClick(event) {
  if (event.metaKey || event.ctrlKey) {
    return;
  }

  const opener = getOpenerFromEvent(event);
  if (!(opener instanceof HTMLElement) || opener instanceof HTMLFormElement) {
    return;
  }

  if (opener.getAttribute('target') === 'toujou-exit-warning') {
    const targetUrl= opener.getAttribute('href');

    if (openExitWarning(targetUrl)) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
}

function openModalOnToujouExitWarningTargetClickInToujouModal(event) {
  if (event.origin !== window.location.origin
      || event.data.action === undefined
      || event.data.action !== 'toujou-exit-warning'
      || !event.data.targetUrl) {
    return;
  }

  openExitWarning(event.data.targetUrl);
}

document.addEventListener('click', openModalOnToujouExitWarningTargetClick);
window.addEventListener('message', openModalOnToujouExitWarningTargetClickInToujouModal);
