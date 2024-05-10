import{T as o}from"./badgeCustomConfig-e7a687d5.js";import{j as e}from"./jsx-runtime-87b2c1dd.js";import{u as c}from"./index-af127bdc.js";import"./index-afb52020.js";import"./_commonjsHelpers-725317a4.js";function r(t){const a={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"rating-stars",children:"Rating-stars"}),`
`,e.jsx(a.p,{children:'The rating stars element allows us to quickly add a "rating" element without having to deal with images for the different values.'}),`
`,e.jsx(a.p,{children:'The rating element is configurable: we can change the color, the "rating entity", size, number of elements, ...'}),`
`,e.jsx(a.h2,{id:"markup-example",children:"Markup Example"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<toujou-rating-stars
    class="rating-stars"
    rating-entity="★"
    rating-total="5"
    rating-value="4.4"
    rating-entity-size="xl"
>
</toujou-rating-stars>
`})}),`
`,e.jsx(a.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsxs(a.h3,{id:"class-required",children:["class ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(a.p,{children:["The rating stars element must have the ",e.jsx(a.code,{children:"rating-stars"})]}),`
`,e.jsxs(a.h3,{id:"rating-value-required",children:["rating-value ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"rating-value"})," defined the value that should be shown on the element."]}),`
`,e.jsxs(a.p,{children:["This value is used together with the ",e.jsx(a.code,{children:"rating-total"})," to calculate the rate percentage"]}),`
`,e.jsx(a.h3,{id:"rating-entity",children:"rating-entity"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"rating-entity"}),' attribute you may define the "symbol" to show on the element.']}),`
`,e.jsxs(a.p,{children:["If not available, the default value is ",e.jsx(a.code,{children:"★"})]}),`
`,e.jsx(a.p,{children:"Example:"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<toujou-rating-stars class="rating-stars" rating-entity="👍" rating-value="4.4">
`})}),`
`,e.jsxs(a.p,{children:["| ⚠️ Depending on the symbol used, we may need to adjust the letter-spacing on the element, which you can do with the ",e.jsx(a.code,{children:"--rating-stars-letter-spacing"}),` css variable |
|:-------------------------------------------------------|`]}),`
`,e.jsx(a.h3,{id:"rating-total",children:"rating-total"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"rating-total"})," allows us to show a ratings element with a different number of items, for instance for a 0 - 10 rating."]}),`
`,e.jsx(a.p,{children:"If not available, the default value if 5"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<toujou-rating-stars class="rating-stars" rating-entity="★" rating-total="10" rating-value="7">
`})}),`
`,e.jsx(a.h3,{id:"rating-entity-size",children:"rating-entity-size"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"rating-entity-size"}),' defines how big the "symbols" on the element are.']}),`
`,e.jsxs(a.p,{children:["If not available, the default value is ",e.jsx(a.code,{children:"--font-size-normal"}),"."]}),`
`,e.jsxs(a.p,{children:["Available values are ",e.jsx(a.code,{children:"s"}),", ",e.jsx(a.code,{children:"normal"}),", ",e.jsx(a.code,{children:"m"}),", ",e.jsx(a.code,{children:"l"}),", ",e.jsx(a.code,{children:"xl"}),", and ",e.jsx(a.code,{children:"xxl"}),"."]}),`
`,e.jsxs(a.p,{children:["If needed, you can directly set the ",e.jsx(a.code,{children:"--rating-stars-font-size"})," to give it a custom size."]}),`
`,e.jsx(a.p,{children:"Example:"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<toujou-rating-stars class="rating-stars" rating-value="7" rating-entity-size="xxl">
`})}),`
`,e.jsx(a.p,{children:"or"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-css",children:`.rating-stars {
    --rating-stars-font-size: 100px;
}
`})}),`
`,e.jsx(a.h2,{id:"css-variables",children:"CSS Variables"}),`
`,e.jsx(a.p,{children:"CSS Variables allow you to adjust the looks of the element to meet your needs"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:e.jsx(a.code,{children:"--rating-stars-letter-spacing"})}),`
`,e.jsx(a.li,{children:e.jsx(a.code,{children:"--rating-stars-color"})}),`
`,e.jsx(a.li,{children:e.jsx(a.code,{children:"--rating-stars-font-size"})}),`
`]})]})}function g(t={}){const{wrapper:a}={...c(),...t.components};return a?e.jsx(a,{...t,children:e.jsx(r,{...t})}):r(t)}const m={title:"COMPONENTS/Reviews/Average Rating",parameters:{badges:[o.DONE],docs:{page:g}},argTypes:{showMaxRating:{table:{category:"Average rating settings",defaultValue:{summary:"false"}},name:"Show rating max value",description:"Show the maximum possible value for the ratings",control:{type:"boolean"},defaultValue:["false"],required:!0}},tags:["autodocs"]},h=t=>`
        <div class="average-rating">
            <h3 class="average-rating__title">This is the average rating header</h3>
            <p class="average-rating__text">This is the average rating content element custom text</p>
            <div class="average-rating__rating">
                <p class="average-rating__rating-text">3.7 ${t.showMaxRating?"/ 5":""}</p>

                <toujou-rating-stars
                    class="rating-stars average-rating__rating-stars"
                    rating-total="5"
                    rating-value="3.7">
                </toujou-rating-stars>

                <p class="average-rating__count">
                    <a href="#" title="Nice rating link" target="_blank" class="average-rating__link">
                        3 Bewertungen
                    </a>
                </p>
            </div>
        </div>
    `,n=h.bind({});n.args={showMaxRating:!1};var s,i,l;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`(args: AverageRatingProps) => {
  return \`
        <div class="average-rating">
            <h3 class="average-rating__title">This is the average rating header</h3>
            <p class="average-rating__text">This is the average rating content element custom text</p>
            <div class="average-rating__rating">
                <p class="average-rating__rating-text">3.7 \${args.showMaxRating ? '/ 5' : ''}</p>

                <toujou-rating-stars
                    class="rating-stars average-rating__rating-stars"
                    rating-total="5"
                    rating-value="3.7">
                </toujou-rating-stars>

                <p class="average-rating__count">
                    <a href="#" title="Nice rating link" target="_blank" class="average-rating__link">
                        3 Bewertungen
                    </a>
                </p>
            </div>
        </div>
    \`;
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const v=["AverageRating"];export{n as AverageRating,v as __namedExportsOrder,m as default};
