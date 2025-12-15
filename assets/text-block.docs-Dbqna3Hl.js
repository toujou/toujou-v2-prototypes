import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as n}from"./index-7lKrsJoK.js";function i(o){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"toujou-text-block",children:"<toujou-text-block>"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"<toujou-text-block>"})," is a custom element that renders text and image content (possibly) in different combinations."]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"<toujou-text-block>"})," element is rendered when we use the Textmedia content element"]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx("toujou-text-block",{class:"toujouext-block","text-blocks-column-count":"1",children:e.jsx("toujou-text-block-column",{class:"text-block-column",children:e.jsxs("div",{class:"text-block__content",children:[e.jsx("h1",{children:"Left aligned H1 headline"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})})}),`
`,e.jsx(t.h2,{id:"markup-example",children:"Markup example"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<toujou-text-block class="text-block" text-blocks-column-count="1" text-block-media-position="above">
    <toujou-text-block-column class="text-block-column">
        <figure class="text-block__figure">
            <img src="https://picsum.photos/1200/1200" alt="beautiful image" class="text-block__image text-block__image--golden">
            <figcaption class="text-block__figcaption">This is a figcaption for the image</figcaption>
        </figure>
        <div class="text-block__content">
            <h1>Left aligned H1 headline</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </toujou-text-block-column>
</toujou-text-block>
`})}),`
`,e.jsx(t.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsxs(t.p,{children:["There are several attributes that allow us to customize the ",e.jsx(t.code,{children:"<toujou-text-block>"})," element."]}),`
`,e.jsxs(t.h3,{id:"text-block-column-count-required",children:["text-block-column-count ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"text-block-column-count"}),` attribute allows us to define the number of columns we want to use to display the content (on desktop)
Examples:`]}),`
`,e.jsxs(t.p,{children:[`| Attribute | Possible values | Example                                                                |
|---|:---:|:-----------------------------------------------------------------------|
| `,e.jsx(t.code,{children:"text-block-column-count"})," | 1, 2, 3, 4 | ",e.jsx(t.code,{children:'<toujou-text-block class="text-block" text-blocks-column-count="1">'}),"  |"]}),`
`,e.jsxs(t.h3,{id:"text-block-media-position-required",children:["text-block-media-position ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"text-block-media-position"})," allows us to define where we want to place the media in relation to the text."]}),`
`,e.jsx(t.p,{children:"Examples:"}),`
`,e.jsxs(t.p,{children:[`| Attribute | Possible values | Example |
|---|:---:|:---|
| `,e.jsx(t.code,{children:"text-block-media-position"}),' | "beside-right", "beside-left", "inside-right", "inside-left", "above", "below" | ',e.jsx(t.code,{children:'<toujou-text-block class="text-block" text-block-media-position="beside-right">'}),"  |"]}),`
`,e.jsx(t.h3,{id:"text-block-third-direction",children:"text-block-third-direction"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"text-block-third-direction"})," must be used in combination with the ",e.jsx(t.code,{children:'text-block-column-count="2"'}),". It renders one column 33% (either on the right or or left side) and the other 66% width."]}),`
`,e.jsx(t.p,{children:"Examples:"}),`
`,e.jsxs(t.p,{children:[`| Attribute | Possible values | Example |
|---|:---:|:---|
| `,e.jsx(t.code,{children:'text-block-third-direction="left"'}),' | "left", "right" | ',e.jsx(t.code,{children:'<toujou-text-block class="text-block" text-blocks-column-count="2" text-block-third-direction="left">'}),"  |"]})]})}function s(o={}){const{wrapper:t}={...n(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(i,{...o})}):i(o)}export{s as M};
