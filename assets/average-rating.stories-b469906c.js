import{T as o}from"./badgeCustomConfig-e7a687d5.js";import{j as e}from"./jsx-runtime-87b2c1dd.js";import{u as c}from"./index-af127bdc.js";import"./index-afb52020.js";import"./_commonjsHelpers-725317a4.js";function r(a){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"rating-stars",children:"Rating-stars"}),`
`,e.jsx(t.p,{children:'The rating stars element allows us to quickly add a "rating" element without having to deal with images for the different values.'}),`
`,e.jsx(t.p,{children:'The rating element is configurable: we can change the color, the "rating entity", size, number of elements, ...'}),`
`,e.jsx(t.h2,{id:"markup-example",children:"Markup Example"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<toujou-rating-stars
    class="rating-stars"
    rating-entity="★"
    rating-total="5"
    rating-value="4.4"
    rating-entity-size="xl"
>
</toujou-rating-stars>
`})}),`
`,e.jsx(t.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsxs(t.h3,{id:"class-required",children:["class ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(t.p,{children:["The rating stars element must have the ",e.jsx(t.code,{children:"rating-stars"})]}),`
`,e.jsxs(t.h3,{id:"rating-value-required",children:["rating-value ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"rating-value"})," defined the value that should be shown on the element."]}),`
`,e.jsxs(t.p,{children:["This value is used together with the ",e.jsx(t.code,{children:"rating-total"})," to calculate the rate percentage"]}),`
`,e.jsx(t.h3,{id:"rating-entity",children:"rating-entity"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"rating-entity"}),' attribute you may define the "symbol" to show on the element.']}),`
`,e.jsxs(t.p,{children:["If not available, the default value is ",e.jsx(t.code,{children:"★"})]}),`
`,e.jsx(t.p,{children:"Example:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<toujou-rating-stars class="rating-stars" rating-entity="👍" rating-value="4.4">
`})}),`
`,e.jsxs(t.p,{children:["| ⚠️ Depending on the symbol used, we may need to adjust the letter-spacing on the element, which you can do with the ",e.jsx(t.code,{children:"--rating-stars-letter-spacing"}),` css variable |
|:-------------------------------------------------------|`]}),`
`,e.jsx(t.h3,{id:"rating-total",children:"rating-total"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"rating-total"})," allows us to show a ratings element with a different number of items, for instance for a 0 - 10 rating."]}),`
`,e.jsx(t.p,{children:"If not available, the default value if 5"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<toujou-rating-stars class="rating-stars" rating-entity="★" rating-total="10" rating-value="7">
`})}),`
`,e.jsx(t.h3,{id:"rating-entity-size",children:"rating-entity-size"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"rating-entity-size"}),' defines how big the "symbols" on the element are.']}),`
`,e.jsxs(t.p,{children:["If not available, the default value is ",e.jsx(t.code,{children:"--font-size-normal"}),"."]}),`
`,e.jsxs(t.p,{children:["Available values are ",e.jsx(t.code,{children:"s"}),", ",e.jsx(t.code,{children:"normal"}),", ",e.jsx(t.code,{children:"m"}),", ",e.jsx(t.code,{children:"l"}),", ",e.jsx(t.code,{children:"xl"}),", and ",e.jsx(t.code,{children:"xxl"}),"."]}),`
`,e.jsxs(t.p,{children:["If needed, you can directly set the ",e.jsx(t.code,{children:"--rating-stars-font-size"})," to give it a custom size."]}),`
`,e.jsx(t.p,{children:"Example:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<toujou-rating-stars class="rating-stars" rating-value="7" rating-entity-size="xxl">
`})}),`
`,e.jsx(t.p,{children:"or"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`.rating-stars {
    --rating-stars-font-size: 100px;
}
`})}),`
`,e.jsx(t.h2,{id:"css-variables",children:"CSS Variables"}),`
`,e.jsx(t.p,{children:"CSS Variables allow you to adjust the looks of the element to meet your needs"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"--rating-stars-letter-spacing"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"--rating-stars-color"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"--rating-stars-font-size"})}),`
`]})]})}function g(a={}){const{wrapper:t}={...c(),...a.components};return t?e.jsx(t,{...a,children:e.jsx(r,{...a})}):r(a)}const m={title:"COMPONENTS/Reviews/Average Rating",parameters:{badges:[o.DONE],docs:{page:g}},argTypes:{rating:{table:{category:"Rating stars",defaultValue:{summary:"4.4"}},name:"Rating value",description:"Set a value for the rating",control:{type:"number",min:0,max:5,step:.1},defaultValue:["4.7"],required:!0},size:{table:{category:"Rating stars",defaultValue:{summary:"xl"}},name:"Size",description:"Set the rating stars size",options:["s","normal","m","l","xl","xxl"],control:{type:"radio"},defaultValue:["normal"],required:!0}},tags:["autodocs"]},d=a=>`
        <div class="average-rating">
            <h3 class="average-rating__title">This is the average rating header</h3>
            <p class="average-rating__text">This is the average rating content element custom text</p>
            <div class="average-rating__rating">
                <p class="average-rating__rating-text">3.7</p>

                <toujou-rating-stars
                    class="rating-stars average-rating__rating-stars"
                    rating-total="5"
                    rating-value="3.7">
                </toujou-rating-stars>

                <p class="average-rating__count">
                    <a href="/" title="Nice rating link" target="_blank" class="average-rating__link">
                        3 Bewertungen
                    </a>
                </p>
            </div>
        </div>
    `,n=d.bind({});n.args={rating:4.4,size:"xl"};var s,i,l;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`(args: AverageRatingProps) => {
  return \`
        <div class="average-rating">
            <h3 class="average-rating__title">This is the average rating header</h3>
            <p class="average-rating__text">This is the average rating content element custom text</p>
            <div class="average-rating__rating">
                <p class="average-rating__rating-text">3.7</p>

                <toujou-rating-stars
                    class="rating-stars average-rating__rating-stars"
                    rating-total="5"
                    rating-value="3.7">
                </toujou-rating-stars>

                <p class="average-rating__count">
                    <a href="/" title="Nice rating link" target="_blank" class="average-rating__link">
                        3 Bewertungen
                    </a>
                </p>
            </div>
        </div>
    \`;
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const v=["AverageRating"];export{n as AverageRating,v as __namedExportsOrder,m as default};
