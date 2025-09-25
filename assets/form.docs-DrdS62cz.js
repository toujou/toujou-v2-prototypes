import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as i}from"./index-C5208tH8.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"toujou-form",children:"<toujou-form>"}),`
`,e.jsxs(n.p,{children:["The toujou form element (with the class ",e.jsx(n.code,{children:"toujou-form"}),') render form and form elements on the page. It can be created in a couple different ways, but most probably it will be created using the "Forms" module on the BE and then placed on a page using the "Mail Form" plugin.']}),`
`,e.jsx(n.h2,{id:"markup-example",children:"Markup example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<toujou-input-group class="input-group input-group--text input-group--required">
    <label for="text-1" class="input-label">Nice label</label>
    <span class="input-description">This is a description</span>
    <input placeholder="This is a placeholder"
           required="required"
           data-pristine-required-message-de="The given subject was empty."
           class="input input--text"
           id="text-1"
           type="text" name="text-1"
           value="">
    <span class="pristine-error form__error">This is an error message!</span>
</toujou-input-group>
`})}),`
`,e.jsx(n.p,{children:`| ⚠️ This is an example of a simple text input markup. Please refer to the stories / code to see the markup for the other input types |
|-------------------------------------------------------|`}),`
`,e.jsx(n.h2,{id:"structure",children:"Structure"}),`
`,e.jsx(n.p,{children:"Even though the input types differ slightly on their markup, the basics are:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["toujou-input-group",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"label"}),`
`,e.jsx(n.li,{children:"description"}),`
`,e.jsx(n.li,{children:"input"}),`
`,e.jsx(n.li,{children:"error message"}),`
`]}),`
`]}),`
`]})]})}function l(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{l as M};
