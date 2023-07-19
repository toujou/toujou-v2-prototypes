import{T as n}from"./badgeCustomConfig-e7a687d5.js";import{M as e}from"./form.docs-97b78f8d.js";import"./jsx-runtime-ac05983f.js";import"./index-e0ddb630.js";import"./_commonjsHelpers-87174ba5.js";import"./index-a9a8c754.js";const f={title:"COMPONENTS/Forms",parameters:{badges:[n.DONE],docs:{page:e}},argTypes:{},tags:["autodocs"]},s=()=>`
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
            novalidate="true"
        >
            
            <toujou-input-group class="input-group input-group--text input-group--required">
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
            
            <div class="form-navigation" role="toolbar">
                <span class="form-navigation__submit">
                    <button is="toujou-button" class="button form-navigation__button" button-variant="primary" type="submit"  name="tx_form_formframework[kontaktformular-8][__currentPage]" value="2">
                        Submit
                    </button>
                </span>
                <span class="form-navigation__previous">
                    <button is="toujou-button" formnovalidate="formnovalidate" class="button form-navigation__button" button-variant="primary" button-type="border" type="submit" name="tx_form_formframework[kontaktformular-8][__currentPage]" value="0">Cancel</button>
                </span>
            </div>	
        </form>
    `,t=s.bind({});var o,r,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
            novalidate="true"
        >
            
            <toujou-input-group class="input-group input-group--text input-group--required">
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
            
            <div class="form-navigation" role="toolbar">
                <span class="form-navigation__submit">
                    <button is="toujou-button" class="button form-navigation__button" button-variant="primary" type="submit"  name="tx_form_formframework[kontaktformular-8][__currentPage]" value="2">
                        Submit
                    </button>
                </span>
                <span class="form-navigation__previous">
                    <button is="toujou-button" formnovalidate="formnovalidate" class="button form-navigation__button" button-variant="primary" button-type="border" type="submit" name="tx_form_formframework[kontaktformular-8][__currentPage]" value="0">Cancel</button>
                </span>
            </div>	
        </form>
    \`;
}`,...(a=(r=t.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const b=["FormNavigation"];export{t as FormNavigation,b as __namedExportsOrder,f as default};
//# sourceMappingURL=80.navigation.stories-46a168ed.js.map