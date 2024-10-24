import{j as e}from"./jsx-runtime-DPda6Ybg.js";import{useMDXComponents as o}from"./index-4_AlzpT7.js";function t(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"toujou-collection-item",children:"<toujou-collection-item>"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"<toujou-collection-item>"})," is a custom element that renders a page as a card (in a card collection) or as an item (on an item collection)."]}),`
`,e.jsx(i.p,{children:'These items are rendered when we use a "Selected pages as card collection" or "Filtered pages as card collection" backend element.'}),`
`,e.jsx(i.p,{children:"Depending on the page we chose on the backend element, the items may display different content (for instance the blog items show the post date and author and the trip items show trip info and price)"}),`
`,e.jsxs(i.p,{children:["| ⚠️ The ",e.jsx(i.code,{children:"<toujou-collection-item>"})," element must be rendered inside a ",e.jsx(i.code,{children:"<card-collection>"})," and ",e.jsx(i.code,{children:"<card-collection__item>"})," or inside a ",e.jsx(i.code,{children:"ol.item-collection"})," and a ",e.jsx(i.code,{children:"li.item-collection__item"}),` elements |
|----------------------------------------------------------------------------------------------|`]}),`
`,e.jsx(i.p,{children:"Markup Example (as card collection):"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<ul class="card-collection">
    <li class="card-collection__item">
        <toujou-collection-item class="collection-item" item-type="default" element-design="primary" item-orientation="vertical" role="article">
            <header class="collection-item__top">
                <figure class="collection-item__figure">
                    <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                </figure>
                <div class="collection-item__categories">
                    <a href="#" class="collection-item__category-link">
                        <toujou-chip
                            class="chip collection-item__category-chip"
                            chip-icon-position="left"
                            chip-bg-color="\${elementDesign}"
                            chip-border-radius="round"
                            chip-size="extra-small"
                            is-clickable=""
                        >
                            <toujou-icon class="icon chip__icon" icon-name="bookmark-filled"></toujou-icon> \${text}
                        </toujou-chip>
                    </a>
                </div>
            </header>
            <div class="collection-item__bottom">
                <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                <p class="collection-item__subtitles">
                    <span class="collection-item__subtitle">Dies ist ein Untertitel</span>
                </p>
                <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>
                <a href="#" class="button collection-item__button" button-variant="primary" button-type="ghost" button-size="normal" button-icon-position="left">
                    <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon>
                    zur Beschreibung
                </a>
            </div>
        </toujou-collection-item>
    </li>
</ul>
`})}),`
`,e.jsx(i.p,{children:"Markup Example (as item collection):"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<ol class="item-collection">
    <li class="item-collection__item">
        <toujou-collection-item class="collection-item" item-type="default" element-design="default" item-orientation="horizontal" role="article">
            <header class="collection-item__top">
                <figure class="collection-item__figure">
                    <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                </figure>
                <div class="collection-item__categories">
                    <a href="#" class="collection-item__category-link">
                        <toujou-chip
                            class="chip collection-item__category-chip"
                            chip-icon-position="left"
                            chip-bg-color="\${elementDesign}"
                            chip-border-radius="round"
                            chip-size="extra-small"
                            is-clickable=""
                        >
                            <toujou-icon class="icon chip__icon" icon-name="bookmark-filled"></toujou-icon> \${text}
                        </toujou-chip>
                    </a>
                </div>
            </header>
            <div class="collection-item__bottom">
                <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                <p class="collection-item__subtitles">
                    <span class="collection-item__subtitle">Dies ist ein Untertitel</span>
                </p>
                <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>
                <a href="#" class="button collection-item__button" button-variant="primary" button-type="ghost" button-size="normal" button-icon-position="left">
                    <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon>
                    zur Beschreibung
                </a>
            </div>
        </toujou-collection-item>
    </li>
</ol>
`})}),`
`,e.jsx(i.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsxs(i.p,{children:["There are a couple of attribute that allow us to customize the ",e.jsx(i.code,{children:"<toujou-card>"})," element"]}),`
`,e.jsxs(i.h3,{id:"item-type-required",children:["item type ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"item-type"})," attribute tells us what kind of page the item is rendering. It may be used by our JS or CSS to target items of a certain page type."]}),`
`,e.jsxs(i.p,{children:["Example: ",e.jsx(i.code,{children:'item-type="default"'})," or ",e.jsx(i.code,{children:'item-type="trip"'})]}),`
`,e.jsxs(i.h3,{id:"element-design-required",children:["Element design ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"element-design"}),` attribute reflects the "Element design" option chosen in the backend.
It is used to change the style of the items, so we can make an item standout, for instance by giving it a "primary" design`]}),`
`,e.jsxs(i.p,{children:["Example: ",e.jsx(i.code,{children:'element-design="primary"'})," or ",e.jsx(i.code,{children:'element-design="inverted"'}),"."]}),`
`,e.jsx(i.p,{children:`| ℹ️ Currently the "Element design" isn't available on the "Selected pages as list" element! |
|----------------------------------------------------------------------------------------------|`}),`
`,e.jsxs(i.h3,{id:"item-orientation-required",children:["item orientation ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"item-orientation"})," defines if the image is rendered above the content or next to it. On mobile devices the image is always rendered above the text."]}),`
`,e.jsxs(i.p,{children:["Example: ",e.jsx(i.code,{children:'item-orientation="vertical"'}),' (for the "cards") or ',e.jsx(i.code,{children:'item-orientation="horizontal"'}),' (for the "list items")']}),`
`,e.jsxs(i.h3,{id:"role-required",children:["role ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(i.p,{children:["By setting the ",e.jsx(i.code,{children:'role="article"'})," we define the cards as a section of a page that could easily stand on its own on a page, in a document."]})]})}function s(n={}){const{wrapper:i}={...o(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(t,{...n})}):t(n)}export{s as M};
