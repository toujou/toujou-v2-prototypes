import{j as t}from"./jsx-runtime-87b2c1dd.js";import{u as c}from"./index-af127bdc.js";function o(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...c(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"toujou-collection-item",children:"<toujou-collection-item>"}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"<toujou-collection-item>"})," is a custom element that renders a page as a card (in a card collection) or as an item (on an item collection)."]}),`
`,t.jsx(e.p,{children:'These items are rendered when we use a "Selected pages as card collection" or "Filtered pages as card collection" backend element.'}),`
`,t.jsx(e.p,{children:"Depending on the page we chose on the backend element, the items may display different content (for instance the blog items show the post date and author and the trip items show trip info and price)"}),`
`,t.jsxs(e.p,{children:["| ⚠️ The ",t.jsx(e.code,{children:"<toujou-collection-item>"})," element must be rendered inside a ",t.jsx(e.code,{children:"<card-collection>"})," and ",t.jsx(e.code,{children:"<card-collection__item>"})," or inside a ",t.jsx(e.code,{children:"ol.item-collection"})," and a ",t.jsx(e.code,{children:"li.item-collection__item"}),` elements |
|----------------------------------------------------------------------------------------------|`]}),`
`,t.jsx(e.p,{children:"Markup Example (as card collection):"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<ul class="card-collection">
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
`,t.jsx(e.p,{children:"Markup Example (as item collection):"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<ol class="item-collection">
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
`,t.jsx(e.h2,{id:"attributes",children:"Attributes"}),`
`,t.jsxs(e.p,{children:["There are a couple of attribute that allow us to customize the ",t.jsx(e.code,{children:"<toujou-card>"})," element"]}),`
`,t.jsxs(e.h3,{id:"item-type-required",children:["item type ",t.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"item-type"})," attribute tells us what kind of page the item is rendering. It may be used by our JS or CSS to target items of a certain page type."]}),`
`,t.jsxs(e.p,{children:["Example: ",t.jsx(e.code,{children:'item-type="default"'})," or ",t.jsx(e.code,{children:'item-type="trip"'})]}),`
`,t.jsxs(e.h3,{id:"element-design-required",children:["Element design ",t.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"element-design"}),` attribute reflects the "Element design" option chosen in the backend.
It is used to change the style of the items, so we can make an item standout, for instance by giving it a "primary" design`]}),`
`,t.jsxs(e.p,{children:["Example: ",t.jsx(e.code,{children:'element-design="primary"'})," or ",t.jsx(e.code,{children:'element-design="inverted"'}),"."]}),`
`,t.jsx(e.p,{children:`| ℹ️ Currently the "Element design" isn't available on the "Selected pages as list" element! |
|----------------------------------------------------------------------------------------------|`}),`
`,t.jsxs(e.h3,{id:"item-orientation-required",children:["item orientation ",t.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"item-orientation"})," defines if the image is rendered above the content or next to it. On mobile devices the image is always rendered above the text."]}),`
`,t.jsxs(e.p,{children:["Example: ",t.jsx(e.code,{children:'item-orientation="vertical"'}),' (for the "cards") or ',t.jsx(e.code,{children:'item-orientation="horizontal"'}),' (for the "list items")']}),`
`,t.jsxs(e.h3,{id:"role-required",children:["role ",t.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,t.jsxs(e.p,{children:["By setting the ",t.jsx(e.code,{children:'role="article"'})," we define the cards as a section of a page that could easily stand on its own on a page, in a document."]})]})}function a(i={}){const{wrapper:e}={...c(),...i.components};return e?t.jsx(e,{...i,children:t.jsx(o,{...i})}):o(i)}const d=(i,e)=>{let n="";return e==="default"?e="primary":e==="inverted"&&(e="font"),i.forEach(l=>{n+=`
            <a href="#" class="collection-item__category-link">
                <toujou-chip
                    class="chip collection-item__category-chip"
                    chip-icon-position="left"
                    chip-bg-color="${e}"
                    chip-border-radius="round"
                    chip-size="extra-small"
                    is-clickable=""
                >
                    <toujou-icon class="icon chip__icon" icon-name="bookmark-filled"></toujou-icon> ${l}
                </toujou-chip>
            </a>
        `}),n};export{a as M,d as r};
