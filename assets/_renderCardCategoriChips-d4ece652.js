import{j as i}from"./jsx-runtime-87b2c1dd.js";import{u as c}from"./index-af127bdc.js";function o(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...c(),...t.components};return i.jsxs(i.Fragment,{children:[i.jsx(e.h1,{id:"toujou-collection-item",children:"<toujou-collection-item>"}),`
`,i.jsxs(e.p,{children:["The ",i.jsx(e.code,{children:"<toujou-collection-item>"})," is a custom element that renders a page as a card (in a card collection) or as an item (on an item collection)."]}),`
`,i.jsx(e.p,{children:'These items are rendered when we use a "Selected pages as card collection" or "Filtered pages as card collection" backend element.'}),`
`,i.jsx(e.p,{children:"Depending on the page we chose on the backend element, the items may display different content (for instance the blog items show the post date and author and the trip items show trip info and price)"}),`
`,i.jsxs(e.p,{children:["| ⚠️ The ",i.jsx(e.code,{children:"<toujou-collection-item>"})," element must be rendered inside a ",i.jsx(e.code,{children:"<card-collection>"})," and ",i.jsx(e.code,{children:"<card-collection__item>"})," or inside a ",i.jsx(e.code,{children:"ol.item-collection"})," and a ",i.jsx(e.code,{children:"li.item-collection__item"}),` elements |
|----------------------------------------------------------------------------------------------|`]}),`
`,i.jsx(e.p,{children:"Markup Example (as card collection):"}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-html",children:`<ul class="card-collection">
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
                    <toujou-icon class="icon button__icon" icon-name="arrow-right"></toujou-icon>
                    zur Beschreibung
                </a>
            </div>
        </toujou-collection-item>
    </li>
</ul>
`})}),`
`,i.jsx(e.p,{children:"Markup Example (as item collection):"}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-html",children:`<ol class="item-collection">
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
                    <toujou-icon class="icon button__icon" icon-name="arrow-right"></toujou-icon>
                    zur Beschreibung
                </a>
            </div>
        </toujou-collection-item>
    </li>
</ol>
`})}),`
`,i.jsx(e.h2,{id:"attributes",children:"Attributes"}),`
`,i.jsxs(e.p,{children:["There are a couple of attribute that allow us to customize the ",i.jsx(e.code,{children:"<toujou-card>"})," element"]}),`
`,i.jsxs(e.h3,{id:"item-type-required",children:["item type ",i.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,i.jsxs(e.p,{children:["The ",i.jsx(e.code,{children:"item-type"})," attribute tells us what kind of page the item is rendering. It may be used by our JS or CSS to target items of a certain page type."]}),`
`,i.jsxs(e.p,{children:["Example: ",i.jsx(e.code,{children:'item-type="default"'})," or ",i.jsx(e.code,{children:'item-type="trip"'})]}),`
`,i.jsxs(e.h3,{id:"element-design-required",children:["Element design ",i.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,i.jsxs(e.p,{children:["The ",i.jsx(e.code,{children:"element-design"}),` attribute reflects the "Element design" option chosen in the backend.
It is used to change the style of the items, so we can make an item standout, for instance by giving it a "primary" design`]}),`
`,i.jsxs(e.p,{children:["Example: ",i.jsx(e.code,{children:'element-design="primary"'})," or ",i.jsx(e.code,{children:'element-design="inverted"'}),"."]}),`
`,i.jsx(e.p,{children:`| ℹ️ Currently the "Element design" isn't available on the "Selected pages as list" element! |
|----------------------------------------------------------------------------------------------|`}),`
`,i.jsxs(e.h3,{id:"item-orientation-required",children:["item orientation ",i.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,i.jsxs(e.p,{children:["The ",i.jsx(e.code,{children:"item-orientation"})," defines if the image is rendered above the content or next to it. On mobile devices the image is always rendered above the text."]}),`
`,i.jsxs(e.p,{children:["Example: ",i.jsx(e.code,{children:'item-orientation="vertical"'}),' (for the "cards") or ',i.jsx(e.code,{children:'item-orientation="horizontal"'}),' (for the "list items")']}),`
`,i.jsxs(e.h3,{id:"role-required",children:["role ",i.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,i.jsxs(e.p,{children:["By setting the ",i.jsx(e.code,{children:'role="article"'})," we define the cards as a section of a page that could easily stand on its own on a page, in a document."]})]})}function a(t={}){const{wrapper:e}={...c(),...t.components};return e?i.jsx(e,{...t,children:i.jsx(o,{...t})}):o(t)}const d=(t,e)=>{let n="";return e==="default"?e="primary":e==="inverted"&&(e="font"),t.forEach(l=>{n+=`
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
