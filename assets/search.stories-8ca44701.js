import{T as i}from"./badgeCustomConfig-e7a687d5.js";import{j as t}from"./jsx-runtime-ac05983f.js";import{u}from"./index-a9a8c754.js";import"./index-e0ddb630.js";import"./_commonjsHelpers-87174ba5.js";function s(e){const n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre"},u(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(n.h1,{id:"search",children:"Search"}),`
`,t.jsxs(n.p,{children:["The ",t.jsx(n.code,{children:"<toujou-search>"}),` element delivers a single input field with a "reset" button as well as a mangifying
glass icon with which to power search interactions.`]}),`
`,t.jsx(n.h2,{id:"markup-example",children:"Markup example"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<toujou-search class="search">
    <input class="input input--search" type="search" placeholder="Search...">
    <button is="toujou-button" class="button button--search" button-variant="primary" button-type="default" button-size="normal">
        <toujou-icon class="icon" icon-name="search" icon-size="l" icon-color="white"></toujou-icon>
    </button>
</toujou-search>
`})})]})}function h(e={}){const{wrapper:n}=Object.assign({},u(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(s,e)})):s(e)}const x={title:"COMPONENTS/Search",parameters:{badges:[i.DONE],docs:{page:h}}},l=()=>`
        <form class="form" action="#">
          <toujou-search class="search">
            <input class="input input--search" type="search" placeholder="Search...">
            <button is="toujou-button" class="button button--search" button-variant="primary" button-type="default" button-size="normal">
                <span class="search__button-text">Suchen</span>
                <toujou-icon class="icon" icon-name="search" icon-size="l" icon-color="white"></toujou-icon>
            </button>
          </toujou-search>
        </form>
    `,o=l.bind({});var a,c,r;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return \`
        <form class="form" action="#">
          <toujou-search class="search">
            <input class="input input--search" type="search" placeholder="Search...">
            <button is="toujou-button" class="button button--search" button-variant="primary" button-type="default" button-size="normal">
                <span class="search__button-text">Suchen</span>
                <toujou-icon class="icon" icon-name="search" icon-size="l" icon-color="white"></toujou-icon>
            </button>
          </toujou-search>
        </form>
    \`;
}`,...(r=(c=o.parameters)==null?void 0:c.docs)==null?void 0:r.source}}};const f=["Search"];export{o as Search,f as __namedExportsOrder,x as default};
//# sourceMappingURL=search.stories-8ca44701.js.map
