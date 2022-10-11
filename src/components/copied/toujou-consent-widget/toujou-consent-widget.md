# `<toujou-consent-widget>`

The `<toujou-consent-widget>` is an element created as a container for `<toujou-consent>` elements.

The element listens to the store and passes the consent state to its children.

It then listens to events to save the new consent state.



## `<toujou-consent-widget>` types

It can be used as an 'inpage' element or as a fixed 'consent-box'.

We don't need to add any kind of attribute to differentiate between them, the element will take care of it when it first loads.

#### 'consent-box'
The 'consent-box' is displayed as a fixed position element, kind of like a traditional 'cookie-box'.

The `<toujou-consent-widget>` is shown as a 'consent-box' when the user first comes to the page, if there is no consent data or if any of the consents have expired.

Example:
```html
<toujou-consent-widget class="consent-widget" listenTo="click" listenOn="#consentSaveButton">

    <div class="consent-widget__header" slot="consentWidgetHeader">
        <h4 class="consent-widget__title">{title}</h4>
        <p class="consent-widget__description">{description} <a class="consent-widget__description-link" href="{link}">{linkText}</a></p>
    </div>

    <div class="consent-widget__bottom">
        <div class="consent-widget__consent-elements">
            <toujou-consent class="consent" consentType="tracking" consentLifetime="{trackingconsent_lifetime}" listenTo="change" listenOn="#trackingInput-box">
                <label class="consent__label" for="trackingInput-box">
                    <input class="consent__checkbox" id="trackingInput-box" type="checkbox">
                    <span class="consent__span">{anonymousTrackingLabel} <span class="consent__duration">({trackingConsentDuration})</span></span>
                </label>
            </toujou-consent>
            <toujou-consent class="consent" consentType="html" consentLifetime="{trackingconsent_externals_lifetime}" listenTo="change" listenOn="#htmlInput-box" [prechecked="1"]>
                <label class="consent__label" for="htmlInput-box">
                    <input class="consent__checkbox" id="htmlInput-box" type="checkbox">
                    <span class="consent__span">{externalHTMLLabel} <span class="consent__duration">( {externalsCookieDurationText} )</span></span>
                </label>
            </toujou-consent>
        </div>

        <button id="consentSaveButton" class="button button--primary consent-widget__button" slot="consentCloseButton" listen-to="click" value="0">Save</button>
    </div>

</toujou-consent-widget>
```

#### 'inpage'
The 'inpage' is displayed as a normal content element and fits in the page's flow as defined in the Backend.
You can add an 'inpage' `<toujou-consent-widget>` to any page by choosing it on the Backend:
- Create new content element > Widgets > Cookie Consent Configuration Element

Example:
```html
<toujou-consent-widget class="consent-widget">

    <div class="consent-widget__header" slot="consentWidgetHeader">
        <h4 class="consent-widget__title">{data.header}</h4>
    </div>

    <div class="consent-widget__bottom">
        <div class="consent-widget__consent-elements">
            <toujou-consent class="consent"
                            consentType="tracking"
                            consentLifetime="{themeData.trackingconsent_lifetime}"
                            listenTo="change"
                            listenOn="#trackingInput"
                            snackbarMessage="{trackingSnackbarMessage}"
                            [prechecked="1"]>
                <label class="consent__label" for="trackingInput">
                    <input class="consent__checkbox" id="trackingInput" type="checkbox">
                    <span class="consent__span">{anonymousTrackingLabel} <span class="consent__duration">({trackingConsentDuration})</span></span>
                </label>
            </toujou-consent>
            <toujou-consent class="consent"
                            consenTtype="video"
                            consentLifetime="{themeData.trackingconsent_externals_lifetime}"
                            listenTo="change"
                            listenOn="#videoInput"
                            snackbarMessage="{videoSnackbarMessage}"
                            [prechecked="1"]>
                <label class="consent__label" for="videoInput">
                    <input class="consent__checkbox" id="videoInput" type="checkbox">
                    <span class="consent__span">{externalVideoLabel} <span class="consent__duration">( {externalsCookieDurationText} )</span></span>
                </label>
            </toujou-consent>
        </div>
    </div>

    <span class="consent__warning" slot="consentWarning"><i class="fa fa-warning"></i>{data.consent_config_warningmessage}</span>

</toujou-consent-widget>
```



## `<toujou-consent-widget>` attributes
The 'consent-box' version of the element takes 2 attributes:

| Attribute | Description |
|-----------|-------------|
| listenTo | Define to which kind of events the elements listens to. It must be a string and a valid event type |
| listenOn | Set on which child element to listen for the events. It must be a string and a valid CSS selector |



## `<toujou-consent-widget>` structure
The `<toujou-consent-widget>` is divided in 3 parts: header, bottom and button / warning.
Most of these elements are not required and can easily be adapted to our needs.

One thing that is very important to pay attention to are the `slot` attributes.
- header: needs to have the `slot="consentWidgetHeader"` attribute
- warning message: needs to have the `slot="consentWarning"` attribute
- button: needs to have the `slot="consentCloseButton"` attribute

All other elements, in this case the `.consent-widget__bottom` (and subsequently its children), will be treated as the 'main' content.
Here we expect to have the `<toujou-consent>` elements

As you can see in the examples not all elements work in both element types.
- button: is expected on the 'consent-box' element. It dismisses the 'consent-box'
- warning message: is expected on the 'inpage' element. It shows a warning message if there is still no consent data on the session or local storages



## `<toujou-consent-widget>` styles
Because most of these elements are placed on the Light DOM we can style them with normal css.
Only a few properties need to be set with CSS Custom Properties:

| Property | Description | Default |
|----------|-------------|---------|
| --toujou-consent-widget-display | Set `display` of the element | block |
