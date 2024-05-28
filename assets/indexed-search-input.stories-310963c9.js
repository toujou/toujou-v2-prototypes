import{T as o}from"./badgeCustomConfig-e7a687d5.js";import{M as r}from"./indexed-search.docs-f0eb68d6.js";import"./jsx-runtime-2d96f316.js";import"./index-b6937ee2.js";import"./_commonjsHelpers-725317a4.js";import"./index-9d38a655.js";const m={title:"COMPONENTS/Indexed Search",parameters:{badges:[o.DONE],docs:{page:r}},tags:["autodocs"]},s=()=>`
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
    `,e=s.bind({});var n,t,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const l=["IndexedSearchInput"];export{e as IndexedSearchInput,l as __namedExportsOrder,m as default};
