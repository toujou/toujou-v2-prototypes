import{T as u}from"./badgeCustomConfig-e7a687d5.js";import{j as a}from"./jsx-runtime-ccada58e.js";import{u as i}from"./index-4fb8b842.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";function o(e){const t=Object.assign({h1:"h1"},i(),e.components);return a.jsx(t.h1,{id:"indexed-search",children:"<indexed-search>"})}function d(e={}){const{wrapper:t}=Object.assign({},i(),e.components);return t?a.jsx(t,Object.assign({},e,{children:a.jsx(o,e)})):o(e)}const b={title:"COMPONENTS/Indexed Search",parameters:{badges:[u.DONE],docs:{page:d}},tags:["autodocs"]},h=()=>`
        <form
            method="post"
            id="tx_indexedsearch_panel"
            action="#"
            class="indexedsearch-form"
            action="#"
        >
            <toujou-search class="search">
                <input
                    class="input input--search indexedsearch-form__input"
                    name="tx_indexedsearch_pi2[search][sword]"
                    type="search"
                    placeholder="Search..."
                >
                <button
                    is="toujou-button"
                    class="button button--search indexedsearch-form__button"
                    button-variant="primary"
                    button-type="default"
                    button-size="normal"
                    aria-label="Search"
                    name="tx_indexedsearch_pi2[search][submitButton]]"
                >
                    <span class="search__button-text">Search</span>
                    <toujou-icon class="icon" icon-name="search" icon-size="l" icon-color="white"></toujou-icon>
                </button>
            </toujou-search>
        </form>
    `,n=h.bind({});n.args={alertVariant:"primary"};var s,r,c;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return \`
        <form
            method="post"
            id="tx_indexedsearch_panel"
            action="#"
            class="indexedsearch-form"
            action="#"
        >
            <toujou-search class="search">
                <input
                    class="input input--search indexedsearch-form__input"
                    name="tx_indexedsearch_pi2[search][sword]"
                    type="search"
                    placeholder="Search..."
                >
                <button
                    is="toujou-button"
                    class="button button--search indexedsearch-form__button"
                    button-variant="primary"
                    button-type="default"
                    button-size="normal"
                    aria-label="Search"
                    name="tx_indexedsearch_pi2[search][submitButton]]"
                >
                    <span class="search__button-text">Search</span>
                    <toujou-icon class="icon" icon-name="search" icon-size="l" icon-color="white"></toujou-icon>
                </button>
            </toujou-search>
        </form>
    \`;
}`,...(c=(r=n.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const f=["IndexedSearchInput"];export{n as IndexedSearchInput,f as __namedExportsOrder,b as default};
//# sourceMappingURL=indexed-search-input.stories-37e8168e.js.map
