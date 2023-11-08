import{T as s}from"./badgeCustomConfig-e7a687d5.js";import{M as n}from"./form.docs-cb9e85c7.js";import"./jsx-runtime-ccada58e.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-4fb8b842.js";const d={title:"COMPONENTS/Forms",parameters:{badges:[s.DONE],docs:{page:n}},argTypes:{},tags:["autodocs"]},a=()=>`
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
    `,t=a.bind({});var r,e,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=50.submit.stories-9fb51d84.js.map
