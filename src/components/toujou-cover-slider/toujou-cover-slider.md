# TOUJOU-COVER-SLIDER

The `toujou-cover-slider` is an "automatic slider" element.
It will show the children elements in a slider only if they don't fit on the screen.
Otherwise it will just show them side by side.

Per default it always show the number of slides that fit on a screen plus half a slide (which is cut, to show the users that they can slide).

## toujou-cover-slider children
The toujou cover slider takes as children the same elements as the normal slider
Example:
```html
<toujou-cover-slider class="imagecard-cover">
    <div class="imagecard-cover__frame" data-autoslide="{data.slider_autoslide}" data-slideinterval="{data.slider_autoslide_interval}">
        <a href="{teaserItem.data.link}" class="imagecard-cover__slide">
            <figure class="imagecard-cover__figure">
                <d:image class="imagecard-cover__image" image="{teaserItem.images.0}" settings="{settings}" loading="lazy" />
            </figure>
        </a>
        <a href="{teaserItem.data.link}" class="imagecard-cover__slide">
            <figure class="imagecard-cover__figure">
                <d:image class="imagecard-cover__image" image="{teaserItem.images.0}" settings="{settings}" loading="lazy" />
            </figure>
        </a>
    </div>
    <span class="slider__control slider__control--prev">
        <svg height="24" width="24" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
            <use xlink:href="#arrow_left"/>
        </svg>
    </span>
    <span class="slider__control slider__control--next">
        <svg height="24" width="24" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
            <use xlink:href="#arrow_right"/>
        </svg>
    </span>
</toujou-cover-slider>
```

## CSS Variables
You can use these variables to customize the look of the `toujou-cover-slider`.
Please notice that the variable to the max-width and for the gap are unitless, because they are also used by the element's JS.

| Property | Description | Default |
|----------|-------------|---------|
|--toujou-imagecard-cover-card-max-width | Set the maximum width a slide can have inside the slider | 200 (in pixels, unitless) |
|--toujou-imagecard-cover-card-gap | Set gap between the slides | 16 (in pixels, unitless) |
|--toujou-imagecard-cover-card-height | Set slider height. | 175% (percentage, in relation to the slider width) |
