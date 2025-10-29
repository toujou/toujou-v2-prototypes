import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as i}from"./index-ClaxMbVG.js";import"./iframe-CECX_RdO.js";import"./preload-helper-C1FmrZbK.js";function o(a){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...a.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"search",children:"Search"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"<toujou-search>"}),` element delivers a single input field with a "reset" button as well as a mangifying
glass icon with which to power search interactions.`]}),`
`,n.jsx(e.h2,{id:"markup-example",children:"Markup example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<toujou-search class="search">
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
`})})]})}function u(a={}){const{wrapper:e}={...i(),...a.components};return e?n.jsx(e,{...a,children:n.jsx(o,{...a})}):o(a)}const d={title:"COMPONENTS/Search",parameters:{docs:{page:u}}},l=()=>`
        <main>
            <form class="form" action="#" role="search">
              <toujou-search class="search">
                <label for="search-input" class="search__label" is-visually-hidden>Search</label>
                <input
                    id="search-input"
                    name="search-input"
                    class="input input--search"
                    type="search"
                    placeholder="Search..."
                    aria-label="Search"
                >
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
        </main>
    `,t=l.bind({});var s,r,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return \`
        <main>
            <form class="form" action="#" role="search">
              <toujou-search class="search">
                <label for="search-input" class="search__label" is-visually-hidden>Search</label>
                <input
                    id="search-input"
                    name="search-input"
                    class="input input--search"
                    type="search"
                    placeholder="Search..."
                    aria-label="Search"
                >
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
        </main>
    \`;
}`,...(c=(r=t.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const j=["Search"];export{t as Search,j as __namedExportsOrder,d as default};
