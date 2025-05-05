import{T as s}from"./badgeCustomConfig-DUXiHpL4.js";import{M as n}from"./form.docs-Dn0kwJ_D.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-DpH9cx3q.js";import"./index-DO8khQO4.js";import"./_commonjsHelpers-Cpj98o6Y.js";const d={title:"COMPONENTS/Forms",parameters:{badges:[s.DONE],docs:{page:n}},argTypes:{}},u=()=>`
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
    `,t=u.bind({});var r,e,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(o=(e=t.parameters)==null?void 0:e.docs)==null?void 0:o.source}}};const b=["Submit"];export{t as Submit,b as __namedExportsOrder,d as default};
