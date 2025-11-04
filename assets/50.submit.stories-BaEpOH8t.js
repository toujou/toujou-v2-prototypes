import{M as s}from"./form.docs-DPoIkIy-.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-DeVac3uJ.js";import"./iframe-DpvgdX74.js";import"./preload-helper-C1FmrZbK.js";const l={title:"COMPONENTS/Forms",parameters:{docs:{page:s}},argTypes:{}},n=()=>`
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

            <toujou-input-group class="input-group input-group--required">
                <label for="testform-1000091-text-1" class="input-label">Nice label</label>
                <span class="input-description">This is a description</span>
                <input placeholder="This is a placeholder"
                       required="required"
                       data-pristine-required-message-de="The given subject was empty."
                       class="input input--text"
                       id="testform-1000091-text-1"
                       type="text" name="tx_form_formframework[testform-1000091][text-1]"
                       value="">
                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>

            <toujou-input-group class="input-group" input-group-type="submit">
                <button is="toujou-button" class="button" button-variant="primary" type="submit" name="tx_form_formframework[selectWithChips-1000064][__currentPage]" value="1">Submit</button>
            </toujou-input-group>

        </form>
    `,t=n.bind({});var r,e,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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

            <toujou-input-group class="input-group input-group--required">
                <label for="testform-1000091-text-1" class="input-label">Nice label</label>
                <span class="input-description">This is a description</span>
                <input placeholder="This is a placeholder"
                       required="required"
                       data-pristine-required-message-de="The given subject was empty."
                       class="input input--text"
                       id="testform-1000091-text-1"
                       type="text" name="tx_form_formframework[testform-1000091][text-1]"
                       value="">
                <span class="pristine-error form__error">This is an error message!</span>
            </toujou-input-group>

            <toujou-input-group class="input-group" input-group-type="submit">
                <button is="toujou-button" class="button" button-variant="primary" type="submit" name="tx_form_formframework[selectWithChips-1000064][__currentPage]" value="1">Submit</button>
            </toujou-input-group>

        </form>
    \`;
}`,...(o=(e=t.parameters)==null?void 0:e.docs)==null?void 0:o.source}}};const c=["Submit"];export{t as Submit,c as __namedExportsOrder,l as default};
