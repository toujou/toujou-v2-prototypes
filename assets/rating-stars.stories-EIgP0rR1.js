import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as l}from"./index-D_Kao2mr.js";import"./iframe-B7QF7yTA.js";import"./preload-helper-C1FmrZbK.js";function n(e){const a={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...l(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(a.h1,{id:"rating-stars",children:"Rating-stars"}),`
`,t.jsx(a.p,{children:'The rating stars element allows us to quickly add a "rating" element without having to deal with images for the different values.'}),`
`,t.jsx(a.p,{children:'The rating element is configurable: we can change the color, the "rating entity", size, number of elements, ...'}),`
`,t.jsx(a.h2,{id:"markup-example",children:"Markup Example"}),`
`,t.jsx(a.pre,{children:t.jsx(a.code,{className:"language-html",children:` <toujou-rating-stars
    class="rating-stars"
    rating-value="3.5"
    rating-total="5"
    rating-suffix="D"
    aria-label="3.5 out of 5 stars"
></toujou-rating-stars>
`})}),`
`,t.jsx(a.h2,{id:"attributes",children:"Attributes"}),`
`,t.jsxs(a.h3,{id:"class-required",children:["class ",t.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,t.jsxs(a.p,{children:["The rating stars element must have the ",t.jsx(a.code,{children:"rating-stars"})]}),`
`,t.jsxs(a.h3,{id:"rating-value-required",children:["rating-value ",t.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,t.jsxs(a.p,{children:["The ",t.jsx(a.code,{children:"rating-value"})," defines the value that should be shown on the element."]}),`
`,t.jsxs(a.p,{children:["This value is used together with the ",t.jsx(a.code,{children:"rating-total"})," to calculate the rate percentage"]}),`
`,t.jsx(a.h3,{id:"rating-total",children:"rating-total"}),`
`,t.jsxs(a.p,{children:["The ",t.jsx(a.code,{children:"rating-total"})," allows us to show a ratings element with a different number of items, for instance for a 0 - 10 rating."]}),`
`,t.jsx(a.p,{children:"If not available, the default value if 5"}),`
`,t.jsx(a.pre,{children:t.jsx(a.code,{className:"language-html",children:`<toujou-rating-stars class="rating-stars" rating-total="10" rating-value="7">
`})})]})}function c(e={}){const{wrapper:a}={...l(),...e.components};return a?t.jsx(a,{...e,children:t.jsx(n,{...e})}):n(e)}const p={title:"COMPONENTS/Rating Stars",parameters:{docs:{page:c}},argTypes:{rating:{table:{category:"Rating stars",defaultValue:{summary:"4.4"}},name:"Rating value",description:"Set a value for the rating",control:{type:"number",min:0,max:5,step:.1},required:!0},suffix:{table:{category:"Rating stars"},name:"Rating suffix",description:"Set a suffix for the rating"}},tags:["autodocs"]},u=e=>`
        <toujou-rating-stars
            class="rating-stars"
            rating-value="${e.rating}"
            rating-total="5"
            rating-suffix="${e.suffix}"
            aria-label="${e.rating} out of 5 stars"
        ></toujou-rating-stars>
    `,r=u.bind({});r.args={rating:4.4,suffix:""};var s,i,o;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`(args: RatingStarsStoryProps) => {
  return \`
        <toujou-rating-stars
            class="rating-stars"
            rating-value="\${args.rating}"
            rating-total="5"
            rating-suffix="\${args.suffix}"
            aria-label="\${args.rating} out of 5 stars"
        ></toujou-rating-stars>
    \`;
}`,...(o=(i=r.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const f=["RatingStars"];export{r as RatingStars,f as __namedExportsOrder,p as default};
