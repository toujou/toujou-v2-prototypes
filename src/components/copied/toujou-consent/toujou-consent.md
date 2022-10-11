# toujou-consent

The `<toujou-consent>` is an independent element created with the aim of displaying / getting the user's consents.

The `<toujou-consent>` element must be placed inside a `<toujou-consent-widget>` or `<toujou-third-party-content>` elements.

The `<toujou-consent>` element doesn't read or save the consent states. It gets the consent state from its parent and then dispatches custom events whenever the state changes, which in turn can be
saved by other elements.



## `<toujou-consent>` children types

At the moment the `<toujou-consent` can have two types of children / events:

- checkbox
- button

We don't need to define the type, the `<toujou-consent>` will set it on it's own.

#### `<toujou-consent>` type: checkbox

Example:
```html
<toujou-consent class="consent"
                consenTtype="video"
                consentLifetime="{trackingconsent_externals_lifetime}"
                listenTo="change"
                listenOn="#videoInput"
                snackbarMessage="{videoSnackbarMessage}"
                {isVideoConsentPrechecked}>
    <label class="consent__label" for="videoInput">
        <input class="consent__checkbox" id="videoInput" type="checkbox">
        <span class="consent__span">{externalVideoLabel} <span class="consent__duration">( {externalsCookieDurationText} )</span></span>
    </label>
</toujou-consent>
```

#### `<toujou-consent>` type: button

Example:
```html
<toujou-consent class="consent"
                consentType="video"
                consentLifetime="{trackingconsent_externals_lifetime}"
                listenTo="click"
                listenOn=".consent__button"
                snackbarMessage="{videoSnackbarMessage}">
    <button class="button" allowcontenttype>{f:translate(key:'LLL:EXT:toujou/Resources/Private/Language/Frontend.xlf:trackingconsent.placeholder.button_all_text')}</button>
</toujou-consent>
```

Note that the button needs an attribute that defines the button's action. In this case `allowcontenttype`.






## `<toujou-consent>` attributes
As you can see in the examples above, the `<toujou-consent>` element accepts several attributes, some of them required.

| Attribute | Description | Required | Type |
|-----------|-------------|----------|------|
| class | As any other html element, you can give any classes to the element | no | String |
| consentType | Defines which consent type to read / set | yes | String |
| consentLifetime | Defines for how long the consent is valid | yes | Number. Number of days |
| listenTo | Define to which type of event the element should react | yes | String. Event type |
| listenOn | Define on which element the listener will be attached | yes | String. Valid css selector |
| snackbarMessage | Set the message that will be displayed on the confirmation snackbar | no | String |
| preChecked | Set if the consent has a prechecked state ( here we use a variable {isVideoConsentPrechecked} ). no attribute defaults to false | no | String | 





## `<toujou-consent>` styles
Most of the element's children are on the Light DOM so we can style them with normal css.
But there are some properties which we can only style via CSS Custom Properties:


| Property | Description | Default |
|----------|-------------|---------|
| --toujou-consent-display | Set `display` of the element | block |
