import { html, LitElement } from 'lit';
import Glider from 'glider-js';

class ToujouCoverSlider__OLD extends LitElement {
  static get is() {
    return 'toujou-cover-slider';
  }

  render() {
    return html`
        <slot></slot>
    `;
  }

  constructor() {
    super();

    this._isSlide = false;
    this._sliderFrame = null;
    this._maxCardWidth = null;
    this._cardGap = null;
    this._cardWidthWithGap = this._maxCardWidth + this._cardGap;
    this._numberOfSlidesInSlider = 0;
    this._showHalf = true;
    this._slidesThatFitIntoScreen = 3;
    this._sliderOptions = {
      slidesToShow: 3.5,
      slidesToScroll: 1,
      draggable: true,
      scrollLock: true,
      resizeLock: true,
      rewind: true,
    };

    this._resizeObserver = new ResizeObserver((entries) => {
      entries.forEach(() => this._updateUI());
    });
  }

  set _isSlide(value) {
    value
      ? this.removeAttribute('noslider')
      : this.setAttribute('noslider', '');
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);

    this._sliderFrame = this.querySelector('.imagecard-cover__frame');
    this._arrowPrev = this.querySelector('.slider__control--prev');
    this._arrowNext = this.querySelector('.slider__control--next');
    this._numberOfSlidesInSlider = this.querySelectorAll('.imagecard-cover__slide').length;

    this._createSlider();
    this._updateUI();
  }

  connectedCallback() {
    super.connectedCallback();
    this._resizeObserver.observe(this);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._resizeObserver.unobserve(this);
  }

  /**
   * Create an instance of the Glider (glider.js)
   *
   * @private
   */
  _createSlider() {
    this._slider = new Glider(this._sliderFrame, {
      ...this._sliderOptions,
      arrows: {
        prev: this._arrowPrev,
        next: this._arrowNext,
      },
    });
    this._refreshSlider();
  }

  /**
   * Check if element should be shown as slider or not and update accordingly
   *
   * @private
   */
  _updateUI() {
    console.log('updating...');
    this._updateCustomProperties();
    this._slidesThatFitIntoScreen = this._calculateSlidesThatFitIntoScreen();
    this._isSlide = this._slidesThatFitIntoScreen <= this._numberOfSlidesInSlider;
    this._updateSliderOptions();
    this._refreshSlider();
  }

  /**
   * Update number of slides to show on the slider settings
   *
   * @private
   */
  _updateSliderOptions() {
    this._slider.setOption({
      slidesToShow: this._slidesThatFitIntoScreen,
    });
  }

  /**
   * Calculate how many slides fit on the screen base on the max width of a single slide
   *
   * @returns {number}
   * @private
   */
  _calculateSlidesThatFitIntoScreen() {
    this._sliderWidth = this.getBoundingClientRect().width;
    console.log('fit into screen', Math.ceil(this._sliderWidth / this._cardWidthWithGap) + (this._showHalf ? 0.5 : 0));
    return Math.ceil(this._sliderWidth / this._cardWidthWithGap) + (this._showHalf ? 0.5 : 0);
  }

  /**
   * Refresh slider to start using new settings
   *
   * @private
   */
  _refreshSlider() {
    this._slider.refresh();
  }

  /**
   * Get relevant values from the css variables
   * @private
   */
  _updateCustomProperties() {
    const computedStyles = getComputedStyle(this);
    this._maxCardWidth = +computedStyles.getPropertyValue('--toujou-imagecard-cover-card-max-width');
    this._cardGap = +computedStyles.getPropertyValue('--toujou-imagecard-cover-card-gap');
    this._cardWidthWithGap = this._maxCardWidth + this._cardGap;
  }
}

customElements.define(ToujouCoverSlider__OLD.is, ToujouCoverSlider__OLD);
