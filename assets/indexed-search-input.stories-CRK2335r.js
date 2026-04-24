const s={title:"COMPONENTS/Indexed Search"},t=()=>`
        <main>
            <form
                method="post"
                id="tx_indexedsearch_panel"
                action="#"
                class="indexedsearch-form"
                role="search"
            >
                <toujou-search class="search">
                    <label for="tx_indexedsearch_pi2[search][sword]" class="search__label" is-visually-hidden>Search</label>
                    <input
                        class="input input--search indexedsearch-form__input"
                        name="tx_indexedsearch_pi2[search][sword]"
                        id="tx_indexedsearch_pi2[search][sword]"
                        type="search"
                        placeholder="Search..."
                        aria-label="Search"
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
        </main>
    `,e=t.bind({});var a,n,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return \`
        <main>
            <form
                method="post"
                id="tx_indexedsearch_panel"
                action="#"
                class="indexedsearch-form"
                role="search"
            >
                <toujou-search class="search">
                    <label for="tx_indexedsearch_pi2[search][sword]" class="search__label" is-visually-hidden>Search</label>
                    <input
                        class="input input--search indexedsearch-form__input"
                        name="tx_indexedsearch_pi2[search][sword]"
                        id="tx_indexedsearch_pi2[search][sword]"
                        type="search"
                        placeholder="Search..."
                        aria-label="Search"
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
        </main>
    \`;
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const o=["IndexedSearchInput"];export{e as IndexedSearchInput,o as __namedExportsOrder,s as default};
