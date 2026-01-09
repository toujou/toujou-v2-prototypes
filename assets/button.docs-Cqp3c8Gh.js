import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as i}from"./index-wUAnol_h.js";function e(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(n.h1,{id:"toujou-button",children:"<toujou-button>"}),`
`,t.jsxs(n.p,{children:["The ",t.jsx(n.code,{children:"<toujou-icon>"})," is a simple custom element that allows us to render an icon on the page."]}),`
`,t.jsxs(n.p,{children:["| We also support the old (deprecated) button classes, like ",t.jsx(n.code,{children:"button--shadow"}),'. Refer to the "Button Old" story']}),`
`,t.jsx(n.h2,{id:"example",children:"Example"}),`
`,t.jsx("button",{is:"toujou-button",class:"button","button-variant":"primary","button-type":"default","button-size":"normal",children:"Hello world"}),`
`,t.jsx(n.h2,{id:"markup-example",children:"Markup example"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<button is="toujou-button" class="button" button-variant="primary" button-type="default" button-size="normal">Hello world</button>
`})}),`
`,t.jsx(n.h2,{id:"attributes",children:"Attributes"}),`
`,t.jsx(n.p,{children:"There are some attributes that allow us to customize the button"}),`
`,t.jsxs(n.h3,{id:"button-variant-required",children:["button variant ",t.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,t.jsxs(n.p,{children:["By setting the ",t.jsx(n.code,{children:"button-variant"})," attribute we can choose between primary, secondary or font color buttons"]}),`
`,t.jsxs(n.p,{children:[`| Name | Attribute | Example |
|---|---|:---:|
| primary | `,t.jsx(n.code,{children:'button-variant="primary"'}),"  | ",t.jsx(n.code,{children:'<button is="toujou-button" class="button" button-variant="primary" button-type="default" button-size="normal">Hello world</button>'}),` |
| secondary | `,t.jsx(n.code,{children:'button-variant="secondary"'}),"  | ",t.jsx(n.code,{children:'<button is="toujou-button" class="button" button-variant="secondary" button-type="default" button-size="normal">Hello world</button>'}),` |
| font | `,t.jsx(n.code,{children:'button-variant="font"'}),"  | ",t.jsx(n.code,{children:'<button is="toujou-button" class="button" button-variant="font" button-type="default" button-size="normal">Hello world</button>'})," |"]}),`
`,t.jsxs(n.h3,{id:"button-type-required",children:["button type ",t.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,t.jsxs(n.p,{children:["By setting the ",t.jsx(n.code,{children:"button-type"})," attribute we can choose between different kinds of designs for the buttons"]}),`
`,t.jsxs(n.p,{children:[`| Name | Attribute | Example |
|---|---|:---:|
| default | `,t.jsx(n.code,{children:'button-type="primary"'}),"  | ",t.jsx(n.code,{children:'<button is="toujou-button" class="button" button-variant="primary" button-type="default" button-size="normal">Hello world</button>'}),` |
| border | `,t.jsx(n.code,{children:'button-type="secondary"'}),"  | ",t.jsx(n.code,{children:'<button is="toujou-button" class="button" button-variant="primary" button-type="border" button-size="normal">Hello world</button>'}),` |
| normal | `,t.jsx(n.code,{children:'button-type="normal"'}),"  | ",t.jsx(n.code,{children:'<button is="toujou-button" class="button" button-variant="font" primary-type="ghost" button-size="normal">Hello world</button>'}),` |
| large | `,t.jsx(n.code,{children:'button-type="large"'}),"  | ",t.jsx(n.code,{children:'<button is="toujou-button" class="button" button-variant="font" primary-type="ghost" button-size="large">Hello world</button>'})," |"]}),`
`,t.jsxs(n.h3,{id:"button-size-required",children:["button size ",t.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,t.jsxs(n.p,{children:["By setting the ",t.jsx(n.code,{children:"button-size"})," attribute we can choose between different text / icon sizes"]}),`
`,t.jsxs(n.p,{children:[`| Name | Attribute | Example |
|---|---|:---:|
| tiny | `,t.jsx(n.code,{children:'button-size="tiny"'}),"  | ",t.jsx(n.code,{children:'<button is="toujou-button" class="button" button-variant="primary" button-type="default" button-size="tiny">Hello world</button>'}),` |
| small | `,t.jsx(n.code,{children:'button-size="small"'}),"  | ",t.jsx(n.code,{children:'<button is="toujou-button" class="button" button-variant="primary" button-type="border" button-size="small">Hello world</button>'}),` |
| ghost | `,t.jsx(n.code,{children:'button-size="font"'}),"  | ",t.jsx(n.code,{children:'<button is="toujou-button" class="button" button-variant="font" primary-type="ghost" button-size="normal">Hello world</button>'})," |"]}),`
`,t.jsx(n.h3,{id:"button-icon-position",children:"button icon position"}),`
`,t.jsxs(n.p,{children:["By setting the ",t.jsx(n.code,{children:"icon position"})," attribute we can choose if the icon is show on the right or left side of the button's text. It must be used in combination with a ",t.jsx(n.code,{children:"<toujou-icon>"})," element."]}),`
`,t.jsx(n.p,{children:"Example:"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<button is="toujou-button" class="button" button-variant="primary" button-type="default" button-size="normal" button-icon-position="left">
    <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon> Hello world
</button>
`})}),`
`,t.jsx(n.p,{children:`| Attribute | Possible values |
|---|-----------------|
| button-icon-position | "left", "right" |`}),`
`,t.jsx(n.h3,{id:"is-expanded",children:"is-expanded"}),`
`,t.jsxs(n.p,{children:["By setting the ",t.jsx(n.code,{children:"button-type"})," attribute we can make the button fullwidth"]}),`
`,t.jsxs(n.p,{children:[`| Attribute | Example |
|--|:---:|
| `,t.jsx(n.code,{children:"is-expanded"}),"  | ",t.jsx(n.code,{children:'<button is="toujou-button" class="button" button-variant="primary" button-type="default" button-size="normal" is-expanded>Hello world</button>'})," |"]}),`
`,t.jsx(n.h3,{id:"disabled",children:"disabled"}),`
`,t.jsxs(n.p,{children:["By setting the ",t.jsx(n.code,{children:"disabled"})," attribute we can disable the button"]}),`
`,t.jsxs(n.p,{children:[`| Attribute | Example |
|--|:---:|
| `,t.jsx(n.code,{children:"disabled"}),"  | ",t.jsx(n.code,{children:'<button is="toujou-button" class="button" button-variant="primary" button-type="default" button-size="normal" disabled>Hello world</button>'})," |"]})]})}function u(o={}){const{wrapper:n}={...i(),...o.components};return n?t.jsx(n,{...o,children:t.jsx(e,{...o})}):e(o)}export{u as M};
