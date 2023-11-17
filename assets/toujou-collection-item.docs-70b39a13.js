import{j as e}from"./jsx-runtime-ccada58e.js";import{u as o}from"./index-4fb8b842.js";function i(n){const t=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2",h3:"h3"},o(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"toujou-collection-item",children:"<toujou-collection-item>"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"<toujou-collection-item>"})," is a custom element that renders a page as a card (in a card collection) or as an item (on an item collection)."]}),`
`,e.jsx(t.p,{children:'These items are rendered when we use a "Selected pages as card collection" or "Filtered pages as card collection" backend element.'}),`
`,e.jsx(t.p,{children:"Depending on the page we chose on the backend element, the items may display different content (for instance the blog items show the post date and author and the trip items show trip info and price)"}),`
`,e.jsxs(t.p,{children:["| ⚠️ The ",e.jsx(t.code,{children:"<toujou-collection-item>"})," element must be rendered inside a ",e.jsx(t.code,{children:"<card-collection>"})," and ",e.jsx(t.code,{children:"<card-collection__item>"})," or inside a ",e.jsx(t.code,{children:"ol.item-collection"})," and a ",e.jsx(t.code,{children:"li.item-collection__item"}),` elements |
|----------------------------------------------------------------------------------------------|`]}),`
`,e.jsx(t.p,{children:"Markup Example (as card collection):"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<ul class="card-collection">
    <li class="card-collection__item">
        <toujou-collection-item class="collection-item" item-type="default" element-design="primary" item-orientation="vertical" role="article">
            <header class="collection-item__top">
                <figure class="collection-item__figure">
                    <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                </figure>
            </header>
            <div class="collection-item__bottom">
                <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                <p class="collection-item__subtitles">
                    <span class="collection-item__subtitle">Dies ist ein Untertitel</span>
                </p>
                <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>
                <a href="#" class="button collection-item__button" button-variant="primary" button-type="ghost" button-size="normal" button-icon-position="left">
                    <toujou-icon class="icon button__icon" icon-name="arrow-right"></toujou-icon>
                    zur Beschreibung
                </a>
            </div>
        </toujou-collection-item>
    </li>
</ul>
`})}),`
`,e.jsx(t.p,{children:"Markup Example (as item collection):"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<ol class="item-collection">
    <li class="item-collection__item">
        <toujou-collection-item class="collection-item" item-type="default" element-design="default" item-orientation="horizontal" role="article">
            <header class="collection-item__top">
                <figure class="collection-item__figure">
                    <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                </figure>
            </header>
            <div class="collection-item__bottom">
                <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                <p class="collection-item__subtitles">
                    <span class="collection-item__subtitle">Dies ist ein Untertitel</span>
                </p>
                <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>
                <a href="#" class="button collection-item__button" button-variant="primary" button-type="ghost" button-size="normal" button-icon-position="left">
                    <toujou-icon class="icon button__icon" icon-name="arrow-right"></toujou-icon>
                    zur Beschreibung
                </a>
            </div>
        </toujou-collection-item>
    </li>
</ol>
`})}),`
`,e.jsx(t.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsxs(t.p,{children:["There are a couple of attribute that allow us to customize the ",e.jsx(t.code,{children:"<toujou-card>"})," element"]}),`
`,e.jsxs(t.h3,{id:"item-type-required",children:["item type ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"item-type"})," attribute tells us what kind of page the item is rendering. It may be used by our JS or CSS to target items of a certain page type."]}),`
`,e.jsxs(t.p,{children:["Example: ",e.jsx(t.code,{children:'item-type="default"'})," or ",e.jsx(t.code,{children:'item-type="trip"'})]}),`
`,e.jsxs(t.h3,{id:"element-design-required",children:["Element design ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"element-design"}),` attribute reflects the "Element design" option chosen in the backend.
It is used to change the style of the items, so we can make an item standout, for instance by giving it a "primary" design`]}),`
`,e.jsxs(t.p,{children:["Example: ",e.jsx(t.code,{children:'element-design="primary"'})," or ",e.jsx(t.code,{children:'element-design="inverted"'}),"."]}),`
`,e.jsx(t.p,{children:`| ℹ️ Currently the "Element design" isn't available on the "Selected pages as list" element! |
|----------------------------------------------------------------------------------------------|`}),`
`,e.jsxs(t.h3,{id:"item-orientation-required",children:["item orientation ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"item-orientation"})," defines if the image is rendered above the content or next to it. On mobile devices the image is always rendered above the text."]}),`
`,e.jsxs(t.p,{children:["Example: ",e.jsx(t.code,{children:'item-orientation="vertical"'}),' (for the "cards") or ',e.jsx(t.code,{children:'item-orientation="horizontal"'}),' (for the "list items")']}),`
`,e.jsxs(t.h3,{id:"role-required",children:["role ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(t.p,{children:["By setting the ",e.jsx(t.code,{children:'role="article"'})," we define the cards as a section of a page that could easily stand on its own on a page, in a document."]})]})}function s(n={}){const{wrapper:t}=Object.assign({},o(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(i,n)})):i(n)}export{s as M};
//# sourceMappingURL=toujou-collection-item.docs-70b39a13.js.map