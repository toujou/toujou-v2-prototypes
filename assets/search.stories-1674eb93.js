import{T as i}from"./badgeCustomConfig-e7a687d5.js";import{j as n}from"./jsx-runtime-87b2c1dd.js";import{u}from"./index-af127bdc.js";import"./index-afb52020.js";import"./_commonjsHelpers-725317a4.js";function a(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...u(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t.h1,{id:"search",children:"Search"}),`
`,n.jsxs(t.p,{children:["The ",n.jsx(t.code,{children:"<toujou-search>"}),` element delivers a single input field with a "reset" button as well as a mangifying
glass icon with which to power search interactions.`]}),`
`,n.jsx(t.h2,{id:"markup-example",children:"Markup example"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`<toujou-search class="search">
    <input class="input input--search" type="search" placeholder="Search...">
    <button
        is="toujou-button"
        class="button button--search"
        button-variant="primary"
        button-type="default"
        button-size="normal"
        aria-label="Search"
        >
        <span class="search__button-text">Search</span>
        <toujou-icon class="icon" icon-name="search" icon-size="l" icon-color="white"></toujou-icon>
    </button>
</toujou-search>
`})})]})}function h(e={}){const{wrapper:t}={...u(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(a,{...e})}):a(e)}const x={title:"COMPONENTS/Search",parameters:{badges:[i.DONE],docs:{page:h}},tags:["autodocs"]},l=()=>`
        <form class="form" action="#">
          <toujou-search class="search">
            <input class="input input--search" type="search" placeholder="Search...">
            <button
                is="toujou-button"
                class="button button--search"
                button-variant="primary"
                button-type="default"
                button-size="normal"
                aria-label="Search"
                >
                <span class="search__button-text">Search</span>
                <toujou-icon class="icon" icon-name="search" icon-size="l" icon-color="white"></toujou-icon>
            </button>
          </toujou-search>
        </form>
    `,o=l.bind({});var s,r,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return \`
        <form class="form" action="#">
          <toujou-search class="search">
            <input class="input input--search" type="search" placeholder="Search...">
            <button
                is="toujou-button"
                class="button button--search"
                button-variant="primary"
                button-type="default"
                button-size="normal"
                aria-label="Search"
                >
                <span class="search__button-text">Search</span>
                <toujou-icon class="icon" icon-name="search" icon-size="l" icon-color="white"></toujou-icon>
            </button>
          </toujou-search>
        </form>
    \`;
}`,...(c=(r=o.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const f=["Search"];export{o as Search,f as __namedExportsOrder,x as default};
