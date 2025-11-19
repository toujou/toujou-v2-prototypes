import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as r}from"./index-B3bKeUOg.js";function c(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"toujou-content-card",children:"<toujou-content-card>"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"<toujou-content-card>"})," is a simple element that renders an content card on the page (image, title, text and link)"]}),`
`,e.jsxs(n.p,{children:["| ⚠ The content must always be placed inside a ",e.jsx(n.code,{children:"<toujou-content-card-grid>"}),` element |
|-----------------------------------------------------------------------------------|`]}),`
`,e.jsxs(n.p,{children:["The link on the content card is optional. If there is a link we render ",e.jsx(n.code,{children:'<a class="content-card"...>'})," otherwise we render a ",e.jsx(n.code,{children:'<toujou-content-card class="content-card"...>'})," element."]}),`
`,e.jsx(n.h2,{id:"markup-example-for-content-card-withou-link",children:"Markup example for content card withou link"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<toujou-content-card-grid class="content-card-grid">
    <toujou-content-card class="content-card" card-variant="primary" card-direction="vertical" role="article">
        <figure class="content-card__figure">
            <img src="https://picsum.photos/640/640" alt="beautiful image" class="content-card__image">
        </figure>
        <div class="content-card__content">
            <h3 class="content-card__title">Eine etwas längere Headline über zwei Zeilen</h3>
            <p class="content-card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur excepturi officiis.</p>
        </div>
    </toujou-content-card>
</toujou-content-card-grid>
`})}),`
`,e.jsx(n.h2,{id:"markup-example-for-content-card-with-link",children:"Markup example for content card with link"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<toujou-content-card-grid class="content-card-grid">
    <a href="#" class="content-card" card-variant="primary" card-direction="vertical" role="article">
        <figure class="content-card__figure">
            <img src="https://picsum.photos/640/640" alt="beautiful image" class="content-card__image">
        </figure>
        <div class="content-card__content">
            <h3 class="content-card__title">Eine etwas längere Headline über zwei Zeilen</h3>
            <p class="content-card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur excepturi officiis.</p>
            <span class="content-card__button" button-variant="primary" button-type="ghost" button-size="normal">
                <toujou-icon class="icon" icon-name="arrow-right" icon-color="primary"></toujou-icon>
                zur Beschreibung
            </span>
        </div>
    </a>
</toujou-content-card-grid>
`})}),`
`,e.jsx(n.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsx(n.p,{children:"There are a couple of attributes that allow us to customize the content cards"}),`
`,e.jsxs(n.h3,{id:"card-variant-required",children:["card variant ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(n.p,{children:["By setting the ",e.jsx(n.code,{children:"card-variant"})," attribute we can choose between the default, primary, secondary or inverted element designs (can be set on the BE by the users)"]}),`
`,e.jsxs(n.h3,{id:"card-direction-required",children:["card direction ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(n.p,{children:["By setting the ",e.jsx(n.code,{children:"card-direction"}),' attribute we can choose between the "vertical" or "horizontal" layout for the cards (set according to the chosen content element)']}),`
`,e.jsxs(n.h3,{id:"role-required",children:["role ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(n.p,{children:["By setting the ",e.jsx(n.code,{children:'role="article"'})," we define the cards as a section of a page that could easily stand on its own on a page, in a document."]})]})}function a(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(c,{...t})}):c(t)}export{a as M};
