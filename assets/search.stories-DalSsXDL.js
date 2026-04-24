const s={title:"COMPONENTS/Search"},r=()=>`
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
    `,a=r.bind({});var n,e,t;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(t=(e=a.parameters)==null?void 0:e.docs)==null?void 0:t.source}}};const o=["Search"];export{a as Search,o as __namedExportsOrder,s as default};
