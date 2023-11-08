import{j as e}from"./jsx-runtime-ccada58e.js";import{u as t}from"./index-4fb8b842.js";function o(i){const n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3"},t(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"header-element",children:"Header element"}),`
`,e.jsxs(n.p,{children:["The header element render a ",e.jsx(n.code,{children:"<header>"})," element with an image and header content on the page."]}),`
`,e.jsx(n.p,{children:'It can be placed only on the "header" column on the pages.'}),`
`,e.jsx(n.p,{children:"If there is just an image and title, the title will be shown directly on top of the image, without any background. If there is text and / or link, then the content will have a background."}),`
`,e.jsx(n.h2,{id:"markup-example",children:"Markup example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<header class="header" image-height="full">
    <img class="header__image" src="https://picsum.photos/2000" alt="quote image">

    <div class="header-content" accent-color="grey" vertical-position="bottom" horizontal-position="right" content-size="full" text-alignment="left">
        <h1 class="header-content__title font--delta">This is a headline</h1>

        <p class="header-content__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <a href="#" class="button header-content__cta" button-variant="font">Let's go</a>
    </div>

    <toujou-media-info class="media-info">
        <button slot="open-button" class="media-info__toggle" aria-label="Toggle the image caption and / or copyright">
            <toujou-icon class="icon" icon-color="background" icon-name="info" icon-size="ms"></toujou-icon>
        </button>
        <button slot="close-button" class="media-info__toggle" aria-label="Toggle the image caption and / or copyright">
            <toujou-icon class="icon" icon-color="background" icon-name="close" icon-size="ms"></toujou-icon>
        </button>
        <figpaction slot="figcaption" class="media-info__figcaption">This is a beautiful description</figpaction>
        <small slot="copyright" class="media-info__copyright">@Nice photographer</small>
    </toujou-media-info>
</header>
`})}),`
`,e.jsx(n.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsxs(n.p,{children:["There are a couple of attributes that allow us to customize the header element. Some attributes must be added to the ",e.jsx(n.code,{children:"header"})," element, others to the ",e.jsx(n.code,{children:".header-content"})," element"]}),`
`,e.jsxs(n.h3,{id:"1-image-height-required",children:["1. image-height ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsx(n.p,{children:"Allows us to set the header's image height in relation to the viewport."}),`
`,e.jsx(n.p,{children:'Corresponds to the "Header Imageheight" option.'}),`
`,e.jsxs(n.p,{children:["Possible values are ",e.jsx(n.code,{children:"default"}),", ",e.jsx(n.code,{children:"fullscreen"}),", ",e.jsx(n.code,{children:"halfscreen"})," and ",e.jsx(n.code,{children:"quarterscreen"}),". Default is ",e.jsx(n.code,{children:"default"})," (80%)."]}),`
`,e.jsxs(n.h3,{id:"2-vertical-position-required",children:["2. vertical-position ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsx(n.p,{children:"Allows us to set the header's content vertical position in relation to the header element."}),`
`,e.jsx(n.p,{children:'Corresponds to the "Vertical Position" option.'}),`
`,e.jsxs(n.p,{children:["Possible values are ",e.jsx(n.code,{children:"top"}),", ",e.jsx(n.code,{children:"mid"})," and ",e.jsx(n.code,{children:"bottom"}),". Default is ",e.jsx(n.code,{children:"mid"}),";"]}),`
`,e.jsxs(n.h3,{id:"3-horizontal-position-required",children:["3. horizontal-position ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsx(n.p,{children:"Allows us to set the header's content horizontal position in relation to the header element."}),`
`,e.jsx(n.p,{children:'Corresponds to the "Horizontal Position" option.'}),`
`,e.jsxs(n.p,{children:["Possible values are ",e.jsx(n.code,{children:"left"}),", ",e.jsx(n.code,{children:"center"})," and ",e.jsx(n.code,{children:"right"}),". Default is ",e.jsx(n.code,{children:"center"}),"."]}),`
`,e.jsxs(n.h3,{id:"4-content-size-required",children:["4. content-size ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsx(n.p,{children:"Allows us to set the header's content width in relation to the header element."}),`
`,e.jsx(n.p,{children:'Corresponds to the "Headercontent Size" option.'}),`
`,e.jsxs(n.p,{children:["Possible values are ",e.jsx(n.code,{children:"full"}),", ",e.jsx(n.code,{children:"half"}),", ",e.jsx(n.code,{children:"third"}),",  and ",e.jsx(n.code,{children:"quarter"}),". Default is ",e.jsx(n.code,{children:"half"}),"."]}),`
`,e.jsxs(n.h3,{id:"5-headline-size-required",children:["5. headline-size ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsx(n.p,{children:"Allows us to set the header's headline size."}),`
`,e.jsx(n.p,{children:'Corresponds to the "Headline Size" option.'}),`
`,e.jsxs(n.p,{children:["Possible values are ",e.jsx(n.code,{children:"default"}),", ",e.jsx(n.code,{children:"alpha"}),", ",e.jsx(n.code,{children:"beta"}),", ",e.jsx(n.code,{children:"gamma"}),", ",e.jsx(n.code,{children:"delta"}),", ",e.jsx(n.code,{children:"epsilon"}),",  and ",e.jsx(n.code,{children:"omega"}),". Default is ",e.jsx(n.code,{children:"default"}),"."]}),`
`,e.jsxs(n.h3,{id:"6-text-alignment-required",children:["6. text-alignment ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsx(n.p,{children:"Allows us to set the header's content text alignment."}),`
`,e.jsx(n.p,{children:'Corresponds to the "Alignment" option.'}),`
`,e.jsxs(n.p,{children:["Possible values are ",e.jsx(n.code,{children:"default"}),", ",e.jsx(n.code,{children:"center"}),", ",e.jsx(n.code,{children:"left"}),", and ",e.jsx(n.code,{children:"right"}),". Default is ",e.jsx(n.code,{children:"default"}),"."]}),`
`,e.jsxs(n.h3,{id:"7-accent-control-required",children:["7. accent-control ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsx(n.p,{children:"Changes the color of the headline and button elements in the header content."}),`
`,e.jsx(n.p,{children:'Corresponds to the "Accent-Color" option.'}),`
`,e.jsxs(n.p,{children:["Possible values are ",e.jsx(n.code,{children:"default"}),", ",e.jsx(n.code,{children:"primary"}),", ",e.jsx(n.code,{children:"secondary"})," and ",e.jsx(n.code,{children:"grey"}),". Default is ",e.jsx(n.code,{children:"default"}),"."]})]})}function r(i={}){const{wrapper:n}=Object.assign({},t(),i.components);return n?e.jsx(n,Object.assign({},i,{children:e.jsx(o,i)})):o(i)}export{r as M};
//# sourceMappingURL=header.docs-07614fd9.js.map
