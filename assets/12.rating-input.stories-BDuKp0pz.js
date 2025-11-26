import{M as i}from"./form.docs-BuvJchn_.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-kYMsDC90.js";import"./iframe-DILOFI4D.js";import"./preload-helper-C1FmrZbK.js";const u={title:"COMPONENTS/Forms",parameters:{docs:{page:i}}},n=()=>`
        <style>
            body {
                background-color: var(--color-bg);
            }
        </style>
        <form
            enctype="multipart/form-data"
            method="post"
            class="form"
            id="testform-1000091"
            action="#"
            novalidate="true">

            <toujou-input-group class="input-group input-group--text input-group--required">
                <label for="testform-1000091-text-1" class="input-label">Nice label</label>
                <span class="input-description">This is a description</span>
                <input placeholder="This is a placeholder"
                       required="required"
                       data-pristine-required-message-de="The given subject was empty."
                       class="input input--text"
                       id="testform-1000091-text-1"
                       type="text" name="tx_form_formframework[testform-1000091][text-1]"
                       value=""
                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>
            
            <toujou-input-group class="input-group input-group--radio radio-group">
                <label class="radio-group__label" for="testform-1000091-radiobutton-1">Radio button</label>
                <span class="input-description input-description--after-group">This is a description</span>
                <div class="radio-group__option">
                    <label class="radio-group__option-label">
                        <input data-pristine-required-message-de="The given subject was empty."
                               class="radio"
                               type="radio"
                               name="tx_form_formframework[testform-1000091][radiobutton-1]"
                               value="aaaaa"
                               checked
                       >
                        aaaaa
                    </label>
                </div>

                <div class="radio-group__option">
                    <label class="radio-group__option-label">
                        <input data-pristine-required-message-de="The given subject was empty."
                            class="radio"
                            type="radio"
                            name="tx_form_formframework[testform-1000091][radiobutton-1]"
                            value="bbbb"
                        >
                        bbbb
                    </label>
                </div>

                <div class="radio-group__option">
                    <label class="radio-group__option-label">
                        <input data-pristine-required-message-de="The given subject was empty."
                            class="radio"
                            type="radio"
                            name="tx_form_formframework[testform-1000091][radiobutton-1]"
                            value="ccccc"
                        >
                        ccccc
                    </label>
                </div>

                <div class="radio-group__option">
                    <label class="radio-group__option-label">
                        <input data-pristine-required-message-de="The given subject was empty."
                            class="radio"
                            type="radio"
                            name="tx_form_formframework[testform-1000091][radiobutton-1]"
                            value="ddddd"
                        >
                        ddddd
                    </label>
                </div>

                <div class="radio-group__option">
                    <label class="radio-group__option-label">
                        <input data-pristine-required-message-de="The given subject was empty."
                            class="radio"
                            type="radio"
                            name="tx_form_formframework[testform-1000091][radiobutton-1]"
                            value="eeeee"
                        >
                        eeeee
                    </label>
                </div>

                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>

            <toujou-input-group class="input-group">
                <label class="input-label" for="test-review-form-3971-rating-1">Rating</label>
            
                <toujou-rating-radios id="test-review-form-3971-rating-1" name="test-review-form-3971-rating-1" show-numeric-rating="">
                    <fieldset class="rating-radio__wrapper" aria-label="Your rating">

                        <input data-element-type="Rating" aria-label="1 Stern" class=" rating-radio" id="star1-rating-1" type="radio" name="tx_form_formframework[test-review-form-3971][rating-1]" value="1">
                        <label class="rating__star-label" for="star1-rating-1" title="1 Stern" aria-label="1 Stern"></label>

                        <input data-element-type="Rating" aria-label="2 Sterne" class=" rating-radio" id="star2-rating-1" type="radio" name="tx_form_formframework[test-review-form-3971][rating-1]" value="2">
                        <label class="rating__star-label" for="star2-rating-1" title="2 Sterne" aria-label="2 Sterne"></label>

                        <input data-element-type="Rating" aria-label="3 Sterne" class=" rating-radio" id="star3-rating-1" type="radio" name="tx_form_formframework[test-review-form-3971][rating-1]" value="3">
                        <label class="rating__star-label" for="star3-rating-1" title="3 Sterne" aria-label="3 Sterne"></label>

                        <input data-element-type="Rating" aria-label="4 Sterne" class=" rating-radio" id="star4-rating-1" type="radio" name="tx_form_formframework[test-review-form-3971][rating-1]" value="4">
                        <label class="rating__star-label" for="star4-rating-1" title="4 Sterne" aria-label="4 Sterne"></label>

                        <input data-element-type="Rating" aria-label="5 Sterne" class=" rating-radio" id="star5-rating-1" type="radio" name="tx_form_formframework[test-review-form-3971][rating-1]" value="5">
                        <label class="rating__star-label" for="star5-rating-1" title="5 Sterne" aria-label="5 Sterne"></label>
                    </fieldset>
                </toujou-rating-radios>
            </toujou-input-group>

        </form>
    `,a=n.bind({});var e,r,t;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  return \`
        <style>
            body {
                background-color: var(--color-bg);
            }
        </style>
        <form
            enctype="multipart/form-data"
            method="post"
            class="form"
            id="testform-1000091"
            action="#"
            novalidate="true">

            <toujou-input-group class="input-group input-group--text input-group--required">
                <label for="testform-1000091-text-1" class="input-label">Nice label</label>
                <span class="input-description">This is a description</span>
                <input placeholder="This is a placeholder"
                       required="required"
                       data-pristine-required-message-de="The given subject was empty."
                       class="input input--text"
                       id="testform-1000091-text-1"
                       type="text" name="tx_form_formframework[testform-1000091][text-1]"
                       value=""
                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>
            
            <toujou-input-group class="input-group input-group--radio radio-group">
                <label class="radio-group__label" for="testform-1000091-radiobutton-1">Radio button</label>
                <span class="input-description input-description--after-group">This is a description</span>
                <div class="radio-group__option">
                    <label class="radio-group__option-label">
                        <input data-pristine-required-message-de="The given subject was empty."
                               class="radio"
                               type="radio"
                               name="tx_form_formframework[testform-1000091][radiobutton-1]"
                               value="aaaaa"
                               checked
                       >
                        aaaaa
                    </label>
                </div>

                <div class="radio-group__option">
                    <label class="radio-group__option-label">
                        <input data-pristine-required-message-de="The given subject was empty."
                            class="radio"
                            type="radio"
                            name="tx_form_formframework[testform-1000091][radiobutton-1]"
                            value="bbbb"
                        >
                        bbbb
                    </label>
                </div>

                <div class="radio-group__option">
                    <label class="radio-group__option-label">
                        <input data-pristine-required-message-de="The given subject was empty."
                            class="radio"
                            type="radio"
                            name="tx_form_formframework[testform-1000091][radiobutton-1]"
                            value="ccccc"
                        >
                        ccccc
                    </label>
                </div>

                <div class="radio-group__option">
                    <label class="radio-group__option-label">
                        <input data-pristine-required-message-de="The given subject was empty."
                            class="radio"
                            type="radio"
                            name="tx_form_formframework[testform-1000091][radiobutton-1]"
                            value="ddddd"
                        >
                        ddddd
                    </label>
                </div>

                <div class="radio-group__option">
                    <label class="radio-group__option-label">
                        <input data-pristine-required-message-de="The given subject was empty."
                            class="radio"
                            type="radio"
                            name="tx_form_formframework[testform-1000091][radiobutton-1]"
                            value="eeeee"
                        >
                        eeeee
                    </label>
                </div>

                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>

            <toujou-input-group class="input-group">
                <label class="input-label" for="test-review-form-3971-rating-1">Rating</label>
            
                <toujou-rating-radios id="test-review-form-3971-rating-1" name="test-review-form-3971-rating-1" show-numeric-rating="">
                    <fieldset class="rating-radio__wrapper" aria-label="Your rating">

                        <input data-element-type="Rating" aria-label="1 Stern" class=" rating-radio" id="star1-rating-1" type="radio" name="tx_form_formframework[test-review-form-3971][rating-1]" value="1">
                        <label class="rating__star-label" for="star1-rating-1" title="1 Stern" aria-label="1 Stern"></label>

                        <input data-element-type="Rating" aria-label="2 Sterne" class=" rating-radio" id="star2-rating-1" type="radio" name="tx_form_formframework[test-review-form-3971][rating-1]" value="2">
                        <label class="rating__star-label" for="star2-rating-1" title="2 Sterne" aria-label="2 Sterne"></label>

                        <input data-element-type="Rating" aria-label="3 Sterne" class=" rating-radio" id="star3-rating-1" type="radio" name="tx_form_formframework[test-review-form-3971][rating-1]" value="3">
                        <label class="rating__star-label" for="star3-rating-1" title="3 Sterne" aria-label="3 Sterne"></label>

                        <input data-element-type="Rating" aria-label="4 Sterne" class=" rating-radio" id="star4-rating-1" type="radio" name="tx_form_formframework[test-review-form-3971][rating-1]" value="4">
                        <label class="rating__star-label" for="star4-rating-1" title="4 Sterne" aria-label="4 Sterne"></label>

                        <input data-element-type="Rating" aria-label="5 Sterne" class=" rating-radio" id="star5-rating-1" type="radio" name="tx_form_formframework[test-review-form-3971][rating-1]" value="5">
                        <label class="rating__star-label" for="star5-rating-1" title="5 Sterne" aria-label="5 Sterne"></label>
                    </fieldset>
                </toujou-rating-radios>
            </toujou-input-group>

        </form>
    \`;
}`,...(t=(r=a.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const m=["RatingRadios"];export{a as RatingRadios,m as __namedExportsOrder,u as default};
