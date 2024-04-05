import{T as i}from"./badgeCustomConfig-e7a687d5.js";import{j as e}from"./jsx-runtime-87b2c1dd.js";import{u as t}from"./index-af127bdc.js";import"./index-afb52020.js";import"./_commonjsHelpers-725317a4.js";function c(a){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"toujou-breadcrumb",children:"<toujou-breadcrumb>"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"<toujou-breadcrumb>"})," is a custom element that renders a breadcrumb navigation."]}),`
`,e.jsx(r.h2,{id:"toujou-breadcrumb-modes",children:"toujou breadcrumb modes"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"<toujou-breadcrumb>"}),' has two render modes: a "normal" and a "mobile" mode.']}),`
`,e.jsx(r.p,{children:"The normal mode is displayed whenever there is enough place on the page to show all breadcrumb links side by side."}),`
`,e.jsx(r.p,{children:`If the links take more space then the page's width, then it will automatically change into "mobile" mode, where it show the links in a dropdown menu.`}),`
`,e.jsx(r.h2,{id:"markup-example",children:"Markup example"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<toujou-breadcrumb role="navigation" aria-label="Breadcrumb" class="breadcrumb">
    <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--open">
        <toujou-icon class="icon breadcrumb__toggle-icon" icon-name="arrow-left"></toujou-icon>
    </button>

    <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--close">
        <toujou-icon class="icon breadcrumb__toggle-icon" icon-name="close"></toujou-icon>
    </button>

    <ol class="breadcrumb__list" slot="list">
        <li class="breadcrumb__item">
            <a href="#" class="breadcrumb__link">Home</a>
        </li>
        <li class="breadcrumb__item">
            <a href="#" class="breadcrumb__link">Item One</a>
        </li>
        <li class="breadcrumb__item">
            <a href="#" class="breadcrumb__link">Item Two</a>
        </li>
        <li class="breadcrumb__item">
            <a href="#" class="breadcrumb__link">Item Three</a>
        </li>
        <li class="breadcrumb__item">
            <a href="#" class="breadcrumb__link">Item Four</a>
        </li>
        <li class="breadcrumb__item">
            <a href="#" class="breadcrumb__link">Item Five</a>
        </li>
        <li class="breadcrumb__item">
            <a href="#" class="breadcrumb__link" aria-current="page">Item Six</a>
        </li>
    </ol>
</toujou-breadcrumb>
`})}),`
`,e.jsx(r.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["The ",e.jsx(r.code,{children:"<toujou-breadcrumb>"})," element needs the ",e.jsx(r.code,{children:'role="navigation"'})," and ",e.jsx(r.code,{children:'aria-label="Breadcrumb"'})," attributes"]}),`
`,e.jsxs(r.li,{children:["The item for the current page needs the ",e.jsx(r.code,{children:'aria-current="page"'})," attribute"]}),`
`]})]})}function b(a={}){const{wrapper:r}={...t(),...a.components};return r?e.jsx(r,{...a,children:e.jsx(c,{...a})}):c(a)}const j={title:"COMPONENTS/Breadcrumb",parameters:{badges:[i.DONE],docs:{page:b}},tags:["autodocs"]},u=()=>`
        <toujou-breadcrumb role="navigation" aria-label="Breadcrumb" class="breadcrumb">
            <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--open">
                <toujou-icon class="icon breadcrumb__toggle-icon" icon-name="arrow-left"></toujou-icon>
            </button>

            <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--close">
                <toujou-icon class="icon breadcrumb__toggle-icon" icon-name="close"></toujou-icon>
            </button>

            <ol class="breadcrumb__list" slot="list">
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link">Home</a>
                </li>
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link">Item One</a>
                </li>
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link">Item Two</a>
                </li>
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link" >Item Three</a>
                </li>
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link">Item Four</a>
                </li>
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link">Item Five</a>
                </li>
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link" aria-current="page">Item Six</a>
                </li>
            </ol>
        </toujou-breadcrumb>
    `,n=u.bind({});var l,o,s;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return \`
        <toujou-breadcrumb role="navigation" aria-label="Breadcrumb" class="breadcrumb">
            <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--open">
                <toujou-icon class="icon breadcrumb__toggle-icon" icon-name="arrow-left"></toujou-icon>
            </button>

            <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--close">
                <toujou-icon class="icon breadcrumb__toggle-icon" icon-name="close"></toujou-icon>
            </button>

            <ol class="breadcrumb__list" slot="list">
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link">Home</a>
                </li>
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link">Item One</a>
                </li>
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link">Item Two</a>
                </li>
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link" >Item Three</a>
                </li>
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link">Item Four</a>
                </li>
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link">Item Five</a>
                </li>
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link" aria-current="page">Item Six</a>
                </li>
            </ol>
        </toujou-breadcrumb>
    \`;
}`,...(s=(o=n.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const p=["Breadcrumb"];export{n as Breadcrumb,p as __namedExportsOrder,j as default};
